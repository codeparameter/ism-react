export default function Preload({pnd}) {
    return <>
        <div id="preloader" className={"base-fade" + (pnd? "" : " fade-out")}>
            <div id="loading-center">
                <div className="loader">
                    <div className="loader-outter"></div>
                    <div className="loader-inner"></div>
                </div>
            </div>
        </div>
    </>;
};
