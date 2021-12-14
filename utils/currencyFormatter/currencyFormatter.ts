// TODO fix bugs of this formatter with Persian number support 
export const format = (value: string): string => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};