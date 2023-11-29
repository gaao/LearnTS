# ts

学习 TS

## main

### 学习

#### 命令

`tsc -v` 查看ts安装的版本

`tsc --init` ts项目初始化会在根目录创建一个tsconfig.json配置文件

`tsc` 会启动配置文件设置了"rootDir": "./src"的src下的index文件（如果没有配置则启动根目录下的index.ts文件），会在输出目录生成一个index.js文件 或者强制启动某个文件 `tsc index.ts`  

#### 基本类型
·boolean
·number
·string
·array

``` code
两种方式
let list:number[]=[1,2,3]
let list:Array<number>=[1,2,3]
```
·tuple
·enum
``` code
enum Color{Red,Green,Blue}
```
·any
·unknown
·never
·void 当一个函数没有返回值时，通常会见到其返回值类型为void
·null和undefined
·联合类型

#### 函数
具名函数 function add(a:number,b:nubmer):number{return a+b}
匿名函数 let add = function (a:number,b:nubmer):number{return a+b}

##### 可选参数?
##### 断言!

#### 类
``` code
class Person {
  private name:string
  private age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  public getPerson Info():string{
  return `My name is ${this.name} and age is${this.age}`
  }
}

let firstman = New Person('zhangsan',18)
firstPerson.getPersonInfo()
继承extends
class Employee extends Person {
  private department:string
  constructor(name:string,age:number,department:string){
  super(name,age)
  this.department =department
  }
  public getEmployeeInfo():string{
  return this.getPerson+`and work in ${this.department}'
  }
}
let secondman = New Employee('lishi',28,'bba')
secondman.getEmployeeInfo()

```

