import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Layout() {
  return (
    <div className="layout">
      <Header></Header>
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
