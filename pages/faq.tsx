import Link from "next/link";
import Layout from "../components/layout";
import style from "../styles/faq.module.css";

export default function Faq() {
  return (
    <Layout>
      <div className={style.faq}>
        <h2>FAQ</h2>
        <div>
          <h3>Why I boult this?</h3>
          <p>
            Well, I need to learn and practice Next.js, so this project was a
            great opportunity to do it.<br></br>I also added to it a bit more
            complexity by using TypeScript for the entire code.
          </p>
        </div>
      </div>
    </Layout>
  );
}
