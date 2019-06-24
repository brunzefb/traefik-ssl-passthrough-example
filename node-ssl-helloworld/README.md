# Docker node.js ssl example app

To build a container:

```
$ make build
```

Following command will start Docker image in background

```
$ make run
```

you can test it with:

```
$ make test
```

or simply run:

```
curl -v http://demo.local:8080
curl -v https://demo.local:8888
```
