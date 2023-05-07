export default function Card(props) {

const { product } = props

    return (
     <div className="Card">
    <h2>{product.title}</h2>
    <img src={product.image} alt={product.id}></img>
    <p>{product.description}</p>
    <p>{product.price}</p>
    </div>
) }