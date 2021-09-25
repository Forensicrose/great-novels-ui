import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Novel = () => {
    const [identifier, setIdentifier] = useState("")
    const [novels, setNovels] = useState([])

    useEffect(() => {
        fetchNovels()
    }, [])

    const fetchNovels = async() => {
        let {data} = await 
        axios.get('http://localhost:1337/api/novels')

        setNovels(data)
    }

    return (
        <>
    <div className='content'>
    <div className='title'>Great Novels!</div>
    <input
    className='searchBox' type='text' name='search' value={identifier} onChange={event => setIdentifier(event.target.value)} />
    {
       novels.filter(novel => novel.name.toLowerCase().includes(identifier.toLowerCase())).map(novel => {
          return (<h1>{novel.name}</h1>)
       })
    }
    </div>
    </>
    )

}

export default Novel