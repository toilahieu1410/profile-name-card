import React, { Fragment, useEffect } from "react"
import './assets/scss/app.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import jwt_decode from 'jwt-decode'
import useToken from "./utilities/useToken"
import { routes } from "./route/index"
import HomePage from "./screens/home"
import { toast, ToastContainer } from "react-toastify"

const App = () => {
  const { token } = useToken()
  let decoded
  if (token) { decoded = jwt_decode(token) }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (decoded) {
      toast.info(`Chao mung ${decoded.username} den voi trang web`)
    } else {
      toast.info(`Chao mung cac ban den voi giga`)
    }
  }, [])

  return (
    <Fragment>
      <BrowserRouter basename={`/`}>
        <HomePage token={decoded}>
          <Route exact path={'/'} render={() => {
          // return (<Redirect to='/homepage'/>)
          }} />
          <TransitionGroup>
            <CSSTransition
              timeout={0}
              unmountOnExit
            >
                {routes.map(({path, Component}) => (
                  <Route key={path} exact path={`${path}`}>
                      {() => (
                        <div>
                          <Component token={decoded}/>
                        </div>
                      )}
                  </Route>
                ))}
            </CSSTransition>
          </TransitionGroup>
        </HomePage>

      </BrowserRouter>

      <ToastContainer autoClose={2000} />
    </Fragment>

  )
}

export default App;
