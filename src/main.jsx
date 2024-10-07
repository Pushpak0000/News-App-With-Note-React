import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsList from './components/NewsList.jsx'
import NewsTodo from './components/NewsTodo.jsx'
import { Provider } from 'react-redux'
import newsNotes from './store/news-todo-store.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<NewsList/>
      },
      {
        path:'/news-todo',
        element:<NewsTodo/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={newsNotes}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
