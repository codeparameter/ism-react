import InternalBanner from "../components/InternalBanner";

export default function About() {
    return <>

        <InternalBanner title={'about'} />

        {/*<!-- about-area -->*/}
        <section className="about-area-eight pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="about-img-eight">
                            <img src="/assets/img/images/inner_about_img03.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content-eight">
                            <div className="section-title-two mb-30">
                                <span className="sub-title">بیشتر بدانید</span>
                                <h2 className="title">ما بیش از 20 سال صنعت مالی عملی داریم</h2>
                            </div>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            <div className="about-content-inner">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-business-presentation"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">کسب و کار در حال رشد</h4>
                                            <p>امور مالی به شما کمک می کند تا به یک دارایی استراتژیک تبدیل شوید.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">سرمایه گذاری مالی</h4>
                                            <p>امور مالی به شما کمک می کند تا به یک دارایی استراتژیک تبدیل شوید.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="right-slide-img">
                                    <img src="/assets/img/images/inner_about_img04.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="about-content-bottom">
                                <div className="services-btn">
                                    <a href="services.html" className="btn">خدمات ما</a>
                                </div>
                                <div className="about-author-info">
                                    <div className="thumb">
                                        <img src="/assets/img/images/about_author.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h2 className="title">مارک استرنجر</h2>
                                        <span>مدیر عامل</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- about-area-end -->*/}

        {/*<!-- choose-area -->*/}
        <section className="choose-area-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="choose-content-three">
                            <div className="section-title-two white-title mb-30">
                                <span className="sub-title">چه تخصصی</span>
                                <h2 className="title">کسب و کار خود را ایمن نگه دارید و از در دسترس بودن بالا اطمینان حاصل کنید.</h2>
                            </div>
                            <p>آیا تا به حال متوجه شده اید که به شعار مشاوره خوب رایانه خود خیره شده اید تا به ذهنتان خطور کند؟ اغلب اوقات.</p>
                            <div className="accordion-wrap-two">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                چگونه باید قدرتمند شویم
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                پشتیبانی 24 ساعته است ؟
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                آدرس شرکت کجاست ؟
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-img-three">
                            <img src="/assets/img/images/inner_choose_img.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- choose-area-end -->*/}


        {/*<!-- team-area -->*/}
        <section className="team-area team-bg" data-background="assets/img/bg/team_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center mb-50">
                            <span className="sub-title">اعضای ماهر تیم</span>
                            <h2 className="title">با تیم اختصاصی ما آشنا شوید</h2>
                            <p>آیا تا به حال متوجه شده اید که به صفحه کامپیوتر خود خیره شده اید و شعار مشاوره ای خوبی به ذهنتان خطور می کند؟ اغلب اوقات.</p>
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
                                <h2 className="title"><a href="team-details.html">بروکلین سیمونز</a></h2>
                                <span>مشاور مالی</span>
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
                                <h2 className="title"><a href="team-details.html">گای هاوکینز</a></h2>
                                <span>اداره سرمایه گذاری</span>
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
                                <h2 className="title"><a href="team-details.html">ساوانا نگوین</a></h2>
                                <span>مشاوره کسب و کار</span>
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
                                <h2 className="title"><a href="team-details.html">کریستین واتسون</a></h2>
                                <span>رئیس بازاریابی</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- team-area-end -->*/}


        {/*<!-- testimonial-area -->*/}
        <section className="testimonial-area-three testimonial-area-six pt-120">
            <div className="container">
                <div className="row g-0 align-items-end">
                    <div className="col-37">
                        <div className="testimonial-img-three">
                            <img src="/assets/img/images/h3_testimonial_img.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-63">
                        <div className="testimonial-item-wrap-three" data-background="assets/img/bg/h3_testimonial_bg.png">
                            <div className="testimonial-active-three">
                                <div className="testimonial-item-three">
                                    <div className="testimonial-content-three">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p>“ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                        <div className="testimonial-info">
                                            <h2 className="title">الکس رابی</h2>
                                            <span>مدیر عامل</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item-three"  style={{right: '-609px'}}>
                                    <div className="testimonial-content-three">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p>“ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                        <div className="testimonial-info">
                                            <h2 className="title">گای هاوکینگز</h2>
                                            <span>مدیر سئو</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-nav-three"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<!-- testimonial-area-end -->*/}

        {/*<!-- brand-area -->*/}
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
    </>;
};
