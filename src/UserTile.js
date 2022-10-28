const UserTile = ({ user }) => {
    return (
        <div className="tile">
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