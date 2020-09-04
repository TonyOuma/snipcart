import Product, {IProduct} from "./Product";
interface IproductListProps {
    products: IProduct[]
}
const ProductList = (props: IproductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}></Product>)}
        </div>
    )
}

export default ProductList