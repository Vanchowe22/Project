import { useAuth } from "../../hooks/useAuth";
import { getConv } from "../../service/messenger-service";

const SearchConv = ({
    addConv,
}) => {
    let { auth } = useAuth();

    const submitSearchHandler = (e) => {
        e.preventDefault();
        let form = e.currentTarget;

        let text = Object.fromEntries(new FormData(form));
        let foundUsers = [];

        getConv(auth._id)
            .then(data => {
                data.forEach(el => {
                    if (el.users[0].name.includes(text.searched) || el.users[1].name.includes(text.searched)) {
                        foundUsers.push(el);
                    }
                });
                addConv(foundUsers);
            });

    };
    return (
        <form onSubmit={submitSearchHandler}>
            <input placeholder="Search for friends" className="chatMenuInput" name='searched' />
            <button className='chatMenuSearch' ><i class="fas fa-search"></i></button>
        </form>
    );
};

export default SearchConv;