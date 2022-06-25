import { useTranslation } from 'react-i18next';
import {
  SPlayerInfo,
  SPlayerInfoDescription,
  SPlayerInfoRow,
  SPlayerInfoValue,
} from './PlayerInfo.styled';

const PlayerInfo = () => {
  const { t } = useTranslation();

  return (
    <SPlayerInfo>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>{t('dashboard_name')}</SPlayerInfoDescription>
        <SPlayerInfoValue>Ruud Gullit</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>{t('dashboard_nation')}</SPlayerInfoDescription>
        <SPlayerInfoValue>Netherland</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>ID:</SPlayerInfoDescription>
        <SPlayerInfoValue>214100</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>{t('dashboard_rating')}</SPlayerInfoDescription>
        <SPlayerInfoValue>93</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_position')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>CF</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_sellRate')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>0,40%</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_closingPrice')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>1,690,000</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_priceRange')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>229,000 - 4,300,000</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>PRP:</SPlayerInfoDescription>
        <SPlayerInfoValue>35%</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_quickSell')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>69,750</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_skillsWf')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>4 - 5</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>{t('dashboard_foot')}</SPlayerInfoDescription>
        <SPlayerInfoValue>Right</SPlayerInfoValue>
      </SPlayerInfoRow>
      <SPlayerInfoRow>
        <SPlayerInfoDescription>
          {t('dashboard_heightWeight')}
        </SPlayerInfoDescription>
        <SPlayerInfoValue>191 cm | 6'3" - 88 kg</SPlayerInfoValue>
      </SPlayerInfoRow>
    </SPlayerInfo>
  );
};
export default PlayerInfo;
