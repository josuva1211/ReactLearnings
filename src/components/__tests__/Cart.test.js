import React from "react";
import MOCK_DATA from "../../mock-data/ResMenuData.json";
import { act } from "react-dom/test-utils";
import { fireEvent, screen, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should test the Add to Cart flow", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestaurantMenu />
                <Header />
                <Cart />
            </Provider>
        </BrowserRouter>
        
    ));

    const accordionHeader = screen.getByText("Recommended (6)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("menu-item").length).toBe(6);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart - 1")).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart - 2")).toBeInTheDocument();

    expect(screen.getAllByTestId("menu-item").length).toBe(8);

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

    fireEvent.click(clearCartBtn);

    expect(screen.getAllByTestId("menu-item").length).toBe(6);
});