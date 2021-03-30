import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import { RegisrationPage } from './pages/RegistrationPage'
import { TeamPage } from './pages/TeamPage'
import { DeleteLinkPage } from './components/DeleteLinkPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>   
        <Route path="/deleted" exact>
          <DeleteLinkPage />
        </Route>       

        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>

      <Route path="/registration" exact>
        <RegisrationPage />
      </Route>
           
    </Switch>
  )
}