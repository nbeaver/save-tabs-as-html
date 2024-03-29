This saves all currently open tabs as HTML,
similar to the `Netscape bookmark format`_.

.. _Netscape bookmark format: https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa753582(v=vs.85)?redirectedfrom=MSDN

https://addons.mozilla.org/en-US/firefox/addon/save-tabs-to-html-file/

https://chrome.google.com/webstore/detail/save-tabs-as-html/dmnhgbenglfffoaodbgpfoihfnbdbfcb

The idea is to turn browser tabs into an HTML document
that looks something like this:

    - 7 tabs
    - User agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0
    - Date: Mon Oct 14 2019 20:08:24 GMT-0400 (Eastern Daylight Time)
    - ISO date: 2019-10-15T00:08:24.823Z
    - Locale date: 10/14/2019, 8:08:24 PM
    - JSON date: 2019-10-15T00:08:24.823Z
    - YYYY-MM-DD (local): 2019-10-14
    - Milliseconds since Unix epoch: 1571098104823

    `Task Manager <about:performance>`_
      `about:performance <about:performance>`_

    `\<dl\>: The Description List element - HTML: Hypertext Markup Language | MDN <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl>`_
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl

    `about:debugging - Firefox Developer Tools | MDN <https://developer.mozilla.org/en-US/docs/Tools/about:debugging>`_
      https://developer.mozilla.org/en-US/docs/Tools/about:debugging

    `\<title\>: The Document Title element - HTML: Hypertext Markup Language | MDN <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title>`_
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

    `tabs.Tab - Mozilla | MDN <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab>`_
      https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab

    `الشرق الأوسط | ara.reuters.com <https://ara.reuters.com/news/topNews>`_
      https://ara.reuters.com/news/topNews

    `首页 | 路透中文网 <https://cn.reuters.com/>`_
      https://cn.reuters.com/

Here's an example of actual output (reformatted for readability)::

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>7 browser tabs</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <ul>
          <li>7 tabs</li>
          <li>User agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0</li>
          <li>Date: Mon Oct 14 2019 20:08:24 GMT-0400 (Eastern Daylight Time)</li>
          <li>ISO date: 2019-10-15T00:08:24.823Z</li>
          <li>Locale date: 10/14/2019, 8:08:24 PM</li>
          <li>JSON date: 2019-10-15T00:08:24.823Z</li>
          <li>YYYY-MM-DD (local): 2019-10-14</li>
          <li>Milliseconds since Unix epoch: 1571098104823</li>
        </ul>
        <dl>
          <dt>
          <a href="about:performance">Task Manager</a>
          </dt>
          <dd>
          <a href="about:performance">about:performance</a>
          </dd>
          <dt>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl">&lt;dl&gt;: The Description List element - HTML: Hypertext Markup Language | MDN</a>
          </dt>
          <dd>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl</a>
          </dd>
          <dt>
          <a href="https://developer.mozilla.org/en-US/docs/Tools/about:debugging">about:debugging - Firefox Developer Tools | MDN</a>
          </dt>
          <dd>
          <a href="https://developer.mozilla.org/en-US/docs/Tools/about:debugging">https://developer.mozilla.org/en-US/docs/Tools/about:debugging</a>
          </dd>
          <dt>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">&lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language | MDN</a>
          </dt>
          <dd>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title</a>
          </dd>
          <dt>
          <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab">tabs.Tab - Mozilla | MDN</a>
          </dt>
          <dd>
          <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab">https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab</a>
          </dd>
          <dt>
          <a href="https://ara.reuters.com/news/topNews">الشرق الأوسط | ara.reuters.com</a>
          </dt>
          <dd>
          <a href="https://ara.reuters.com/news/topNews">https://ara.reuters.com/news/topNews</a>
          </dd>
          <dt>
          <a href="https://cn.reuters.com/">首页 | 路透中文网</a>
          </dt>
          <dd>
          <a href="https://cn.reuters.com/">https://cn.reuters.com/</a>
          </dd>
        </dl>
      </body>
    </html>
