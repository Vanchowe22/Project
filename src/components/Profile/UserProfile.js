import { useEffect, useState } from "react";
import { createConvFirebase } from "../../helpers/firebaseDbFunc";
import { useAuth } from "../../hooks/useAuth";
import useFetchProfile from "../../hooks/useFetchProfile";
import { addFriend, removeFriend } from "../../service/auth-service";
import { checkIfCreated, createConv } from "../../service/messenger-service";
import Article from "../Article/Article";

const UserProfile = ({
    friendId,
}) => {
    const profile = useFetchProfile(friendId);
    const { auth } = useAuth();
    const [isFriend, setIsFriend] = useState(null);

    useEffect(() => {
        setIsFriend(profile.friends?.some(x => x._id == auth._id))
    }, [profile])

    const onAddFriend = (e) => {
        addFriend(profile._id, auth.token)
            .then((data) => {
                checkIfCreated(profile._id, auth._id)
                    .then(state => {
                        if (state) {
                            createConv(friendId, auth._id)
                                .then(conv => {
                                    console.log(conv);
                                    createConvFirebase(conv);
                                    setIsFriend(true);
                                })
                        } else {
                            setIsFriend(true);
                        }
                    });
            })
    };

    const onRemoveFriend = (e) => {
        removeFriend(profile._id, auth.token)
            .then(() => {
                setIsFriend(false);
            })
    };

    return (
        <>
            <img src="/img/user.jpg" alt="user icon" className="center-img" />
            <h1 className="center-blue-mid">{profile.name}'s Profile</h1>
            {
                isFriend
                    ? <button onClick={onRemoveFriend} type="button" className="btn btn-dark btn-unlike">Remove Friend</button>
                    : <button onClick={onAddFriend} type="button" className="btn btn-primary btn-like">Add Friend</button>
            }
            <div className="row tm-row">
                {profile.myPosts?.map(x => <Article key={x._id} article={x} profileName={profile.name} />)}
            </div>
        </>
    );
};

export default UserProfile;