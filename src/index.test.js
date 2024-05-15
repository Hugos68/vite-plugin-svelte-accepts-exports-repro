import { it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Test from "./Test.svelte";

it("renders", () => {
	render(Test);

	expect(screen.getByTestId("hello-world").innerText).toBe("Hello, world!");
});
