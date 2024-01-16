const moment = require('moment')
const {v4: uuid} = require('uuid')


const fs = require('fs')


console.log(moment(new Date()).format('LLLL'))

console.log(uuid())