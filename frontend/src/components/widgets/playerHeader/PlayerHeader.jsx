import {
  SPlayerHeader,
  SPlayerHeaderDescription,
  SPlayerHeaderName,
} from './PlayerHeader.styled';

import { flagUK } from '../../../assets';

const PlayerHeader = () => {
  return (
    <SPlayerHeader>
      <SPlayerHeaderName>Ruud Gullit</SPlayerHeaderName>
      <SPlayerHeaderDescription>
        <img src={flagUK} alt="uk flag" />
        <span style={{ marginLeft: '10px' }}>Netherland</span>
      </SPlayerHeaderDescription>
      <SPlayerHeaderDescription>
        93
        <span style={{ marginLeft: '10px' }}>CF</span>
      </SPlayerHeaderDescription>
    </SPlayerHeader>
  );
};
export default PlayerHeader;
