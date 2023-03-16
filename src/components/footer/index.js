import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser'
import { addressStore } from "../company/companyHopLong" 
import { BiHomeAlt, BiPhoneCall, BiMailSend } from "react-icons/bi"

const FooterCard = (props) => {

  const {listNameCard} = props

  const [address, setAddress] = useState(addressStore[0].store[0])

  const [cityBranch, setCityBranch] = useState(addressStore[0])

  useEffect(() => {
    setAddress(listNameCard.company == 'giga' ? cityBranch.store[0] : cityBranch.store[1])
  }, [cityBranch])


  return (
    listNameCard.company == 'giga' ? (
      <div className="contact">
      <div className="contact-map">
        {
          address != '' &&
          <p>
            {
              ReactHtmlParser(address && address.map)
            }
          </p>
        }
      </div>
      <div className="contact-info my-5">
        <div className="row justify-content-between">
          <div className="col-md-4 text-center">
            <div className="info">
              <h5 className="mb-0"> <BiPhoneCall size={35} className='text-primary' /><span className="ml-10">Điện thoại</span></h5>
              <p className="text-muted">0358.071.170</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="info">
              <h5 className="mb-0"> <BiHomeAlt size={35} className='text-primary' /><span className="ml-10">Địa chỉ</span></h5>
              <p className="text-muted">55 Thái Hà - Đống Đa - Hà Nội</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="info">
              <h5 className="mb-0"> <BiMailSend size={35} className='text-primary' /><span className="ml-10">Email</span></h5>
              <p className="text-muted">info@giga.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : (
      <div className="contact">
      <div className="contact-map">
        {
          address != '' &&
          <p>
            {
              ReactHtmlParser(address && address.map)
            }
          </p>
        }
      </div>
      <div className="contact-info my-5">
        <div className="row justify-content-between">
          <div className="col-md-4 text-center">
            <div className="info">
              <h5 className="mb-0"> <BiPhoneCall size={35} className='text-primary' /><span className="ml-10">Điện thoại</span></h5>
              <p className="text-muted">1900.6536</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="info">
              <h5 className="mb-0"> <BiHomeAlt size={35} className='text-primary' /><span className="ml-10">Địa chỉ</span></h5>
              <p className="text-muted">Tòa HH01A 87 Lĩnh Nam</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="info">
              <h5 className="mb-0"> <BiMailSend size={35} className='text-primary' /><span className="ml-10">Email</span></h5>
              <p className="text-muted">info@hoplongtech.com.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
   
  )
}

export default FooterCard