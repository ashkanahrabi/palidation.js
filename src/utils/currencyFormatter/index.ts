import { format as formatter } from './currencyFormatter';

/**
 * Formats currencies with comma on each 3rd digit
 *
 * *Basic import example:*
 * ```
 * import { CurrencyFormatter } from "palidation.js";
 * ```
 */
// tslint:disable-next-line
export namespace CurrencyFormatter {
  /**
   * this method will find digits through a sting and returns a currency-formatted string with Persian digits
   *
   * @param value the parameter can contain any string values
   * @return the original string with its digits currency-formatted in Persian
   *
   * @example
   * ```
   * import { CurrencyFormatter } from "palidation.js";
   *
   * let input = 'قیمت: 5000 تومان'; //Any string (containing English digits)
   *
   * console.log(CurrencyFormatter.format(input));
   * // Output: 'قیمت: ۵,۰۰۰ تومان'
   * ```
   */
  export const format = formatter;
}
