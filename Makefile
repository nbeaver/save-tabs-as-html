ZIP :=save_tabs_html.zip

.PHONY : all
all : $(ZIP)

.PHONY: $(ZIP)
$(ZIP): save_tabs.js manifest.json icons/icon128.png icons/icon96.png icons/icon64.png icons/icon48.png icons/icon32.png icons/icon16.png
	zip --filesync --quiet $@ $^

readme.html : readme.rst
	rst2html $< $@

todo.html : todo.md
	markdown $< > $@

.PHONY : lint
lint :
	gjslint --nojsdoc save_tabs.js

.PHONY : clean
clean :
	rm -f -- $(ZIP)
