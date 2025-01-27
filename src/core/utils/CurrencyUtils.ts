export default class CurrencyUtils {
    static toReais(amount: number): string {
        return `R\$${amount.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    }
}