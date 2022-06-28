import {
  SPage404,
  SPage404Container,
  SPage404p,
  SPage404title,
} from './Page404.styled';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const Page404 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <SPage404>
      <SPage404Container>
        <SPage404title>404</SPage404title>
        <SPage404p bold>{t('page404_title')}</SPage404p>
        <SPage404p>{t('page404_desc')}</SPage404p>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate('/')}
        >
          {t('homepage_button')}
        </Button>
      </SPage404Container>
    </SPage404>
  );
};
export default Page404;
