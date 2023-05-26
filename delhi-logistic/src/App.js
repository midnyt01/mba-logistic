// Library
import { Routes, Route } from "react-router-dom";
import LandingPage from './routes/landing-page.component';

// 3rd party library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Css
import './App.css';

library.add(fas, fab)

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
    </Routes>
  );
}

export default App;
