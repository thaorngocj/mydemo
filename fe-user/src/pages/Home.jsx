import Header from "../components/Header";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <h1>Chào mừng đến với Book Haven</h1>
        <p>
          Khám phá thế giới tri thức với hàng ngàn đầu sách chất lượng, mượn sách
          và tận hưởng không gian đọc sách thoải mái.
        </p>
      </section>

      {/* CONTENT */}
      <div className="container">
        <CategorySection title="🔥 Sách hot" />
        <CategorySection title="📖 Văn học" />
        <CategorySection title="📊 Kinh tế" />
        <CategorySection title="💻 Công nghệ" />
        <CategorySection title="👶 Sách thiếu nhi" />
      </div>

      <Footer />
    </>
  );
};

export default Home;
