import {Route, Routes, useLocation} from "react-router-dom";
import {Container} from "react-bootstrap";
import Posts from "./pages/Posts";
import AboutMe from "./pages/AboutMe";
import Sidebar from "./components/Sidebar";
import AboutPerson from "./pages/UserPosts";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActivePage} from "./store/pageReducer";


function App() {

  const dispatch = useDispatch()
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(setActivePage(pathname))
  }, [pathname])


  return (
    <>
      <Sidebar />
      <Container>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/me' element={<AboutMe />} />
          <Route path='/:id' element={<AboutPerson />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
