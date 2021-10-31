import Header from './components/header/Header';
import { Write, Login } from './pages';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/write" component={Write} />
      </Switch>
    </>
  );
}

export default App;
