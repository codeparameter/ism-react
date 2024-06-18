import usePagination from "../../../utils/usePagination";
import Preload from "../../../components/Preload";
import ErrorHandling from "../../../components/ErrorHandling";
import BreadCrumb from "../../../components/BreadCrumb";
import BlockPreviewCard from "./components/BlockPreviewCard";
import {WLinks} from "../../../components/LinkOrMT";
import { Li } from "../../../components/Tags";

export default function BlockList(){

    let { pnd, err, list: blocks, page, leftLinks, rightLinks} = usePagination();

    return (
      <>
        
        { err && <ErrorHandling code={`${err.status}`} redirectLink="/blocks" redirectMsg="blocks" /> }
        <Preload pnd={pnd} />


        {blocks && <>

            <BreadCrumb title={'blocks'} />

            <section className="blog-area pt-120 pb-120">
                <div className="container">
                    <div className="inner-blog-wrap">
                        <div className="row justify-content-center">
                            <div className="col-71">
                                <div className="blog-post-wrap">
                                    <div className="row">
                                        { blocks.map(block => <BlockPreviewCard block={block} key={block.id}/>)}            
                                    </div>
                                    <div className="pagination-wrap mt-30">
                                        <nav aria-label="Page navigation example" dir="ltr">
                                            <ul className="pagination list-wrap">
                                                <WLinks cls="page-link" links={leftLinks}
                                                        wrapper={<Li className="page-item"/>} /> 
                                                {page}
                                                <WLinks cls="page-link" links={rightLinks}
                                                        wrapper={<Li className="page-item"/>} /> 
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-29">
                                <aside className="blog-sidebar">
                                    <div className="sidebar-search">
                                        <form action="#">
                                            <input type="text" placeholder="جستجو ..."/>
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="bw-title">دسته بندی</h4>
                                        <div className="bs-cat-list">
                                            <ul className="list-wrap">
                                                <li><a href="#">کسب و کار <span>(02)</span></a></li>
                                                <li><a href="#">طراحی سایت <span>(08)</span></a></li>
                                                <li><a href="#">مشاوره مالی <span>(05)</span></a></li>
                                                <li><a href="#">سئو <span>(02)</span></a></li>
                                                <li><a href="#">مشاوره حقوقی <span>(11)</span></a></li>
                                                <li><a href="#">فروشگاه <span>(12)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="bw-title">برترین مقالات</h4>
                                        <div className="rc-post-wrap">
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="/assets/img/blog/rc_post01.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">معرفی استارتاپ‌ های موفق ایرانی</a></h2>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="/assets/img/blog/rc_post02.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">معرفی استارتاپ‌ های موفق خارجی</a></h2>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="/assets/img/blog/rc_post03.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">تنظیمات اسکیما در افزونه یواست سئو</a></h2>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="/assets/img/blog/rc_post04.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">بهترین افزونه های حمل و نقل ووکامرس</a></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="bw-title">برچسب ها</h4>
                                        <div className="bs-tag-list">
                                            <ul className="list-wrap">
                                                <li><a href="#">مالیات</a></li>
                                                <li><a href="#">توسعه وب</a></li>
                                                <li><a href="#">دیتابیس</a></li>
                                                <li><a href="#">آژانس</a></li>
                                                <li><a href="#">مسافرت</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>}

      </>
    );
}