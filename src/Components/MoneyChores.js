import React, {Component} from 'react';

function MoneyChores(props) {
    return (
            <div className="moneyBox">
                <div className="moneyTitle">Money Chores</div>
                <div className="moneyChoreBox">
                    {props.choreMoney.filter(chore => chore.choreType === 'money').map((chore, index) => (
                    <div key={index} className='moneyChore'>
                        <button onClick={() => props.editChoreForm(chore)}><i class="fas fa-pencil-alt"></i></button>
                        <button onClick={() => props.deleteChore(chore.id)}><i class="fas fa-trash-alt"></i></button>
                        <div className="assignName">{chore.assignToName}</div>
                        <div className="choreName">{chore.choreName}</div>
                        <div className="choreAmount">{chore.choreAmount}</div>
                    </div>
                ))}
            </div>

                </div>
        )
    

}

export default MoneyChores;