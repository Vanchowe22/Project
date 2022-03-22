import useFetchProfile from "../../hooks/useFetchProfile";
import Search from "../Search";
import { searchProfile } from '../../service/auth-service';
import { useAuth } from '../../hooks/useAuth'
import FriendsList from './FriendsList';
import { useEffect, useState } from "react";

const Friends = () => {
    let { auth } = useAuth();
    const profile = useFetchProfile(auth._id);
    const [friends, setFriends] = useState([]);

    const addFriend = (searchedUsers) => {
        setFriends(state => {
            let users = searchedUsers.filter(x => {
                let isValid = true;
                for (const el of state) {
                    if(el._id==x._id){
                        isValid=false;
                        break;
                    }
                }
                return isValid&&x._id!==auth._id
            });

            return [...state, ...users];
        });
    };

    useEffect(() => {
        setFriends(profile.friends)
    }, [profile]);

    return (
        <>
            <Search search={searchProfile} onSearch={addFriend} />
            {
                friends && friends.length != 0
                    ? <>
                        <FriendsList friends={friends} />
                    </>
                    : ''
            }

        </>
    );
};
export default Friends;