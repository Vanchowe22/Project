import useFetchProfile from "../../hooks/useFetchProfile";
import Article from "../Article/Article";

const MyProfile = ({
    userId
}) => {
    const profile = useFetchProfile(userId);

    return (
        <>
            <img src="/img/user.jpg" alt="user icon" className="center-img" />
            <h1 className="center-blue-mid">My Profile</h1>

            <div className="row tm-row">
                {profile.myPosts?.map(x => <Article key={x._id} article={x} profileName={profile.name} />)}
            </div>
        </>
    );
};

export default MyProfile;