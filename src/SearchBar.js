import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons"

const SearchBar = ({ users, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(users)

        const resultsArray = users.filter(user => user.title.includes(e.target.value) || user.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            {/*<FontAwesomeIcon className='search__button' icon="fa-light fa-magnifying-glass" />*/}
            <form className="search" onSubmit={handleSubmit}>
                {/*<FontAwesomeIcon className='search__button' icon="fa-light fa-magnifying-glass" />*/}
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