import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({ users, setSearchResults }) => {

    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(users)
        const filteredUsers = users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`
            return fullName.toLowerCase().includes(e.target.value.toLowerCase()) || user.email.toLowerCase().includes(e.target.value.toLowerCase())
            }
        )
        setSearchResults(filteredUsers)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <FontAwesomeIcon className='searchButton' icon={faMagnifyingGlass} />
                <input
                    className="searchInput"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    placeholder="Search name or email"
                />
            </form>
        </header>
    )
}
export default SearchBar