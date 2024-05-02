import useProductStore from "../../store/product-store";
import Card from "../../components/Card/Card";

const index = () => {
  const listHistory = useProductStore((state) => state.history);

  console.log(listHistory);

  return (
    <div className="container py-5">
      {listHistory.map((item, index) => (
        <div key={index}>
          <Card data={item} history />
        </div>
      ))}
    </div>
  );
};

export default index;
