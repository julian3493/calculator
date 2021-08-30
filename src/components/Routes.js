import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import calculator from '../pages/calculator';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/app" component={calculator} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
