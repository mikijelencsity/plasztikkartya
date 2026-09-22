"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CaretDownIcon } from "../shared/icons";
import { onCardTypeSelected } from "./cardTypeSelection";
import { contact, footer } from "./content";
import { FileDropzone } from "./FileDropzone";

const field =
  "w-full rounded-[14px] border-0 bg-pk-field font-raleway text-[16px] leading-[1.4] font-medium text-white/50 outline-none placeholder:text-white/50";

function FieldGroup({ full, children }: { full?: boolean; children: ReactNode }) {
  return <div className={cn("w-full", full && "tab:col-span-2")}>{children}</div>;
}

interface ContactFormProps {
  className?: string;
}

type FormStatus = "idle" | "submitting" | "error";

export function ContactForm({ className }: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [cardType, setCardType] = useState(contact.cardOptions[0]);
  const [quantity, setQuantity] = useState("");

  useEffect(() => onCardTypeSelected(setCardType), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      cardType: String(data.get("select") ?? ""),
      quantity: String(data.get("quantity") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      router.push("/koszonjuk");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={cn(className, "flex flex-col items-center")} name="Új űrlap" onSubmit={handleSubmit}>
      <div className="grid w-full grid-cols-1 gap-5 tab:grid-cols-2">
        <FieldGroup>
          <label htmlFor="form-field-name" className="sr-only">
            Név
          </label>
          <input
            id="form-field-name"
            name="name"
            type="text"
            required
            placeholder="Név.."
            className={cn(field, "min-h-[56px] px-5 py-4")}
          />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="form-field-company" className="sr-only">
            Cégnév
          </label>
          <input
            id="form-field-company"
            name="company"
            type="text"
            required
            placeholder="Cégnév.."
            className={cn(field, "min-h-[56px] px-5 py-4")}
          />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="form-field-email" className="sr-only">
            Email
          </label>
          <input
            id="form-field-email"
            name="email"
            type="email"
            required
            placeholder="Email.."
            className={cn(field, "min-h-[56px] px-5 py-4")}
          />
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="form-field-phone" className="sr-only">
            Phone
          </label>
          <input
            id="form-field-phone"
            name="phone"
            type="tel"
            required
            placeholder="Telefonszám.."
            pattern="[0-9()#&+*\-=.]+"
            title="Only numbers and phone characters (#, -, *, etc) are accepted."
            className={cn(field, "min-h-[56px] px-5 py-4")}
          />
        </FieldGroup>
        <FieldGroup full>
          <label htmlFor="form-field-select" className="sr-only">
            Select
          </label>
          <div className="relative w-full">
            <select
              id="form-field-select"
              name="select"
              value={cardType}
              onChange={(event) => setCardType(event.target.value)}
              className={cn(field, "h-[56px] appearance-none py-4 pr-5 pl-5")}
            >
              {contact.cardOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-white/50">
              <CaretDownIcon className="block h-[25px] w-[10px] -translate-y-px" />
            </span>
          </div>
        </FieldGroup>
        <FieldGroup full>
          <label htmlFor="form-field-quantity" className="sr-only">
            Darabszám
          </label>
          <div className="relative w-full">
            <select
              id="form-field-quantity"
              name="quantity"
              required
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className={cn(field, "h-[56px] appearance-none py-4 pr-5 pl-5")}
            >
              <option value="" disabled>
                Válasszon darabszámot..
              </option>
              {contact.quantityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-white/50">
              <CaretDownIcon className="block h-[25px] w-[10px] -translate-y-px" />
            </span>
          </div>
        </FieldGroup>
        <FieldGroup full>
          <label htmlFor="form-field-message" className="sr-only">
            Üzenet
          </label>
          <textarea
            id="form-field-message"
            name="message"
            rows={6}
            placeholder="Üzenet"
            className={cn(field, "block px-5 py-4")}
          />
        </FieldGroup>
        <FieldGroup full>
          <FileDropzone name="upload" />
        </FieldGroup>
        <FieldGroup full>
          <div className="flex flex-col items-center gap-2 text-center text-[17px] leading-[25.5px]">
            <span className="font-raleway text-[14px] leading-[21px] font-medium text-pk-muted">
              <input id="form-field-acceptance" name="acceptance" type="checkbox" required className="align-baseline" />{" "}
              <label htmlFor="form-field-acceptance">
                Elfogadom az{" "}
                <a href="/adatvedelem" className="text-pk-gold">
                  Adatvédelmi Tájékoztatóban
                </a>{" "}
                leírtakat
              </label>
            </span>
            <span className="font-raleway text-[14px] leading-[21px] font-medium text-pk-muted">
              <input id="form-field-cookies" name="cookies" type="checkbox" required className="align-baseline" />{" "}
              <label htmlFor="form-field-cookies">
                Elfogadom a{" "}
                <a href="/sutik-tajekoztato" className="text-pk-gold">
                  Sütik (cookie-k) használatát
                </a>
              </label>
            </span>
          </div>
        </FieldGroup>
        {status === "error" ? (
          <FieldGroup full>
            <p className="text-center font-raleway text-[14px] leading-[1.4] font-medium text-red-400">
              Hiba történt a küldés során. Kérjük próbáld újra, vagy hívj minket:{" "}
              <a href={footer.phoneHref} className="text-pk-gold underline">
                {footer.phone}
              </a>
            </p>
          </FieldGroup>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 rounded-[14px] bg-pk-gold px-[40px] pt-[18px] pb-[16px] font-raleway text-[16px] leading-none font-bold text-white tab:text-[18px] disabled:opacity-60"
      >
        {status === "submitting" ? "Küldés…" : contact.submit}
      </button>
    </form>
  );
}
