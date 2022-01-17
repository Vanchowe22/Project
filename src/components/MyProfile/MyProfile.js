import useFetchProfile from "../../hooks/useFetchProfile";
import Article from "../Article/Article"
import { useAuth } from '../../hooks/useAuth'
import { SecureRoutes } from "../../hoc/SecureRoutes";
import './MyProfile.css'

const MyProfile = () => {
    let { auth } = useAuth();

    const profile = useFetchProfile(auth.token);

    return (
        <>
            <img src="/img/user.jpg" alt="user icon" className="center-img" />
            <h1 className="center-blue-mid">My Profile</h1>

            <div className="row tm-row">
                {profile.myPosts?.map(x => <Article key={x._id} article={x} p profileName={profile.name} />)}
            </div>
        </>
    );
};

export default SecureRoutes(MyProfile);