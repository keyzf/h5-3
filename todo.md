# TODO 错误及待修补事项

### 2018年05月21日13:08:06

#### 运行 yarn test 抛出错误    
   
   待修复： Branch---->(antd config)
      
    ❌ git错误 EMFILE: too many open files, watch
    
#### logo 信息更换
   TODO: Branch---->(visual-view)

    🔨  更新Logo 信息 
    
#### 完善select 其他项
   待完成: Branch---->(react-thunk)

     🔨 目前只完成了text    
     
#### 鉴于图片上传后的设置，有待商议
      
   待商议: Branch---->(background-component)
     
    👨 文件上传，到底是由前端做，还是后端做。
    
    
    
### 2018年05月22日17:31:30
    
#### 背景组件图片点击遮罩时，状态回退   ✅已修补
   待完成: Branch---->(background-component)
           
     🔨背景组件图片点击遮罩时，状态回退，明天优化组件界面时解决
   
   
### 2018年05月23日10:43:05
   疑似 bug  Branch---->(background-review)  
  
     🐞 背景组件 <Popover> 的 'placement' 属性无法设置为right
      
     🐜  怀疑 ant design bug 
     
   TODO ：Branch---->(background-review) ✅已修补
    
     🔨  图片上传model模块待优化 
     
   ❓ Branch---->(visual-content)  
           
     背景组件中的 固定选项背后 实际使用的属性
     
   🐞  Branch---->(visual-content)  
              
        背景组件中的 色值选定中，透明色无法设置 
        
   待改正  Branch---->(text-component)  
                 
        组建位置定位中，必须点击组件两次才出现  
        目测无法改正。。。
   
   待修复    Branch---->(text-component)    ✅已修补
   
       设置图片后，如果切换为背景，在切换为组件，则model会重置，
       并且组件内部的图片显示也需要设置   