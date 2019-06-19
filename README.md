# vue-new1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

如果你的项目没有用到 sockjs，vuecli3 运行 npm run serve 之后 network 里面一直调研一个接口：http://localhost:8080/sockjs-node/info?t=1462183700002

作为一个有节操的程序猿，实在不能忍受，特意自己研究了下源码，从根源上关闭这个调用

1. 找到/node_modules/sockjs-client/dist/sockjs.js 

2.找到代码的 1605行  //  self.xhr.send(payload); 把这里注掉
