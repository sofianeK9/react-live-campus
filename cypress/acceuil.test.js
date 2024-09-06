import { mount, render } from "@testing-library/react";
import Acceuil from "../src/Components/Acceuil.jsx";

describe("Acceuil Component", () => {
  it("affiche le titre du blog", () => {
    render(<Acceuil />);
    const titleElement = screen.getByText(/Bienvenue sur mon blog !/i);  
    expect(titleElement).toBeVisible();  
  });
});