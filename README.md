# vue2-multiple-pages

> 改造 `VUE-CLI` 构建流程（构建多页应用）

### Build Setup
```
step1:
  git clone https://github.com/dlidala/vue2-mutiple-pages.git

setp2:
  cd path/vue2-mutiple-pages && sudo npm install

step3:
  npm run dev
  npm run mock
```

### 构建测试/生产包
```bash

  // 构建测试包
  // npm run stg:项目文件夹
  npm run stg:index

  // 构建生产包
  // npm run prod:项目文件夹
  npm run prod:index
```

### Directory Structure
```
vue2-multiple-pages/
  - build/            --> build process
  - config/           --> build process configs
  - data/             --> mock data
  - dist/
      - stg/
        - static/
        - views/
          - index
          ...
      - prod/
  - node_modules/
  - src/              --> source
      - api/          --> public apis
      - assets/       --> public assets
          - css/
          - images/
          - fonts/
      - components/   --> public components
      - filter/       --> filter
      - router/       --> 项目中很少情况会未启用
      - store/        --> 项目中很少情况会未启用
      - services/     --> public services (例如:`调登录组件`)
      - utils/        --> utils (fetch.js、ajax.js、util.js、etc.)
      - views/
        - index       --> project folder
            - api/          --> project api
            - assets/       --> project assets
              - css/
              - images/
              - fonts/
            - components/   --> project components
            - router/       --> project router (多页里面做单页)
            index.html
            index.js
            demo.html
            demo.js
        - info
          - ...
  - static/                 --> libs (ex: bootstrap)
  - test/                   --> 未完善
  .babelrc
  .editorconfig
  .eslintignore
  .eslintrc.js
  .gitignore
  .postcssrc.js
  .package.json
  README.md

  ** `public` 指的是三以上项目都用到的 **
```

**就目前的项目来看，并不建议使用 `vuex`**
