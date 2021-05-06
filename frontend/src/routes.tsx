import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
    </Switch>
  );
};

export default Routes;
