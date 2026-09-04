# Likely to do.

## User interface
- [ ] Make output customizable
  - https://github.com/nbeaver/save-tabs-as-html/issues/1
  - e.g. like https://github.com/garoose/copy-message-id/blob/master/options/options.html

## HTML output
- [x] Add CSS for dark mode
- [ ] Tweak CSS to add a little space between each entry
- [ ] Why did this happen?

    <style>
    <![CDATA[
    a {
    text-decoration: none;
    }
    dt {
    margin-top: 10px;
    }
    ]]>
    </style>

- [x] CSS styling: take out underlining and add spacing:

    <style type="text/css">
    a {
      text-decoration: none;
    }
    dt {
      margin-top: 10px;
    }
    </style>

- [x] Use `serializeToString` instead of `outerHTML`
  - <https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string>
- [x] Skip private tabs (`tab.incognito == true`).
- [ ] Add sections for different windows
- [ ] Add subsections for pinned/unpinned tabs

## Addon icon
- [x] Find a suitable icon.
- [ ] Manually tweak PNG icons, especially at low resolution.
- [ ] Add whitespace between tabs to make the icon more clear at low resolution

## Addon page
- [ ] Update screenshots for new CSS styling.

- [ ] New URLs for Chinese language pages
  - https://www.thomsonreuters.cn/zh.html
  - https://www.ctee.com.tw/
  - https://tw.news.yahoo.com/

# May or may not do.

- [ ] Set up reproducible builds.

## User interface
- [ ] Allow invoking from context menu by selecting multiple tabs and right-clicking so a subset of tabs can be saved instead of all of them

## HTML output
- [x] Make the title more specific than just "browser tabs"
- [ ] Include tab.id / tab.index?
- [ ] Indent/format downloaded HTML to make grepping easier.
  - <https://stackoverflow.com/questions/45046868/serializing-dynamically-created-html-with-indentation>
  - <https://stackoverflow.com/questions/376373/pretty-printing-xml-with-javascript/>
- [ ] Include favicons.
  - <https://stackoverflow.com/questions/2057636/get-websites-favicon-with-js>
  - <https://stackoverflow.com/questions/1990475/how-can-i-retrieve-the-favicon-of-a-website-with-xslt-or-jsp>
