import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Page500 from './pages/page500/Page500';
import PlayersList from './pages/playersList/PlayersList';
import PlayerDashboard from './pages/playerDashboard/PlayerDashboard';
import Page404 from './pages/page404/Page404';

const SpecRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/playerslist" element={<PlayersList />} />
      <Route path="/playerdashboard" element={<PlayerDashboard />} />
      <Route path="/500" element={<Page500 />} />
    </Routes>
  );
};
export default SpecRoutes;
