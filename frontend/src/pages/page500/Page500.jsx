import {
  SPage500,
  SPage500Container,
  SPage500p,
  SPage500title,
} from './Page500.styled';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const Page500 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <SPage500>
      <SPage500Container>
        <SPage500title>500</SPage500title>
        <SPage500p bold>{t('page500_title')}</SPage500p>
        <SPage500p>{t('page500_desc')}</SPage500p>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate('/')}
        >
          {t('homepage_button')}
        </Button>
      </SPage500Container>
    </SPage500>
  );
};
export default Page500;
