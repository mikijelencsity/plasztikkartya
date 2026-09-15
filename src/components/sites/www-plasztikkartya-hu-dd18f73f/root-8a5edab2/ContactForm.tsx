"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CaretDownIcon } from "../shared/icons";
import { contact } from "./content";

const field =
  "w-full border-0 bg-pk-field font-raleway text-[14px] leading-[1.4] font-medium text-white/45 outline-none placeholder:text-white/45";

function FieldGroup({ half, children }: { half?: boolean; children: ReactNode }) {
  return <div className={cn("mb-5 w-full px-[10px]", half && "tab:w-1/2")}>{children}</div>;
}

interface ContactFormProps {
  className?: string;
}

/** Elementor Pro form markup; submission is not wired to a backend in the clone. */
export function ContactForm({ className }: ContactFormProps) {
  return (
    <form className={className} name="Új űrlap" onSubmit={(event) => event.preventDefault()}>
      <div className="-mx-[10px] -mb-5 flex flex-wrap">
        <FieldGroup half>
          <label htmlFor="form-field-name" className="sr-only">
            Név/Cégnév
          </label>
          <input
            id="form-field-name"
            name="name"
            type="text"
            required
            placeholder="Név/Cégnév.."
            className={cn(field, "min-h-10 px-[15px] py-[10px]")}
          />
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-email" className="sr-only">
            Email
          </label>
          <input
            id="form-field-email"
            name="email"
            type="email"
            required
            placeholder="Email.."
            className={cn(field, "min-h-10 px-[15px] py-[10px]")}
          />
        </FieldGroup>
        <FieldGroup half>
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
            className={cn(field, "min-h-10 px-[15px] py-[10px]")}
          />
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-select" className="sr-only">
            Select
          </label>
          <div className="relative w-full">
            <select
              id="form-field-select"
              name="select"
              className={cn(field, "h-10 appearance-none rounded-[3px] py-[5px] pr-5 pl-[14px]")}
            >
              {contact.cardOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-[10px] -translate-y-1/2 text-white/45">
              <CaretDownIcon className="block h-[25px] w-[10px] -translate-x-[3px] -translate-y-px" />
            </span>
          </div>
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="form-field-message" className="sr-only">
            Üzenet
          </label>
          <textarea
            id="form-field-message"
            name="message"
            rows={6}
            placeholder="Üzenet"
            className={cn(field, "block rounded-[3px] px-[14px] py-[5px]")}
          />
        </FieldGroup>
        <FieldGroup>
          <span className="block font-raleway text-[14px] leading-[21px] font-normal text-white">
            File feltöltése (nem kötelező)
          </span>
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-upload" className="sr-only">
            upload
          </label>
          <input
            id="form-field-upload"
            name="upload"
            type="file"
            multiple
            className="block font-raleway text-[14px] text-white/45"
          />
        </FieldGroup>
        <FieldGroup>
          {/* Subgroup inherits the theme body line box (17px / 1.5) */}
          <div className="text-[17px] leading-[25.5px]">
            <span className="font-raleway text-[14px] leading-[21px] font-medium text-pk-muted">
              <input id="form-field-acceptance" name="acceptance" type="checkbox" required className="align-baseline" />{" "}
              <label htmlFor="form-field-acceptance">
                Elfogadom az{" "}
                <a href="https://www.plasztikkartya.hu/adatvedelem" className="text-pk-gold">
                  Adatvédelmi Tájékoztatóban
                </a>{" "}
                leírtakat
              </label>
            </span>
          </div>
        </FieldGroup>
        <FieldGroup>
          <button
            type="submit"
            className="rounded-[10px] bg-pk-gold px-[30px] pt-[17px] pb-[15px] font-helvetica text-[16px] leading-none font-bold text-white tab:text-[18px]"
          >
            {contact.submit}
          </button>
        </FieldGroup>
      </div>
    </form>
  );
}
