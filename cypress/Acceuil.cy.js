import React from "react";
import { mount } from "@cypress/react18";
import BlogCard from "../src/Components/CardBlog.jsx";

describe("Acceuil Component", () => {
  it("should display the blog title and loading message", () => {
    mount(BlogCard);
    cy.contains("Bienvenue sur mon blog !").should("be.visible");
    cy.contains("Chargement des articles...").should("be.visible");
  });
});
