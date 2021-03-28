import './App.css';
import Header from './components/Header';
import ListAll from './components/ListAll';
import New from './components/New';
// import Edit from './components/Edit';
// import Details from './components/Details';
import Status1 from './components/Status1';
import Status2 from './components/Status2';
import Status3 from './components/Status3';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header path="/players/list" />
      <Router>
        <ListAll path="/players/list" />
        <New path="/players/new" />
        {/* <Edit path="/players/:_id/edit" />
        <Details path="/players/:_id" /> */}
        <Status1 path="/status/game1" />
        <Status2 path="/status/game2" />
        <Status3 path="/status/game3" />
      </Router>
    </div>
  );
}

export default App;
