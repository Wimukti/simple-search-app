import { getUsers } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './Listpage'
import UserTile from "./UserTile";

const App = () => {
  const [users, setUsers] = useState()
  const [searchResults, setSearchResults] = useState()

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
      setSearchResults(data)
    })
  }, [])

  if(users){
    return(
        <div>
          <SearchBar/>
          {users.map((user) =>
              <UserTile user={user}/>
          )}
          <ListPage searchResults={searchResults} />
        </div>
    )
  }
}

export default App;
