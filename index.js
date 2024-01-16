const moment = require('moment')
const {v4: uuid} = require('uuid')


const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


console.log(moment(new Date()).format('LLLL'))

console.log(uuid())