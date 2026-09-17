import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import KoszonjukPage from "./page";
import { trackLeadConversion } from "@/lib/tracking";

vi.mock("@/lib/tracking", () => ({
  trackLeadConversion: vi.fn(),
}));

describe("KoszonjukPage", () => {
  it("shows the thank-you message and fires the lead conversion once on mount", () => {
    render(<KoszonjukPage />);

    expect(screen.getByText("Köszönjük az ajánlatkérést!")).toBeInTheDocument();
    expect(trackLeadConversion).toHaveBeenCalledTimes(1);
  });
});
