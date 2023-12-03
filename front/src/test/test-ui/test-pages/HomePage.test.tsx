import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { HomePage } from "../../..";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

vi.mock("../../../hooks/useForecasts.tsx", () => ({
  useForecasts: () => ({
    forecastsTodayQuery: {
      data: [],
      isLoading: false,
    },
  }),
}));

describe("HomePage rendering", () => {
  test("should render HomePage correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );
    const searchComponent = screen.getByRole("textbox");
    expect(searchComponent).toBeDefined();
  });
});

describe("HomePage event", () => {
    test("should trigger onSearch event", () => {
     render(
       <QueryClientProvider client={queryClient}>
         <HomePage />
       </QueryClientProvider>
     );
     const searchComponent = screen.getByRole("textbox") as HTMLInputElement;
     fireEvent.change(searchComponent, { target: { value: 'test' } });
     expect(searchComponent.value).toBe('test');
    });
   });
