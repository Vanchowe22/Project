const Search = ({
    onSearch,
    search
}) => {
    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let query = formData.get('query');
        search(query)
            .then(data => {
                onSearch(data);
            })
    };

    return (
        <div className="row tm-row">
            <div className="col-12">
                <form onSubmit={submitHandler} method="GET" className="form-inline tm-mb-80 tm-search-form">
                    <input className="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search" />
                    <button className="tm-search-button" type="submit">
                        <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;