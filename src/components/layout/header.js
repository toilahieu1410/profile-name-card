import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { _login, _register } from "../../api/auth"
import { getCity, getDistrict } from "../../redux/address/action"
import { getProfile } from "../../redux/profile/action"
import useToken from "../../utilities/useToken"
import jwt_decode from 'jwt-decode'
import { Modal, ModalHeader, ModalBody, Button, Label } from "reactstrap"
import { toast } from "react-toastify"
import MenuUser from "./menuUser"
import ListAddress from "./listAddress"

const Header = () => {
  const dispatch = useDispatch()

  const location = useHistory()

  const token = useToken()
  const { setToken } = useToken()

  const listProfile = useSelector(store => store.profile.listProfile)
  const [modal, setModal] = useState(false)
  const [decoded, setDecoded] = useState(token)

  const handleModal = () => setModal(!modal)

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  useEffect(() => {
    if (token.token) {
      let decoded = jwt_decode(token.token != null && token.token)
      setDecoded(decoded)
    }
  }, [])

  const onSubmitLogin = (data) => {
    _login(data).then(res => {
      if (res.status === 200) {
        setToken(res.data)
        window.location.href = location.pathname
      } else {
        toast.info("Sai tài khoản")
      }
    })
      .catch(() => {
        toast.error("Sai tài khoản hoặc mật khẩu")
      })
  }

  return (
    <header className="header">
      <div className="header-top bg-blue">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0norbR0dVwUMVB0AIHIAD9eUHBa6lpRqapwr23V3yVM77kqURw8HJGuyqLSf2JoZnp0&usqp=CAU" />
            </div>
            <div className="col-md-8">
              <div className="list-header">
                <ul className="list-unstyled d-flex align-items-center">
                  <li>trang chu</li>
                  <li>xem them</li>
                  <li>

                    <div className="col-md-12 text-center">
                      {token.token ? (
                        <div className="username">
                          <h6 className="login-success">{decoded.username}</h6>
                          <MenuUser />
                        </div>
                      ) : (
                        <div className="btn btn-login">
                          <a href="#" onClick={handleModal}>
                            <button className="btn btn-success">Đăng nhập</button>
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
              <ViewLogin onSubmitLogin={onSubmitLogin} modal={modal} handleModal={handleModal} />

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

const ViewLogin = (props) => {
  const { modal, handleModal, onSubmitLogin } = props

  const [modalRegister, setModalRegister] = useState(false)

  const handleModalRegister = () => setModalRegister(!modalRegister)

  const { register, handleSubmit, formState: { errors } } = useForm({})
  return (
    <Modal isOpen={modal} size='lg'>
      <ModalHeader toggle={handleModal}>Title</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmitLogin)} className='form-horizonal mt-3'>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Username</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Ten dang nhap"
                {...register("username", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Password</Label>
            <div className="col-md-8">
              <input type={'password'} className="form-control" placeholder="Mat khau"
                {...register("password", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group ">
          <button className="btn btn-success" >Đăng nhập</button>
          <button className="btn btn-success mt-3" >Đăng nhập bằng Google</button>
          </div>
        </form>
        <div className="row form-group">
   
            <button className="btn btn-info" onClick={() => handleModalRegister()}>Đăng kí</button>
          </div>
          <ViewRegister modalRegister={modalRegister} handleModalRegister={handleModalRegister} />
      </ModalBody>
    </Modal>
  )
}

const ViewRegister = (props) => {
  const dispatch = useDispatch()
  const { modalRegister, handleModalRegister,onSubmitLogin } = props
  const { register, handleSubmit, formState: { errors } } = useForm({})

  const listStreet = useSelector(store => store.address.listStreet)
  const listDistrict = useSelector(store => store.address.listDistrict)

  const [street, setStreet] = useState(null)

  useEffect(() => {
    dispatch(getCity())
  }, [])

  useEffect(() => {
    if (street) {
      const IdStreet = listStreet.LtsItem.find(item => item.Title == street)
      dispatch(getDistrict(IdStreet.ID))
    }
  }, [street])

  const onSubmitRegister = (data) => {
    console.log(data)
    Object.assign(data, {systemCity: street})
    if(data.sex) {
      data.sex = JSON.parse(data.sex)
    } 
    _register(data).then(res => {
      console.log(data, res)
      if (res.status == 200) {
        toast.success('Tao tai khoan thanh cong')
        const result = {username: data.username, password: data.password}
        onSubmitLogin(result)
      }
    })
      .catch(error => {
        toast.info('Tao that bai')
      })
  }
  return (
    <Modal isOpen={modalRegister}>
      <ModalHeader toggle={handleModalRegister}>
        Đăng ký
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
        <div className="row form-group">
            <Label className="col-form-label col-md-4">Tai khoan</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Ten nguoi dung"
                {...register("name", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Username</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Ten dang nhap"
                {...register("username", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Password</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Mat khau"
                {...register("password", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Confirm Password</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Nhap lai mat khau"
                {...register("confirmPassword", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Email</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Email" 
               {...register("email", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Phone</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Nhap so dien thoai" 
                {...register("phone", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Địa chỉ</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Nhap dia chi" 
                {...register("address", { required: 'Khong duoc de trong' })} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Thanh phố</Label>
            <div className="col-md-8">
              <select className="form-control" onChange={(e) => setStreet(e.target.value)}>
                {listStreet && listStreet.LtsItem.map((item, index) => (
                  <option key={index} value={item.Title}>{item.Title}</option>
                ))}
              </select>

            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Quận huyện</Label>
            <div className="col-md-8">
              <select className="form-control"         {...register("systemDistrict", { required: 'Không được để trống' })} >
                {street && (listDistrict.map((item, index) => (
                  <option key={index}>{item.Title}</option>
                )))}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Giới tính</Label>
            <div className="col-md-8">
              <select className="form-control" {...register("sex")}>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
          </div>
          <div className="">

          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Avatar</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Số TK ngân hàng</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Nhập số TK" />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Chi nhánh ngân hàng</Label>
            <div className="col-md-8">
              <input className="form-control" type={"text"} placeholder="Chi nhánh" />
            </div>
          </div>
          <div className="row form-group">
            <Label className="col-form-label col-md-4">Type</Label>
            <div className="col-md-8">
              <select className="form-control" {...register("type")}>
                <option value={'local'}>local</option>
                <option value={'facebooks'}>Facebook</option>
              </select>
            </div>
          </div>
          <div className="row form-group">
            <button className="btn btn-success" >Đăng kí</button>
            <Button color="secondary" onClick={handleModalRegister}>
              Cancel
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}