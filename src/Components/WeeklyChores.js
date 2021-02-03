import React, {Component} from 'react';

function WeeklyChores(props) {
    return (
        <div className="weekBox">
                 <div className='weekTitle'>Weekly Chores
                 </div>
                <div className="weekChoreBox">
                {props.choreWeek.filter(chore => chore.choreType === 'weekly').map((chore, index) => (
                    <div key={index} className="weeklyChore">
                        {console.log(chore.choreName, chore.choreComplete)}
                        <button className="editButton"
                            onClick={() => props.editChoreForm(chore)}>
                            <i class="fas fa-pencil-alt"></i></button>
                        <div className="assignName ">{chore.assignToName}</div>
                        <div className={chore.choreComplete ? 'completedChore1' : 'choreName'}>{chore.choreName}</div>
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

export default WeeklyChores;