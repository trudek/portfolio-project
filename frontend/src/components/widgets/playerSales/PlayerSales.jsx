import { useTranslation } from 'react-i18next';
import {
  SPlayerSales,
  SPlayerSalesHeader,
  SPlayerSalesLeft,
  SPlayerSalesRight,
} from './PlayerSales.styled';

const PlayerSales = () => {
  const { t } = useTranslation();

  return (
    <SPlayerSales>
      <SPlayerSalesLeft>
        <SPlayerSalesHeader>{t('dashboard_date')}</SPlayerSalesHeader>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
        <p>22.06.2022 08:21</p>
      </SPlayerSalesLeft>
      <SPlayerSalesRight>
        <SPlayerSalesHeader>{t('dashboard_soldfor')}</SPlayerSalesHeader>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
        <p>1,371,000</p>
      </SPlayerSalesRight>
    </SPlayerSales>
  );
};
export default PlayerSales;
