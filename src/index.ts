import {ConvertNums} from "./utils/convertNums";
import {CurrencyFormatter} from "./utils/currencyFormatter";
import {Validations} from "./validations";

console.log(ConvertNums.toPersian("1230"));
console.log(ConvertNums.toEnglish("۱۲۳"));
console.log(CurrencyFormatter.format("9123333"));
console.log(Validations.isNationalCode("۰۰۱۷۵۳۲۰۰۰"));

export {};