import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export function FormLayout() {
  return (
    <div className="form wrapper">
      <Header></Header>
      <main className="form__main">
        <Outlet />
      </main>
    </div>
  );
}
