import usePageTitle from "../../../components/usePageTitle";
import usePagination from "../../../utils/pagination";
import BlockPreviewCard from "./components/BlockPreviewCard";

export default function BlockList(){

    
    usePageTitle("سنگ ها");

    let { pnd, err, list: blocks, next, previous, PBut} = usePagination('blocks/');

    return (
      <>

        <h2>list</h2>

        


        {/*<!-- main-area -->*/}
        <main className="fix">

            {/*<!-- breadcrumb-area -->*/}
            <section className="breadcrumb-area breadcrumb-bg" data-background="assets/img/bg/breadcrumb_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">آخرین مطالب ما</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">خانه</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">وبلاگ</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-wrap">
                    <img src="assets/img/images/breadcrumb_shape01.png" alt=""/>
                    <img src="assets/img/images/breadcrumb_shape02.png" alt=""/>
                </div>
            </section>
            {/*<!-- breadcrumb-area-end -->*/}

            {/*<!-- blog-area -->*/}
            <section className="blog-area pt-120 pb-120">
                <div className="container">
                    <div className="inner-blog-wrap">
                        <div className="row justify-content-center">
                            <div className="col-71">
                                <div className="blog-post-wrap">
                                    <div className="row">
                                        {blocks.map(block => <BlockPreviewCard block={block} key={block.id}/>)}            
                                    </div>
                                    <div className="pagination-wrap mt-30">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination list-wrap">
                                                <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                <li className="page-item next-page"><a className="page-link" href="#"><i className="fas fa-angle-double-left"></i></a></li>
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
                                                    <a href="blog-details.html"><img src="assets/img/blog/rc_post01.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">معرفی استارتاپ‌ های موفق ایرانی</a></h2>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="assets/img/blog/rc_post02.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">معرفی استارتاپ‌ های موفق خارجی</a></h2>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="assets/img/blog/rc_post03.jpg" alt=""/></a>
                                                </div>
                                                <div className="content">
                                                    <span className="date"><i className="far fa-calendar"></i>1402/05/27</span>
                                                    <h2 className="title"><a href="blog-details.html">تنظیمات اسکیما در افزونه یواست سئو</a></h2>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <a href="blog-details.html"><img src="assets/img/blog/rc_post04.jpg" alt=""/></a>
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
            {/*<!-- blog-area-end -->*/}


        </main>


        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        <PBut bUrl={previous} txt='previous' />
        <PBut bUrl={next} txt='next' />

      </>
    );
}