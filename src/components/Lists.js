import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Lists.css';
function Lists(props) {
    const lists = useSelector((state) => state.allMyLists.lists);//para obtener el state y mostrarlo

    return (
        <div>
            <Link to="todo">
                Add new Todolist
            </Link>
            <div className="mylists">
                {
                    lists.map(function (item, index) {
                        var aList = item.value.map(function (value, index) {
                            return <li key={index}>{value}</li>;
                        });
                        return <ul key={index}>{aList}</ul>;
                    })
                }
            </div>

        </div>
    );

}

export default Lists;