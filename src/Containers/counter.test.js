import { render, fireEvent } from "@testing-library/react";
import Counter from "./counter";

describe(Counter, () => {

    it("counter displays correct intial count" , () => {
        const { getByTestId } = render(<Counter initalCount={0}></Counter>)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0)
    })

    it("count should incremenet by 1 if the increment button is clicked" , () => {
        const { getByTestId, getByRole } = render(<Counter initalCount={0}></Counter>)
        const countValue1 = Number(getByTestId("count").textContent);
        const incrementButton = getByRole('button', {name: "Increment"})
        fireEvent.click(incrementButton)
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(countValue1 + 1)
    })

    it("count should decrement by 1 if the decremement button is clicked" , () => {
        const { getByTestId, getByRole } = render(<Counter initalCount={0}></Counter>)
        const countValue1 = Number(getByTestId("count").textContent);
        const decrementButton = getByRole('button', {name: "Decrement"})
        fireEvent.click(decrementButton)
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(countValue1 - 1)
    })

    it("count should reset to 0 if the restart button is clicked" , () => {
        const { getByTestId, getByRole } = render(<Counter initalCount={5}></Counter>)
        const restartButton = getByRole('button', {name: "Restart"})
        fireEvent.click(restartButton)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0)
    })

    it("count should switch signs  if the switch signs button is clicked" , () => {
        const { getByTestId, getByRole } = render(<Counter initalCount={5}></Counter>)
        const switchSignsButton = getByRole('button', {name: "Switch Signs"})
        fireEvent.click(switchSignsButton)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(-5)
    })
})