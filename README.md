# Project

## html
```
npm install http-server -g
```
-p 要使用的端口（默认为8080）

-a 要使用的地址（默认为0.0.0.0）

-d 显示目录列表（默认为“True”）

-i 显示autoIndex（默认为“True”）

-g或--gzip启用时（默认为“False”），它将用于./public/some-file.js.gz代替./public/some-file.jsgzip压缩版本的文件，并且该请求接受gzip编码。

-e或--ext默认文件扩展名（如果没有提供）（默认为'html'）

-s或--silent从输出中抑制日志消息

--cors通过Access-Control-Allow-Origin标题启用CORS

-o 启动服务器后打开浏览器窗口

-c设置缓存控制max-age头的缓存时间（以秒为单位），例如-c10 10秒（默认为'3600'）。要禁用缓存，请使用-c-1。

-U或--utc在日志消息中使用UTC时间格式。

-P或--proxy代理无法在本地解决给定网址的所有请求。例如：-P http://someurl.com

-S或--ssl启用https。

-C或--certssl证书文件的路径（默认值：cert.pem）。

-K或--keyssl密钥文件的路径（默认值：key.pem）。

-r或者--robots提供一个/robots.txt（其内容默认为'User-agent：* \ nDisallow：/'）

-h或--help打印此列表并退出。

## vue-todo

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
