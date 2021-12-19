import {ConvertNums} from "./utils/convertNums";
import {CurrencyFormatter} from "./utils/currencyFormatter";
import {Validations} from "./validations";

console.log(ConvertNums.toPersian("1230"));
console.log(ConvertNums.toEnglish("۱۲۳"));
console.log(CurrencyFormatter.format("9123333"));
console.log(Validations.isNationalCode("۰۰۱۷۵۳۲۰۰۰"));
console.log(Validations.isMobile("09129743764"));

export {};