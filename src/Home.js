import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const url = "http://localhost:3069/blogs";

    //Creating Functions
    // const deleteHandler=(id) =>{
    //     const updatedBlogs = blogs.filter((blog)=>blog.id!==id);//stores filtered array
    //     setBlogs(updatedBlogs);
    // }

    //importing useFetch hook
    const{data:blogs,isPending,isError} = useFetch(url)
    //call data but call it blogs

    //showing the blogs
    return ( 
        <div className="home">
            {isError&&<div>{isError}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs ={blogs} title={"All Blogs"}  />}
            {/* <BlogList blogs ={blogs.filter((blog)=>blog.author === 'mario')} title={"Mario's Blogs"} deleteHandler={deleteHandler} /> */}
        </div>
     );
}

export default Home;