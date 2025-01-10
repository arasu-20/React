import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import FakeApi from './components/FakeApi'
import CommentsList from './pages/comments'
import RecipesList from './pages/recipes'
import RecipeData from './pages/data'
import ReactFormHook from './pages/react-form'

function App() {

  const navigate = useNavigate();
  return (
    <>
      {/* <FakeApi /> */}
      {/* <button onClick={()=>navigate('/recipe')} style={{backgroundColor:'black', color: 'yellow', margin: '10px'}}>Recipe</button>
      <button onClick={()=>navigate('/comment')} style={{backgroundColor:'black', color: 'yellow', margin: '10px'}}>Comment</button>
      <Routes>
        <Route path='/recipe' element={<RecipesList/>}/>
        <Route path='/comment' element={<CommentsList/>}/>
        <Route path='/recipe/:id' element={<RecipeData/>}></Route>
      </Routes> */}
      <Routes>
        <Route path='/react-form' element={<ReactFormHook/>}/>
      </Routes>
    </>
  )
}

export default App
