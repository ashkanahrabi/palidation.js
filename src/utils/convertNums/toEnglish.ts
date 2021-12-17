export const toEnglish = (value: string): string => {
    const id: Array<any> = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    for (let i:number = 0; i < 10; i++) {
        value = value.replace(id[i], i.toString());
    }
    return value;
};