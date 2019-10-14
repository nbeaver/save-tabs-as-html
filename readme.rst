This saves all currently open tabs as HTML,
similar to the `Netscape bookmark format`_.

.. _Netscape bookmark format: https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa753582(v=vs.85)?redirectedfrom=MSDN

The idea is to turn browser tabs into an HTML document
that looks something like this:

    - 9 tabs
    - Date: Mon Oct 14 2019 11:55:30 GMT-0400 (Eastern Daylight Time)
    - ISO date: 2019-10-14T15:55:30.314Z
    - Locale date: 10/14/2019, 11:55:30 AM
    - JSON date: 2019-10-14T15:55:30.314Z
    - Unix timestamp: 1571068530314

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

    `Add-ons Manager <about:addons>`_
      `about:addons <about:addons>`_

    `Debugging - Runtime / this-firefox <about:debugging#/runtime/this-firefox>`_
      `about:debugging#/runtime/this-firefox <about:debugging#/runtime/this-firefox>`_

    `الشرق الأوسط | ara.reuters.com <https://ara.reuters.com/news/topNews>`_
      https://ara.reuters.com/news/topNews

    `首页 | 路透中文网 <https://cn.reuters.com/>`_
      https://cn.reuters.com/

Here's an example of actual output::

    <html>
      <head>
        <meta charset="utf-8">
        <title>browser tabs</title>
      </head>
      <body>
        <ul>
          <li>9 tabs</li>
          <li>Date: Mon Oct 14 2019 11:55:30 GMT-0400 (Eastern Daylight Time)</li>
          <li>ISO date: 2019-10-14T15:55:30.314Z</li>
          <li>Locale date: 10/14/2019, 11:55:30 AM</li>
          <li>JSON date: 2019-10-14T15:55:30.314Z</li>
          <li>Unix timestamp: 1571068530314</li>
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
          <a href="about:addons">Add-ons Manager</a>
          </dt>
          <dd>
          <a href="about:addons">about:addons</a>
          </dd>
          <dt>
          <a href="about:debugging#/runtime/this-firefox">Debugging - Runtime / this-firefox</a>
          </dt>
          <dd>
          <a href="about:debugging#/runtime/this-firefox">about:debugging#/runtime/this-firefox</a>
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

