import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
