import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"

//lessons
import Lesson17 from "lessons/Lesson17/Lesson17"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"
import Layout from "pages/UsersApp/Layout/Layout"
import Lesson18 from "lessons/Lesson18/Lesson18"

//homeworks
import Homework17 from "homeworks/Homework17/Homework17"
import Homework18 from "homeworks/Homework18/Homework18"

//consultations

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />    
      {/* UserApp - Practice - Lesson17 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/lesson17" element={<Lesson17 />} />
          <Route path="/hw17" element={<Homework17 />} />
          <Route path="/lesson18" element={<Lesson18 />} />
          <Route path="/hw18" element={<Homework18 />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
