# ad-igb

> 爱歌霸

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

##项目结构

src  业务逻辑（或者子目录）

├─assets                    静态文件

├─components                公共组件文件

│  ├─base                       基本组件

│  ├─busines                    业务组件

│  ├─tool                       工具组件

├─ddd                       工具类

├─enum                      枚举

├─router                    路由

├─modules                   页面文件

│  ├─classification             分类菜单

│  ├─collect                    收藏菜单

│  ├─layout                     整体布局

│  ├─recommend                  推荐菜单

│  ├─singer                     歌星菜单

│  ├─index.vue                
