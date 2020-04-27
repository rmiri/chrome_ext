console.log('browser');
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
    console.log('button clicked')
}
