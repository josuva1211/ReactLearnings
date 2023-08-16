import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mock-data/ResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import AppLayout from "../AppLayout";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search Res List for burger input", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        
    ));

    const cardsBeforeSearch = screen.getAllByTestId("Res-Card");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.blur(searchInput);

    const cardsAfterSearch = screen.getAllByTestId("Res-Card");

    expect(cardsAfterSearch.length).toBe(5);
    
})

it("Should Show only top rated Res List", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        
    ));

    const cardsBeforeSearch = screen.getAllByTestId("Res-Card");

    expect(cardsBeforeSearch.length).toBe(20);

    const topRatedButton = screen.getByRole("button", { name: "Show Top Restaurants" });

    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("Res-Card");

    expect(cardsAfterFilter.length).toBe(12);
    
})

