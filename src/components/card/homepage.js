import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams, Outlet } from 'react-router-dom'
import { BiBuildingHouse } from "react-icons/bi";

import QRCode from 'react-qr-code'
import LogoGiga from '../../assets/img/logo-giga.png'
import { getNameCard, getNewBySlug } from '../../redux/nameCard/action'
import FooterCard from '../footer';
import LogoHopLong from '../../assets/img/logo-hoplong-white.png'
import { checkImage } from '../../utilities/checkImage';

const Page = () => {

  const dispatch = useDispatch()

  const slug = useParams()
  const listNameCard = useSelector((store) => store.nameCard.listNameCard)

  const [urlWeb, setUrlWeb] = useState('https://gigadigital.vn')
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)




  return (
    <div className='section-about'>
    <header className='header position-relative'>
      <div className='header-bg position-absolute top-0'>
        <div className=''>

        </div>
      </div>
      <div className='header-tab-bar w-100'>
        <div className='col-md-12 text-center pt-3'>
          <img src={LogoHopLong} className='w-15 position-relative' />
        </div>
      </div>
    </header>
    <section className='section-content'>
      <div className='container'>
        <div className='about-info bg-white'>
          <div className='p-4 section-box'>
            <div className='row'>
              <div className='col-sm-5'>
                <div className='profile-user'>
                  <img src={checkImage(listNameCard.avatar)} className='w-100 position-relative' />
                </div>
              </div>
              <div className='col-sm-7 pb-3'>
                <div className='profile-info-user'>
                  <div className='profile-hello'>
                    <span>Xin chào</span>
                  </div>
                  <div className='profile-username mt-4'>
                    <h3 className='mb-1'>Tôi là <span className='fw-bold'>{listNameCard.name}</span></h3>
                  </div>
                  <div className='profile-job'>
                    <p className='mb-0'>{listNameCard.jobTitle}</p>
                  </div>
                </div>
                <div className='vertical-line'>
                </div>
                <div className='profile-list-user '>
                  <ul className='list-unstyled'>
                    <li><strong>Tuổi</strong><span>29</span></li>
                    <li><strong>Địa chỉ</strong><span>{listNameCard.streetAddress}</span></li>
                    <li><strong>Email</strong><span>{listNameCard.mailingAddress}</span></li>
                    <li><strong>Phone</strong><span>{listNameCard.phone1}  {listNameCard.phone2}</span></li>
                    <li><strong>Facebook</strong><span>{listNameCard.facebook}</span></li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
          <div className='profile-social'>
            <ul className='list-unstyled d-flex mb-0 justify-content-center'>
              <li><a href='#' className='text-white'><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href='#' className='text-white'><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href='#' className='text-white'><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
              <li><a href='#' className='text-white'><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href='#' className='text-white'><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href='#' className='text-white'><i class="fab fa-google-plus" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
        <div className='section-contact mt-4'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='section-box'>
                  <h3 className='mb-4'>Gửi ý kiến của bạn</h3>
                  <form className='contact-form' method='post'>
                    <div className='input-form form-group'>
                      <input className='form-control' value={name} type={'text'} name='name' onChange={(e) => setName(e.target.value)} />
                      <label className={name && 'filled'} htmlFor='name'>Name</label>
                    </div>
                    <div className='input-form form-group'>
                      <input className='form-control' type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                      <label className={email && 'filled'} htmlFor='email'>Email</label>
                    </div>
                    <div className='input-form form-group'>
                      <input className='form-control' type={'text'} name='name' value={subject} onChange={(e) => setSubject(e.target.value)} />
                      <label className={subject && 'filled'}>Subject</label>
                    </div>
                    <div className='input-form form-group'>
                      <textarea className='form-control' type={'text'} name='name' value={message} onChange={(e) => setMessage(e.target.value)} rows='3'></textarea>
                      <label className={message && 'filled'}>Message</label>
                    </div>
                    <div className='input-form-check form-group'>
                      <input type={'checkbox'} />
                      <label className='col-form-label ml-10'>Tôi đã đọc chính sách</label>
                    </div>
                    <div className='button text-left mt-3'>
                      <button type='button' className='btn btn-primary'>Gửi</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='section-box'>
                  <h3 className='mb-4'>Thông tin liên hệ</h3>
                  <ul className='list-unstyled list-contact'>
                    <li className='mb-3'>
                      <strong>Email</strong>
                      <a href={`mailto:${listNameCard.mailingAddress}`}>{listNameCard.mailingAddress}</a>
                    </li>
                    <li className='mb-3'>
                      <strong>Phone1</strong>
                      <span>{listNameCard.phone1}</span>
                    </li>
                    <li className='mb-3'>
                      <strong>Phone2</strong>
                      <span>{listNameCard.phone2}</span>
                    </li>
                    <li className='mb-3'>
                      <strong>Facebook</strong>
                      <a href='#'>{listNameCard.facebook}</a>
                    </li>
                    <li className='mb-3'>
                      <strong>Address</strong>
                      <span>{listNameCard.streetAddress}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


  )
}
export default Page