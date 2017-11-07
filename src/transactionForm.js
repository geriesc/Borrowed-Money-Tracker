import React, {Component} from 'react'

class TransactionForm extends Component {

state = {
    name: "",
    amount: 0,
}

setName = (v) => {
    this.setState({name: v.target.value})
}

setAmount = (v) => {
    this.setState({amount: parseFloat(v.target.value)})
}

save = () => {
    this.props.addTransaction(this.state)
    //reset
    this.setState({
        name: "",
        amount: 0
    })
}
    render() {
        console.log('render')
        return (
            
            <div>
                <input value={this.state.name} onChange={this.setName} type="text" placeholder="Borrower's Name"/>
                <input value={this.state.amount} onChange={this.setAmount} type="number" placeholder="Amount"/>
                <button onClick={this.save}>
                    Add to List
                    </button>
                </div>

  

  );
    }
}

export default TransactionForm;