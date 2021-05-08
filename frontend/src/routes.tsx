import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Appointments } from './pages/Appointments';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/appointments" component={Appointments} />
    </Switch>
  );
};

export default Routes;
