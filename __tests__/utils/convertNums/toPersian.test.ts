import { ConvertNums } from "../../../src/utils/convertNums";

describe("test toPersian util function", () => {
    it("should accept strings", () => {
        expect(ConvertNums.toPersian('test')).toBe('test');
        expect(ConvertNums.toPersian('1000')).toBe('۱۰۰۰');
    });
    it("should not accept non-string values", () => {
        expect(() => ConvertNums.toPersian(2)).toThrowError();
        expect(() => ConvertNums.toPersian({price: '12000'})).toThrowError();
        expect(() => ConvertNums.toPersian(true)).toThrowError();
        expect(() => ConvertNums.toPersian([2, 3, '4200'])).toThrowError();
        expect(() => ConvertNums.toPersian()).toThrowError();
    });
    it("should not change Farsi strings", () => {
        const myNum: string = '۲۱۸۵۰۰'; 
        expect(ConvertNums.toPersian(myNum)).toBe(myNum);
    });
});