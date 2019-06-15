# admin

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

### 步骤
```npm
npm add element 
```
### 笔记
视觉窗口：根据CSS3规范，视口单位主要包括以下4个：
1. vw：1vw等于视口宽度的1%。
2. vh：1vh等于视口高度的1%。
3. vmin：选取vw和vh中最小的那个。
4. vmax：选取vw和vh中最大的那个。

>如果在data(){}函数中，对象的值已经定好，如：model{a:0}，
则后面可以用this.model.a=xxx直接赋值，如果model{}，则只能
this.$set(this.model, 'a', xxx)

>如果你没有把el-menu的default-openeds 与 vue 中 data 的某个变量绑定，
即使你手动下拉别的菜单，你选中的菜单也没法更新到一个变量中。
这样一来如果此时vue 刷新 dom，此时默认展开的菜单还是 ‘1’
