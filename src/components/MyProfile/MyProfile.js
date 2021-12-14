import useFetchProfile from "../../hooks/useFetchProfile";
import Article from "../Article/Article"
import { useAuth } from '../../hooks/useAuth'
const MyProfile = () => {
    let { auth } = useAuth();

    const profile = useFetchProfile(auth.token);

    console.log(profile);

    return (
        <>
            <img src="/img/user.jpg" alt="user icon" />
            <h1 className="center-blue-mid">My Profile</h1>

            <div className="row tm-row">
                {profile.myPosts?.map(x => <Article key={x._id} article={x}p profileName={profile.name} />)}
            </div>
        </>
    );
};

export default MyProfile;