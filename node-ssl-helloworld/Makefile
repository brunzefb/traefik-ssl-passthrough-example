NAME ?= ssl-helloworld

install:
	npm install

build:
	docker build -t $(NAME):latest .

bash: build
	docker run -it --rm --entrypoint /bin/bash $(NAME)

run: build
	docker run -i -t -p 8888:8888  -d $(NAME):latest

test:
	curl -iv https://demo.local:8888/helloworld

clean:
	rm -rf node_modules


.PHONY: install build run test clean
