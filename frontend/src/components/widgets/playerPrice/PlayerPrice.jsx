import { useTranslation } from 'react-i18next';
import {
  SPlayerPrice,
  SPlayerPriceDescription,
  SPlayerPriceIcon,
  SPlayerPriceLeft,
  SPlayerPriceRight,
  SPlayerPriceValue,
} from './PlayerPrice.styled';

const PlayerPrice = ({ type }) => {
  let data;

  const { t } = useTranslation();

  switch (type) {
    case 'lbin':
      data = {
        value: '1,000,000',
        description: t('dashboard_lbin'),
        icon: '',
      };
      break;
    case 'avg1':
      data = {
        value: '1,111,000',
        description: t('dashboard_1avg'),
        icon: '',
      };
      break;
    case 'avg7':
      data = {
        value: '1,777,000',
        description: t('dashboard_7avg'),
        icon: '',
      };
      break;
    default:
      break;
  }

  return (
    <SPlayerPrice>
      <SPlayerPriceLeft>
        <SPlayerPriceValue>{data.value}</SPlayerPriceValue>
        <SPlayerPriceDescription>{data.description}</SPlayerPriceDescription>
      </SPlayerPriceLeft>
      <SPlayerPriceRight>
        <SPlayerPriceIcon>{data.icon}</SPlayerPriceIcon>
      </SPlayerPriceRight>
    </SPlayerPrice>
  );
};
export default PlayerPrice;
