function Product(props){
    const {productObj }= props;

return(
    <div className="  border-2  border-violet-400 shadow-lg shadow-red-400 rounded-2xl p-4">
        <h2 className="text-2xl text-amber-700  ">{productObj.title}</h2>
        <p className="font-bold">{productObj.price}</p>
        <p className="font-light">{productObj.description}</p>
    </div>
)
}
export default Product;