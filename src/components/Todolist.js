import './Todolist.css';
import Items from './Items';
import { useState, useRef } from "react";
function Todolist() {
    //const [task, setTask] = useState([]);
    const [listItems, setListItems] = useState([]);

    const task = useRef("");

    function submitHandler(e) {
        e.preventDefault();
    }
    function addItem() {
        var newArr = [...listItems, task.current.value];
        setListItems(newArr);
        task.current.value = '';
    }
    function deleteItem(index, e) {
        var newArr = [...listItems];
        newArr.splice(index, 1);
        setListItems(newArr);
    }
    return (
        <div className="todolist">
            <form onSubmit={submitHandler}>
                <input ref={task} type="text" ></input>
                <button onClick={addItem}>Add</button>
            </form>
            <div>
                {
                    listItems.map((item, index) => {
                        return <Items key={index} text={item} ondelete={(e) => deleteItem(index, e)} />;
                    })
                }
            </div>
        </div>
    );

}

export default Todolist;