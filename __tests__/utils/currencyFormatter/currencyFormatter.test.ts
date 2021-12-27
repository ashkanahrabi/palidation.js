import { CurrencyFormatter } from '../../../src';

describe("test format util function of Currency Formatter", () => {
    
    it('should not change strings containing no digits', () => {
        expect(CurrencyFormatter.format('test')).toBe('test');
        expect(CurrencyFormatter.format('این یک متن تست است')).toBe('این یک متن تست است');
    });
    
    it('should properly format currencies longer than 3 digits with comma', () => {
        expect(CurrencyFormatter.format('1200')).toBe('۱,۲۰۰');
        expect(CurrencyFormatter.format('561200')).toBe('۵۶۱,۲۰۰');
        expect(CurrencyFormatter.format('1218500')).toBe('۱,۲۱۸,۵۰۰');
        expect(CurrencyFormatter.format('۱۴۰۰')).toBe('۱,۴۰۰');
    });
    
    it('should not format currencies with less than 3 digits', () => {
        expect(CurrencyFormatter.format('1')).toBe('۱');
        expect(CurrencyFormatter.format('120')).toBe('۱۲۰');
    });
    
    it('should work with strings containing combination of text and digits', () => {
        expect(CurrencyFormatter.format('Hi 1200')).toBe('Hi ۱,۲۰۰');
        expect(CurrencyFormatter.format('قیمت این بسته ۱۴۰۰ تومان است')).toBe('قیمت این بسته ۱,۴۰۰ تومان است');
        expect(CurrencyFormatter.format('قیمت این بسته ۵۰۰ تومان است')).toBe('قیمت این بسته ۵۰۰ تومان است');
    });
});