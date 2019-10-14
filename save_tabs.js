function mainAction() {
  var querying = browser.tabs.query({});
  querying.then(saveTabs, onError);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function saveTabs(tabs) {
  var now = new Date();
  function getFilename(timestamp) {
    filename = "tabs_" + timestamp.getTime() + ".html"
    return filename
  }
  var payload = tabsToHTML(tabs, now);
  // TODO: can this be formatted easily?
  var payloadBlob = new Blob([payload.outerHTML], {type: 'text/html'});
  var payloadURL = URL.createObjectURL(payloadBlob);
  var payload_filename = getFilename(now);
  var downloading = browser.downloads.download({
    url: payloadURL,
    filename : payload_filename,
    conflictAction: 'uniquify',
    saveAs: false,
  });
  // Firefox for Android raises an error if `saveAs` is set to `true`.
  // The parameter is ignored when `saveAs` is `false` or not included.
}

function tabsToHTML(tabs, now) {
  var allTabs = [];
  for (let tab of tabs) {
    // tab.url and tab.title require the `tabs` permission
    var tabInfo = {
      "title" : tab.title,
      "url" : tab.url,
    };
    // TODO: skip private tabs.
    allTabs.push(tabInfo)
  }
  var newHTML = document.createElement('html');
  var newHead = document.createElement('head');
  var newTitle = document.createElement('title');
  newTitle.text = "browser tabs";
  var newMeta = document.createElement('meta');
  newMeta.setAttribute("charset", "utf-8");
  var newBody = document.createElement('body');

  var newUnorderedList = document.createElement('ul');

  var tabCount = document.createElement('li');
  var dateString = document.createElement('li');
  var ISOString = document.createElement('li');
  var localeString = document.createElement('li');
  var JSONString = document.createElement('li');
  var getTime = document.createElement('li');

  tabCount.appendChild(document.createTextNode(allTabs.length + " tabs"));
  dateString.appendChild(document.createTextNode("Date: " + now.toString()));
  ISOString.appendChild(document.createTextNode("ISO date: " + now.toISOString()));
  localeString.appendChild(document.createTextNode("Locale date: " + now.toLocaleString()));
  JSONString.appendChild(document.createTextNode("JSON date: " + now.toJSON()));
  getTime.appendChild(document.createTextNode("Unix timestamp: " + now.getTime()));

  newUnorderedList.appendChild(tabCount);
  newUnorderedList.appendChild(dateString);
  newUnorderedList.appendChild(ISOString);
  newUnorderedList.appendChild(localeString);
  newUnorderedList.appendChild(JSONString);
  newUnorderedList.appendChild(getTime);

  // TODO: would this be better as an ordered list?
  var newDescriptionList = document.createElement('dl');

  for (let tab of allTabs) {
    var newAnchor = document.createElement('a');
    newAnchor.href = tab.url;
    newAnchor.text = tab.title;
    var newDescriptionTerm = document.createElement('dt');
    newDescriptionTerm.appendChild(newAnchor);
    var bareURL = document.createElement('a');
    bareURL.href = tab.url;
    bareURL.text = tab.url;
    var newDescriptionDetails = document.createElement('dd');
    newDescriptionDetails.appendChild(bareURL);
    newDescriptionList.appendChild(newDescriptionTerm);
    newDescriptionList.appendChild(newDescriptionDetails);
  }
  newBody.appendChild(newUnorderedList);
  newBody.appendChild(newDescriptionList);
  newHead.appendChild(newMeta);
  newHead.appendChild(newTitle);
  newHTML.append(newHead);
  newHTML.append(newBody);
  return newHTML;
}

browser.browserAction.onClicked.addListener(mainAction);
