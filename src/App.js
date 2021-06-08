import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

// Screens
import TestScreen from './screens/TestScreen';
import ShortLinkScreen from './screens/ShortLinkScreen';
import TopLinksScreen from './screens/TopLinksScreen';

function App() {
  return (
    <BrowserRouter>
      <Route path='/test' component={TestScreen} />
      <Route path='/create' component={ShortLinkScreen} />
      <Route path='/top' component={TopLinksScreen} />
    </BrowserRouter>
  );
}

export default App;
