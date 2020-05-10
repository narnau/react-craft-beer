// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BeerCard from "./BeerCard";

test("displays beer info with truncated description", async () => {
  const beer = {
    name: "Estrella Damm",
    tagline: "Good one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis magna, fermentum sit amet lacinia sit amet, convallis eget orci. Curabitur eget interdum diam, at gravida massa. Nulla consectetur nunc vitae sapien fermentum sollicitudin. Nulla tellus arcu, bibendum ut tincidunt eget, interdum ut turpis. Nulla rutrum ac velit eu blandit.",
  };
  render(<BeerCard beer={beer} />);
  let expectedDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis magna, fermentum sit amet lacinia sit amet, convallis eget orci....";
  expect(screen.getByText(expectedDescription)).toBeTruthy();
  expect(screen.getByText(beer.name)).toBeTruthy();
  expect(screen.getByText(beer.tagline)).toBeTruthy();
});
