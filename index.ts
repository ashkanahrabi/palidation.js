import {ConvertNums} from "./utils/convertNums";
import {CurrencyFormatter} from "./utils/currencyFormatter";

console.log(ConvertNums.toPersian("1230"));
console.log(ConvertNums.toEnglish("۱۲۳"));
console.log(CurrencyFormatter.format("1200"));

export {ConvertNums};