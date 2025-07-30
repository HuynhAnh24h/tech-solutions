import {Routes,Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import {Home, Blog, ProjectDetail, Contact, Category} from './pages'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category" element={<Category />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>    
    </>
  )
}

export default App