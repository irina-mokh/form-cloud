import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { FormLayout } from '../FormLayout';
import { HomePage } from '../../pages/HomePage';
import { DetailsTab } from '../../pages/DetailsTab';
import { TextTab } from '../../pages/TextTab';
import { InfoTab } from '../../pages/InfoTab';

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
    <>
      <h1 className="visually-hidden">User form</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage dev={developer} />} />
          <Route path="form" element={<FormLayout />}>
            <Route index element={<InfoTab />} />
            <Route path="details" element={<DetailsTab />} />
            <Route path="text" element={<TextTab />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
