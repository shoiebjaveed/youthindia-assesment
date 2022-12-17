import { useEffect, useState } from 'react';
import Card from './Card';
import classes from './List.module.css';

const List = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    const items = JSON.parse(localStorage.getItem('items'));
    useEffect(() => {
        const fetchData = () => {
            if (items) {
                setData(items);
            }
        }
        fetchData()
    }, [items]);

    return <>
        <header className={classes.header}>
            <input type="text" placeholder='search' onChange={(e) => setQuery(e.target.value)} />
        </header>
        <div className={classes.list}>
            {data === [] && <h2>No data found</h2>}
            {data.filter((data) => data.title.toLowerCase().includes(query)).map((data) => {
                return <Card
                    key={data.mal_id}
                    data={data}
                />
            })}
        </div>
    </>
}

export default List