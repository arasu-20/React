import useFetch from "../../hooks/use-fetch";

function CommentsList(){

    const {data, loading, error} = useFetch('https://dummyjson.com/comments')
    if(loading) return <h2>Fetching Comments..!</h2>
    if(error) return <h2>Error fetching Comments {error.message}</h2>

    return(
        <div>
            <h1>Comments List</h1>
            <ul>
            {
                data && data.comments && data.comments.length>0 ?(
                data.comments.map((comments)=>(
                    <div key={comments.id}>
                    <h3>{comments.body} Likes:{comments.likes}</h3>
                    </div>
                )) ): <p>No Recipes Available</p>
            }
            </ul>
        </div>
    )
}

export default CommentsList;