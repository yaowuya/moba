# moba
在B站学习vue全栈

[源码参考地址](https://github.com/wxs77577/node-vue-moba)

不同章节的代码在分支中

>this.$set(this.model, 'icon', res.url)
有时候vue的"="号赋值不成功，所以用$set显示赋值

>mongoose model名称存到mongodb数据时，表名会自动+s
collection名称应该为第三个参数，若为缺省，
会自动根据参数name的值以复数形式生成collection
所以应该改成
```js
exports.registeredUser=
mongoose.model('registeredUser',registeredUserSchema,'registeredUser');
```