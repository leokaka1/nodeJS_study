// Buffer(缓冲区)

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10)
console.log(buf1)

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf2 = Buffer.from([1, 2, 3]);
console.log(buf2)

// 存入实际数据
const buf3 = Buffer.from('有没有人说你？')
console.log(buf3.toString())

const buf4 = Buffer.from('还有谁说你？')
const buf5 = Buffer.concat([buf3,buf4])
console.log(buf5.toString())