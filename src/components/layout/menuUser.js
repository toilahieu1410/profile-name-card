import React, {Fragment} from "react"

const MenuUser = () => {

  const logout = () => {
    localStorage.removeItem('token1')
    window.location.href='/'
  }

  return (
    <Fragment>
      <div className="menu-user">
          <ul className="list-unstyled">
            <li>Thong tin ca nhan</li>
            <li onClick={() => logout()}><button>Dang xuat</button></li>
          </ul>
      </div>
    </Fragment>
  )
}

export default MenuUser