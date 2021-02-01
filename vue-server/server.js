/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
const Vue = require('vue')
const server = require('express')()


server.get('/', (req, res) => {
    const vm = new Vue({
        template: `<h1>this first SSR</h1>`
    })

    const renderer = require('vue-server-renderer').createRenderer()

    renderer.renderToString(vm).then(contentHTML => {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${contentHTML}
        </body>
        </html>`)
    })
})
server.listen(3000)