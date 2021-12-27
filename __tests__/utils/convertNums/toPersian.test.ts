import { ConvertNums } from '../../../src';

describe("test toPersian util function", () => {
    it("should accept strings", () => {
        expect(ConvertNums.toPersian('test')).toBe('test');
        expect(ConvertNums.toPersian('1000')).toBe('۱۰۰۰');
    });
    it("should not change Farsi strings", () => {
        const myNum: string = '۲۱۸۵۰۰'; 
        expect(ConvertNums.toPersian(myNum)).toBe(myNum);
    });
});