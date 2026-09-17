const EVENT = "pk-select-card-type";

export function selectCardType(title: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: title }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function onCardTypeSelected(handler: (title: string) => void) {
  function listener(event: Event) {
    handler((event as CustomEvent<string>).detail);
  }
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
