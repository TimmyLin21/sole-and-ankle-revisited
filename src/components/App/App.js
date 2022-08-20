import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { theme } from '../../constants'

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }
  @media ${(p) => p.theme.QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`;

export default App;
