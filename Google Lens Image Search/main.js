chrome.contextMenus.onClicked.addListener(onClick);

var contextMenuItem = {
    
};

chrome.contextMenus.create({
    title: "Google Lens Search",
    id: "search",
    contexts: ["image"],
});

function onClick(data) {
    if (data.menuItemID = "search") {
        let lensUrl = "https://lens.google.com/uploadbyurl?url=";
        let imgUrl = data.srcUrl;
        console.log(imgUrl);
        let searchUrl = lensUrl + imgUrl

        chrome.tabs.create({
            active: true,
            url: searchUrl
        });
        console.log(searchUrl);
    };
};


