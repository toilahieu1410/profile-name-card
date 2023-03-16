import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams, Outlet } from 'react-router-dom'
import { BiBuildingHouse } from "react-icons/bi";

import QRCode from 'react-qr-code'
import { getAllNameCard, getNameCard, getNewBySlug } from '../../redux/nameCard/action'
import LogoHopLong from '../../assets/img/logo-hoplong-white.png'
import LogoGiga from '../../assets/img/logo-giga.png'
import BannerHopLong from '../../assets/img/hoplong.jpg'
import { checkImage } from '../../utilities/checkImage';

const Page = () => {

  const dispatch = useDispatch()

  const slug = useParams()
  const listNameCard = useSelector((store) => store.nameCard.listNameCard)
  const listAllNameCard = useSelector((store) => store.nameCard.listAllNameCard)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  const savedSlug = (localStorage.getItem('slug'));
  useEffect(() => {
    const params = {
      page: page,
      perPage: perPage
    }
    dispatch(getAllNameCard(params))
  }, [page, perPage])

  useEffect(() => {
    dispatch(getNameCard(savedSlug))
  }, [savedSlug])


  return (

    <div className='homepage'>
      {/* <div className='top-bar'>
        <div className='container'>
          <ul className='list-unstyled nav nav-pills d-flex p-1'>
            <li className='nav-item text-white'>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span className='ms-2'>info@hoplongtech.com.vn</span>
            </li>
            <li className='nav-item text-white'>
              <i className="fas fa-phone" aria-hidden="true"></i>
              <span className='ms-2'> 1900.6536</span>
            </li>

            <li className='nav-item text-white'>
              <i className="fas fa-clock" aria-hidden="true"></i>
              <span className='ms-2'>Open time: 08:00 AM - 06:00 PM</span>
            </li>
          </ul>
        </div>
      </div> */}
      {listNameCard == null ? (
        <div className={'menu-homepage'}>
          <div className='container'>
            <nav className='navbar navbar-expand-md '>
            <a href='/' className='flex-1'><img src={LogoHopLong} className='w-40' /></a>

              <button className='navbar-toggler collapsed' type='button' data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="icon-bar"><i className="fa fa-bars "></i></span>
              </button>
              <div className='navbar-collapse collapse' id="collapsibleNavbar">
                <ul className='ms-auto navbar-nav me-auto'>
                  <li className='nav-item me-5'><a className='nav-link text-white' href='/'><strong>Home</strong></a></li>
                  <li className='nav-item'><span className='nav-link text-white'><strong>Detail</strong></span></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      ) : (
        <div className={ listNameCard.company == 'hoplong' ? 'menu-homepage' : 'menu-homepage-giga'}>
          <div className='container'>
            <nav className='navbar navbar-expand-md '>
              {listNameCard.company == 'hoplong' ? (
                <a href='/' className='flex-1'><img src={LogoHopLong} className='w-40' /></a>
              ) : (
                <a href='/' className='flex-1'><img src={LogoGiga} className='w-40' /></a>
              )}

              <button className='navbar-toggler collapsed' type='button' data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="icon-bar"><i className="fa fa-bars "></i></span>
              </button>
              <div className='navbar-collapse collapse' id="collapsibleNavbar">
                <ul className='ms-auto navbar-nav me-auto'>
                  <li className='nav-item me-5'><a className='nav-link text-white' href='/'><strong>Home</strong></a></li>
                  <li className='nav-item'><a className='nav-link text-white' href={`${process.env.REACT_APP_DOMAIN_NAMECARD}${listNameCard.slug}`}><strong>Detail</strong></a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}
 
      <section className='banner-image'>
        {/* <img src={BannerHopLong} className='w-100' /> */}
      </section>
      <section className='introduction mt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='bg-white'>
                <div className='section p-4'>
                  <h4>Giới thiệu</h4>
                  <p>Thành lập từ 2010 với mô hình kinh doanh đầu tiên là <strong>phân phối thiết bị tự động hóa và giải pháp tích hợp Robot công nghiệp</strong> cho các nhà máy sản xuất.</p>
                  <p>Đến nay, Hợp Long không ngừng phát triển, đi đến ký kết hợp tác chính thức và trở thành một trong những nhà phân phối lớn nhất các sản phẩm từ những nhà cung cấp thiết bị điện tử hàng đầu thế giới tại Việt Nam: Schneider, Autonics, Omron, LS, Hanyoung, Mitsubishi, Patlite, Siemens, Delta,….. </p>
                  <p>Ngoài trụ sở chính tại Hà Nội, Hợp Long còn có các chi nhánh đặt tại 4 thành phố cấp 1: Thành phố Hồ Chí Minh, Đà Nẵng, Hải Phòng, Bắc Ninh</p>
                  <p>Hệ thống kho hàng của Hợp Long là một trong những kho hàng thiết bị tự động hóa lớn nhất Đông Nam Á với diện tích trên 5000m2, cùng với nhà máy có diện tích gần 2000m2, được trang bị nhiều máy móc hiện đại nhập khẩu từ Nhật Bản và Châu Âu.</p>
                </div>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='bg-white'>
                <div className='section p-4'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='choose-item '>
                        <div className='text-center'>
                          <i className='fas fa-eye fa-2x'></i>
                          <h4>Tầm nhìn</h4>
                        </div>
                        <p>    Trở thành công ty kinh doanh thiết bị tự động hóa hàng đầu với phương châm phát triển bền vững, tạo dựng niềm tin, góp phần thay đổi diện mạo nền công nghiệp trong nước và vươn tầm thế giới.</p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='choose-item'>
                        <div className='text-center'>
                          <i className="fas fa-sun fa-2x"></i>
                          <h4>Sứ mệnh</h4>
                        </div>

                        <p>    - Cung cấp giải pháp hoàn thiện cho mọi vấn đề sản xuất của doanh nghiệp.</p>
                        <p>        - Mang lại giá trị về chuyên nghiệp và sự thịnh vượng cho nhân viên công ty.</p>
                      </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                      <div className='choose-item-detail'>
                        <div className='text-center'>
                          <i className='fas fa-star fa-2x'></i>
                          <h4>Giá trị cốt lõi</h4>
                        </div>

                        <p className='mb-2'> - Tiên phong mở đường và mạnh dạn đương đầu với những thử thách</p>
                        <p className='mb-2'> - Đổi mới và năng động để phát triển bền vững</p>
                        <p className='mb-2'> - Cam kết chất lượng là nguyên tắc ứng xử của mỗi thành viên trong phục vụ khách hàng và đối tác</p>
                        <p className='mb-2'> - Trách nhiệm với cộng đồng</p>
                        <p className='mb-2'> - Phấn đấu phát triển bền vững</p>
                        <p className='mb-2'> - Tạo dựng môi trường làm việc tốt nhất cho các thành viên công ty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



    //   <div classNameName='section-about'>
    //   <header className='header position-relative'>
    //     <div className='header-bg position-absolute top-0'>
    //       <div className=''>

    //       </div>
    //     </div>
    //     <div className='header-tab-bar w-100'>
    //       <div className='col-md-12 text-center pt-3'>
    //         <img src={LogoHopLong} className='w-15 position-relative' />
    //       </div>
    //     </div>
    //   </header>
    //   <section className='section-content'>
    //     <div className='container'>
    //       <div className='about-info bg-white'>
    //         <div className='p-4 section-box'>
    //           <div className='row'>
    //             <div className='col-sm-5'>
    //               <div className='profile-user'>
    //                 <img src={checkImage(listNameCard.avatar)} className='w-100 position-relative' />
    //               </div>
    //             </div>
    //             <div className='col-sm-7 pb-3'>
    //               <div className='profile-info-user'>
    //                 <div className='profile-hello'>
    //                   <span>Xin chào</span>
    //                 </div>
    //                 <div className='profile-username mt-4'>
    //                   <h3 className='mb-1'>Tôi là <span className='fw-bold'>{listNameCard.name}</span></h3>
    //                 </div>
    //                 <div className='profile-job'>
    //                   <p className='mb-0'>{listNameCard.jobTitle}</p>
    //                 </div>
    //               </div>
    //               <div className='vertical-line'>
    //               </div>
    //               <div className='profile-list-user '>
    //                 <ul className='list-unstyled'>
    //                   <li><strong>Tuổi</strong><span>29</span></li>
    //                   <li><strong>Địa chỉ</strong><span>{listNameCard.streetAddress}</span></li>
    //                   <li><strong>Email</strong><span>{listNameCard.mailingAddress}</span></li>
    //                   <li><strong>Phone</strong><span>{listNameCard.phone1}  {listNameCard.phone2}</span></li>
    //                   <li><strong>Facebook</strong><span>{listNameCard.facebook}</span></li>
    //                 </ul>
    //               </div>

    //             </div>
    //           </div>

    //         </div>
    //         <div className='profile-social'>
    //           <ul className='list-unstyled d-flex mb-0 justify-content-center'>
    //             <li><a href='#' className='text-white'><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
    //             <li><a href='#' className='text-white'><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
    //             <li><a href='#' className='text-white'><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
    //             <li><a href='#' className='text-white'><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
    //             <li><a href='#' className='text-white'><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
    //             <li><a href='#' className='text-white'><i class="fab fa-google-plus" aria-hidden="true"></i></a></li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className='section-contact mt-4'>
    //         <div className='col-md-12'>
    //           <div className='row'>
    //             <div className='col-md-6'>
    //               <div className='section-box'>
    //                 <h3 className='mb-4'>Gửi ý kiến của bạn</h3>
    //                 <form className='contact-form' method='post'>
    //                   <div className='input-form form-group'>
    //                     <input className='form-control' value={name} type={'text'} name='name' onChange={(e) => setName(e.target.value)} />
    //                     <label className={name && 'filled'} htmlFor='name'>Name</label>
    //                   </div>
    //                   <div className='input-form form-group'>
    //                     <input className='form-control' type={'text'} name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    //                     <label className={email && 'filled'} htmlFor='email'>Email</label>
    //                   </div>
    //                   <div className='input-form form-group'>
    //                     <input className='form-control' type={'text'} name='name' value={subject} onChange={(e) => setSubject(e.target.value)} />
    //                     <label className={subject && 'filled'}>Subject</label>
    //                   </div>
    //                   <div className='input-form form-group'>
    //                     <textarea className='form-control' type={'text'} name='name' value={message} onChange={(e) => setMessage(e.target.value)} rows='3'></textarea>
    //                     <label className={message && 'filled'}>Message</label>
    //                   </div>
    //                   <div className='input-form-check form-group'>
    //                     <input type={'checkbox'} />
    //                     <label className='col-form-label ml-10'>Tôi đã đọc chính sách</label>
    //                   </div>
    //                   <div className='button text-left mt-3'>
    //                     <button type='button' className='btn btn-primary'>Gửi</button>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //             <div className='col-md-6'>
    //               <div className='section-box'>
    //                 <h3 className='mb-4'>Thông tin liên hệ</h3>
    //                 <ul className='list-unstyled list-contact'>
    //                   <li className='mb-3'>
    //                     <strong>Email</strong>
    //                     <a href={`mailto:${listNameCard.mailingAddress}`}>{listNameCard.mailingAddress}</a>
    //                   </li>
    //                   <li className='mb-3'>
    //                     <strong>Phone1</strong>
    //                     <span>{listNameCard.phone1}</span>
    //                   </li>
    //                   <li className='mb-3'>
    //                     <strong>Phone2</strong>
    //                     <span>{listNameCard.phone2}</span>
    //                   </li>
    //                   <li className='mb-3'>
    //                     <strong>Facebook</strong>
    //                     <a href='#'>{listNameCard.facebook}</a>
    //                   </li>
    //                   <li className='mb-3'>
    //                     <strong>Address</strong>
    //                     <span>{listNameCard.streetAddress}</span>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>


  )
}
export default Page