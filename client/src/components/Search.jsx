import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [identifier, setIdentifier] = useState("");
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    const fetchNovels = async () => {
      let fetch = await axios.get('http://localhost:1337/api/novels')

      setNovels(fetch.data)
      console.log(fetch.data)

  // useEffect(() => {
  //   fetchNovels();
  // }, []);

  // const fetchNovels = async() => {
  //   let { data } = await axios.get('http://localhost:1337/api/novels');
  //   console.log(data)

  //   setNovels(data);
  }
    fetchNovels()
  }, [])
;

  return (
    <div className="content">
    <div className="title">Great Novels</div>
    <input 
        className="searchBox" 
        type="text" 
        name="search" 
        value={identifier} 
        onChange={event => setIdentifier(event.target.value)} 
    />
    {
       novels.filter(novel => novel.name.toLowerCase().includes(identifier.toLowerCase())).map(novel => {
          return (<h1>{novel.name}</h1>)
       })
    }
    </div>
  )
  }



export default Search;
