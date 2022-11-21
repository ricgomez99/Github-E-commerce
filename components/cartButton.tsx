import style from "../styles/cartButton.module.css";
import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }: any) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={style.addButton} onClick={handleClick}>
      Add to cart
    </button>
  );
}
