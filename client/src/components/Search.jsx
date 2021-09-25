import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [identifier, setIdentifier] = useState("");
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    fetchNovels();
  }, []);

  const fetchNovels = async() => {
    let { data } = await axios.get('http://localhost:1337/api/novels');
    console.log(data)

    setNovels(data);
  };

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
       novels.filter(novel => novel.title.toLowerCase().includes(identifier.toLowerCase())).map(novel => {
          return (<h1 key={novel.id}>{novel.title} by {novel.author.firstName} {novel.author.lastName}</h1>)
       })
    }
    </div>
  )
  }



export default Search;
