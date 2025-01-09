import useFetch from "../../hooks/use-fetch"
import useWindowResize from "../../hooks/window-resize";

export default function RecipesList(){
    const windowSize = useWindowResize()
    const {data, loading, error} = useFetch('https://dummyjson.com/recipes');
    if(loading) return <h2>Fetching data..!</h2>
    if(error) return <h2>Error fetching data {error.message}</h2>
    return(
        <div>
            <h1>Recipe List</h1>
            <h3>The width is {windowSize.width} and the height is {windowSize.height}</h3>
            <ul>
            {
                data && data.recipes && data.recipes.length>0 ?(
                data.recipes.map((items)=>(
                    <div key={items.id}><img src={items.image}/>
                    <br />
                    <label>{items.name}</label>
                    </div>
                )) ): <p>No Recipes Available</p>
            }
            </ul>
        </div>
    )
}