import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Player from './components/player/Player';
const Home = lazy(() => import('./screens/Home'));

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />
          <StyledContainer>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </StyledContainer>
          <Player />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
