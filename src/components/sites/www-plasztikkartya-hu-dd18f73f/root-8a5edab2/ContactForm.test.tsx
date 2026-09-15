import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";
import { trackLeadConversion } from "@/lib/tracking";

vi.mock("@/lib/tracking", () => ({
  trackLeadConversion: vi.fn(),
}));

async function fillRequiredFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Név"), "Teszt Elek");
  await user.type(screen.getByLabelText("Email"), "teszt@example.com");
  await user.type(screen.getByLabelText("Phone"), "+36301234567");
  await user.click(screen.getByLabelText(/Elfogadom/));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    vi.mocked(trackLeadConversion).mockClear();
  });

  it("shows a success message and tracks the conversion after a successful submit", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(await screen.findByText("Köszönjük az ajánlatkérést!")).toBeInTheDocument();
    expect(trackLeadConversion).toHaveBeenCalledTimes(1);
  });

  it("shows an error message and keeps the field values when the request fails", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: false }), { status: 502 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(await screen.findByText(/Hiba történt/)).toBeInTheDocument();
    expect(screen.getByLabelText("Név")).toHaveValue("Teszt Elek");
    expect(trackLeadConversion).not.toHaveBeenCalled();
  });

  it("submits successfully without a company name, since it is optional", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(await screen.findByText("Köszönjük az ajánlatkérést!")).toBeInTheDocument();
  });
});
