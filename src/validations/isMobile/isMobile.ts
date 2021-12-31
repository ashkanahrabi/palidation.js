import { ConvertNums } from '../../utils/convertNums';

export const isMobile = (value: string): boolean => {
  value = ConvertNums.toEnglish(value);
  return /^(09)[0-9]{9}$/.test(value);
};
