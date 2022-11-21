import Link from "next/link";
import style from "../styles/menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }
  return (
    <nav className={style.menu}>
      <div>
        <Link className={style.link} href="/">
          Home
        </Link>
        <Link className={style.link} href="/store">
          Store
        </Link>
        <Link className={style.link} href="/faq">
          FAQ
        </Link>
      </div>
      <div>
        <button className={style.cart_btn} onClick={handleOpenCart}>
          Cart({cart.getNumberOfItems()})
        </button>
      </div>
    </nav>
  );
}
