const { v4: uuidv4 } = require('uuid');
const db = require('./db.js')
// const heartbeats = require('heartbeats')

// var heart = heartbeats.createHeart(1000);
// heart.createEvent(10,(count, last)=> {

//   setInterval(()=>{
//     let choresFiltered = chores.filter(chore => chore.choreType === 'weekly');
//     console.log(myweekchores)
//     let choreNames = choresFiltered.map((element) => {
//       return element.choreName
//     })
//     weeklychores = choresFiltered.map((chore, index) => {
//         if(index === 0){
//             chore.choreName = choreNames[choresFiltered.length - 1]
//         } else {
//             chore.choreName = choreNames[index - 1]
//         }
//         return chore
//     })
//     console.log('boop')
//   },60000)

let chores = db.get('chores') .value();

module.exports = {

    create: (req, res) => {
        const{assignToName, choreName, choreType, choreAmount, choreComplete} = req.body;
        let newChore = {id:uuidv4(), assignToName, choreName, choreType, choreAmount, choreComplete}
        chores.push(newChore);
        db.set('chores', chores)
        .write()
        res.status(200).send(newChore);
    },

    read: (req, res) =>{
        const {id} = req.params;
        let index = chores.findIndex(chore => chore.id === id);
        res.status(200).send(chores[index]);
    },

    readAll: (req, res) => {
        res.status(200).send(chores)
    },

    update: (req, res) => {
        const {assignToName, choreName, choreType, choreAmount, choreComplete} = req.body;
        const {id} = req.params;

        let index = chores.findIndex(chore => chore.id === id);
        chores[index] = {
            id: chores[index].id,
            assignToName: assignToName || chores[index].assignToName,
            choreName: choreName || chores[index].choreName,
            choreType: choreType || chores[index].choreType,
            choreAmount: choreAmount || chores[index].choreAmount,
            choreComplete: choreComplete
        }
        db.set('chores', chores)
        .write()
        res.status(200).send(chores[index]);
    },

    delete: (req, res) => {
        const {id} = req.params;
        let index = chores.findIndex(chore => chore.id === id);
        let deletedChore = chores.splice(index, 1);
        db.set('chores', chores)
        .write()
        res.status(200).send(deletedChore);
    },

}