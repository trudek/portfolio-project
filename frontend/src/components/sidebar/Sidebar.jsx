import {
  SLogo,
  SLogout,
  SNav,
  SSidebar,
  SSidebarWrapper,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from './Sidebar.styled';
import { SidebarData } from './SidebarData';
import { logoPNG } from '../../assets';
import SidebarLink from './SidebarLink';
import Button from '../button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './../../App';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ sidebar }) => {
  const { setTheme, theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  return (
    <SSidebarWrapper sidebar={sidebar}>
      <SSidebar>
        <SLogo>
          <img src={logoPNG} alt="logo" />
        </SLogo>
        <SNav>
          {SidebarData.map((item, index) => {
            return <SidebarLink item={item} key={index} />;
          })}
        </SNav>
        <SLogout>
          <Button
            onClick={() => console.log('button clicked')}
            txt="rgb(200, 200, 200)"
            txtHover="rgb(230, 230, 230)"
            bg="rgb(51, 59, 82)"
            bgHover="rgb(53, 63, 85)"
            icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
          >
            {t('sidebar_logout')}
          </Button>
        </SLogout>
        <STheme>
          <SThemeLabel> {t('sidebar_darkMode')}</SThemeLabel>
          <SThemeToggler
            isActive={theme === 'dark'}
            onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
          >
            <SToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
          </SThemeToggler>
        </STheme>
      </SSidebar>
    </SSidebarWrapper>
  );
};
export default Sidebar;
