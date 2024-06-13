import { NavLink } from "react-router-dom";

export default function Header() {
    return <header className="transparent-header">
        <div className="heder-top-wrap">
            <div className="container custom-container-seven">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="header-top-left">
                            <ul className="list-wrap">
                                <li><i className="flaticon-location"></i>خیابان 256، خیابان مارک، شهر نیویورک</li>
                                <li><i className="flaticon-mail"></i><a href="mailto:test@gmail.com">test@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="header-top-right">
                            <div className="header-contact">
                                <a href="tel:0123456789"><i className="flaticon-phone-call"></i>+123 8989 444</a>
                            </div>
                            <div className="header-social">
                                <ul className="list-wrap">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sticky-header" className="menu-area menu-area-six">
            <div className="container custom-container-seven">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                                <div className="logo">
                                    <NavLink to="/"><img src="assets/img/logo/w_logo02.png" alt="Logo"/></NavLink>
                                </div>
                                <div className="navbar-wrap main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><NavLink to="blocks"> سنگ ها </NavLink>
                                            <ul className="sub-menu mega-menu">
                                                <li>
                                                    <ul className="mega-sub-menu">
                                                        <li><a href="index.html">سرمایه گذاری</a></li>
                                                        <li><a href="index-2.html">مشاوره</a></li>
                                                        <li><a href="index-3.html">بیمه</a></li>
                                                        <li><a href="index-4.html">دیجیتال مارکتینگ</a></li>
                                                        <li><a href="index-5.html">کسب و کار</a></li>
                                                        <li><a href="index-6.html">استراتژی کسب و کار <span className="badge">جدید</span></a></li>
                                                        <li><a href="index-7.html">مشاوره شخصی <span className="badge">جدید</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="mega-sub-menu">
                                                        <li><a href="index-8.html">شرکتی <span className="badge">جدید</span></a></li>
                                                        <li><a href="index-9.html">مشاوره کسب و کار <span className="badge">جدید</span></a></li>
                                                        <li className="active"><a href="index-10.html">کارآفرینی <span className="badge">جدید</span></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">درباره ما</a>
                                            <ul className="sub-menu">
                                                <li><a href="about.html">درباره امور مالی</a></li>
                                                <li><a href="about-2.html">درباره مشاوره</a></li>
                                                <li><a href="about-3.html">درباره بیمه</a></li>
                                                <li><a href="about-4.html">درباره آژانس دیجیتال</a></li>
                                                <li><a href="about-5.html">درباره تجارت</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">برگه ها</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children"><a href="services.html">خدمات ما</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="services.html">خدمات مالی</a></li>
                                                        <li><a href="services-2.html">خدمات مشاوره</a></li>
                                                        <li><a href="services-3.html">خدمات بیمه</a></li>
                                                        <li><a href="services-4.html">خدمات آژانس</a></li>
                                                        <li><a href="services-5.html">خدمات شغلی</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="services-details.html">برگه خدمات</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="services-details.html">برگه خدمات 1</a></li>
                                                        <li><a href="services-details-2.html">برگه خدمات 2</a></li>
                                                        <li><a href="services-details-3.html">برگه خدمات 3</a></li>
                                                        <li><a href="services-details-4.html">برگه خدمات 4</a></li>
                                                        <li><a href="services-details-5.html">برگه خدمات 5</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="project-details.html">جزئیات نمونه کار</a></li>
                                                <li><a href="team-details.html">اعضای تیم</a></li>
                                                <li><a href="error.html">ارور 404</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">وبلاگ</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">وبلاگ</a></li>
                                                <li><a href="blog-details.html">جرئیات وبلاگ</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">تماس با ما</a></li>
                                    </ul>
                                </div>
                                <div className="header-action header-action-six d-none d-md-block">
                                    <ul className="list-wrap">
                                        <li className="header-search"><a href="#"><i className="flaticon-search"></i></a></li>
                                        <li className="header-btn"><a href="contact.html" className="btn btn-two">دریافت شماوره</a></li>
                                    </ul>
                                </div>
                                <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                            </nav>
                        </div>

                        {/* <!-- Mobile Menu  --> */}
                        <div className="mobile-menu">
                            <nav className="menu-box">
                                <div className="close-btn"><i className="fas fa-times"></i></div>
                                <div className="nav-logo">
                                    <NavLink to="/"><img src="assets/img/logo/logo.png" alt="Logo"/></NavLink>
                                </div>
                                <div className="mobile-search">
                                    <form action="#">
                                        <input type="text" placeholder="جستجو کنید ..."/>
                                        <button><i className="flaticon-search"></i></button>
                                    </form>
                                </div>
                                <div className="menu-outer">
                                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                                </div>
                                <div className="social-links">
                                    <ul className="clearfix list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="menu-backdrop"></div>
                        {/* <!-- End Mobile Menu --> */}

                    </div>
                </div>
            </div>
        </div>

        {/* <!-- header-search --> */}
        <div className="search-popup-wrap" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="search-close">
                <span><i className="fas fa-times"></i></span>
            </div>
            <div className="search-wrap text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title">... جستو کنید ...</h2>
                            <div className="search-form">
                                <form action="#">
                                    <input type="text" name="search" placeholder="کلمه کلیدی خود را تایپ کنید"/>
                                    <button className="search-btn"><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- header-search-end --> */}

        {/* <!-- offCanvas-menu --> */}
        <div className="extra-info">
            <div className="close-icon menu-close">
                <button><i className="far fa-window-close"></i></button>
            </div>
            <div className="logo-side mb-30">
                <NavLink to="/"><img src="assets/img/logo/logo.png" alt="Logo"/></NavLink>
            </div>
            <div className="side-info mb-30">
                <div className="contact-list mb-30">
                    <h4>آدرس محل کار</h4>
                    <p>تهران بلوار صداقت <br/> کوچه 12</p>
                </div>
                <div className="contact-list mb-30">
                    <h4>شماره تماس</h4>
                    <p>0936-111-1111</p>
                    <p>0936-111-1112</p>
                </div>
                <div className="contact-list mb-30">
                    <h4>آردس ایمیل</h4>
                    <p>info@example.com</p>
                    <p>example.mail@hum.com</p>
                </div>
            </div>
            <ul className="side-instagram list-wrap">
                <li><a href="#"><img src="assets/img/images/sb_insta01.jpg" alt=""/></a></li>
                <li><a href="#"><img src="assets/img/images/sb_insta02.jpg" alt=""/></a></li>
                <li><a href="#"><img src="assets/img/images/sb_insta03.jpg" alt=""/></a></li>
                <li><a href="#"><img src="assets/img/images/sb_insta04.jpg" alt=""/></a></li>
                <li><a href="#"><img src="assets/img/images/sb_insta05.jpg" alt=""/></a></li>
                <li><a href="#"><img src="assets/img/images/sb_insta06.jpg" alt=""/></a></li>
            </ul>
            <div className="social-icon-right mt-30">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="offcanvas-overly"></div>
        {/* <!-- offCanvas-menu-end --> */}

    </header>;
};
