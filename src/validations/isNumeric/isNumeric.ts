import { ConvertNums } from '../../utils/convertNums';

export const isNumeric = (value: string): boolean => {
  value = ConvertNums.toEnglish(value);
  return /^\d+$/g.test(value);
};
