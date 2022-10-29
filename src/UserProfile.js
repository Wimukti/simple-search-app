import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUser} from "./api/axios";

const UserProfile = () => {

    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser(id).then(data => {
            console.log(data)
            setUser(data);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        })
    }
    , []);

    if (loading) return <div className="loader"/>
    if (error) return <p>Something went wrong</p>
    if(user){
        return (
            <div className='userProfile'>
                <img className="userProfileImg" src={user.image} alt={user.name} />
                <p className="userProfileHeading">{user.firstName} {user.lastName}</p>
                <p className="userProfileSubHeading">{user.email}</p>
                <p className="userProfileTagLine">www.hasthiya.com</p>
            </div>
        );
    }
};

export default UserProfile;