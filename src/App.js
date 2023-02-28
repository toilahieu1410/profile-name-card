import { Fragment } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../src/assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './screens/homepage'
import { routes } from './route/index'

const App = () => {

  //read QR code
  return (
    <Fragment>
      {/* <BrowserRouter basename={`/`} /> */}
      <HomePage path={'/'}>
        <TransitionGroup>
          <CSSTransition timeout={0} unmountOnExit>
            <Routes>
              {routes.map(({ path, Component, name }) => (
                <Route key={path} exact path={`${path}`} element={<Component name={name} />}>
          
                </Route>
              ))}
          
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </HomePage>

    </Fragment>

  );
}

export default App;
