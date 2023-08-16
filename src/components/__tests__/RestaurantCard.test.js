import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mock-data/RestaurantCard.json";
import "@testing-library/jest-dom";

it("should render restaurant card component", () => {
    render(<RestaurantCard resObj={MOCK_DATA} />);

    const restaurantName = screen.getByText("EatFit");

    expect(restaurantName).toBeInTheDocument();
});

it("should render restaurant card component with promoted label", () => {

    const RestaurantWithPromoted = withPromotedLabel(RestaurantCard); 

    render(<RestaurantWithPromoted resObj={MOCK_DATA} />);

    const promotedText = screen.getByText("Promoted");

    expect(promotedText).toBeInTheDocument();
});