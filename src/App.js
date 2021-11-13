import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Articles from "./components/Articles";
import PageNavigator from "./components/PageNavigator";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <main className="tm-main">
          <Search />
          <Articles />
          <PageNavigator />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
