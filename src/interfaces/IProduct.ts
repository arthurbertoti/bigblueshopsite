export default interface IProduct {
  map(arg0: () => any): any
  id: number
  name: string
  barcode: string
  description: string
  categoryName: string
}