import { useState } from 'react';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { SLayout, SMain } from './Layout.styled';

const Layout = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <SLayout>
      <Sidebar sidebar={sidebar} />
      <SMain>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <Content />
        <Footer sidebar={sidebar} />
      </SMain>
    </SLayout>
  );
};
export default Layout;
