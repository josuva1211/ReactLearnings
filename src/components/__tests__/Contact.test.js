import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("testing contact us test cases", () => {
    it("Should load Contact Us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside Contact Us component", () => {
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input name inside Contact Us component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside contact us component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
})

