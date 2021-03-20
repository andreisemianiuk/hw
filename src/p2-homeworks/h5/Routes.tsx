import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import AdvancedJunior from './pages/AdvancedJunior'

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  ADVANCED_JUNIOR: '/advanced-junior'
}

function Routes() {
  return (
    <div>
      {/*Switch выбирает первый подходящий роут*/}
      <Switch>
      {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
      {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
      <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
      <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
      <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
      <Route path={PATH.ADVANCED_JUNIOR} render={() => <AdvancedJunior/>}/>
      {/* add routes*/}
      {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
      <Route render={() => <Error404/>}/>
      </Switch>
    </div>
  )
}

export default Routes
