const path = require('path')

let ext = path.extname('C:\Users\ECOWS-252\Desktop\omkar\nodejs(Scalar)\Node Module System\f1.txt')

let baseName = path.basename('C:\\Users\\ECOWS-252\\Desktop\\omkar\\nodejs(Scalar)\\Node Module System\\f1.txt')
//path will be always \\ in node to get exact value

console.log(ext)

console.log(baseName)

console.log(__filename)

console.log(__dirname)