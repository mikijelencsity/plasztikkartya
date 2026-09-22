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
  await user.type(screen.getByLabelText("Cégnév"), "Teszt Kft.");
  await user.type(screen.getByLabelText("Email"), "teszt@example.com");
  await user.type(screen.getByLabelText("Phone"), "+36301234567");
  await user.selectOptions(screen.getByLabelText("Darabszám"), "200 - 500 db");
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

  it("does not submit without a company name, since it is required", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Név"), "Teszt Elek");
    await user.type(screen.getByLabelText("Email"), "teszt@example.com");
    await user.type(screen.getByLabelText("Phone"), "+36301234567");
    await user.click(screen.getByLabelText(/Adatvédelmi Tájékoztatóban/));
    await user.click(screen.getByLabelText(/Sütik \(cookie-k\) használatát/));
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(fetch).not.toHaveBeenCalled();
  });

  it("sends the selected quantity range in the request body", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.selectOptions(screen.getByLabelText("Darabszám"), "1000 - 2000 db");
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    const [, requestInit] = vi.mocked(fetch).mock.calls[0];
    const body = JSON.parse(String(requestInit?.body));
    expect(body.quantity).toBe("1000 - 2000 db");
  });

  it("does not submit without a chosen quantity, since it has no default and is required", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Név"), "Teszt Elek");
    await user.type(screen.getByLabelText("Cégnév"), "Teszt Kft.");
    await user.type(screen.getByLabelText("Email"), "teszt@example.com");
    await user.type(screen.getByLabelText("Phone"), "+36301234567");
    await user.click(screen.getByLabelText(/Adatvédelmi Tájékoztatóban/));
    await user.click(screen.getByLabelText(/Sütik \(cookie-k\) használatát/));
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(fetch).not.toHaveBeenCalled();
  });
});
