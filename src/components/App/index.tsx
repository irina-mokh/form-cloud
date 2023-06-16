import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../Layout';
import { InfoTab } from '../../pages/InfoTab';
import { DetailsTab } from '../../pages/DetailsTab';
import { TextTab } from '../../pages/TextTab';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InfoTab />} />
          <Route path="details" element={<DetailsTab />} />
          <Route path="text" element={<TextTab />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
