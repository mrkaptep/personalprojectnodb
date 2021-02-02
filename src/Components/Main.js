import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import WeeklyChores from './WeeklyChores'
import SaturdayChores from './SaturdayChores';
import MoneyChores from './MoneyChores';
import Edit from './Edit';


class Main extends Component{
    constructor(){
      super();
  
      this.state = {
        chores: [],
  
      }
    }
  
    componentDidMount(){
      this.getChores();
    }
  
    getChores = () => {
      axios.get('/api/chores')
      .then(res => {
        console.log("Response: ", res.data);
        this.setState({chores: res.data})
      }).catch(err => console.log(err))
    }
    
    // post it to server and server responded with the new data. we push the data into state then
    // we used set state to force the application to rerender.

    createChore = chore => {
        axios.post('/api/chores', chore)
        .then(res => {
            this.state.chores.push(res.data); 
            this.setState({
                chores: this.state.chores,
                editChore: null
            })
        }).catch( err => console.log(err))
    }
  
    // sends back chore from server and then the function goes to the chore array and finds the index that matches the id
    // and then grabs that index and changes the index to match the data that just came back from the server
   updateChore = chore => {
       axios.put(`/api/chores/${chore.id}`, chore)
       .then(res => {
        let index =this.state.chores.findIndex(chore => chore.id === res.data.id)
        this.state.chores[index] = res.data;
           this.setState({
               chores: this.state.chores,
               editChore: null
           })

       }).catch(err => console.log(err))
   }
 
   cancel = ()=> {
        this.setState({
            editChore: null
        })
   }
   editChoreForm = chore => {
        this.setState({
            editChore: chore
        })
    }
    
    deleteChore = (chore) => {
        axios.delete(`/api/chores/${chore.id}`)
        .then( res => {
            let index = this.state.chores.findIndex(thisChore => thisChore.id === chore.id);
                this.state.chores.splice(index,1)
            this.setState({
                chores: this.state.chores
            })
        }).catch(err => console.log(err))
    }


    render(){
      return (
        <div className="App">
            <div className="contentContainer">
                <div className="headerBox">
                    <Header/>
                    <button onClick={( () => this.editChoreForm({choreType:'weekly'}))}>
                        <i class="fas fa-plus-square"></i></button>
                </div>
                {this.state.editChore ? (
                    <Edit editChore={this.state.editChore}
                      createChore={this.createChore} 
                      editChoreForm={this.editChoreForm} 
                      updateChore={this.updateChore}
                      cancel={this.cancel}
                    />
                    ):(
                    <React.Fragment>
                        <WeeklyChores choreWeek={this.state.chores} 
                                      editChoreForm={this.editChoreForm}
                                      deleteChore={this.deleteChore}
                    />
                        <SaturdayChores choreSaturday={this.state.chores}
                                        editChoreForm={this.editChoreForm}
                                        deleteChore={this.deleteChore}
                    />
                        <MoneyChores choreMoney={this.state.chores}
                                     editChoreForm={this.editChoreForm}
                                     deleteChore={this.deleteChore}
                        />
                    </React.Fragment>
                )}
            </div>
        </div>
      );
    }
  }
  
  export default Main;
  