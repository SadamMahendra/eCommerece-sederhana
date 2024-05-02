import Container from "../../components/Container/Container";
import useProductStore from "../../store/product-store";

import shoppingBag from "../../assets/icons/shopping-bag.svg";

const index = () => {
  const listProducts = useProductStore((state) => state.products);
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <Container>
      <div className="container grid grid-cols-2 gap-5 py-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {listProducts.map((item, index) => (
          <div key={index}>
            <div>
              <img
                src={item.img}
                alt={item.name}
                className=" mb-2 h-56 w-full rounded-t-md object-cover"
              />
              <div
                className="p-1
            "
              >
                <p className="text-sm text-slate-500">{item.type}</p>
                <h2 className="truncate text-lg font-semibold">{item.name}</h2>
                <div className="flex justify-between">
                  <span>stock : {item.stock}</span>
                  <span className="text-secondary">{`Rp ${item.price}`}</span>
                </div>
              </div>
            </div>
            {item.stock === 0 ? (
              <button className="mt-2 w-full border p-2 text-lg font-semibold text-black shadow-sm outline-black">
                STOCK HABIS
              </button>
            ) : (
              <button
                onClick={() => addToCart(item)}
                className="mt-2 w-full border bg-black p-2 text-base text-white shadow-sm outline-none hover:opacity-90"
              >
                <div className="flex items-center justify-center gap-2">
                  <img src={shoppingBag} alt="shopping bag" /> <h3>TAMBAH </h3>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default index;
