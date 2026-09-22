import { cn } from "@/lib/utils";
import { CaretDownIcon } from "../shared/icons";
import { pricingSection } from "./content";
import { mutedText, sectionHeading } from "./styles";

const cardLabel = "font-raleway text-[12px] font-medium text-white/40";

export function PricingTable() {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className={cn(sectionHeading, "text-center text-[32px] tab:text-[45px]")}>{pricingSection.title}</h2>
      <p className={cn(mutedText, "mt-5 mb-[35px] w-[800px] max-w-full text-center text-[20px]")}>
        {pricingSection.text}
      </p>

      {/* Mobile: collapsible card per row, no horizontal scroll. */}
      <div className="flex w-full flex-col gap-3 tab:hidden">
        {pricingSection.rows.map((row) => (
          <details key={row.quantity} className="group rounded-[16px] border border-white/10 bg-pk-field/40">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 [&::-webkit-details-marker]:hidden">
              <span className="font-raleway text-[16px] font-bold text-white">{row.quantity} db</span>
              <span className="flex items-center gap-3">
                <span className="flex flex-col items-end">
                  <span className="font-raleway text-[10px] font-medium text-white/40">Bruttó</span>
                  <span className="font-raleway text-[18px] font-bold text-white">{row.grossTotal}</span>
                </span>
                <CaretDownIcon className="size-3 text-white/50 transition-transform duration-200 group-open:rotate-180" />
              </span>
            </summary>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 p-4">
              <div className="flex flex-col gap-1">
                <dt className={cardLabel}>Nettó egységár</dt>
                <dd className="font-raleway text-[14px] font-semibold text-pk-gold-dark">{row.netUnitPrice}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className={cardLabel}>Nettó összesen</dt>
                <dd className="font-raleway text-[14px] text-white/80">{row.netTotal}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className={cardLabel}>ÁFA</dt>
                <dd className="font-raleway text-[14px] text-white/80">{row.vatRate}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className={cardLabel}>ÁFA összege</dt>
                <dd className="font-raleway text-[14px] text-white/80">{row.vatAmount}</dd>
              </div>
            </dl>
          </details>
        ))}
      </div>

      {/* Tablet and up: full table, everything fits without scrolling. */}
      <div className="hidden w-full max-w-[1300px] overflow-hidden rounded-[20px] border border-white/10 bg-pk-field/40 tab:block">
        <table className="w-full border-collapse font-raleway text-[13px] desk:text-[16px]">
          <thead>
            <tr className="bg-pk-field">
              {pricingSection.columns.map((column) => (
                <th key={column} scope="col" className="px-3 py-4 text-left font-bold text-white first:pl-5 last:pr-5 desk:px-6">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingSection.rows.map((row) => (
              <tr key={row.quantity} className="border-t border-white/10">
                <td className="px-3 py-4 pl-5 text-white/80 desk:px-6">{row.quantity}</td>
                <td className="bg-pk-gold/10 px-3 py-4 font-semibold text-pk-gold-dark desk:px-6">
                  {row.netUnitPrice}
                </td>
                <td className="px-3 py-4 text-white/80 desk:px-6">{row.netTotal}</td>
                <td className="px-3 py-4 text-white/80 desk:px-6">{row.vatRate}</td>
                <td className="px-3 py-4 text-white/80 desk:px-6">{row.vatAmount}</td>
                <td className="px-3 py-4 pr-5 font-semibold text-white desk:px-6">{row.grossTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 w-full max-w-[1300px] font-raleway text-[14px] leading-[1.6] font-normal text-white/40 italic">
        {pricingSection.note}
      </p>
    </div>
  );
}
