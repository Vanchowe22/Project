import Header from "./components/Header";
import Footer from "./components/Footer";
import Articles from "./components/Article/Articles";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Details from "./components/Details/Details";
import Contact from "./components/Contact/Contact";

import { Route, Switch } from "react-router-dom";
import Create from "./components/Create/Create";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <main className="tm-main">
          <Switch>
            <Route path='/' exact component={Articles} />,
            <Route path='/login' component={Login} />,
            <Route path='/register' component={Register} />,
            <Route path='/contact' component={Contact} />,
            <Route path='/details/:id' component={Details} />,
            <Route path='/create' component={Create}/>
          </Switch>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
