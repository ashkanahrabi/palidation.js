export const toPersian = (value: string): string => {
  const id: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  // TODO: handle exceptions
  try {
    return value.replace(/[0-9]/g, (x: string) => id[+x]);
  } catch (e) {
    throw Error;
  }
};
