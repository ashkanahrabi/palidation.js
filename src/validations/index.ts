import {isNationalCode} from './isNationalCode';
import {isNumeric} from './isNumeric';
import {isMobile} from './isMobile';

interface Validations{
    isNationalCode: Function,
    isNumeric: Function,
    isMobile: Function
}

export const Validations: Validations = {
    isNationalCode,
    isNumeric,
    isMobile
}