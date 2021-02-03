import React, {Component} from "react";

function SaturdayChores(props) {
    return (
        <div className="satBox">
            <div className='satTitle'>Saturday Chores</div>
            <div className="satChoreBox">
            {props.choreSaturday.filter(chore => chore.choreType === 'saturday').map((chore, index) => (
                    <div key={index} className='saturdayChore'>
                        <button className="editButton"
                            onClick={() => props.editChoreForm(chore)}><i class="fas fa-pencil-alt"></i></button>
                        <div className="assignName">{chore.assignToName}</div>
                        <div className={chore.choreComplete ? 'completedChore2' : 'choreName'}>{chore.choreName}</div>
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

export default SaturdayChores;