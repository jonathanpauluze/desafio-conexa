import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import Routes from './routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
