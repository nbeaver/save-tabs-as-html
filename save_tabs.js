function mainAction() {
  var querying = browser.tabs.query({});
  querying.then(saveTabs, onError);
}

function onError(error) {
  console.log(`Error : ${error}`);
}

function saveTabs(tabs) {
  var now = new Date();
  function getFilename(timestamp) {
    filename = 'tabs_' + timestamp.getTime() + '.html';
    return filename;
  }
  var payload = tabsToHTML(tabs, now);
  // TODO: can this be formatted easily?
  var serializer = new XMLSerializer();
  var HTMLString = serializer.serializeToString(payload);
  var payloadBlob = new Blob([HTMLString], {type: 'text/html'});
  var payloadURL = URL.createObjectURL(payloadBlob);
  var payload_filename = getFilename(now);
  var downloading = browser.downloads.download({
    url: payloadURL,
    filename: payload_filename,
    conflictAction: 'uniquify',
    saveAs: false,
  });
  // Firefox for Android raises an error if `saveAs` is set to `true`.
  // The parameter is ignored when `saveAs` is `false` or not included.
}

function tabsToHTML(tabs, now) {
  var allTabs = [];
  for (let tab of tabs) {
    if (tab.incognito === true) {
      // skip private tabs
      continue;
    }
    // tab.url and tab.title require the `tabs` permission
    var tabInfo = {
      'title' : tab.title,
      'url' : tab.url,
    };
    // TODO: skip private tabs.
    allTabs.push(tabInfo);
  }
  var doc = document.implementation.createHTMLDocument('browser tabs');
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument
  // creates html, head, title, and body

  var newMeta = document.createElement('meta');
  newMeta.setAttribute('charset', 'utf-8');
  doc.head.appendChild(newMeta);

  var newUnorderedList = document.createElement('ul');

  var tabCount = document.createElement('li');
  var dateString = document.createElement('li');
  var ISOString = document.createElement('li');
  var localeString = document.createElement('li');
  var JSONString = document.createElement('li');
  var getTime = document.createElement('li');

  tabCount.appendChild(
    document.createTextNode(allTabs.length + ' tabs'));
  dateString.appendChild(
    document.createTextNode('Date: ' + now.toString()));
  ISOString.appendChild(
    document.createTextNode('ISO date: ' + now.toISOString()));
  localeString.appendChild(
    document.createTextNode('Locale date: ' + now.toLocaleString()));
  JSONString.appendChild(
    document.createTextNode('JSON date: ' + now.toJSON()));
  getTime.appendChild(
    document.createTextNode('Milliseconds since Unix epoch: ' + now.getTime()));

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
  doc.body.appendChild(newUnorderedList);
  doc.body.appendChild(newDescriptionList);
  return doc;
}

browser.browserAction.onClicked.addListener(mainAction);
