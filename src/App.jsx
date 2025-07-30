import {Routes,Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import {Home, Blog, ProjectDetail} from './pages'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>    
    </>
  )
}

export default App