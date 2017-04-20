/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-03-09 14:16:07
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-18 12:39:24
*/
'use strict';

// server.js
var path = require('path')
var jsonServer = require('json-server')
var server = jsonServer.create()
var routes = require(path.resolve(__dirname, '../data/routes.js'))
// var routes = require('../src/commons/routes')

var middlewares = jsonServer.defaults()

server.use(middlewares)

Object.keys(routes).map(name => {
  let json = path.resolve(__dirname, routes[name])
  // let json = path.resolve(__dirname, routes[name].data)
  server.use(name, (req, res) => {
  // server.use(routes[name].url, (req, res) => {
    res.sendFile(json)
  })
})

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }

  next()
})

server.listen(3000, function () {
  console.log('JSON Server is running at: http://127.0.0.1:3000/')
})