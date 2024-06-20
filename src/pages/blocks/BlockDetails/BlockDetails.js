import useFetcher from "../../../utils/useFetch";
import Preload from "../../../components/Preload";
import InternalBanner from "../../../components/InternalBanner";
import ErrorHandling from "../../../components/ErrorHandling";

export default function BlockDetails() {

    const { pnd, res: block, err } = useFetcher({});

    return <>
      
      { err && <ErrorHandling code={`${err.status}`} redirectLink="/blocks" redirectMsg="blocks" /> }
      <Preload pnd={pnd} />

      {block && <>

        <InternalBanner title={'details'} />
        
        <section className="project-details-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-details-wrap">
                            <div className="row">
                                <div className="col-71">
                                    <div className="project-details-thumb">
                                        <img src="/assets/img/carrara-white-marble-block-p560155-1b.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-29">
                                    <div className="project-details-info">
                                        <h4 className="title">اطلاعات پروژه</h4>
                                        <ul className="list-wrap">
                                            <li><span>نوع سنگ :</span>{block.material_name}</li>
                                            <li><span>شهر :</span>{block.city_name}</li>
                                            <li><span>کیفیت :</span><span dir="ltr">{block.quality_name}</span></li>
                                            <li><span>ابعاد :</span>{block.length}x{block.height}x{block.width}</li>
                                            <li><span>وضعیت :</span>{block.not_available ? 'ناموجود' : 'موجود'}</li>
                                            <li className="social">
                                                <span>اشتراک:</span>
                                                <ul className="list-wrap">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-content">
                                <h2 className="title">برنامه ریزی و راه حل کسب و کار</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                <p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                <div className="pd-optimized-wrap">
                                    <h3 className="title-two">سرعت بهینه شده</h3>
                                    <p>هنگامی که یک چاپگر ناشناخته یک گالری از نوع خود را برداشت و آن را به هم زد تا نمونه ای از کتاب بسازد، نه تنها پنج قرن طول می کشد، بلکه جهش به حروفچینی الکترونیکی نیز دارد، اساساً یک گالری از نوع خود باقی می ماند و آن را به هم می زند تا یک کتاب نمونه بسازد.</p>
                                </div>
                                <div className="pd-inner-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-41">
                                            <div className="content">
                                                <h3 className="title-two">سرمایه را سریعتر افزایش دهید و با شرایط خود مذاکره کنید</h3>
                                                <p className="info-one">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                                <ul className="list-wrap">
                                                    <li><img src="/assets/img/icons/check_icon.svg" alt=""/>100% نتایج بهتر</li>
                                                    <li><img src="/assets/img/icons/check_icon.svg" alt=""/>ایده های ارزشمند</li>
                                                    <li><img src="/assets/img/icons/check_icon.svg" alt=""/>تم مناسب بودجه</li>
                                                    <li><img src="/assets/img/icons/check_icon.svg" alt=""/>مشتریان خوشحال</li>
                                                </ul>
                                                <p className="info-two">برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.</p>
                                            </div>
                                        </div>
                                        <div className="col-59">
                                            <div className="thumb">
                                                <img src="/assets/img/project/project_details02.jpg" alt=""/>
                                                <a href="https://persian9.asset.aparat.com/aparat-video/d893d66ca4bd913738c78c4698342f8952751902-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImUxMWIzMmJmZDRmMzJiZGJkOTdlNDJmYzgwYTdjOTZiIiwiZXhwIjoxNjkyMzU3MDk4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.809zy1QGQvBKggHhFU3q5dpddmyUAStw7OYd6WiQ8jo" className="play-btn popup-video"><i className="fas fa-play"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </>}
    </>;
}