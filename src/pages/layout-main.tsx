import { Outlet } from 'react-router';
import Footer from '../core-components/Footer';
import Header from '../core-components/Header';
import MainContent from '../core-components/MainContent';

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
