import { useEffect } from "react";
import Home from "./components/Home";

function App() {

  const fetchData = async () => {
    await fetch("https://api.jikan.moe/v4/anime")
      .then((res) => { return res.json() })
      .then((data) => localStorage.setItem('items', JSON.stringify(data.data)))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Home />
    </>
  );
}

export default App;
