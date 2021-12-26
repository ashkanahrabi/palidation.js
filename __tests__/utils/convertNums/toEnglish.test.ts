import { ConvertNums } from "../../../src/utils/convertNums";

describe("test toEnglish util function", () => {
    it("should accept strings", () => {
        expect(ConvertNums.toEnglish('test')).toBe('test');
        expect(ConvertNums.toEnglish('۱۰۰۰')).toBe('1000');
    });
    it("should not change English strings", () => {
        const myNum: string = '218500';
        expect(ConvertNums.toEnglish(myNum)).toBe(myNum);
    });
});