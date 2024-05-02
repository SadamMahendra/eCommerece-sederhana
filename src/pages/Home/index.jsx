import Container from "../../components/Container/Container";
import useProductStore from "../../store/product-store";

import shoppingBag from "../../assets/icons/shopping-bag.svg";
import Card from "./components/Card";

const index = () => {
  const listProducts = useProductStore((state) => state.products);
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <Container>
      <Card
        listProducts={listProducts}
        addToCart={addToCart}
        iconShopping={shoppingBag}
      />
    </Container>
  );
};

export default index;
