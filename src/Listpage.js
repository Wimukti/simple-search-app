import UserTile from "./UserTile"

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(user => <UserTile key={user.id} user={user} />)

    const content = results?.length ? results : <div><p>No Matching users</p></div>

    return (
        <main>{content}</main>
    )

}

export default ListPage