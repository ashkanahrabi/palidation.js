import {Validation} from '../../../src';
describe("test isMobile validation", () => {
    it('should return true if the value is a valid Mobile Number', () => {
        const input = '09129743764';
        expect(Validation.isMobile(input)).toBeTruthy();
        
        const persianInput = '۰۹۱۲۹۷۴۳۷۶۴';
        expect(Validation.isMobile(persianInput)).toBeTruthy();
    });

    it('should return false if the value is not a valid Mobile Number', () => {
        const input = '01234567890';
        expect(Validation.isMobile(input)).toBeFalsy();

        const persianInput = '۰۱۲۳۴۵۶۷۸۹۰';
        expect(Validation.isMobile(persianInput)).toBeFalsy();
    });
});