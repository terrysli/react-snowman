import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman, { GALLOWS_IMAGES } from "./Snowman";



test("renders without crashing", function () {
  render(<Snowman />);
});

test("player cannot keep guessing after maxWrong guesses", function () {
  const { container } = render(<Snowman maxWrong="1" />);
  fireEvent.click(container.querySelector('button[value="b"]'));
  fireEvent.click(container.querySelector('button[value="c"]'));
  expect(container.querySelector(".num-wrong"))
    .toHaveTextContent("Number wrong: 1");
});