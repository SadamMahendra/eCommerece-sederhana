import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap">
      <div className="relative mb-4 flex w-full flex-col rounded-md border p-2 shadow-sm">
        <h1 className="py-2">
          <span className="mr-2 font-bold">Belanja</span>
          {data.date}
        </h1>
        <div className="flex">
          <img
            src={data.listCart[0].img}
            alt={data.listCart[0].name}
            className="mr-2 h-[135px] w-[100px] rounded-md object-cover"
          />
          <div className="my-auto flex w-full justify-between">
            <div>
              <p className="text-sm text-slate-500">{data.listCart[0].type}</p>
              <h2 className="text-lg font-semibold">{data.listCart[0].name}</h2>
              <h3 className="font-base text-secondary font-semibold">
                <span>{data.listCart[0].quantity} x </span>
                Rp {data.listCart[0].price}
              </h3>
              {data.listCart.length > 1 ? (
                <div>
                  <h3>+{data.listCart.length - 1} produk lainnya</h3>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="text-center">
              <h3>Total</h3>
              <h3 className="font-bold">Rp.{data.total}</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => navigate(`${data.id}`)}
            className="rounded-md bg-green-500 p-2 text-white"
          >
            lihat detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
