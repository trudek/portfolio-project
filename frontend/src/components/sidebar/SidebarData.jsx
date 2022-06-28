import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faRectangleList,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

export const SidebarData = [
  {
    label: 'sidebar_menu1',
    path: '/homepage',
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    notification: 0,
  },
  {
    label: 'sidebar_menu2',
    path: '',
    icon: <FontAwesomeIcon icon={faRectangleList} />,
    notification: 'sidebar_new',
    subNav: [
      {
        label: 'sidebar_menu2_1',
        path: '/playerslist',
        notification: 2,
      },
      {
        label: 'sidebar_menu2_2',
        path: '/playerdashboard',
        notification: 0,
      },
    ],
  },
  {
    label: 'sidebar_menu3',
    path: '',
    icon: <FontAwesomeIcon icon={faBookmark} />,
    notification: 0,
    subNav: [
      {
        label: 'sidebar_menu3_1',
        path: '/404',
        notification: 0,
      },
      {
        label: 'sidebar_menu3_2',
        path: '/500',
        notification: 0,
      },
      {
        label: 'sidebar_menu3_3',
        path: '/signin',
        notification: 0,
      },
      {
        label: 'sidebar_menu3_4',
        path: '/signup',
        notification: 0,
      },
    ],
  },
];
