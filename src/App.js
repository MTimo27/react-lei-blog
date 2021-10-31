import Header from './components/header/Header';
import {
  Write,
  Login,
  Home,
  About,
  Article,
  Contact,
  Projects,
} from './pages';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/projects"
          component={Projects}
        />
        <Route exact path="/write" component={Write} />
      </Switch>
    </>
  );
}

export default App;
