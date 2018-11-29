# 长单页编辑器
> h5可视化编辑器、H5长单页制作
> 隶属公司：南京易企云软件科技有限公司
> 当前项目版本 0.9x

## 使用
默认系统以安装node,yarn        
🚚 项目下载至本地后，运行node 命令进行依赖包的安装 
```npm
   yarn install -y
```

📦 打包全局依赖    
```npm
   yarn dll
```

😃 启动程序   
```npm
   yarn dev
```
至此，通过 http://localhost:3000/#/v/2 链接即可在本地访问页面。    
再次页面下可进行代码调试等操作    

☁️ 发布通过下面的命令行即可进行打包发布操作    
```npm
   yarn build
```

引入cdn等问题，请参考打包环境包：[webpack-create-app](https://github.com/AntoninSorrento/webpack-create-app)

## 代办事项

1. 兼容旧数据
2. 音乐展示列表，音乐名称过长会将操作图标挤出可视区
3. 展示列表及操作界面溢出显示问题
4. 表单内容发布，及表单内容提交对后台的交接问题
5. 发布页面制作

## 更改日志
* 2018年11月29日14:16:55    
1. 修复已知bug
2. 修改项目名称