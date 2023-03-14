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
import moment from 'moment/moment';

const CardName = () => {

  const dispatch = useDispatch()

  // const slug = window.location.pathname.replace('/', '')

  const slug = useParams()
  const listNameCard = useSelector((store) => store.nameCard.listNameCard)
  const [urlWeb, setUrlWeb] = useState('https://gigadigital.vn')
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    // Lưu trữ giá trị slug vào localStorage
    localStorage.setItem('slug', slug.slug);
  }, [slug]);
  

  useEffect(() => {
    dispatch(getNameCard(slug.slug))
  }, [slug])

  const date2 = new Date(listNameCard.birthday);
  const ageInMilliseconds = Date.now() - date2.getTime() ;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  //download img QRCode
  const download = () => {
    const svg = document.getElementById('QRCode')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = 'gigaDigital'
      downloadLink.href = `${pngFile}`
      downloadLink.click()
    }
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
  }

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
                      <h3 className='mb-1'> <span className='fw-bold'>{listNameCard.name}</span></h3>
                    </div>
                    <div className='profile-job'>
                      <p className='mb-0'>{listNameCard.subname == null ? '' : '(' + listNameCard.subname + ')'} </p>
                    </div>
                    <div className='profile-job'>
                      <p className='mb-0'>{listNameCard.jobTitle}</p>
                    </div>
                  </div>
                  <div className='vertical-line'>
                  </div>
                  <div className='profile-list-user '>
                    <ul className='list-unstyled'>
                
                      <li><strong>Tuổi</strong><span>{Math.floor(ageInYears)}</span></li>
                      <li><strong>Địa chỉ</strong><span>{listNameCard.streetAddress}</span></li>
                      <li><strong>Email</strong><span>{listNameCard.mailingAddress}</span></li>
                      <li><strong>Phone</strong><span>{listNameCard.phone1}  {listNameCard.phone2 != null && (' - ' + listNameCard.phone2)}</span></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className='profile-social'>
              <ul className='list-unstyled d-flex mb-0 justify-content-center'>
                <li><a href='#' className='text-white'><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href='#' className='text-white'><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href='#' className='text-white'><i className="fab fa-dribbble" aria-hidden="true"></i></a></li>
                <li><a href='#' className='text-white'><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href='#' className='text-white'><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href='#' className='text-white'><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
          <div className='section-contact mt-4'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='section-box'>
                    <h3 className='mb-4'>Thông tin liên hệ</h3>
                    <ul className='list-unstyled list-contact'>
                      <li className='mb-3'>
                        <strong>Email</strong>
                        <a href={`mailto:${listNameCard.mailingAddress}`} className='text-decoration-none'>{listNameCard.mailingAddress}</a>
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
                        <strong>Address</strong>
                        <span>{listNameCard.streetAddress}</span>
                      </li>
                      <li className='mb-3'>
                        <strong>Trực thuộc</strong>
                        <span>{listNameCard.company === 'hoplong' ? 'Hợp Long' : 'Giga Digital'}</span>
                      </li>
                      <li className='mb-3'>
                        <strong>Facebook</strong>
                        <a href='#'>{listNameCard.facebook}</a>
                      </li>
                    </ul>
                  </div>
                </div>
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
                      {/* <div className='button text-left mt-3'>
                        <button type='button' className='btn btn-primary'>Gửi</button>
                      </div> */}
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



    // <div className='section-about'>
    //    {/* <Outlet /> */}
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-md-12'>
    //         <div className='title-wrapper text-center'>
    //           <strong>{listNameCard.name}</strong>
    //         </div>
    //         <div className='title-wrapper-child text-center'>
    //           <h2>{listNameCard.name}</h2>
    //           <h4 className='mt-3'><strong><span className='text-primary'>{listNameCard.department}</span> / {listNameCard.jobTitle}</strong></h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='row content-detail'>
    //       <div className='col-md-4 pl-0'>
    //         <div className='image-avatar'>
    //           <img src={Image} alt={listNameCard.company} className='w-100' />
    //         </div>
    //       </div>
    //       <div className='col-md-8'>
    //         <div className='information'>

    //           <div className='row'>
    //             <div className='col-6'>
    //               <ul className='list-unstyled'>
    //                 <li>
    //                   <p>Công ty: <span>{listNameCard.companyName}</span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Trực thuộc: <span>{listNameCard.company === 'hoplong' ? 'Hợp Long' : 'Giga Digital'}</span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Số điện thoại: <span>{listNameCard.phone1}</span></p>
    //                 </li>

    //                 <li>
    //                   <p>Địa chỉ: <span>{listNameCard.streetAddress}</span></p>
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className='col-6'>
    //               <ul className='list-unstyled'>
    //                 <li>
    //                   <p className=''>Website: <span><a href={listNameCard.website}  className='text-decoration-none text-black'>{listNameCard.website}</a></span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Facebook: <span><a href={listNameCard.facebook}  className='text-decoration-none text-black'>{listNameCard.facebook}</a></span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Youtube: <span><a href={listNameCard.youtube}  className='text-decoration-none text-black'>{listNameCard.youtube}</a></span></p>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='row'>
    //     <div className='footer mt-3'>
    //       <FooterCard listNameCard={listNameCard}/>
    //     </div>
    //     </div>

    //   </div>
    //   <div className='info-card'>
    //     {/* <div className='d-flex align-items-center'>
    //       <div className='info-left'>
    //         <div className='dashboard-content-top'>
    //           <div className='img-banner'>
    //             <figure className='figure'>
    //               <img className='img-fluid' alt="logo" src={Image} height={300} />
    //             </figure>
    //           </div>

    //           <div className='card-content'>
    //             <div className='card-title'>
    //               <h4 className='card-name'>Nguyen Minh Hieu</h4>
    //               <p className='mb-0'>Lap trinh vien</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className='dashboard-content-bottom'>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.companyName} </h6>
    //                 <p className='fw-bold mb-0'>Company</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.jobTitle} </h6>
    //                 <p className='fw-bold mb-0'>Job Title</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.department}</h6>
    //                 <p className='fw-bold mb-0'>Department</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'>{listNameCard.phone1} </h6>
    //                 <p className='fw-bold mb-0'>Mobile</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.phone2} </h6>
    //                 <p className='fw-bold mb-0'>Phone</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.mailingAddress}</h6>
    //                 <p className='fw-bold mb-0'>Email</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.website} </h6>
    //                 <p className='fw-bold mb-0'>Website</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.streetAddress} </h6>
    //                 <p className='fw-bold mb-0'>Street Address</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='list-items'>
    //             <div className='d-flex align-items-center'>
    //               <span className='mr-10'><BiBuildingHouse size={30} className='text-black' /></span>
    //               <div className='list-item-text border-bottom-1'>
    //                 <h6 className='mb-0'> {listNameCard.facebook} </h6>
    //                 <p className='fw-bold mb-0'>Facebook</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className='info-right'>

    //       </div>
    //     </div> */}


    //     {/* <div className='d-inline-block w-100 h-100 position-relative'>
    //       <div className='name-card'>
    //         <div className='top'></div>
    //         <div className='middle'>
    //           <div className='inner-middle mt-3'>
    //             <div className='d-flex align-items-top justify-content-between position-relative'>
    //               <div className='left' style={{ flex: 3 }}>
    //                 <h4 className='title-name-card  mb-0'>{data.name}</h4>
    //                 <h6 className='job'>{data.job}</h6>
    //                 <div className='mt-3 position-absolute info'>
    //                   <h5 className='title-name-card mb-3'>{data.company} </h5>
    //                   <p className='mb-1'>Tầng 3 - tòa HH01A - 87 Lĩnh Nam</p>
    //                   <p className='mb-1'>SĐT: {data.phone}</p>
    //                   <p className='mb-1 text-white'>{data.address}</p>
    //                   <p className='mb-1 text-white'>https://gigadigital.vn</p>
    //                 </div>
    //               </div>
    //               <div className='right' style={{ flex: 2 }}>
    //                 <img src={LogoGiga} className='w-100' />
    //               </div>
    //             </div>
    //           </div>
    //           <div className='qr-code'>
    //             <QRCode
    //               size={100}
    //               value={urlWeb}
    //               viewBox={`0 0 256 256`}
    //               id='QRCode'
    //             />
    //           </div>
    //         </div>
    //         <div className='bottom'>
    //           <div className='inner-bottom'></div>
    //         </div>
    //       </div>
    //       <div className='list-button'>
    //         <input type={'button'} className='btn btn-success' value={'download'} onClick={download} />
    //       </div>
    //     </div> */}
    //   </div>
    // </div>

  )
}

export default CardName
