import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";
import useFetch from "../../services/useFetch";
import { it, expect, vi } from "vitest";

vi.mock("../../services/useFetch");
/** vi.mock entraine des perturbations dans les autres blocs peut importe ou il est placé dans le  * document.
 * Je l'ai donc isolé dans un fichier séparé pour offire option de test différent.
 *  une alternative a été trouvé (redéfinition de la méthode "global.fetch")
 */
it("redirects to not found page on error", async () => {
  useFetch.mockReturnValue({
    fetchedData: null,
    isLoading: false,
    isError: true,
  });

  render(
    <MemoryRouter initialEntries={["/profile"]}>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/NotFound" element={<div>Not Found</div>} />
      </Routes>
    </MemoryRouter>
  );

  // Attendez que la redirection se produise
  await screen.findByText(/not found/i);

  // Vérifiez que l'URL a changé pour inclure "/NotFound"
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
