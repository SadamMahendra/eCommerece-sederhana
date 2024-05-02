import { create } from "zustand";
import data from "../data/data";

const useProductStore = create((set) => ({
  // State untuk produk dan keranjang belanja
  products: data,
  cart: [],

  // Metode untuk mengelola keranjang belanja
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  updateCartItem: (productId, newQuantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    })),
  deleteCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  clearCart: () => set(() => ({ cart: [] })),

  // Metode untuk menghitung total harga belanja
  getTotalPrice: (item) => {
    return item.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  // Metode untuk mengelola stok produk
  stockManagement: () =>
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        const cartItem = state.cart.find((item) => item.id === product.id);
        if (cartItem) {
          return { ...product, stock: product.stock - cartItem.quantity };
        }
        return product;
      });

      return { products: updatedProducts };
    }),

  // State dan metode untuk riwayat pembelian
  history: [],
  addToHistory: (purchase) =>
    set((state) => ({ history: [...state.history, purchase] })),
  getHistoryId: (historyid, historyCart) => {
    return historyCart.filter((item) => item.id === historyid);
  },
}));

export default useProductStore;
