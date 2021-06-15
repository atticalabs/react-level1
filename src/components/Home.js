import { Link } from 'react-router-dom';
import savebtn from '../images/savebtn.png';
import lists from '../images/lists.png';
function Home() {
    return (
        <div>
            <h1>React Level 2</h1>            
            <h5>(Use Redux Toolkit recommended)</h5>
            <div style={{ width: '450px', margin: '0 auto', textAlign: 'left' }}>
                <ul>
                    <li>Add a save button in Todolist</li>
                    <div style={{marginBottom:"10px"}}>
                        <img src={savebtn} alt="result" style={{ width: '100%' }} />
                    </div>                    
                    <li>When click on save: Navigate to a Lists component</li>                    
                    <li>In List component show a list of lists</li>
                    <li>In List component create a link to navigate back to Todolist</li>
                    <div style={{marginTop:"30px"}}>
                        <img src={lists} alt="result" style={{ width: '100%' }} />
                    </div>
                </ul>
                
            </div>
            <div>
            <Link to="todo">
                Go to todolist
            </Link>
            </div>
            
            <div>
            <Link to="lists">
                Go to show all lists
            </Link>
            </div>
        </div>
    );
}

export default Home;