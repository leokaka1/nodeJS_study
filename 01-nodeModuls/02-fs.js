// 读写文件
const fs = require('fs')


// 1.同步方式
// const data = fs.readFileSync('../package.json')
// // 会以二进制文件读取json文件，如果加上tostring就能用文字输出
// console.log(data.toString('utf-8'))


//     fs.readFile('../package.json',(err,data)=>{
//     console.log(data.toString())
// })


// //2.异步方式
// const {promisify} = require('util')
// const readFile = promisify(fs.readFile)
// readFile('../package.json').then(res=>{
//     console.log(res.toString('utf-8'))
// })

async function readFile(){
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('../package.json')
    console.log(data.toString('utf-8'))   
}

readFile()