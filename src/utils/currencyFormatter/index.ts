import { format } from './currencyFormatter';

interface CurrencyFormatter {
  format: (value: string) => string;
}

export const CurrencyFormatter: CurrencyFormatter = {
  format,
};
