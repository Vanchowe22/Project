import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Articles from "./components/Article/Articles";
import PageNavigator from "./components/PageNavigator";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details/Details";
import Contact from "./components/Contact";

import { useState } from "react";

function App() {
  const [route, setRoute] = useState('/home');

  const navigationHandler = (path) => {
    setRoute(path);
  };

  const routing = (path) => {
    let [root, arg] = path.split('/').filter(x => x.length > 0)
    const router = {
      'home': [<Search key={1} />, <Articles key={2} navigationHandler={navigationHandler} />, <PageNavigator key={3} />],
      'login': <Login />,
      'register': <Register />,
      'contact': [<Search key={1}/>, <Contact key={2} />],
      'details': <Details id={arg} />
    };


    return router[root];
  };


  return (
    <>
      <Header navigationHandler={navigationHandler} />
      <div className="container-fluid">
        <main className="tm-main">
          {routing(route) || ''}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
