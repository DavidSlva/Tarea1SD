const express = require('express')
const callapiPH = require('../../JsonPh')
const router = express.Router()
module.exports = (app) => {
    app.use('/tarea', router)
    router.get('/', (req,res) => {
        res.status(200).send({
            message: 'todo bien'
        })
    })

    router.get('/posts', async (req,res) => {
        const post = await callapiPH ('posts')
        res.status(200).send({
            message: 'post',
            result: post.data
        })
    })

    router.get('/posts/filter', async (req, res) => {
        const {query} = req
        const {userId} = query
        const post = await callapiPH ('posts?userId=' + userId)
        res.status(200).send({
            message: 'okok',
            result: post.data
        })
    })


    router.get('/posts/:id', async (req,res) => {
        const {params} = req 
        const {id} = params
        const post = await callapiPH('posts/' + id)
        res.status(200).send({
            message: 'post',
            result: post.data
        })
    })
    

    router.get('/comments', async (req,res) => {
        const comments = await callapiPH('comments')
        res.status(200).send({
            message: 'comments',
            result: comments.data
        })
    })
    router.get('/comments/:id', async (req,res) => {
        const {params} = req 
        const {id} = params
        const comments = await callapiPH('comments/' + id)
        res.status(200).send({
            message: 'comments',
            result: comments.data
        })
    })

    router.get('/users', async (req,res) => {
        const users = await callapiPH('users')
        res.status(200).send({
            message: 'users',
            result: users.data
        })
    })
    router.get('/users/:id', async (req,res) => {
        const {params} = req 
        const {id} = params
        const users = await callapiPH('users/' + id)
        res.status(200).send({
            message: 'users',
            result: users.data
        })
    })



    // router.get('/test/:id', (req, res) => {
    //     // params, queries
    //     const {params, query} = req
    //     console.log(params, query);
    //     res.send({
    //         params, query
    //     })
    // })
}