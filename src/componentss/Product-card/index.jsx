import { products } from "../../helper/data";

const ProductCard = (props) => {
  const { name } = props;
  console.log(name);
  return (
    <div className="image-wrapper">
      {products
        .filter((product) => {
          if (name.toLowerCase() != "all") {
            return product.category.toLowerCase() == name.toLowerCase();
          }
          return product;
        })
        .map((item, index) => (
          <div key={index} className="img-wrapper">
            <img
              src={item.image}
              alt=""
              width="100%"
              className="image-wrapper_item"
            />
            <p className="price">{item.price}</p>
            <div className="description">{item.title}</div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
