import { useParams } from "react-router-dom";

import useProductStore from "../../store/product-store";
import Container from "../../components/Container/Container";
import Card from "./components/Card";

const index = () => {
  const { historyId } = useParams();
  const listHistory = useProductStore((state) => state.history);
  const getHistoryList = useProductStore((state) => state.getHistoryId);

  const HistoryDetailList = getHistoryList(historyId, listHistory);
  console.log(HistoryDetailList);

  return (
    <Container>
      <div className="container pt-5">
        {HistoryDetailList.map((item, index) => (
          <div key={index}>
            <h2 className="font-semibold">{item.date}</h2>
            <hr className="my-2" />
            <Card item={item} />
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
    </Container>
  );
};

export default index;
