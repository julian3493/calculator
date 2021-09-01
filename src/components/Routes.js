import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import calculator from '../pages/calculator';
import quote from '../pages/quote';
import NavBar from './NavBar';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/app" component={calculator} />
      <Route exact path="/quote" component={quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
