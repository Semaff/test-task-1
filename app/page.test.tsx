import { screen } from "@testing-library/react";

import Home from "./page";
import { mockFetch } from "@/tests/mockFetch";

import renderWithProviders from "@/tests/renderWithProviders";
import mockIntersectionObserver from "@/tests/mockIntersectionObserver";

describe("Home", () => {
  beforeAll(() => {
    mockFetch([
      {
        id: 1,
        title: "Smart Coffee Maker",
        description: "WiFi-enabled coffee maker with scheduling feature.",
        price: 99.99,
        currency: "USD",
        image: "https://via.placeholder.com/200",
        rating: 4.4,
      },
    ]);

    mockIntersectionObserver();
  });

  it("renders logo", async () => {
    renderWithProviders(await Home());

    const logo = screen.getByText("E-Commerce");

    expect(logo).toBeInTheDocument();
  });

  it("renders products", async () => {
    renderWithProviders(await Home());

    const product = screen.getByText("Smart Coffee Maker");

    expect(product).toBeInTheDocument();
  });
});
