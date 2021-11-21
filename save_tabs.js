function mainAction() {
  browser.tabs.query({}, saveTabs);
}

function onError(error) {
  console.log(`Error : ${error}`);
}

function getDateYYYYMMDD(timestamp) {
  var month_from_one = timestamp.getMonth() + 1;
  var day = timestamp.getDate();
  var year = timestamp.getFullYear();
  var month_padded = month_from_one.toString().padStart(2, '0');
  var day_padded = day.toString().padStart(2, '0');
  var year_padded = year.toString().padStart(4, '0');
  var date_string = year_padded + '-' + month_padded + '-' + day_padded;
  return date_string;
}

function saveTabs(tabs) {
  var now = new Date();

  function getFilename(timestamp) {
    var yyyymmdd = getDateYYYYMMDD(timestamp);
    var filename = 'tabs_' + yyyymmdd + '_' + timestamp.getTime() + '.html';
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
    saveAs: true,
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
    allTabs.push(tabInfo);
  }
  var doc = document.implementation.createHTMLDocument(allTabs.length + ' browser tabs');
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument
  // creates html, head, title, and body

  var newMeta = document.createElement('meta');
  newMeta.setAttribute('charset', 'utf-8');

  var newStyle = document.createElement('style')
  newStyle.setAttribute('type', 'text/css')
  newStyle.innerHTML = "\na {\ntext-decoration: none;\n}\ndt {\nmargin-top: 10px;\n}\n"

  doc.head.appendChild(newMeta);
  doc.head.appendChild(newStyle);

  var newUnorderedList = document.createElement('ul');

  var tabCount = document.createElement('li');
  var userAgent = document.createElement('li');
  var dateString = document.createElement('li');
  var ISOString = document.createElement('li');
  var localeString = document.createElement('li');
  var JSONString = document.createElement('li');
  var YYYYMMDDString = document.createElement('li');
  var getTime = document.createElement('li');

  tabCount.appendChild(
    document.createTextNode(allTabs.length + ' tabs'));
  userAgent.appendChild(
    document.createTextNode('User agent: ' + navigator.userAgent));
  dateString.appendChild(
    document.createTextNode('Date: ' + now.toString()));
  ISOString.appendChild(
    document.createTextNode('ISO date: ' + now.toISOString()));
  localeString.appendChild(
    document.createTextNode('Locale date: ' + now.toLocaleString()));
  JSONString.appendChild(
    document.createTextNode('JSON date: ' + now.toJSON()));
  YYYYMMDDString.appendChild(
    document.createTextNode('YYYY-MM-DD (local): ' + getDateYYYYMMDD(now)
  ));
  getTime.appendChild(
    document.createTextNode('Milliseconds since Unix epoch: ' + now.getTime()));

  newUnorderedList.appendChild(tabCount);
  newUnorderedList.appendChild(userAgent);
  newUnorderedList.appendChild(dateString);
  newUnorderedList.appendChild(ISOString);
  newUnorderedList.appendChild(localeString);
  newUnorderedList.appendChild(JSONString);
  newUnorderedList.appendChild(YYYYMMDDString);
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

if (typeof browser === "undefined") {
  // Chrome or Chromium.
  console.log("Chromium");
  var browser = chrome;
} else {
  // Firefox.
  console.log("Firefox");
}

browser.browserAction.onClicked.addListener(mainAction);
