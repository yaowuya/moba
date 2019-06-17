# web

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

#### 前端开发注意问题
1、将一些常用的类通过scss封装好，像bootstrap一样，方便使用
2、要进行样式重置

>在使用拼合大图时，可以借助http://www.spritecow.com/这个网站确定图像的位置

>你可以给子组件传入一个静态的值：<parent title="XX">
但我们一般都是需要传动态的值，所以需要v-bind绑定：
<parent v-bind:title="xx"> 简写<parent :title="xx">