# vue2-multiple-pages

> 改造 `VUE-CLI` 构建流程（构建多页应用）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 开发调用 Mock Data
npm run mock

# 构建测试包(no minification)
npm run build:stg

# 构建生产包(minification)
npm run build:prod

# build for production and view the bundle analyzer report
npm run build --report

**test 还未使用**
# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```
static/
assets/
  js/
  css/
  img/
  fonts/
views/
  index/
  info/


npm run build:prod:project
static
views/
  index/
    js/
    css/
    fonts/
    imgs/
    **.html

  info/
    js/
    css/
    fonts/
    img/
    **.html
```

```
  zepto
  bow
  axios
```
