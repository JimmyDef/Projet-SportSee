import { it, describe, expect, vi } from "vitest";
import useFetch from "../../services/useFetch";
import { renderHook, waitFor } from "@testing-library/react";

import userDataMocked from "../../mock/12/user.json";

describe("useFetch", () => {
  it("Should fetch user data", async () => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(userDataMocked),
      })
    );

    const expectedUserData = {
      id: 12,
      keyData: {
        calorieCount: "1,930",
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
      score: 12,
      userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31,
      },
    };

    const { result } = renderHook(() => useFetch("user", "12"));
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(false);
    expect(result.current.fetchedData).toEqual(expectedUserData);
  });
  describe("When an error 404 occurs while fetching api", () => {
    it("Should throw an error and set error state ", async () => {
      // eslint-disable-next-line no-undef
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          json: async () => {
            throw new Error("can not get user");
          },
        })
      );
      const { result } = renderHook(() => useFetch("user", "13"));
      expect(result.current.isLoading).toBe(true);
      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.isError).toBe(true);
      expect(result.current.fetchedData).toEqual({});
    });
  });
});
