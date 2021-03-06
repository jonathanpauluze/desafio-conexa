import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { AuthProvider } from './hooks/auth';

const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
