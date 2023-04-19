import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman, { GALLOWS_IMAGES } from "./Snowman";



test("renders without crashing", function () {
  render(<Snowman />);
});

test("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});

test("buttons are gone after maxWrong guesses", function () {
  const { container } = render(<Snowman words={["apple"]} maxWrong="1" />);
  const ltrButtons = container.querySelector('.ltr-buttons');
  fireEvent.click(container.querySelector('button[value="b"]'));
  expect(ltrButtons).toBeEmptyDOMElement();
});