  # RESTful: todoList

PLEASE DON'T COPY FOR YOUR ASSIGNMENT!  

## Purpose:
Learning B/S recently and RESTful is the topic for my midterm report. Though there are a lot of articles introducing about this topic, I cannot fully understand RESTful. Finally found this great tutorial! 

## Link:
https://nodejust.com/node-js-restful-api-tutorial/

## Introduction
在本项目中，基于RESTful API服务器完成一个todoList。  
操作					操作方式		Endpoint  
建立一个待办事项		POST		/todo  
读取一个待办事项		GET			/todo/:id  
删除一个待办事项		DELETE		/todo/:id  
读取整个待办事项列表	GET			/todo  
更新一个待办事项		PUT			/todo/:id  
Endpoint 是指网址最后的部分，例如，POST的网址会是：localhost:3000/todo

## NOTES for RESTful
### Ref：
http://www.ruanyifeng.com/blog/2011/09/restful.html?bsh_bid=1717507328   
http://www.runoob.com/w3cnote/restful-architecture.html   
https://www.jianshu.com/p/3b606a14e6b3   
https://zh.wikipedia.org/wiki/表现层状态转换   
www.ruanyifeng.com/blog/2014/05/restful_api.htm   

### Tutorial：
https://nodejust.com/node-js-restful-api-tutorial/  
https://www.iwwenbo.com/jersey-2-hello-world-application-tutorial/  

### Notes:
1. 需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML以及HTML这些现有的广泛流行的协议和标准。   
  • 资源是由URI来指定。      
  • 对资源的操作包括获取、创建、修改和删除资源，这些操作正好对应HTTP协议提供的GET、POST、PUT和DELETE方法。     
  • 通过操作资源的表现形式来操作资源。     
  • 资源的表现形式则是XML或者HTML，取决于读者是机器还是人，是消费web服务的客户软件还是web浏览器。当然也可以是任何其他的格式。     

2. REST架构风格最重要的架构约束有6个[2]：   
  • 客户-服务器（Client-Server）    
  • 通信只能由客户端单方面发起，表现为请求-响应的形式。   
  • 无状态（Stateless）    
  • 通信的会话状态（Session State）应该全部由客户端负责维护。   
  • 缓存（Cache）    
  • 响应内容可以在通信链的某处被缓存，以改善网络效率。   
  • 统一接口（Uniform Interface）    
  • 通信链的组件之间通过统一的接口相互通信，以提高交互的可见性。   
  • 分层系统（Layered System）    
  • 通过限制组件的行为（即每个组件只能“看到”与其交互的紧邻层），将架构分解为若干等级的层。  
  • 按需代码（Code-On-Demand，可选）    
  • 支持通过下载并执行一些代码（例如Java Applet、Flash或JavaScript），对客户端的功能进行扩展。    
  来自 <https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2>    

3. 关于状态   
  应该注意区别应用的状态和连接协议的状态。HTTP连接是无状态的（也就是不记录每个连接的信息），而REST传输会包含应用的所有状态信息，因此可以大幅降低对HTTP连接的重复请求资源消耗。  
  来自 <https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2>      

4. 应用于Web服务    
  匹配REST设计风格的Web API称为RESTful API。它从以下三个方面资源进行定义：     
  • 直观简短的资源地址：URI，比如：http://example.com/resources/。      
  • 传输的资源：Web服务接受与返回的互联网媒体类型，比如：JSON，XML，YAML等。     
  • 对资源的操作：Web服务在该资源上所支持的一系列请求方法（比如：POST，GET，PUT或DELETE）。      

5. REST的优点   
  • 可更高效利用缓存来提高响应速度   
  • 通讯本身的无状态性可以让不同的服务器的处理一系列请求中的不同请求，提高服务器的扩展性   
  • 浏览器即可作为客户端，简化软件需求    
  • 相对于其他叠加在HTTP协议之上的机制，REST的软件依赖性更小    
  • 不需要额外的资源发现机制   
  • 在软件技术演进中的长期的兼容性更好   
  来自 <https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2>     


