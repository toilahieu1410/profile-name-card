import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getNameCard } from '../../redux/nameCard/action'
import FooterCard from '../footer'

const Page = () => {

  const dispatch = useDispatch()


  // const slug = window.location.pathname.replace('/', '')
  const listNameCard = useSelector((store) => store.nameCard.listNameCard)

  const [urlWeb, setUrlWeb] = useState('https://gigadigital.vn')
  const Image = 'https://d957deb01da62e9b1e12-b8ef2f71c2d7eada5aab3537be8551cd.ssl.cf3.rackcdn.com/templates/861821/Banner_61f16394164db9.58841041.jpg'

  return (
    <div className='section-about'>
      <header className='header position-relative'>
        <div className='header-bg position-absolute top-0'>
          <div className=''>

          </div>
        </div>
        <div className='header-tab-bar w-100'>
          <div className='col-md-12 text-center'>
            <img src={Image} className='w-100' />
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
                    <img src={listNameCard.avatar} className='w-100' />
                  </div>
                </div>
                <div className='col-sm-7 pb-3'>
                  <div className='profile-info-user'>
                    <div className='profile-hello'>
                      <span>Xin chào</span>
                    </div>
                    <div className='profile-username'>
                      <h3>Tôi là: <span className='fw-bold'>{listNameCard.name}</span></h3>
                    </div>
                    <div className='profile-job'>
                      <p className='mb-0'>{listNameCard.jobTitle}</p>
                    </div>
                  </div>
                  <div className='profile-list-user pt-3'>
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
          </div>
        </div>
      </section>
    </div>

    // <div className='section-about'>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-md-12'>
    //         <div className='title-wrapper text-center'>
    //           <strong>{'Thông tin cá nhân'}</strong>
    //         </div>
    //         <div className='title-wrapper-child text-center'>
    //           <h2>{'Thông tin cá nhân'}</h2>
    //           <h4 className='mt-3'><strong><span className='text-primary'>{listNameCard.department}</span> / {listNameCard.jobTitle}</strong></h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='row content-detail'>
    //       <div className='col-md-4 pl-0'>
    //         <div className='image-avatar'>
    //           <img src={Image} alt={'logo'} className='w-100' />
    //         </div>
    //       </div>
    //       <div className='col-md-8'>
    //         <div className='information'>
    //           <div className='row'>
    //             <div className='col-6'>
    //               <ul className='list-unstyled'>
    //                 <li>
    //                   <p>Công ty: <span>{ }</span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Trực thuộc: <span>{ }</span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Số điện thoại: <span>{ }</span></p>
    //                 </li>
    //                 {/* {listNameCard.phone2 != null && (
    //                   <li>
    //                     <p className=''> <span>{listNameCard.phone2}</span></p>
    //                   </li>
    //                 )} */}
    //                 <li>
    //                   <p>Địa chỉ: <span>{ }</span></p>
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className='col-6'>
    //               <ul className='list-unstyled'>
    //                 <li>
    //                   <p className=''>Website: <span><a className='text-decoration-none text-black'>{listNameCard.website}</a></span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Facebook: <span><a className='text-decoration-none text-black'>{listNameCard.facebook}</a></span></p>
    //                 </li>
    //                 <li>
    //                   <p className=''>Youtube: <span><a className='text-decoration-none text-black'>{listNameCard.youtube}</a></span></p>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='row'>
    //       <div className='footer mt-3'>
    //         <FooterCard listNameCard={listNameCard} />
    //       </div>
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
export default Page