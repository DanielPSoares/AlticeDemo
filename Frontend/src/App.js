import logo from './logo.svg';
import './App.css';
import { Route, Routes, Redirect } from 'react-router-dom';

import { GeneralNavigation } from './GeneralNavigation';
import { ViewCampaignData } from './ViewCampaignData';
import { Contacts } from './Contacts';


function App() {
  return (
      <div className="App">

        <GeneralNavigation/>

        <Routes>
          <Route exact path="/" element={<ViewCampaignData/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>

      </div>
  );
}

export default App;
