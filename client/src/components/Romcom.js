import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom";


const Romcom = () => {
    
    const [list,setList] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Romcom`)
        .then((res)=>{
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    return (
        <div className='flex-wrap d-flex'>
        {
            list.map((film, index)=> { return (
                <div key={film._id} className='col-3 col- mt-3'>
                    <Link to={`/film/${film._id}`}><img src={film.image} className="col-6"/></Link>
                    <p><Link to={`/film/${film._id}`}>{film.title}</Link></p>
                </div>
            );})
        }
        </div>
    )
}

export default Romcom