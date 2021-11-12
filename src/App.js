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
import { Route, Switch, useLocation } from 'react-router';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="mainWrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/article/:id"
            component={Article}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/projects"
            component={Projects}
          />
          <Route exact path="/write" component={Write} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
