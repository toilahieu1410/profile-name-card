import React, { Fragment } from "react"
import Footer from "../../components/layout/footer"
import Header from "../../components/layout/header"
import { withRouter } from "react-router-dom"

const HomePage = ({children}) => {
  return (
    <Fragment>
      <div className="homepage">
        <Header />
        {/* <div className="container">
          {children}
        </div> */}
        <Footer />
      </div>
    </Fragment>

  )
}

export default withRouter(HomePage)