ZIP :=save_tabs_html.zip
ICON_SIZES:=16 32 48 64 96 128
ICON_PNG:=$(patsubst %,icons/icon%.png, $(ICON_SIZES))
ICON_SVG:=icons/icon.svg
ICONS:=$(ICON_PNG) $(ICON_SVG)
JS:=save_tabs.js
IGNORE:=LICENSE.txt Makefile chrome-web-store/ eslint.config.mjs package-lock.json package.json product-page/ readme.rst readme.html todo.md todo.html relevant-links/ icons/old-icons/ icons/Makefile changelog.txt bookmarks.html example.html

.PHONY : all
all : $(ZIP)

.PHONY: $(ZIP)
$(ZIP): save_tabs.js manifest.json $(ICONS)
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

.PHONY: web-ext-build
web-ext-build :
	npm exec -- web-ext build --overwrite-dest --ignore-files $(IGNORE)

.PHONY: web-ext-lint
web-ext-lint :
	npm exec -- web-ext lint

.PHONY: lint-web-ext
lint-web-ext: web-ext-lint

.PHONY : clean
clean :
	rm -f -- $(ZIP)
