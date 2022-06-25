import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
  SHeader,
  SNavIcon,
  SNavLanguage,
  SNavNotif,
  SNavNotifCounter,
  SNavNotifIcon,
  SNavRight,
  SNavUser,
} from './Header.styled';
import Dropdown from '../dropdown/Dropdown';
import DropdownItem from '../dropdown/DropdownItem';
import { flagPL, flagUK } from '../../assets';
import { useState } from 'react';
import i18next from 'i18next';

const Header = ({ sidebar, setSidebar }) => {
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      flag: <img src={flagUK} alt="uk flag" />,
    },
    {
      code: 'pl',
      name: 'Polish',
      country_code: 'pl',
      flag: <img src={flagPL} alt="pl flag" />,
    },
  ];

  return (
    <>
      <SHeader sidebar={sidebar}>
        <SNavIcon to="#">
          <FontAwesomeIcon icon={faBars} size="lg" onClick={showSidebar} />
        </SNavIcon>
        <SNavRight sidebar={sidebar}>
          <SNavNotif>
            <SNavNotifIcon>
              <FontAwesomeIcon icon={faBell} size="xl" />
            </SNavNotifIcon>
            <SNavNotifCounter>2</SNavNotifCounter>
          </SNavNotif>
          <SNavLanguage>
            <SNavIcon to="#" onClick={showDropdown}>
              {
                languages[
                  languages.findIndex((x) => x.code === i18next.language)
                ].flag
              }
            </SNavIcon>
            {dropdown && (
              <Dropdown>
                {languages.map((item, index) => {
                  return (
                    <DropdownItem
                      icon={item.flag}
                      label={item.name}
                      key={index}
                      click={() => {
                        i18next.changeLanguage(languages[index].code);
                        showDropdown();
                      }}
                    ></DropdownItem>
                  );
                })}
              </Dropdown>
            )}
          </SNavLanguage>

          <SNavUser>Franek</SNavUser>
        </SNavRight>
      </SHeader>
    </>
  );
};
export default Header;
