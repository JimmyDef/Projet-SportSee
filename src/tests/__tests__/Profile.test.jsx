import { it, describe, expect, vi } from "vitest";
import Profile from "./../../pages/Profile";
import {
  screen,
  render,
  renderHook,
  waitFor,
  act,
  waitForNextUpdate,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import useFetch from "./../../services/useFetch";
import userDataMocked from "./../../mock/12/user.json";

// import { global } from "@jest/globals";

describe("Profile", () => {
  it("Should render the component with title", async () => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(userDataMocked),
      })
    );

    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    const { result } = renderHook(() => useFetch("user", "12"));
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    const titleElement = screen.getByRole("heading", { level: 2 });
    expect(titleElement).toHaveTextContent(
      "Félicitation ! Vous avez explosé vos objectifs hier"
    );

    expect(titleElement).toBeInTheDocument();
  });

  describe("When an error  occurs while fetching api - fetch version", () => {
    it("Should redirect to page NotFound(404) ", async () => {
      // eslint-disable-next-line no-undef
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
          json: () => Promise.reject(new Error("can not get user")),
        })
      );

      render(
        <MemoryRouter initialEntries={["/profile"]}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/NotFound"
              element={
                <div>
                  <h1>404</h1>
                </div>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      const { result } = renderHook(() => useFetch("user", "13"));

      expect(result.current.isLoading).toBe(true);
      await waitFor(() => expect(result.current.isError).toBe(true));
      expect(result.current.isLoading).toBe(false);
      expect(result.current.fetchedData).toEqual({});
      const titleElement = screen.getByRole("heading", { level: 1 });
      expect(await titleElement).toHaveTextContent("404");
      console.log("🚀 ~ result:", result);
    });
  });
});

describe("useFetch", () => {
  it("Should fetch the data from API", async () => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(userDataMocked),
      })
    );

    const { result } = renderHook(() => useFetch("user", "12"));

    await waitFor(() => {
      expect(result.current.fetchedData).toEqual({
        id: 12,
        userInfos: { firstName: "Karl", lastName: "Dovineau", age: 31 },
        score: 12,
        keyData: {
          calorieCount: "1,930",
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50,
        },
      });
    });
    await console.log(
      "🚀 ~ result.current.fetchedData:",
      result.current.fetchedData
    );
  });
});
