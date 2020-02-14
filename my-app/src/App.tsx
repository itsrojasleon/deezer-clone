import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
const Home = lazy(() => import('./screens/Home'));

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
