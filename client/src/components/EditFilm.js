import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {BrowserRouter, Routes, Route, } from 'react-router-dom';


const EditFilm = (props) => {
    const { id } = useParams();
    const [title,setTitle] = useState('');
    const [director,setDirector] = useState('')
    const [genre,setGenre] = useState('')
    const [yearReleased,setYearReleased] = useState('')
    const [cast,setCast] = useState('')
    const [factoids,setFactoids] = useState('')
    const [image,setImage] = useState('')
    const [allFilms, setAllFilms] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [filmNotFoundError, setFilmNotFoundError] = useState("");
    const [headerTitle, setHeaderTitle] = useState("");
    console.log(id);


    useEffect(() => {
    axios
    .get(`http://localhost:8000/api/film/${id}`)
    .then((response) => {
    console.log(response.data);
    setTitle(response.data.title);
    setDirector(response.data.director);
    setGenre(response.data.genre);
    setYearReleased(response.data.yearReleased);
    setCast(response.data.cast);
    setFactoids(response.data.factoids);
    setImage(response.data.image);
    setHeaderTitle(response.data.title);
    })
    .catch((err) => {
        console.log(err.response);
        setFilmNotFoundError(`Film not found using that ID`);
    });
}, []);

    const submitHandler = (e) => {
    e.preventDefault();

    axios
        .put(`http://localhost:8000/api/update/${id}`, {title, director, genre, yearReleased, cast, factoids, image})
        .then((response) => {
        console.log(response);
        navigate(`/film/${id}`);
        })
        
    };

    return (


        <div class="main">
    
    
                <div className='film-form'>
                        <h2 className=' form-item header-secondary'>Update Film:</h2>
                        <form onSubmit={submitHandler}>
                            <div class="form-item">
                                <input className='form-input' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                                <input className='form-input'type="text"  value={director} onChange={(e)=>setDirector(e.target.value)} /> 
                            </div>
                            <div class="form-item">
                                <input className='form-input' type="number"  value={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} placeholder="Year Released"/>
                                <select  className='form-input' value={genre} onChange={(e)=>setGenre(e.target.value)}  >
                                    <option>Select A Genre</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Action">Action</option>
                                    <option value="Family">Family</option>
                                    <option value="Documentary">Documentary</option>
                                    <option value="Romcomo">Romcomo</option>
                                    <option value="Silent Movie">Silent Movie</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Crime Noir">Crime Noir</option>
                                    <option value="French Cinema">French Cinema</option>
                                    <option value="Horror/Comedy">Horror/Comedy</option>
                                    <option value="Kung-fu">Kung-fu</option>
                                    <option value="Bollywood">Bollywood</option>
                                    <option value="Anime">Anime</option>
                                </select>
                            </div>
    
                            <div class="form-item">
                                <input className='form-input' type="text" value={cast} onChange={(e)=>setCast(e.target.value)} placeholder="Cast"/>
                            </div>
    
                            <div class="form-item">
                                <input className='form-input' type="text" value={factoids} onChange={(e)=>setFactoids(e.target.value)} placeholder="Factoids"/>
                            </div>
    
                            <div class="form-item">
                        <input type="text"  className='form-input'value={image} onChange={(e)=>setImage(e.target.value)} />
                            </div>
    
                            <div>
                            <button type='submit' className='button'>Edit Film</button>
                            </div>
                    </form>
    
                </div>
        </div>
    
    )
    }
    
    export default EditFilm;