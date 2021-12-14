import {format} from './currencyFormatter';

interface CurrencyFormatter{
    format: Function
}

export const CurrencyFormatter: CurrencyFormatter = {
    format
}