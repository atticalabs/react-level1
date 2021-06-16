import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import './Details.css';
function Details(props) {
    const lists = useSelector((state) => state.allMyLists.lists);//para obtener el state y mostrarlo
    const param = useParams();
    const [stats, setStats] = useState({});

    useEffect(() => {
        fetch('https://www.therogerlab.com/examples/lists-stats.php',
            { method: "POST" })
            .then(res => res.json())
            .then(function (res) {                
                setStats(res);
            })
            .catch(error => console.error('Error:', error));
    },[]);


    if (lists[param.id]) {
        return (
            <div className="myDetails">
                <div className="goback">
                    <Link to="/lists">
                        Go back
                    </Link>
                </div>
                <div className="stats">
                    <span>TOTAL: <b>{stats.total}</b></span>
                    <span>DONE: <b>{stats.done}</b></span>
                    <span>DELAYED: <b>{stats.delayed}</b></span>                    
                </div>
                <ul>
                    {
                        lists[param.id].value.map(function (item, index) {
                            return <li key={index}>{item}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
    return <div>No details</div>
}

export default Details;