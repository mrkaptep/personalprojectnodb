import React, {Component} from 'react';

function MoneyChores(props) {
    return (
            <div className="moneyBox">
                <div className="moneyTitle">Money Chores</div>
                <div className="moneyChoreBox">
                    {props.choreMoney.filter(chore => chore.choreType === 'money').map((chore, index) => (
                    <div key={index} className='moneyChore'>
                        <button className="editButton"
                            onClick={() => props.editChoreForm(chore)}><i class="fas fa-pencil-alt"></i></button>
                        <div className="assignName2">{chore.assignToName}</div>
                        <div className={chore.choreComplete ? 'completedChore3' : 'choreName2'}>{chore.choreName}</div>
                        <div className="choreAmount">{chore.choreAmount}</div>
                        <div className='completeBox'>
                            <button className="completeChore"
                                onClick={() => props.updateChore({...chore, choreComplete:!chore.choreComplete})}>
                                <i class="fas fa-check"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

                </div>
        )
    

}

export default MoneyChores;