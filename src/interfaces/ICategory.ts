import IProduct from "./IProduct";

export default interface IRestaurante {
  id: number
  name: string
  description: string
  productsCount: number
  productsName: IProduct[]
}