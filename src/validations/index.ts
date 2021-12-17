import {isNationalCode} from './isNationalCode';
import {isNumeric} from './isNumeric';

interface Validations{
    isNationalCode: Function,
    isNumeric: Function
}

export const Validations: Validations = {
    isNationalCode,
    isNumeric
}