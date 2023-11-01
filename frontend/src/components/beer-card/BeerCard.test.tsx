import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import BeerCard from "./BeerCard";

describe("BeerCard", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BeerCard
        beer_id={2}
        name={"Example brewery"}
        brewery={"Example brewery"}
        votes={10}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with correct names", () => {
    const { getByText } = render(
      <BeerCard
        beer_id={2}
        name={"Example beer"}
        brewery={"Example brewery"}
        votes={10}
      />
    );
    expect(getByText("Example beer")).toBeInTheDocument();
    expect(getByText("Example beer")).toBeInstanceOf(HTMLHeadingElement);
    expect(getByText("Example brewery")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
  });

  it("renders with correct link", () => {
    /* This test will fail once we set up beercard to work correctly */
    const { getByRole } = render(
      <BeerCard
        beer_id={2}
        name={"Example beer"}
        brewery={"Example brewery"}
        votes={10}
      />
    );
    expect(getByRole("link")).toHaveAttribute("href", "./project2/beer/2");
  });
});
