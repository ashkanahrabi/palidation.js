import { toPersian } from './toPersian';
import { toEnglish } from './toEnglish';

interface ConvertNums {
  toPersian: (value: string) => string;
  toEnglish: (value: string) => string;
}

export const ConvertNums: ConvertNums = {
  toPersian,
  toEnglish,
};
