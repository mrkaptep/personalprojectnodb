const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('./server/db.json')
const db = low(adapter)
 
// Set some defaults
db.defaults({
    chores: [
        {
            id: '1',
            assignToName: 'Sam',
            choreName: 'Sweep',
            choreType: 'weekly',
            choreAmount: '0',
            choreComplete: false
        },
        {
            id: '2',
            assignToName: 'Sam',
            choreName: 'Mop Kitchen',
            choreType: 'saturday',
            choreAmount: '0',
            choreComplete: 'false' 
        },
        {
            id: '3',
            assignToName: 'Sam',
            choreName: 'Mow Lawn',
            choreType: 'money',
            choreAmount: '$1',
            choreComplete: 'false'
        }
    ]
}).write()
 
module.exports = db
