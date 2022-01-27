import Header from "./components/Header";
import Footer from "./components/Footer";
import Articles from "./components/Article/Articles";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Details from "./components/Details/Details";
import Contact from "./components/Contact/Contact";
import Create from "./components/Create/Create";
import Logout from "./components/Auth/Logout";
import MyProfile from "./components/MyProfile/MyProfile";
import Messenger from "./components/Messenger/Messenger";

import { AuthProvider } from "./contexts/AuthContext";


import { Route, Switch } from "react-router-dom";
import Edit from "./components/Edit/Edit";
import { ArticleProvider } from "./contexts/ArticleContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Notification from "./components/Common/Notification";

function App() {

    return (
        <>
            <AuthProvider>
                <NotificationProvider>
                    <Notification />
                    <Header />
                    <ArticleProvider>
                        <div className="container-fluid">
                            <main className="tm-main">
                                <Switch>
                                    <Route path='/all-blogs'>
                                        <Articles allBlogs={true} />
                                    </Route>
                                    <Route path='/my-profile' component={MyProfile} />
                                    <Route path='/' exact component={Articles} />,
                                    <Route path='/login' component={Login} />,
                                    <Route path='/register' component={Register} />,
                                    <Route path='/contact' component={Contact} />,
                                    <Route path='/create' component={Create} />
                                    <Route path='/details/:id' component={Details} />,
                                    <Route path='/edit/:id' component={Edit} />
                                    <Route path='/logout' component={Logout} />
                                    <Route path='/direct-messages' component={Messenger} />
                                </Switch>
                                <Footer />
                            </main>
                        </div>
                    </ArticleProvider>
                </NotificationProvider>
            </AuthProvider>
        </>

    );
}

export default App;
