import { getUsers } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import UserTile from "./UserTile";

const Home = () => {

  const [users, setUsers] = useState()
  const [searchResults, setSearchResults] = useState()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
      setSearchResults(data)
      setLoading(false)
    }).catch(err => {
      setError(err)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="loader"/>
  if (error) return <p>Something went wrong</p>
  if(users){
      return(
          <div>
            <SearchBar users={users} setSearchResults={setSearchResults}/>
            {searchResults.map((user) =>
                <UserTile user={user}/>
            )}
          </div>
      )
    }
}

export default Home;
