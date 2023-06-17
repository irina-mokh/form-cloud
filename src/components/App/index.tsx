import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { FormLayout } from '../FormLayout';
import { HomePage } from '../../pages/HomePage';
import { Tab1 } from '../../pages/Tab1';
import { Tab2 } from '../../pages/Tab2';
import { Tab3 } from '../../pages/Tab3';

export interface IDevInfo {
  firstName: string;
  lastName: string;
  gh: string;
  tg: string;
  cv: string;
}

const developer: IDevInfo = {
  firstName: 'Irina',
  lastName: 'Mokh',
  gh: 'https://github.com/irina-mokh',
  tg: 'https://t.me/mokh_irina',
  cv: 'https://irina-mokh.notion.site/CV-Irina-Mokh-e57a9aafcd394dae8e4ba53e66d1b6a2',
};

function App() {
  return (
    <div className="container">
      <h1 className="visually-hidden">User form</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage dev={developer} />} />
          <Route path="form" element={<FormLayout />}>
            <Route path="0" element={<Tab1 />} />
            <Route path="1" element={<Tab2 />} />
            <Route path="2" element={<Tab3 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
