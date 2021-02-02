import React, {Component} from 'react';


class Edit extends Component {
    constructor(){
        super();
        this.state = {
            chore: {
                assignToName: '',
                choreName: '',
                choreType: '',
                choreAmount: ''
            }
        }
    }

   
    // the && makes this code run only if the edit chore exist or was invoked
    // the ? is used so make sure the parent exist. This is called optional chaining

    // componentDidUpdate = (prevProps) => {
    //     // need to compare this.prop.chore to nextProps.chore instead of this.props to nextProps
    //     if(prevProps.editChore !== this.props.editChore && this.props.editChore){
    //         this.setState ({
    //             chore: {...this.props.editChore}
    //         })
    //     }
    // }

    // we need to do componentDidMount because we are swtitching between the components and we are just initializing
    componentDidMount = (prevProps) => {
        // need to compare this.prop.chore to nextProps.chore instead of this.props to nextProps
        if(this.props.editChore){
            this.setState ({
                chore: {...this.props.editChore}
            })
        }
    }


    
// Used the object key and the get attribute by name so we can set the value to the object key
    handleChange = event => {
        this.setState({
            chore: {
                ...this.state.chore,
                [event.target.getAttribute("name")]:event.target.value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.chore.id){
            this.props.updateChore(this.state.chore)
        } else{
            this.props.createChore(this.state.chore);
        }
        this.setState({
            chore: {
                assignToName: '',
                choreName: '',
                choreType: '',
                choreAmount: ''  
            }
        })
    }

    
    render(){
        return <div className="form-container">

        
        <form className="editForm" onSubmit={(event) => this.handleSubmit(event)}>
            <input
                onChange={event => this.handleChange(event)} 
                value={this.state.chore.assignToName} 
                placeholder="Type name here..." 
                name="assignToName"
                type="text"
                className="inputForm"/>
             <input
                onChange={event => this.handleChange(event)} 
                value={this.state.chore.choreName} 
                placeholder="Type chore here..."
                name="choreName" 
                type="text"
                className="inputForm"/>   
            <select
                onChange={event => this.handleChange(event)} 
                value={this.state.chore.choreType} 
                name="choreType"
                className="inputForm" 
                >  
                <option value="weekly">weekly</option>
                <option value="saturday">saturday</option>
                <option value="money">money</option>
                </select>
            <input
                onChange={event => this.handleChange(event)} 
                value={this.state.chore.choreAmount} 
                placeholder="Type chore amount here..."
                name="choreAmount" 
                type="text"
                className="inputForm"/> 
            <button type="submit">Submit</button>
            <button onClick={() => this.props.cancel()}
                className="cancelButton">
                <i class="fas fa-times"></i>
            </button>
            <button 
            type="button"
            onClick={(event) => this.props.deleteChore(this.state.chore, event)}>
                <i class="fas fa-trash-alt"></i></button>
        </form>
    </div>
    }
}

export default Edit;