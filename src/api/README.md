# API 文件目录

## 公共字段

    type : (类型)
            {
              1、图片
              2、背景
              3、封面
              4、音乐
            }


## 路由访问程序示例

*     一、http://localhost:3000?state=createH5&id=5 (创建h5页面)
*     二、http://localhost:3000?state=createH5&id=5&guide=5 (创建h5页面,带引导)
*     三、http://localhost:3000?state=editorH5&id=5&number=2 （编辑h5页面）
*     四、http://localhost:3000?state=showH5&id=5&number=2  （展示h5页面）
*     五、http://localhost:3000?state=shareMsg&id=5&number=2  （修改H5分享信息）
*     六、http://localhost:3000?state=release&id=5&number=2 (发布页展示)


## 公共图片库
   一、post(请求)
   配置：
       
      {
           page: 页面(int)
           pagecount： 每页数量（int）
           type: 类型(int)
           childtype：子类型(int) 
      }  
      
   二、获取数据  
   
      {
         sum:(int)
         list:
         {
           {
              "desc": "背景",
               "url": 5
           },
            ...
         }
      }


## 获取大类列表
   一、post(请求) 
   配置：
   
     {
        type: (int)（具体参照 公共字段 ）
     }  

   二、获取数据  

     {
        {
           childtype: 子类型（int）,
           name: 名称(string),
        }，
        ...  
     }

### 公共音乐

   一、post(请求)
   配置：

      {
           page: 页面(int)
           pagecount： 每页数量（int）
           type: (int)
           childtype：(int) 
      }  
      
   二、获取数据  
   
      {
         sum:(int)
         list:
         {
           {
              "desc": 描述 （string）
              "url": 地址 （stirng）
           },
            ...
         }
      }


   三、 示意图  
     ![avatar](http://src.e7wei.com/0.22750308447914014.png)


## 用户图片库
   一、post (请求)
   
      {
         page: 页面 （int）
         pagecount： 每页数量 (int)
         type: (int)
      }  

   二、期望获取数据  
      
      {
         sum:(int)
         list:
         {
           {
              "desc": 描述 （string）
              "url": 地址 （stirng）
           },
            ...
         }
      }
   三、 示意图  
    ![avatar](http://src.e7wei.com/0.16524431688927121.png)


## 用户资源上传
   一、  post
   
      {
         type: 类型 (int)
         desc: 描述 （string）
         url: 地址 （string）
      }  

   二、  返回值

      {
         error : 判断上传操作是否成功 1；error 0:suc (int)
         mid：资源id,用于删除 (int)
      }


## 用户资源删除
   一、  post
   
      {
         mid：资源id,用于删除 (int)
      }  

   二、  返回值

      {
         error : 判断上传操作是否成功 1；error 0:suc (int)
      }



