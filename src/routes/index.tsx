import { Switch, Route }  from 'react-router-dom'
import { Dashboard }      from '../pages/dashboard'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  )
}