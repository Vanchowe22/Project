import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Articles from "./components/Articles";
import PageNavigator from "./components/PageNavigator";
import Login from "./components/Login";
import Register from "./components/Register";

import { useState } from "react";

function App() {
  const [route, setRoute] = useState('/home');

  const navigatoionHandler = (path) => {
    setRoute(path);
  };

  const router = {
    '/home': [<Search />, <Articles />, <PageNavigator />],
    '/login': <Login />,
    '/register': <Register />
  }

  return (
    <>
      <Header navigatoionHandler={navigatoionHandler} />
      <div className="container-fluid">
        <main className="tm-main">
          {router[route] || ''}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
