export interface Currency {
  code: string;
  symbol: string;
}

export const CURRENCIES: Currency[] = [
  { code: "EUR", symbol: "€" },
  { code: "USD", symbol: "$" },
  { code: "KRW", symbol: "₩" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" }
];