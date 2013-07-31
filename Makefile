
build: components index.js main.css template.js stylus
	@component build --dev -v

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

stylus:
	stylus main.styl

.PHONY: clean
