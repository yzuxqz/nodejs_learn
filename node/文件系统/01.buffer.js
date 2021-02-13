let str = 'Hello Buffer'

//将一个字符串保存到buffer中
let buf = Buffer.from(str)
console.log(buf.length)

//创建指定大小的buffer
// let buf2 =  new Buffer(1024)
// console.log(buf2)

//创建10个字节的buffer
let buf2 = Buffer.alloc(10)
//通过索引，来操作buffer中的元素
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[10] = 16
console.log(buf2)
