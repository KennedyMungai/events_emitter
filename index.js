const moment = require('moment')
const { v4: uuid } = require('uuid')


const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dateTime = `${moment(new Date()).format('LLLL')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)

    try {
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
    } catch (err) {
        console.error(err)
    }
}


// console.log(moment(new Date()).format('LLLL'))

// console.log(uuid())