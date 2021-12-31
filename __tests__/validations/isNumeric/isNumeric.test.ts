import {Validation} from '../../../src';
describe("test isNumeric validation", () => {
    it('should return true if the input is numeric', () => {
        const numericInput = '123';
        expect(Validation.isNumeric(numericInput)).toBeTruthy();
        
        const numericInputInPersian = '۱۲۳';
        expect(Validation.isNumeric(numericInputInPersian)).toBeTruthy();
    });
    
    it('should return false if the input is NOT numeric', () => {
        const numericInput = 'Hello World!';
        expect(Validation.isNumeric(numericInput)).toBeFalsy();

        const numericInputInPersian = 'سلام دنیا!';
        expect(Validation.isNumeric(numericInputInPersian)).toBeFalsy();
    });

    it('should return false if the input is a combination of numerics and characters', () => {
        const numericInput = 'Hello World Number 12! ';
        expect(Validation.isNumeric(numericInput)).toBeFalsy();

        const numericInputInPersian = 'سلام دنیای شماره ۱۲!';
        expect(Validation.isNumeric(numericInputInPersian)).toBeFalsy();
    });
});