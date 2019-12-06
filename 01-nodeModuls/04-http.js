const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{
    console.log('这是一个简单的请求')
    // res.end('这是一个简单的请求')
    if(req.url == '/' && req.method == 'GET'){
        fs.readFile('../index.html',(err,data)=>{
            if(err){
                res.writeHead(500,{'content-Type':'text/plain;charset=utf-8'})
                res.end('server error')
            }

            res.statusCode =200
            res.setHeader('Content-Type','text/html')
            res.end(data)
        })
    }else if(req.url== '/users' && req.method == 'GET'){
        res.writeHead(200,{'content-Type':'application/json'})
        res.end(JSON.stringify({name:"Leon",age:18}))
    }
})

server.listen('3000',(err)=>{
    if(!err){
        console.log('3000 prot is wroking')
    }
})
