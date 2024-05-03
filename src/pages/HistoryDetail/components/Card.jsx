/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  return (
    <>
      {item.listCart.map((itemCart, index) => (
        <div className="flex flex-wrap" key={index}>
          <div className="relative mb-4 flex w-full flex-col rounded-md border p-2 shadow-sm">
            <div className="flex">
              <img
                src={itemCart.img}
                alt={itemCart.name}
                className="mr-2 h-[135px] w-[100px] rounded-md object-cover"
              />
              <div className="my-auto flex w-full justify-between">
                <div>
                  <p className="text-sm text-slate-500">{itemCart.type}</p>
                  <h2 className="text-lg font-semibold">{itemCart.name}</h2>
                  <h3 className="font-base font-semibold text-secondary">
                    <span>{itemCart.quantity} x </span>
                    Rp {itemCart.price}
                  </h3>
                  {item.length > 1 ? (
                    <div>
                      <h3>+{item.length - 1} produk lainnya</h3>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="text-center">
                  <h3>Total</h3>
                  <h3 className="font-bold">
                    Rp.{itemCart.price * itemCart.quantity}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
