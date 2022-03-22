import { useAuth } from '../../hooks/useAuth'
import { SecureRoutes } from "../../hoc/SecureRoutes";
import MyProfile from "./MyProfile";
import UserProfile from "./UserProfile";
import './MyProfile.css'

const Profile = ({
    myProfile,
    match
}) => {
    let { auth } = useAuth();

    return (
        <>
            {
                myProfile
                    ? <MyProfile userId={auth._id} />
                    : <UserProfile friendId={match.params.id} />
            }
        </>
    );
};

export default SecureRoutes(Profile);