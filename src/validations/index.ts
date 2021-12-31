import { isNationalCode as nationalcode } from './isNationalCode';
import { isNumeric as numeric } from './isNumeric';
import { isMobile as mobile } from './isMobile';

/**
 * This is the validation method which validates different things:
 *
 * *Basic import example:*
 * ```
 * import { Validation } from "palidation.js";
 * ```
 */
// tslint:disable-next-line
export namespace Validation {
  /**
   * use this method to validate whether the string is an Iranian National Code or not
   *
   * @param value the parameter is a string of digits
   * @return
   * 
   * `true` if the value is an Iranian National Code
   * 
   * `false` if the value is **NOT** an Iranian National Code
   *
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let falsyInput = '0012345000'; //Any string (containing English or Persian digits)
   *
   * console.log(Validation.isNationalCode(falsyInput));
   * // Output: false
   * ```
   * 
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let truthyInput = '0714516368'; //Any string (containing English or Persian digits)
   *
   * console.log(Validation.isNationalCode(truthyInput));
   * // Output: true
   * ```
   *
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let truthyPersianInput = '۰۷۱۴۵۱۶۳۶۸'; //Input can also be in Persian Digits
   *
   * console.log(Validation.isNationalCode(truthyPersianInput));
   * // Output: true
   * ```
   */
  export const isNationalCode = nationalcode;

  /**
   * use this method to validate whether the string is numeric or not
   *
   * @param value the parameter is a string
   * @return
   *
   * `true` if the value contains only numbers
   *
   * `false` if the value **Doesn't Contain** numbers
   *
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let falsyInput = 'Hello World Number 123!'; //Any string
   *
   * console.log(Validation.isNumeric(falsyInput));
   * // Output: false
   * 
   * let falsyPersianInput = 'سلام دنیای شماره ۱۲۳!';
   *
   * console.log(Validation.isNumeric(falsyPersianInput));
   * // Output: false
   * ```
   *
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let truthyInput = '123';
   *
   * console.log(Validation.isNumeric(truthyInput));
   * // Output: true
   * 
   * let truthyPersianInput = '۱۲۳';
   *
   * console.log(Validation.isNumeric(truthyPersianInput));
   * // Output: true
   * ```
   */
  export const isNumeric = numeric;

  /**
   * use this method to validate whether the string is an Iranian Mobile Number or not
   *
   * @param value the parameter is a string
   * @return
   *
   * `true` if the value is an Iranian Mobile Number
   *
   * `false` if the value is **NOT** an Iranian Mobile Number
   *
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let falsyInput = '01234567890'; //Any string
   *
   * console.log(Validation.isMobile(falsyInput));
   * // Output: false
   *
   * let falsyPersianInput = '۰۱۲۳۴۵۶۷۸۹۰';
   *
   * console.log(Validation.isMobile(falsyPersianInput));
   * // Output: false
   * ```
   *
   * @example
   * ```
   * import { Validation } from "palidation.js";
   *
   * let truthyInput = '09129743764';
   *
   * console.log(Validation.isMobile(truthyInput));
   * // Output: true
   *
   * let truthyPersianInput = '۰۹۱۲۹۷۴۳۷۶۴';
   *
   * console.log(Validation.isMobile(truthyPersianInput));
   * // Output: true
   * ```
   */
  export const isMobile = mobile;
}

