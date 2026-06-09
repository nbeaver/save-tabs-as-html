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

.PHONY: eslint
eslint: lint-js

.PHONY: lint-js
lint-js:
	npm exec -- eslint "**/*.js"

.PHONY: web-ext-lint
web-ext-lint :
	npm exec -- web-ext lint

.PHONY: lint-web-ext
lint-web-ext: web-ext-lint

.PHONY: install-npm
install-npm:
	npm clean-install
	# npm install web-ext eslint globals

.PHONY: outdated-npm
outdated-npm:
	npm outdated

.PHONY: update-npm
update-npm:
	npm update


.PHONY : clean
clean :
	rm -f -- $(ZIP)
