ZIP :=save_tabs_html.zip

.PHONY : all
all : $(ZIP)

.PHONY: $(ZIP)
$(ZIP): save_tabs.js manifest.json icons/icon.svg
	zip --quiet $@ $^

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
