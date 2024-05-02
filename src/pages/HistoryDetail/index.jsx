import { useParams } from "react-router-dom";

import useProductStore from "../../store/product-store";

const index = () => {
  const { historyId } = useParams();
  const listHistory = useProductStore((state) => state.history);
  const getHistoryList = useProductStore((state) => state.getHistoryId);

  const HistoryDetailList = getHistoryList(historyId, listHistory);
  console.log(HistoryDetailList);

  return (
    <div className="container pt-5">
      {HistoryDetailList.map((item, index) => (
        <div key={index}>
          <h2 className="font-semibold">{item.date}</h2>
          <hr className="my-2" />
          {/* card */}
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
                      <h3 className="font-base text-secondary font-semibold">
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
          {/* end cart */}

          <hr className="my-1" />
          <h2>Rincian Pembayaran</h2>
          <div className="flex justify-between">
            <h3>Jumlah Uang</h3>
            <h3 className="font-semibold">Rp.{item.money}</h3>
          </div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3 className="font-semibold">Rp.{item.total}</h3>
          </div>
          <hr className="my-1 border-2 border-dashed" />
          <div className="flex justify-between">
            <h3>Kembalian</h3>
            <h3 className="font-semibold">Rp.{item.change}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
