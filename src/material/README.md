# API 文件目录

## Api接口
1.初始化路径 http://h5.e7wei.com/Index/getData    
2.提交保存路径 http://h5.e7wei.com/Index/postData     
3.添加用户素材 http://h5.e7wei.com/Material/addUser    
4.删除用户素材 http://h5.e7wei.com/Material/delUser     
5.获取用户素材 http://h5.e7wei.com/Material/getUser     
6.获取系统素材 http://h5.e7wei.com/Material/getSys    
7.获取系统子分类 http://h5.e7wei.com/Material/getSysType   

## 公共字段

    type : (类型)
            {
              1、图片
              2、背景
              3、封面
              4、音乐
            }

## 路由访问程序示例
   一、路由访问示例
   
       *     一、http://localhost:3000?state=editorH5&sid=5&guide=5 (（编辑h5页面,创建h5页面,创建h5页面,带引导）
       *     三、http://localhost:3000?state=shareMsg&sid=5  （修改H5分享信息）
       *     四、http://localhost:3000?state=release&sid=5 (发布页展示)
       
       *     二、http://localhost:3000?sid=5&（展示h5页面）  （拆出来）

   二、post(请求)
   
      {
           sid: 辨识id(int)
      }  
   
   三、期望接收数据
   
       {
       
           error: （错误辨识信息）（int）
           link:
           msg:
           info{
              title: 分享时标题（string）
              desc: 分享时内容 (string)
              cover:分享时图片 (string)
              bg ： 背景组件数据 (string)
              ui ： 展示组件数据 (string)
           }
           url: 链接 （string）
       }
   

## 保存（发布）


   二、post(请求)
       
      {
            sid: 辨识id(int)
            title: 分享时标题（string）
            desc: 分享时内容 (string)
            cover:分享时图片 (string)
            bg ： 背景组件数据 (string)
            ui ： 展示组件数据 (string)
      }  
   
   三、期望接收数据
       
       {
           error: （错误辨识信息）（int）
       }

   注意： link 通过解析访问路由时以获取

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
              "mid": 媒体存储地址（int）
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



