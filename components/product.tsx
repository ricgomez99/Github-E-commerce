import Image from "next/image";
import Link from "next/link";
import style from "../styles/product.module.css";
import { convertToPath } from "./../lib/utils";
import CartButton from "./cartButton";

type Data = {
  item: any;
  showAs: string;
  qty: any;
};

export default function Product({ item, showAs, qty }: Data) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div>
          <Image
            src={item.data.image}
            alt={item.title}
            width={500}
            height={500}
          />
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.data.title}</h2>
          </div>
          <div className={style.price}>{item.data.price}</div>
          <div>{item.data.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image src={item.image} alt={item.title} width={100} height={100} />
        </div>
        <div>
          <h3>{item.title}</h3>
          <div>{item.price}</div>

          {qty === 0 ? "" : <div>Units: {qty}</div>}
          {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image src={item.image} alt={item.title} width={380} height={420} />
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
        </h3>
      </div>
      <div>{item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
