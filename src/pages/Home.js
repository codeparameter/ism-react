import usePageTitle from "../utils/usePageTitle";

export default function Home() {
  usePageTitle("home");
  
    return <>
        
        {/* <!-- banner-area --> */}
        <section className="banner-area-nine banner-bg-nine" data-background="assets/img/banner/banner01.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content-nine">
                            <h2 className="title wow" data-aos="fade-up" data-aos-delay="200">پتانسیل کسب و کار خود را باز کنید</h2>
                            <p data-aos="fade-up" data-aos-delay="400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            <div className="banner-btn-nine" data-aos="fade-up" data-aos-delay="600">
                                <a href="about.html" className="btn btn-three btn-four">مطالعه بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-wrap-nine">
                <img src="/assets/img/banner/h10_hero_shape01.png" alt="shape" data-aos="fade-down-left" data-aos-delay="600"/>
                <img src="/assets/img/banner/h10_hero_shape02.png" alt="shape" data-aos="fade-up-right" data-aos-delay="600"/>
                <img src="/assets/img/banner/h10_hero_shape03.png" alt="shape" data-aos="fade-up-right" data-aos-delay="800"/>
            </div>
        </section>
        {/* <!-- banner-area-end --> */}

        {/* <!-- features-area --> */}
        <section className="features-area-ten features-bg-three" data-background="assets/img/bg/h10_features_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title-four text-center mb-50 z-index-1 position-relative tg-heading-subheading animation-style2">
                            <span className="sub-title">از دسترسی بالا به خدمات خود اطمینان حاصل کنید</span>
                            <h2 className="title">بهترین راه حل ها موفقیت تجاری باورنکردنی</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="features-item">
                            <div className="features-content">
                                <div className="content-top">
                                    <div className="icon">
                                        <i className="flaticon-puzzle-piece"></i>
                                    </div>
                                    <h2 className="title">خدمات با کیفیت</h2>
                                </div>
                                <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="features-item">
                            <div className="features-content">
                                <div className="content-top">
                                    <div className="icon">
                                        <i className="flaticon-inspiration"></i>
                                    </div>
                                    <h2 className="title">ایده های نوآوری</h2>
                                </div>
                                <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="features-item">
                            <div className="features-content">
                                <div className="content-top">
                                    <div className="icon">
                                        <i className="flaticon-profit"></i>
                                    </div>
                                    <h2 className="title">رشد کسب و کار</h2>
                                </div>
                                <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-seven">
                <img src="/assets/img/images/h10_features_shape01.png" alt="shape" data-aos="fade-up-right" data-aos-delay="400"/>
                <img src="/assets/img/images/h10_features_shape02.png" alt="shape" data-aos="fade-down-left" data-aos-delay="400"/>
                <img src="/assets/img/images/h10_features_shape03.png" alt="shape"/>
            </div>
        </section>
        {/* <!-- features-area-end --> */}

        {/* <!-- about-area --> */}
        <section className="about-area-sixteen section-py-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="about-img-sixteen">
                            <img src="/assets/img/images/h10_about_img01.jpg" alt="img" data-aos="fade-right" data-aos-delay="200"/>
                            <img src="/assets/img/images/h10_about_img02.jpg" alt="img" data-aos="fade-left" data-aos-delay="400"/>
                            <img src="/assets/img/images/h10_about_img03.jpg" alt="img" data-aos="fade-up" data-aos-delay="600"/>
                            <img src="/assets/img/images/h10_about_shape.png" alt="shape" className="shape"/>
                            <div className="experience-year experience-year-two" data-aos="zoom-in" data-aos-delay="800">
                                <div className="icon">
                                    <i className="flaticon-trophy"></i>
                                </div>
                                <div className="content">
                                    <h6 className="circle rotateme"></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content-sixteen">
                            <div className="section-title-four mb-20 tg-heading-subheading animation-style2">
                                <span className="sub-title">درباره شرکت</span>
                                <h2 className="title">ما یک استراتژی موثر برای شرکت ها آماده می کنیم</h2>
                            </div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            <div className="about-inner-content-three">
                                <div className="about-list-two">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-right"></i>100% پشتیبانی بهتر</li>
                                        <li><i className="fas fa-arrow-right"></i>تضمین عودت وجه</li>
                                        <li><i className="fas fa-arrow-right"></i>افزایش فروش</li>
                                        <li><i className="fas fa-arrow-right"></i>افزایش بازخورد شرکت</li>
                                    </ul>
                                    <div className="about-author-info about-author-info-two">
                                        <div className="thumb">
                                            <img src="/assets/img/images/about_author.png" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h2 className="title">مارک استرنجر</h2>
                                            <span>سئو</span>
                                            <div className="signature">
                                                <img src="/assets/img/images/signature.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clients-box-wrap clients-box-wrap-two">
                                    <div className="clients-box-two clients-box-three">
                                        <div className="icon">
                                            <i className="flaticon-family"></i>
                                        </div>
                                        <div className="content">
                                            <h2 className="title">60M</h2>
                                            <span>شرکت فعال</span>
                                        </div>
                                    </div>
                                    <div className="clients-box-two clients-box-three">
                                        <div className="icon">
                                            <i className="flaticon-trophy"></i>
                                        </div>
                                        <div className="content">
                                            <h2 className="title">12M</h2>
                                            <span>کاربر فعال</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- about-area-end --> */}

        {/* <!-- services-area --> */}
        <section className="services-area-twelve fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="services-inner-content">
                            <div className="section-title-two white-title mb-15 tg-heading-subheading animation-style2">
                                <span className="sub-title">شرکت ما چه کاری می کند</span>
                                <h2 className="title">طیف گسترده ای از خدمات برای کسب و کار شما!</h2>
                            </div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            <a href="services.html" className="btn btn-three border-btn">نمایش همه خدمات</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row gutter-24">
                            <div className="col-md-6">
                                <div className="services-item-eight">
                                    <div className="services-icon-eight">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>
                                    <div className="services-content-eight">
                                        <h2 className="title"><a href="services-details.html">مشاوره کسب درامد</a></h2>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        <a href="services-details.html" className="link-btn">جزئیات بیشتر
                                            <svg className="rtl-flip" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5446 6.50759H1.41432C1.03607 6.50759 0.730469 6.22774 0.730469 5.88135C0.730469 5.53496 1.03607 5.25511 1.41432 5.25511H14.8927L10.7425 1.45463C10.4754 1.21001 10.4754 0.812736 10.7425 0.568112C11.0097 0.323487 11.4435 0.323487 11.7106 0.568112L17.0297 5.43907C17.2263 5.61911 17.284 5.88722 17.1772 6.12206C17.0703 6.35494 16.8203 6.50759 16.5446 6.50759Z" fill="currentcolor"/>
                                                <path d="M11.2191 11.3844C11.0439 11.3844 10.8686 11.3238 10.7361 11.2005C10.469 10.9558 10.469 10.5586 10.7361 10.3139L16.0616 5.43711C16.3288 5.19249 16.7626 5.19249 17.0297 5.43711C17.2969 5.68174 17.2969 6.07901 17.0297 6.32363L11.7042 11.2005C11.5696 11.3238 11.3943 11.3844 11.2191 11.3844Z" fill="currentcolor"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="services-item-eight">
                                    <div className="services-icon-eight">
                                        <i className="flaticon-inspiration"></i>
                                    </div>
                                    <div className="services-content-eight">
                                        <h2 className="title"><a href="services-details.html">ایده کسب و کار و نوآوری</a></h2>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        <a href="services-details.html" className="link-btn">جزئیات بیشتر
                                            <svg className="rtl-flip" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5446 6.50759H1.41432C1.03607 6.50759 0.730469 6.22774 0.730469 5.88135C0.730469 5.53496 1.03607 5.25511 1.41432 5.25511H14.8927L10.7425 1.45463C10.4754 1.21001 10.4754 0.812736 10.7425 0.568112C11.0097 0.323487 11.4435 0.323487 11.7106 0.568112L17.0297 5.43907C17.2263 5.61911 17.284 5.88722 17.1772 6.12206C17.0703 6.35494 16.8203 6.50759 16.5446 6.50759Z" fill="currentcolor"/>
                                                <path d="M11.2191 11.3844C11.0439 11.3844 10.8686 11.3238 10.7361 11.2005C10.469 10.9558 10.469 10.5586 10.7361 10.3139L16.0616 5.43711C16.3288 5.19249 16.7626 5.19249 17.0297 5.43711C17.2969 5.68174 17.2969 6.07901 17.0297 6.32363L11.7042 11.2005C11.5696 11.3238 11.3943 11.3844 11.2191 11.3844Z" fill="currentcolor"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="services-item-eight">
                                    <div className="services-icon-eight">
                                        <i className="flaticon-taxes"></i>
                                    </div>
                                    <div className="services-content-eight">
                                        <h2 className="title"><a href="services-details.html">استراتژی مالیاتی</a></h2>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        <a href="services-details.html" className="link-btn">جزئیات بیشتر
                                            <svg className="rtl-flip" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5446 6.50759H1.41432C1.03607 6.50759 0.730469 6.22774 0.730469 5.88135C0.730469 5.53496 1.03607 5.25511 1.41432 5.25511H14.8927L10.7425 1.45463C10.4754 1.21001 10.4754 0.812736 10.7425 0.568112C11.0097 0.323487 11.4435 0.323487 11.7106 0.568112L17.0297 5.43907C17.2263 5.61911 17.284 5.88722 17.1772 6.12206C17.0703 6.35494 16.8203 6.50759 16.5446 6.50759Z" fill="currentcolor"/>
                                                <path d="M11.2191 11.3844C11.0439 11.3844 10.8686 11.3238 10.7361 11.2005C10.469 10.9558 10.469 10.5586 10.7361 10.3139L16.0616 5.43711C16.3288 5.19249 16.7626 5.19249 17.0297 5.43711C17.2969 5.68174 17.2969 6.07901 17.0297 6.32363L11.7042 11.2005C11.5696 11.3238 11.3943 11.3844 11.2191 11.3844Z" fill="currentcolor"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="services-item-eight">
                                    <div className="services-icon-eight">
                                        <i className="flaticon-layers"></i>
                                    </div>
                                    <div className="services-content-eight">
                                        <h2 className="title"><a href="services-details.html">مشاوره منابع انسانی</a></h2>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        <a href="services-details.html" className="link-btn">جزئیات بیشتر
                                            <svg className="rtl-flip" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5446 6.50759H1.41432C1.03607 6.50759 0.730469 6.22774 0.730469 5.88135C0.730469 5.53496 1.03607 5.25511 1.41432 5.25511H14.8927L10.7425 1.45463C10.4754 1.21001 10.4754 0.812736 10.7425 0.568112C11.0097 0.323487 11.4435 0.323487 11.7106 0.568112L17.0297 5.43907C17.2263 5.61911 17.284 5.88722 17.1772 6.12206C17.0703 6.35494 16.8203 6.50759 16.5446 6.50759Z" fill="currentcolor"/>
                                                <path d="M11.2191 11.3844C11.0439 11.3844 10.8686 11.3238 10.7361 11.2005C10.469 10.9558 10.469 10.5586 10.7361 10.3139L16.0616 5.43711C16.3288 5.19249 16.7626 5.19249 17.0297 5.43711C17.2969 5.68174 17.2969 6.07901 17.0297 6.32363L11.7042 11.2005C11.5696 11.3238 11.3943 11.3844 11.2191 11.3844Z" fill="currentcolor"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-shape-wrap">
                <img src="/assets/img/services/h6_services_shape01.png" alt="shape" data-aos="fade-down-left" data-aos-delay="400"/>
                <img src="/assets/img/services/h6_services_shape02.png" alt="shape" data-aos="fade-up-right" data-aos-delay="400"/>
            </div>
        </section>
        {/* <!-- services-area-end --> */}

        {/* <!-- counter-area --> */}
        <div className="counter-area-five">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-item-five">
                            <div className="counter-icon-five">
                                <i className="flaticon-folder-1"></i>
                            </div>
                            <div className="counter-content-five">
                                <p>پروژه تکمیل شده</p>
                                <span className="count odometer" data-count="9525"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-item-five">
                            <div className="counter-icon-five">
                                <i className="flaticon-rating"></i>
                            </div>
                            <div className="counter-content-five">
                                <p>مشتریان راضی</p>
                                <span className="count odometer" data-count="11985"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-item-five">
                            <div className="counter-icon-five">
                                <i className="flaticon-trophy"></i>
                            </div>
                            <div className="counter-content-five">
                                <p>جایزه شرکت</p>
                                <span className="count odometer" data-count="4722"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-item-five">
                            <div className="counter-icon-five">
                                <i className="flaticon-puzzle-piece"></i>
                            </div>
                            <div className="counter-content-five">
                                <p>تجارت در کشور</p>
                                <span className="count odometer" data-count="9522"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- counter-area-end --> */}

        {/* <!-- video-area --> */}
        <div className="video-area-two">
            <div className="video-bg-two" data-background="assets/img/bg/h10_video_bg.jpg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="video-btn-three text-center">
                            <a href="https://www.youtube.com/watch?v=6mkoGSqTqFI" className="play-btn popup-video">
                                <img src="/assets/img/icons/play.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- video-area-end --> */}

        {/* <!-- marquee-area --> */}
        <div className="marquee__area pt-100" dir="ltr">
            <div className="marquee__wrap">
                <div className="marquee__box">
                    <a href="services.html">بازار یابی <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                    <a href="services.html">مشاور مالی <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                    <a href="services.html">سرمایه گذاری <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                    <a href="services.html">هدف <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                </div>
                <div className="marquee__box">
                    <a href="services.html">بازار یابی <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                    <a href="services.html">مشاور مالی <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                    <a href="services.html">سرمایه گذاری <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                    <a href="services.html">هدف <img src="/assets/img/images/marquee_icon.svg" alt=""/></a>
                </div>
            </div>
        </div>
        {/* <!-- marquee-area-end --> */}

        {/* <!-- project-area --> */}
        <section className="project-area-six section-pt-120 section-pb-90">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title-two text-center text-lg-start mb-40 mb-md-20 tg-heading-subheading animation-style2">
                            <span className="sub-title">پروژه های من</span>
                            <h2 className="title">پروژه های بزرگ ساده ترین کارهای ما هستند</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="project-content-top project-content-top-two">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-item-wrap-two">
                <div className="row gutter-15 justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="project-item-six">
                            <div className="project-thumb-six">
                                <a href="project-details.html"><img src="/assets/img/project/h7_project_img01.jpg" alt="img"/></a>
                                <a href="project-details.html" className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10.7755 1.46939C10.7755 0.657867 11.4334 0 12.2449 0C13.0564 0 13.7143 0.657867 13.7143 1.46939V22.5306C13.7143 23.3421 13.0564 24 12.2449 24C11.4334 24 10.7755 23.3421 10.7755 22.5306V1.46939Z" fill="currentcolor" />
                                        <path  d="M22.5306 10.7755C23.3421 10.7755 24 11.4334 24 12.2449C24 13.0564 23.3421 13.7143 22.5306 13.7143L1.46939 13.7143C0.657867 13.7143 -3.54727e-08 13.0564 0 12.2449C3.54727e-08 11.4334 0.657867 10.7755 1.46939 10.7755L22.5306 10.7755Z" fill="currentcolor" />
                                    </svg>
                                </a>
                            </div>
                            <div className="project-content-six">
                                <span>دستاورد</span>
                                <h2 className="title"><a href="project-details.html">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="project-item-six active">
                            <div className="project-thumb-six">
                                <a href="project-details.html"><img src="/assets/img/project/h7_project_img02.jpg" alt="img"/></a>
                                <a href="project-details.html" className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10.7755 1.46939C10.7755 0.657867 11.4334 0 12.2449 0C13.0564 0 13.7143 0.657867 13.7143 1.46939V22.5306C13.7143 23.3421 13.0564 24 12.2449 24C11.4334 24 10.7755 23.3421 10.7755 22.5306V1.46939Z" fill="currentcolor" />
                                        <path  d="M22.5306 10.7755C23.3421 10.7755 24 11.4334 24 12.2449C24 13.0564 23.3421 13.7143 22.5306 13.7143L1.46939 13.7143C0.657867 13.7143 -3.54727e-08 13.0564 0 12.2449C3.54727e-08 11.4334 0.657867 10.7755 1.46939 10.7755L22.5306 10.7755Z" fill="currentcolor" />
                                    </svg>
                                </a>
                            </div>
                            <div className="project-content-six">
                                <span>دستاورد</span>
                                <h2 className="title"><a href="project-details.html">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="project-item-six">
                            <div className="project-thumb-six">
                                <a href="project-details.html"><img src="/assets/img/project/h7_project_img03.jpg" alt="img"/></a>
                                <a href="project-details.html" className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10.7755 1.46939C10.7755 0.657867 11.4334 0 12.2449 0C13.0564 0 13.7143 0.657867 13.7143 1.46939V22.5306C13.7143 23.3421 13.0564 24 12.2449 24C11.4334 24 10.7755 23.3421 10.7755 22.5306V1.46939Z" fill="currentcolor" />
                                        <path  d="M22.5306 10.7755C23.3421 10.7755 24 11.4334 24 12.2449C24 13.0564 23.3421 13.7143 22.5306 13.7143L1.46939 13.7143C0.657867 13.7143 -3.54727e-08 13.0564 0 12.2449C3.54727e-08 11.4334 0.657867 10.7755 1.46939 10.7755L22.5306 10.7755Z" fill="currentcolor" />
                                    </svg>
                                </a>
                            </div>
                            <div className="project-content-six">
                                <span>دستاورد</span>
                                <h2 className="title"><a href="project-details.html">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="project-item-six">
                            <div className="project-thumb-six">
                                <a href="project-details.html"><img src="/assets/img/project/h7_project_img04.jpg" alt="img"/></a>
                                <a href="project-details.html" className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10.7755 1.46939C10.7755 0.657867 11.4334 0 12.2449 0C13.0564 0 13.7143 0.657867 13.7143 1.46939V22.5306C13.7143 23.3421 13.0564 24 12.2449 24C11.4334 24 10.7755 23.3421 10.7755 22.5306V1.46939Z" fill="currentcolor" />
                                        <path  d="M22.5306 10.7755C23.3421 10.7755 24 11.4334 24 12.2449C24 13.0564 23.3421 13.7143 22.5306 13.7143L1.46939 13.7143C0.657867 13.7143 -3.54727e-08 13.0564 0 12.2449C3.54727e-08 11.4334 0.657867 10.7755 1.46939 10.7755L22.5306 10.7755Z" fill="currentcolor" />
                                    </svg>
                                </a>
                            </div>
                            <div className="project-content-six">
                                <span>دستاورد</span>
                                <h2 className="title"><a href="project-details.html">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- project-area-end --> */}

        {/* <!-- team-area --> */}
        <section className="team-area-eight fix team-bg-eight" data-background="assets/img/bg/h9_team_bg.jpg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title-four text-center text-lg-start mb-40 tg-heading-subheading animation-style2">
                            <span className="sub-title">تیم ما</span>
                            <h2 className="title">اعضاوی تیم ما رغیبی ندارند</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-top-content mb-30">
                            <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="team-item">
                            <div className="team-thumb">
                                <img src="/assets/img/team/team_img01.jpg" alt=""/>
                                <div className="team-social">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h2 className="title"><a href="team-details.html">امین احمدی</a></h2>
                                <span>طراح سایت</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="team-item">
                            <div className="team-thumb">
                                <img src="/assets/img/team/team_img02.jpg" alt=""/>
                                <div className="team-social">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h2 className="title"><a href="team-details.html">سارا احمدی</a></h2>
                                <span>سئو</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="team-item">
                            <div className="team-thumb">
                                <img src="/assets/img/team/team_img03.jpg" alt=""/>
                                <div className="team-social">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h2 className="title"><a href="team-details.html">علی احمدی</a></h2>
                                <span>تولید محتوا</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                        <div className="team-item">
                            <div className="team-thumb">
                                <img src="/assets/img/team/team_img04.jpg" alt=""/>
                                <div className="team-social">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h2 className="title"><a href="team-details.html">انشتین</a></h2>
                                <span>دانشمند</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-shape-two">
                <img src="/assets/img/team/h9_team_shape01.png" alt="shape"/>
                <img src="/assets/img/team/h9_team_shape02.png" alt="shape" data-aos="fade-up" data-aos-delay="400"/>
            </div>
        </section>
        {/* <!-- team-area-end --> */}

        {/* <!-- testimonial-area --> */}
        <section className="testimonial-area-four testimonial-bg-four" data-background="assets/img/bg/h4_testimonial_bg.jpg">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="testimonial-img-four">
                            <img src="/assets/img/images/h4_testimonial_img.png" alt=""/>
                            <div className="icon">
                                <img src="/assets/img/icons/quote02.svg" alt=""/>
                            </div>
                            <img src="/assets/img/images/h4_testimonial_img_shape.png" alt="" className="shape"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="testimonial-item-wrap">
                            <div className="testimonial-active">
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <div className="content-top">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="testimonial-quote">
                                                <img src="/assets/img/icons/quote.svg" alt=""/>
                                            </div>
                                        </div>
                                        <p>“ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                        <div className="testimonial-info">
                                            <h4 className="title">الکس</h4>
                                            <span>سئو و تولید محتوا</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item" style={{right: '-700px'}}>
                                    <div className="testimonial-content">
                                        <div className="content-top">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="testimonial-quote">
                                                <img src="/assets/img/icons/quote.svg" alt=""/>
                                            </div>
                                        </div>
                                        <p>“ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                        <div className="testimonial-info">
                                            <h2 className="title">گای هاوکینگز</h2>
                                            <span>مدیر سئو</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-nav"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-shape-wrap-four">
                <img src="/assets/img/images/h4_testimonial_shape01.png" alt="" data-aos="fade-up-right" data-aos-delay="200"/>
                <img src="/assets/img/images/h4_testimonial_shape02.png" alt="" data-aos="fade-down-left" data-aos-delay="200"/>
            </div>
        </section>
        {/* <!-- testimonial-area-end --> */}

        {/* <!-- brand-area --> */}
        <div className="brand-area-six pt-80 pb-80" dir="ltr">
            <div className="container">
                <div className="row brand-active">
                    <div className="col-lg-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img01.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img02.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img03.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img04.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img05.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img03.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- brand-area-end --> */}

        {/* <!-- blog-area --> */}
        <section className="blog-area-two blog-bg-two" data-background="assets/img/bg/h2_blog_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style2">
                            <span className="sub-title">وبلاگ</span>
                            <h2 className="title">آخرین مطالب وبلاگ</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="blog-post-item-two">
                            <div className="blog-post-thumb-two">
                                <a href="blog-details.html"><img src="/assets/img/blog/h2_blog_img01.jpg" alt=""/></a>
                                <a href="blog.html" className="tag">توسعه</a>
                            </div>
                            <div className="blog-post-content-two">
                                <h2 className="title"><a href="blog-details.html">چگونه دانشمند شویم ؟</a></h2>
                                <p>حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها.</p>
                                <div className="blog-meta">
                                    <ul className="list-wrap">
                                        <li>
                                            <a href="blog-details.html"><img src="/assets/img/blog/blog_avatar01.png" alt=""/>ادمین</a>
                                        </li>
                                        <li><i className="far fa-calendar"></i>22 اردیبهشت 1403</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="blog-post-item-two">
                            <div className="blog-post-thumb-two">
                                <a href="blog-details.html"><img src="/assets/img/blog/h2_blog_img02.jpg" alt=""/></a>
                                <a href="blog.html" className="tag">کسب و کار</a>
                            </div>
                            <div className="blog-post-content-two">
                                <h2 className="title"><a href="blog-details.html">راهای کسب درامد از بیت کوین</a></h2>
                                <p>برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود.</p>
                                <div className="blog-meta">
                                    <ul className="list-wrap">
                                        <li>
                                            <a href="blog-details.html"><img src="/assets/img/blog/blog_avatar01.png" alt=""/>ادمین</a>
                                        </li>
                                        <li><i className="far fa-calendar"></i>22 اردیبهشت 1403</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="blog-post-item-two">
                            <div className="blog-post-thumb-two">
                                <a href="blog-details.html"><img src="/assets/img/blog/h2_blog_img03.jpg" alt=""/></a>
                                <a href="blog.html" className="tag">دانش</a>
                            </div>
                            <div className="blog-post-content-two">
                                <h2 className="title"><a href="blog-details.html">بهترین شیب برای خودرو چند درجه است ؟</a></h2>
                                <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                                <div className="blog-meta">
                                    <ul className="list-wrap">
                                        <li>
                                            <a href="blog-details.html"><img src="/assets/img/blog/blog_avatar01.png" alt=""/>ادمین</a>
                                        </li>
                                        <li><i className="far fa-calendar"></i>22 اردیبهشت 1403</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- blog-area-end --> */}

        {/* <!-- request-area --> */}
        <section className="request-area-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="request-content-two">
                            <div className="section-title-two white-title mb-15 tg-heading-subheading animation-style2">
                                <h2 className="title">تماس با ما</h2>
                            </div>
                            <p>حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها. با ما تماس بگیرید!</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="request-form-wrap">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="text" placeholder="نام *"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="email" placeholder="ایمیل *"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="number" placeholder="شماره تماس *"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit">ارسال</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="request-shape-wrap">
                <img src="/assets/img/images/h2_request_shape01.png" alt=""/>
                <img src="/assets/img/images/h2_request_shape02.png" alt="" data-aos="fade-left" data-aos-delay="200"/>
            </div>
        </section>
        {/* <!-- request-area-end --> */}
    </>;
}