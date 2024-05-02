import useProductStore from "../../store/product-store";

import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";

const index = () => {
  const listHistory = useProductStore((state) => state.history);

  return (
    <Container>
      {listHistory.length === 0 ? (
        <p className="mt-52 text-center">Kamu belum membeli apapun</p>
      ) : (
        <div className="container py-5">
          {listHistory.map((item, index) => (
            <div key={index}>
              <Card data={item} history />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default index;
