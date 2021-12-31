import {Validation} from '../../../src';
describe("test isNationalCode validation", () => {
    
    it('should return true if the value is a valid National Code', () => {
        const input = '0714516368';
        expect(Validation.isNationalCode(input)).toBeTruthy();
    });
    
    it('should return false if the value is NOT a valid National Code', () => {
        const input = '0012345000';
        expect(Validation.isNationalCode(input)).toBeFalsy();
    });
    
    it('should also accept Persian Digits and return true or false', () => {
        const input = '۰۰۱۲۳۴۵۰۰۰';
        expect(Validation.isNationalCode(input)).toBeFalsy();
        
        const otherInput = '۰۷۱۴۵۱۶۳۶۸';
        expect(Validation.isNationalCode(otherInput)).toBeTruthy();
    });
    
    it('should return false on inputs with length less than 10', () => {
        const input = '07145';
        expect(Validation.isNationalCode(input)).toBeFalsy();
    });

    it('should return false on inputs with greater than 10', () => {
        const input = '07145163681';
        expect(Validation.isNationalCode(input)).toBeFalsy();
    });
    
    it('should return false on inputs with random values', () => {
        const input = '0000000000';
        expect(Validation.isNationalCode(input)).toBeFalsy();
    });

    it('should return false on non-numeric inputs', () => {
        const input = 'This is my National Code: 0714516368';
        expect(Validation.isNationalCode(input)).toBeFalsy();
    });
    
});