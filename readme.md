# ts

学习 TS

## main

### 学习

#### 命令

`tsc -v` 查看ts安装的版本

`tsc --init` ts项目初始化会在根目录创建一个tsconfig.json配置文件

`tsc` 会启动配置文件设置了"rootDir": "./src"的src下的index文件（如果没有配置则启动根目录下的index.ts文件），会在输出目录生成一个index.js文件 或者强制启动某个文件 `tsc index.ts`  

#### 类型

-any
-unknown
-never
-enum
-tuple
