import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
