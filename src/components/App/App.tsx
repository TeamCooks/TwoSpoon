import './App.css';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import Home from 'pages/Home/Home';
import Search from 'pages/Search/Search';
import MyRecipes from 'pages/MyRecipes/MyRecipes';
import Modal from 'pages/Modal/Modal';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search/:keyword" element={<Search />} />
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="/detail/:id" element={<Modal />} />
          <Route path="page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="page-not-found" replace />} />
        </Route>
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/detail/:id" element={<Modal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
