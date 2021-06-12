import { useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {

    const {id} = useParams(); //allows us to grab param 
    const url = "http://localhost:3069/blogs/"+id;
    const {data:blogs,isError,isPending} = useFetch(url);
    const history = useHistory();
    
    const deleteHandler = ()=>{
        console.log("deleted");
        fetch(url,{
            method:"DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="BlogDetails">
            { isPending && <div>Loading</div>}
            {isError && <div>{isError}</div>} 
            {blogs && (
                <article>
                    {console.log(blogs)}
                    <h2>{blogs.title}</h2>
                    <p>{blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={deleteHandler}>Delete</button>
                </article>
            )}
        </div>
     );
}

export default BlogDetails;