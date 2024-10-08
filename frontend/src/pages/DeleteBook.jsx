import React, { useState ,useEffect} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";


const DeleteBook = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () =>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`).then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((error)=>{
      console.log(error);
      setLoading(false)
      alert("Error happened on the deleteBook")
    })
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">
        Delete Book
      </h1>
      {loading?<Spinner/>:''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure to delete book</h3>
        <button className="bg-red-600 p-4 text-white m-8 w-full" onClick={handleDeleteBook}>
          Yes delete it
        </button>


      </div>
    </div>
  )
}

export default DeleteBook
