import { useNavigate } from "react-router-dom";

const UserTile = ({ user }) => {
    const navigate = useNavigate();
    return (
        <div className="tile" onClick={() => navigate(`/user/${user.id}`)}>
            <div className="tileContent">
                <img className="tileImg" src={user.image} alt="profile"/>
                <div>
                    <p className="tileHeading">{user.firstName} {user.lastName}</p>
                    <p className="tileSubHeading">{user.email}</p>
                </div>
            </div>
        </div>
    )
}
export default UserTile