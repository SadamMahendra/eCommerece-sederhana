import { useNavigate } from "react-router-dom";
import { useState } from "react";

import useProductStore from "../../store/product-store";
import Card from "./components/Card";
import Container from "../../components/Container/Container";

import close from "../../assets/icons/Close.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";

const index = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState(0);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const listCart = useProductStore((state) => state.cart);
  const updateCartItem = useProductStore((state) => state.updateCartItem);
  const getTotalPrice = useProductStore((state) => state.getTotalPrice);
  const deleteCart = useProductStore((state) => state.deleteCart);
  const stockManagement = useProductStore((state) => state.stockManagement);
  const clearCart = useProductStore((state) => state.clearCart);

  const addToHistory = useProductStore((state) => state.addToHistory);
  console.log(listCart);

  const increaseQuantityCart = function (productId, quantity, stock) {
    if (quantity <= stock) {
      updateCartItem(productId, quantity);
    }
  };

  const decreaseQualityCart = function (productId, quantity) {
    if (quantity >= 1) {
      updateCartItem(productId, quantity);
    } else if (quantity < 1) {
      clearCart();
    }
  };

  const togglePaymentPopup = () => {
    setShowPaymentPopup(!showPaymentPopup);
  };

  const handleCheckOutNow = () => {
    togglePaymentPopup();
  };

  const handleClosePaymentPopup = () => {
    togglePaymentPopup();
  };

  const handleBuy = (listCart) => {
    const tanggal = new Date();
    const id = "id" + Math.random().toString(16).slice(2);

    const total = getTotalPrice(listCart);
    if (Number(number) < total) {
      alert("duitnya kurang");
      console.log("duitnya kurang", number, total);
    } else {
      const purchase = {
        id: id,
        listCart,
        total,
        change: number - total,
        date: tanggal.toLocaleString(),
        money: Number(number),
      };
      addToHistory(purchase);
      stockManagement();
      clearCart();
      setNumber(0);
      navigate("/history");
    }
  };

  return (
    <Container>
      <div className="container py-5">
        <Card
          data={listCart}
          close={close}
          deleteCart={deleteCart}
          increaseQuantityCart={increaseQuantityCart}
          decreaseQualityCart={decreaseQualityCart}
        />

        <div className="fixed bottom-0 right-0 flex  w-full items-center text-lg">
          {getTotalPrice(listCart) !== 0 ? (
            <div className="w-full">
              <div className="flex w-full justify-between bg-white p-4">
                <h3>Total</h3>
                <h3 className="text-[#DD8560]">Rp {getTotalPrice(listCart)}</h3>
              </div>
              <button
                onClick={handleCheckOutNow}
                className="h-14 w-full items-center bg-black text-white hover:opacity-90"
              >
                <div className="flex items-center justify-center gap-3">
                  <img src={shoppingBag} alt="shoppingBag" />
                  <h3>CHECKOUT</h3>
                </div>
              </button>
            </div>
          ) : (
            <div className="right-0 p-6">Total</div>
          )}
        </div>

        {showPaymentPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="relative w-[340px] rounded-md bg-white p-4">
              <h2 className="mb-4 text-lg font-semibold">Pembayaran</h2>
              <div className="grid grid-cols-2 items-center gap-4 p-4">
                <p className="text-lg font-semibold">Total Harga:</p>
                <p className="text-lg font-semibold">
                  Rp {getTotalPrice(listCart)}
                </p>
                <div className="flex items-center">
                  <label
                    htmlFor="uang"
                    className="mr-4 text-nowrap text-lg font-semibold"
                  >
                    Jumlah Uang:
                  </label>
                  <input
                    name="uang"
                    type="number"
                    value={number}
                    onChange={(res) => setNumber(res.target.value)}
                    className="w-28 rounded-md border p-2"
                  />
                </div>
              </div>

              <button
                onClick={handleClosePaymentPopup}
                className="absolute right-2 top-2"
              >
                <img src={close} alt="close" />
              </button>
              <button
                onClick={() => handleBuy(listCart)}
                className="w-full bg-black p-2  text-white"
              >
                BAYAR
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default index;
