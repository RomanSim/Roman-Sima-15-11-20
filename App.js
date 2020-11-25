import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Received from './component/container/Received';
import Sent from './component/container/Sent';
import Compose from './component/container/Compose';
import Home from './component/container/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/compose' component={Compose} />
          <Route path='/received' component={Received} />
          <Route path='/sent' component={Sent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
