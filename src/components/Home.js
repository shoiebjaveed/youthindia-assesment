import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import List from "./Cards/List";


const Home = () => {
    const [count, setCount] = useState(1)

    const nextHandler = () => {
        setCount(count + 1)
    }

    const prevHandler = () => {
        if (count <= 1) {
            return
        } else {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.jikan.moe/v4/anime?page=${count}`)
                .then((res) => { return res.json() })
                .then((data) => {
                    localStorage.setItem('items', JSON.stringify(data.data))
                })
        }
        fetchData()
    }, [count])

    return (
            <main>
            <List onChange={count} />
            <div className={classes.pagination}>
                <button onClick={prevHandler}>Prev</button>
                {`Page ${count}`}
                <button onClick={nextHandler}>Next</button>
            </div>
        </main>
    )
}

export default Home;
