//TODO: fix parameters with Persian numbers
//TODO: tests
export const isMobile = (value: string): boolean => {
    return /^(09)[0-9]{9}$/.test(value);
};