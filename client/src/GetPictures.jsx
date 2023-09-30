import React, { useState } from 'react'
import axios from 'axios'
import './GetPictures.css'

export default function GetPictures() {

    const [category, setCategory] = useState('')

    const [pictures, setPictures] = useState([])

    const handleInput = (e) => {
        setCategory(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const query = category


        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=HacpscyXCXdaajDTPpNkOvmYJcuVJzR-43cBxH4Kzjw`)
            .then((response) => {
                setPictures(response.data.results)
            })
            .catch((err) => {
                console.log(err);
            })



    }

    return (
        <div>
            <div className='search-bar'>
                <input type='search' name='category' value={category} onChange={handleInput}></input>
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className='grid-container'>
                {pictures.map(pic => (
                    <div className='grid-item' key={pic.id}>
                        <img src={pic.urls.thumb} alt={pic.alt_description} className='img' />
                        <div>{pic.user.name}</div>
                        <div>{pic.alt_description}</div>
                        <a href={pic.urls.raw} target='_blank' rel="noreferrer"  >click here!</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

