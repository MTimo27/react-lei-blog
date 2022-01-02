import { Route, Switch, useLocation } from 'react-router';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  Home,
  About,
  Article,
  Contact,
  Projects,
} from './pages';

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
          <Route
            exact
            path="/projects"
            component={Projects}
          />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
