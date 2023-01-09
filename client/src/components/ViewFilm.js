import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


const ViewFilm = (props) => {
    const { id } = useParams();
    const [title,setTitle] = useState('');
    const [director,setDirector] = useState('')
    const [genre,setGenre] = useState('')
    const [yearReleased,setYearReleased] = useState('')
    const [cast,setCast] = useState('')
    const [factoids,setFactoids] = useState('')
    const [image,setImage] = useState('')
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

const handleDeleteFilm = () => {
    axios
    .delete(`http://localhost:8000/api/delete/${id}`)
    .then((response) => {
        console.log("success deleting film");
        console.log(response);
        navigate("/");
    })
    .catch((err) => {
        console.log("error deleting film", err.response);
    });
};

return (

<div className="main">

    <div class="film-details">

        <div>

            <div>

            <h2 className="header-secondary"> {title} </h2>

            <div class="view" > 
                <div class="view">
                <img src={image} className="col-8"/>
                </div>
                <div class="view1">
                    <p className="detail-line"> <strong>Director:</strong>   {director} </p>
                    <p className="detail-line"> <strong>Genre:</strong>     {genre}</p>
                    <p className="detail-line"> <strong>Year Released:</strong>     {yearReleased}</p>
                    <p className="detail-line"> <strong>Cast:</strong> {cast}</p>
                    <p className="detail-line"> <strong>Factoids:</strong> {factoids}</p>
                </div>
            </div>


        <Link to={`/update/${id}`}>
        <button className="button">Edit</button>
        </Link>

        <button className="button" onClick={handleDeleteFilm}>Delete</button>

        </div>


        </div>

    </div>

</div>
        


    );
};

export default ViewFilm;