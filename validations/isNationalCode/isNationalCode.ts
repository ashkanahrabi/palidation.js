import { ConvertNums } from "../../utils/convertNums";
import { isNumeric } from "../isNumeric";

export const isNationalCode = (value: string): boolean => {
    value = ConvertNums.toEnglish(value);
    if (!isNumeric(value)) {
        return false;
    }
    if (value.length !== 10) {
        return false;
    }
    if ([
        '0000000000',
        '1111111111',
        '2222222222',
        '3333333333',
        '4444444444',
        '5555555555',
        '6666666666',
        '7777777777',
        '8888888888',
        '9999999999',
        '0123456789'
    ].includes(value)) {
        return false;
    }
    const digits: Array<string> = value.substr(0, value.length - 1).split("");
    const formatedDigits: Array<number> = digits.map((digit: string, index: number) => +digit * (10 - index));

    const ret: number = formatedDigits.reduce((acc, n): number => acc + n, 0) % 11;

    const parity: number = +value % 10;
    return ret < 2 ? ret === parity : ret === 11 - parity;
};