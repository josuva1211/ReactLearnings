import React from "react";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


it("Should load login button inside Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{ name: "Login" });

    //Assertion
    expect(loginButton).toBeInTheDocument();
});

it("Should render cart items to 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    //Assertion
    expect(cartItem).toBeInTheDocument();
});

it("Should change from login to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();
});

it("Should change from login to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);

    expect(loginButton).toBeInTheDocument();
});