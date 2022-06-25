import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Page500 from './pages/Page500';
import PlayersList from './pages/playersList/PlayersList';
import PlayerDashboard from './pages/playerDashboard/PlayerDashboard';

const SpecRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/playerslist" element={<PlayersList />} />
      <Route path="/playerdashboard" element={<PlayerDashboard />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/500" element={<Page500 />} />
    </Routes>
  );
};
export default SpecRoutes;
