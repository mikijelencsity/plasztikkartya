import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

async function fillRequiredFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Név"), "Teszt Elek");
  await user.type(screen.getByLabelText("Email"), "teszt@example.com");
  await user.type(screen.getByLabelText("Phone"), "+36301234567");
  await user.click(screen.getByLabelText(/Adatvédelmi Tájékoztatóban/));
  await user.click(screen.getByLabelText(/Sütik \(cookie-k\) használatát/));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    pushMock.mockClear();
  });

  it("navigates to the thank-you page after a successful submit", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(pushMock).toHaveBeenCalledWith("/koszonjuk");
  });

  it("shows an error message and keeps the field values when the request fails", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: false }), { status: 502 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(await screen.findByText(/Hiba történt/)).toBeInTheDocument();
    expect(screen.getByLabelText("Név")).toHaveValue("Teszt Elek");
    expect(pushMock).not.toHaveBeenCalled();
  });

  it("submits successfully without a company name, since it is optional", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(pushMock).toHaveBeenCalledWith("/koszonjuk");
  });
});
