import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  SLink,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SSidebarDropdown,
  SSidebarDropdownLink,
} from './SidebarLink.styled';

const SidebarLink = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <SLink
        to={item.path !== '' && item.path}
        onClick={item.subNav && showSubnav}
        state={item.path !== '' && pathname.indexOf(item.path) === 0}
      >
        <SLinkIcon>{item.icon}</SLinkIcon>
        <SLinkLabel>{t(item.label, { returnObjects: true })}</SLinkLabel>
        {!!item.notification && (
          <SLinkNotification>
            {t(item.notification, { returnObjects: true })}
          </SLinkNotification>
        )}
      </SLink>

      <SSidebarDropdown subnav={subnav}>
        {item.subNav &&
          item.subNav.map((item, index) => {
            return (
              <SSidebarDropdownLink
                to={item.path}
                key={index}
                state={item.path !== '/' && pathname === item.path}
              >
                <SLinkLabel>
                  {t(item.label, { returnObjects: true })}
                </SLinkLabel>
                {!!item.notification && (
                  <SLinkNotification>
                    {t(item.notification, { returnObjects: true })}
                  </SLinkNotification>
                )}
              </SSidebarDropdownLink>
            );
          })}
      </SSidebarDropdown>
    </>
  );
};
export default SidebarLink;
