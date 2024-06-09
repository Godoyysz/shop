import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import style from "./layout.module.css";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html className={style.html} lang="en">
      <body className={style.body}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
