import styles from '../Search.module.css'
import {FaSearch} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '../utils/useQuery';

export function Search() {
    // HOOKS
    const [searchText, setSearchText] = useState("")
    const history = useHistory()

    const query = useQuery()
    const search = query.get("search")

    useEffect(() => {
        setSearchText(search || "")
        
    }, [search]);

    // METODOS DEL EVENTO DEL DOOM
    const handleSubmit = (e) => {
        
        history.push(`/?search=${searchText}`)
        e.preventDefault();
    }
    const onchange = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <form className={styles.searcheContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" 
                placeholder="Buscar..." 
                value={searchText}
                onChange={onchange}
                />
                <button className={styles.searchButton} type="submit">
                <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
