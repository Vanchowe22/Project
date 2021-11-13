import Header from "./components/Navigation/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const router = {
    '/home': <Main />
  }
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
