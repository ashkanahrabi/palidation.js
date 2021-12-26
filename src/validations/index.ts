import { isNationalCode } from './isNationalCode';
import { isNumeric } from './isNumeric';
import { isMobile } from './isMobile';

interface Validations {
  isNationalCode: (value: string) => boolean;
  isNumeric: (value: string) => boolean;
  isMobile: (value: string) => boolean;
}

export const Validations: Validations = {
  isNationalCode,
  isNumeric,
  isMobile,
};
