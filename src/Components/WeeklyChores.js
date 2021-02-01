import React, {Component} from 'react';

function WeeklyChores(props) {
    return (
        <div className="weekBox">
                 <div className='weekTitle'>Weekly Chores
                 </div>
                <div className="weekChoreBox">
                {props.choreWeek.filter(chore => chore.choreType === 'weekly').map((chore, index) => (
                    <div key={index} className="weeklyChore">
                        <button onClick={() => props.editChoreForm(chore)}><i class="fas fa-pencil-alt"></i></button>
                        <div className="assignName">{chore.assignToName}</div>
                        <div className="choreName">{chore.choreName}</div>
                    </div>
                ))}
                </div>

                 
                
               

        </div>

    )
    

}

export default WeeklyChores;