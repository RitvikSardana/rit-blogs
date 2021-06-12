import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {

    const url = "http://localhost:3069/blogs";

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("mario");
    const [body,setBody] = useState("");
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();
    const submitHandler = (event)=>{
        event.preventDefault();
        const blog = {title,body,author};
        
        setIsPending(true)

        fetch(url,{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{ //as it returns a promise we can us .then
            console.log("Added");
            setIsPending(false);
            history.push('/');
            console.log("pushed");
        })

    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={submitHandler}>
                <label >Blog Title</label>
                <input 
                    value={title}
                    type='text'
                    required
                    onChange={(event)=>setTitle(event.target.value)}
                />

                <label >Blog Author:</label>
                <select
                    value={author}
                    onChange = {(event)=>setAuthor(event.target.value)}
                >
                    <option value = "Mario">Mario</option>
                    <option value = "Yoshi">Yoshi</option>
                </select>
                <label >Blog Body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(event)=>setBody(event.target.value)}
                    >
                </textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;
