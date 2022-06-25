import PlayerChart from '../../components/widgets/playerChart/PlayerChart';
import PlayerHeader from '../../components/widgets/playerHeader/PlayerHeader';
import PlayerInfo from '../../components/widgets/playerInfo/PlayerInfo';
import PlayerPrice from '../../components/widgets/playerPrice/PlayerPrice';
import PlayerSales from '../../components/widgets/playerSales/PlayerSales';
import {
  SPlayerDashboard,
  SPlayerDashboardRow,
} from './PlayerDashboard.styled';

const PlayerDashboard = () => {
  return (
    <SPlayerDashboard>
      <SPlayerDashboardRow>
        <PlayerHeader />
      </SPlayerDashboardRow>
      <SPlayerDashboardRow>
        <PlayerPrice type={'lbin'} />
        <PlayerPrice type={'avg1'} />
        <PlayerPrice type={'avg7'} />
      </SPlayerDashboardRow>
      <SPlayerDashboardRow>
        <PlayerInfo />
        <PlayerChart />
        <PlayerSales />
      </SPlayerDashboardRow>
    </SPlayerDashboard>
  );
};
export default PlayerDashboard;
