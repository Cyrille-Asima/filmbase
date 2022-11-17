import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Anime = () => {
    
        const [list,setList] = useState([])
    
        useEffect(()=>{
            axios.get(`http://localhost:8000/api/Anime`)
            .then((res)=>{
                setList(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])
        
    return (
            <div className='d-flex flex-wrap'>
            {
                list.map((films)=>(
                    <div className='col col- mt-3'>
                        <img src={films.image} className="col-6" /><br></br>
                        <p>{films.title}</p>
                    </div>
                ))
            }
            </div>
        )
}

export default Anime