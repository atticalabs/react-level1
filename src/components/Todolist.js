import './Todolist.css';
import Items from './Items';
import { useState, useRef } from "react";
import { useDispatch } from 'react-redux'
import { mySliceActions } from '../store/slice'
import { useHistory } from 'react-router-dom';
function Todolist() {
    
    const [listItems, setListItems] = useState([]);
    const task = useRef("");
    const dispatch = useDispatch();
    const history = useHistory();
  

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
    function saveList(){
        dispatch(mySliceActions.add(listItems));
        history.push('/lists');
    }
    return (
        <>
            <div className="todolist">
                <form onSubmit={submitHandler}>
                    <input ref={task} type="text" ></input>
                    <button onClick={addItem}>Add</button>
                    <button onClick={saveList}>Save</button>
                </form>
                <div>
                    {
                        listItems.map((item, index) => {
                            return <Items key={index} text={item} ondelete={(e) => deleteItem(index, e)} />;
                        })
                    }
                </div>
            </div>           
        </>
    );

}

export default Todolist;