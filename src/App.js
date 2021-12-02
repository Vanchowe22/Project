import Header from "./components/Header";
import Footer from "./components/Footer";
import Articles from "./components/Article/Articles";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Details from "./components/Details/Details";
import Contact from "./components/Contact/Contact";
import Create from "./components/Create/Create";
import Logout from "./components/Auth/Logout";

import AuthContext from "./contexts/AuthContext";

import useLocalStorage from "./hooks/useLocalStorage";
import { Route, Switch } from "react-router-dom";
import Edit from "./components/Edit/Edit";

const initState = {
    _id: '',
    email: '',
    token: '',
}

function App() {
    const [auth, setAuth] = useLocalStorage('userInfo', initState)

    const onLogin = (user) => {
        setAuth(user)
    }

    const onLogout = () => {
        setAuth(initState);
    }

    console.log(auth);
    return (
        <>
            <AuthContext.Provider value={{ auth, onLogin, onLogout }}>
                <Header />
                <div className="container-fluid">
                    <main className="tm-main">
                        <Switch>
                            <Route path='/all-blogs'>
                                <Articles allBlogs={true} />
                            </Route>
                            <Route path='/' exact component={Articles} />,
                            <Route path='/login' component={Login} />,
                            <Route path='/register' component={Register} />,
                            <Route path='/contact' component={Contact} />,
                            <Route path='/create' component={Create} />
                            <Route path='/details/:id' component={Details} />,
                            <Route path='/edit/:id' component={Edit} />
                            <Route path='/logout' component={Logout} />
                        </Switch>
                        <Footer />
                    </main>
                </div>
            </AuthContext.Provider>
        </>

    );
}

export default App;
