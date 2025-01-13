import {  useRoutes } from 'react-router-dom'
import './App.css'
import ReactFormHook from './pages/react-form'
import Hooks from './hooks'
import UseMemoExample from './hooks/useMemoExample'
import UseCallBack from './hooks/useCallback/UseCallBack'
import Home from './Home'
import NotFound from './NotFound'
import ReactQueryDom from './pages/ReactQuery'
function CustomRoutes(){
  const element = useRoutes([
    {
      path:'/home',
      element:<Home />,
      },
        {
          path:'/',
          element:<Hooks />
      },
      {
          path:'/hook-memo',
          element:<UseMemoExample />
      },
      {
          path:'/hook-callback',
          element:<UseCallBack />
      },{
          path :'/react-form',
          element:<ReactFormHook />
      },{
          path:'*',
          element:<NotFound />
      },{
        path:'/react-query',
        element:<ReactQueryDom/>
      }
  ]);
  return element;
}
function App() {
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
      <CustomRoutes/>
    </>
  )
}

export default App
