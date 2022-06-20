export const toCurrency = (input: number) => {
    let formatter = new Intl.NumberFormat('en-NG',
        {
            style: 'currency',
            currency: 'NGN',
            maximumFractionDigits: 2,
            // maximumSignificantDigits: 4
        });
    return formatter.format(input)
}
