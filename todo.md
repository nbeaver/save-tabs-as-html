# Likely to do.

- [ ] CSS styling: take out underlining and add spacing:

    <style type="text/css">
    a {
      text-decoration: none;
    }
    dt {
      margin-top: 10px;
    }
    </style>

- [x] Find a suitable icon.
- [ ] Add whitespace between tabs to make the icon more clear at low resolution
- [x] Use `serializeToString` instead of `outerHTML`
  - <https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string>
- [x] Skip private tabs (`tab.incognito == true`).
- [ ] Add sections for different windows
- [ ] Add subsections for pinned/unpinned tabs

# May or may not do.

- [x] Make the title more specific than just "browser tabs"
- [ ] Include tab.id / tab.index?
- [ ] Indent/format downloaded HTML to make grepping easier.
  - <https://stackoverflow.com/questions/45046868/serializing-dynamically-created-html-with-indentation>
  - <https://stackoverflow.com/questions/376373/pretty-printing-xml-with-javascript/>
- [ ] Include favicons.
  - <https://stackoverflow.com/questions/2057636/get-websites-favicon-with-js>
  - <https://stackoverflow.com/questions/1990475/how-can-i-retrieve-the-favicon-of-a-website-with-xslt-or-jsp>
