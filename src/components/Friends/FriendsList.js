import { Link } from "react-router-dom";

const FriendsList = ({
    friends
}) => {
    return (
        <>
            <ul className="list-group">
                {
                    friends.map(x => <li key={x._id} className="list-group-item"><Link to={`/user/${x._id}`}>{x.name}</Link></li>)
                }
            </ul>
        </>
    );
};

export default FriendsList;