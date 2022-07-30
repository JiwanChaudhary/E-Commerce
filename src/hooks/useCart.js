import { useUIContext } from "../context/ui";

function useCart(product) {
  const { cart, setCart, favorite, setFavorite } = useUIContext();

  const addToCart = () => {
    cart.findIndex((c) => c.id === product.id) >= 0
      ? setCart(cart.filter((c) => c.id !== product.id))
      : setCart((c) => [...c, product]);
  };

  const addToFavorite = () => {
    favorite.findIndex((f) => f.id === product.id) >= 0
      ? setFavorite(favorite.filter((f) => f.id !== product.id))
      : setFavorite((f) => [...f, product]); 
  };

  const addToCartText =
    cart.findIndex((c) => c.id === product.id) >= 0
      ? "Remove from cart"
      : "Add to cart";

  return { addToCart, addToCartText, addToFavorite };
}

export default useCart;
