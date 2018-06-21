# API 文件目录
所有与后端交互的请求的动作，都存放在此目录

### src/app.jsx （入口文件）
> 通过 url 解析传递来的值，通过状态码，进行不同的操作    
> 具体实现功能查看 具体文件
1. 数据结构
   url :  https://www.e7wei.com/other?uid=''&state=''
   data : { uid: 用户号 ， state: 状态码 }
   

### src/common/up_img_common/upload_common.jsx （图片显示及上传 model）
> 在react 生命周期中搜索用户上传图片，及公共图片
> 具体实现功能查看 具体文件
1.  数据结构
   number: 总页数，
   ajax_url：公共图片数据集，
   library_list： 图片项目表
   user_library：用户图片库