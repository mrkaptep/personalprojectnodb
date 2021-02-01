import React, {Component} from "react";

function SaturdayChores(props) {
    return (
        <div className="satBox">
            <div className='satTitle'>Saturday Chores</div>
            <div className="satChoreBox">
            {props.choreSaturday.filter(chore => chore.choreType === 'saturday').map((chore, index) => (
                    <div key={index} className='saturdayChore'>
                        <button onClick={() => props.editChoreForm(chore)}><i class="fas fa-pencil-alt"></i></button>
                        <div className="assignName">{chore.assignToName}</div>
                        <div className="choreName">{chore.choreName}</div>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default SaturdayChores;