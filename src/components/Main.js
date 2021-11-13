import Articles from "./Articles";
import PageNavigator from "./PageNavigator";
import Search from "./Search";

const Main = () => {
    return (
        <div className="container-fluid">
            <main className="tm-main">
                <Search/>
                <Articles/>
                <PageNavigator/>
            </main>
        </div>
    )
};

export default Main;