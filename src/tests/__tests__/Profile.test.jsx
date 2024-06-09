import { it, describe, expect, vi } from "vitest";
import Profile from "./../../pages/Profile";
import { screen, render, renderHook, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import useFetch from "./../../services/useFetch";
import userDataMocked from "./../../mock/12/user.json";

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
    });
  });
});

// describe("When an error  occurs while fetching api - fetch version", () => {
//   vi.resetAllMocks(); // Réinitialise tous les mocks avant chaque test
//   vi.mock("../../services/useFetch");

//   it("Should redirect to page NotFound(404)--mock version", async () => {
//     useFetch.mockReturnValue({
//       fetchedData: {},
//       isLoading: false,
//       isError: true,
//     });
//     render(
//       <MemoryRouter initialEntries={["/profile"]}>
//         <Routes>
//           <Route path="/profile" element={<Profile />} />
//           <Route
//             path="/NotFound"
//             element={
//               <div>
//                 <h1>404</h1>
//               </div>
//             }
//           />
//         </Routes>
//       </MemoryRouter>
//     );
//     await screen.findByText(/404/i);
//   });
// });
