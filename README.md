#### 学习Nest.js+TypeScript
 1. 学习基本的Nest语法
 2. controll控制器，是用来处理用户的http请求及响应
    * @controll 装饰器是用来统一请求路径
    如
    ```javascript 1.8
        @Controller('cats') 
    ```
    当请求cats路径时候，就由catsContrall控制器进行处理