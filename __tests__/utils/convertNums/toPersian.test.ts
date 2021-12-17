import { ConvertNums } from "../../../src/utils/convertNums";

describe("test toPersian util function", () => {
    it("should accept strings", () => {
        expect(ConvertNums.toPersian('1000')).toBe('۱۰۰۰');
    });
    it("should not accept non-string values", () => {
        expect(() => ConvertNums.toPersian(2)).toThrowError();
    });
});