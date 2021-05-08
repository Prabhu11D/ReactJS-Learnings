import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: [],
        };
    }

    addItem(todoValue) {
        console.log("Added");
        if (todoValue !== "") {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false,
            };

            const list = [...this.state.list];
            list.push(newItem);
            this.setState({
                list,
                newItem: "",
            });
        }
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.id !== id);
        this.setState({
            list: updatedList,
        });
    }

    updateInput(input) {
        this.setState({
            newItem: input,
        });
        console.log("Updated");
    }

    render() {
        return (
            <div className="App">
                <img className="App-logo" src={logo} alt="logo" />
                <h2 className="app-title">React Todo</h2>
                <div className="container">
                    Add an Item...
                    <br />
                    <input
                        type="text"
                        placeholder="write a todo"
                        className="add-item"
                        required
                        onChange={(e) => this.updateInput(e.target.value)}
                    />
                    <button
                        className="add-btn"
                        onClick={this.addItem(this.state.newItem)}
                    >
                        Add Todo
                    </button>
                    <div className="list">
                        <ul>
                            {this.state.list.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <input
                                            type="checkbox"
                                            checked={item.isDone}
                                            onChange={() => {}}
                                        />
                                        {item.value}
                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                this.deleteItem(item.id)
                                            }>
                                            Delete
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
