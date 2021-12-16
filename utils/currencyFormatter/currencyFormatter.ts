import {ConvertNums} from "../convertNums";
export const format = (value: string): string => {
    value = ConvertNums.toEnglish(value);
    return ConvertNums.toPersian(value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","))
};