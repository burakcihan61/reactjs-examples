import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
