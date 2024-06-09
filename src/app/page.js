import style from "./page.module.css";
import Main from "./componentes/Main";

export default async function Home() {

  return (
    <div className={style.home}>
      <Main/>
    </div>
  );
};
