import { fireEvent, render } from "@testing-library/react";
import { Input } from "../../components/atoms/Input";
import { describe, expect, test, vi } from "vitest";



describe("Input rendering", () => {
    test("should render input correctly", () => {
        const { container } = render(<Input placeholder="" value="" onChange={() => {}} />);
 
        expect(container.firstChild).toBeTruthy();
    });
})

describe("Input event", () => {
    test("should trigger onChange event", () => {
        const handleChange = vi.fn();
        const { getByRole } = render(<Input placeholder="" value="" onChange={handleChange} />);
        const input = getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalled();
    });
    
 });
