const { v4: uuidv4 } = require('uuid');


let chores = [{
    id: '1',
    assignToName: 'sam',
    choreName: 'sweep',
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
    choreComplete: false 
},
{
    id: '3',
    assignToName: 'Sam',
    choreName: 'Mow Lawn',
    choreType: 'money',
    choreAmount: '$1',
    choreComplete: false
}

];

module.exports = {

    create: (req, res) => {
        const{assignToName, choreName, choreType, choreAmount} = req.body;
        let newChore = {id:uuidv4(), assignToName, choreName, choreType, choreAmount, choreComplete: false}
        chores.push(newChore);

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
        res.status(200).send(chores[index]);
    },

    delete: (req, res) => {
        const {id} = req.params;
        let index = chores.findIndex(chore => chore.id === id);
        let deletedChore = chores.splice(index, 1);

        res.status(200).send(deletedChore);
    },

}