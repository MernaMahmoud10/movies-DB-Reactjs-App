import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Movies from './components/Movies/Movies';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import Networks from './components/Networks/Networks';
import Tvshows from './components/Tvshows/Tvshows';
import People from './components/People/People';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { MediaContextProvider } from './MediaContext';
import TvshowsDetails from './components/Tvshowsdetails/TvshowsDetails';


function App() {

  const [userData, setuserData] = useState(null);
  let navigate = useNavigate();

  //I used useeffect as component did mount to check after reload If there is anyone loged in or not
  //cause after reload the app.js bybd2 from line 1 that sayed userData= null (logged out the user after reload te site)
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getUserData();
    }
  }, [])

  function getUserData() {
    let decodedData = jwtDecode(localStorage.getItem("userToken"))
    setuserData(decodedData)

  }

  function logout() {
    localStorage.removeItem("userToken");
    setuserData(null);
    navigate("/login")
  }


  return (
    <>
      <Navbar userData={userData} logout={logout} />
      <div className="container">
        <MediaContextProvider>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='about' element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path='movies' element={<ProtectedRoute><Movies /></ProtectedRoute>} />
            <Route path='login' element={<Login getUserData={getUserData} />} />
            <Route path='register' element={<Register />} />
            <Route path='people' element={<ProtectedRoute><People /></ProtectedRoute>} />
            <Route path='networks' element={<ProtectedRoute><Networks /></ProtectedRoute>} />
            <Route path='tvshows' element={<ProtectedRoute><Tvshows /></ProtectedRoute>} />
            <Route path='*' element={<ProtectedRoute><Notfound /></ProtectedRoute>} />
            <Route path='moviedetails' element={<MovieDetails />} >
              {/* this way when use usePArams */}
              <Route path=':id' element={<MovieDetails />} />
            </Route>
            <Route path='tvshowsdetails' element={<TvshowsDetails />}>
              <Route path=':id' element={<TvshowsDetails />} />
            </Route>
          </Routes>
        </MediaContextProvider>
      </div >
    </>
  );
}

export default App;
