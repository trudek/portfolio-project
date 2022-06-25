import PlayerSearch from '../../components/widgets/playerSearch/PlayerSearch';
import PlayersTable from '../../components/widgets/playersTable/PlayersTable';
import {
  SPlayersList,
  SPlayersListSearch,
  SPlayersListTable,
} from './PlayersList.styled';

const PlayersList = () => {
  return (
    <SPlayersList>
      <SPlayersListSearch>
        <PlayerSearch />
      </SPlayersListSearch>
      <SPlayersListTable>
        <PlayersTable />
      </SPlayersListTable>
    </SPlayersList>
  );
};
export default PlayersList;
