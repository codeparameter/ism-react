let oldHref = document.location.href;

let onUrlFns = [];

function addOnUrlFn(fn){
    onUrlFns.push(fn);
}

function onUrlChange(){
	onUrlFns.map(fn=>{fn()});
}

window.addEventListener('load', function () {
	
	onUrlChange();
    
	let bodyList = document.querySelector("body")

    let observer = new MutationObserver(function(mutations) {
        if (oldHref != document.location.href) {
            oldHref = document.location.href;
            onUrlChange();
        }
    });
    
    let config = {
        childList: true,
        subtree: true
    };
    
    observer.observe(bodyList, config);
});