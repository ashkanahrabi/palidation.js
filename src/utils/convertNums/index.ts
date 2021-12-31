import { toPersian as toPersianDigits } from './toPersian';
import { toEnglish as toEnglishDigits } from './toEnglish';

/**
 * Converts digits from English to Persian and vice versa
 *
 * *Basic import example:*
 * ```
 * import { ConvertNums } from "palidation.js";
 * ```
 */
// tslint:disable-next-line
export namespace ConvertNums {
  /**
   * use toPersianDigits method to convert English digits to Persian
   *
   * @param value the parameter can contain any string values
   * @return the original string with its digits converted to Persian
   *
   * @example
   * ```
   * import { ConvertNums } from "palidation.js";
   *
   * let input = 'تعداد: 17 عدد'; //Any string (containing English digits)
   *
   * console.log(ConvertNums.toPersian(input));
   * // Output: 'تعداد: ۱۷ عدد'
   * ```
   */
  export const toPersian = toPersianDigits;

  /**
   * use toEnglishDigits method to convert Persian digits to English
   *
   * > *e.g: when you want to fetch Farsi input values*
   *
   * @param value the parameter can contain any string values
   * @return the original string with its digits converted to English
   *
   * @example
   * ```
   * import { ConvertNums } from "palidation.js";
   *
   * let input = 'تعداد: ۱۷ عدد'; //Any string (containing Persian digits)
   *
   * console.log(ConvertNums.toEnglish(input));
   * // Output: 'تعداد: 17 عدد'
   * ```
   * @example
   * ```
   * import { ConvertNums } from "palidation.js";
   *
   * let inputValue = '۱۴'; //Any string (containing Persian digits)
   *
   * console.log(ConvertNums.toEnglish(inputValue));
   * // Output: '14'
   * ```
   */
  export const toEnglish = toEnglishDigits;
}
