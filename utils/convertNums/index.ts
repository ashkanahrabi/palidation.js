import {toPersian} from './toPersian';
import {toEnglish} from './toEnglish';

interface ConvertNums{
    toPersian: Function,
    toEnglish: Function
}

export const ConvertNums: ConvertNums = {
    toPersian,
    toEnglish
}