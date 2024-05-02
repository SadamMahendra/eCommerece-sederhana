/* eslint-disable react/prop-types */
const Card = ({
  data,
  close,
  deleteCart,
  increaseQuantityCart,
  decreaseQualityCart,
}) => {
  return (
    <div className="mb-28 flex flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative my-2 flex w-full rounded-md border p-2 shadow-md"
        >
          <img
            src={item.img}
            alt={item.name}
            className="mr-2 h-[135px] w-[100px] rounded-md object-cover"
          />
          <div className="my-auto w-full">
            <div>
              <p className="text-sm text-slate-500">{item.type}</p>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <h3 className="font-base font-semibold text-secondary">
                Rp {item.price}
              </h3>
            </div>

            <div className="flex items-center justify-end ">
              <button
                onClick={() => deleteCart(item.id)}
                className="absolute right-2 top-2"
              >
                <img src={close} alt="close" />
              </button>
              <div className=" rounded-lg border px-2 py-1 text-center text-lg">
                <button
                  onClick={() =>
                    decreaseQualityCart(item.id, item.quantity - 1)
                  }
                  className="text-red-700"
                >
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  onClick={() =>
                    increaseQuantityCart(item.id, item.quantity + 1, item.stock)
                  }
                  className="text-green-700 focus:outline-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
