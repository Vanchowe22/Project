import Articles from "./articles/Articles";
import PageNavigator from "./page-navigation/PageNavigator";
import Search from "./Search";

export default () => {
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