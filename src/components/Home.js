import { Link } from 'react-router-dom';
import details from '../images/details.png';
import detailsStats from '../images/detailsStats.png';
function Home() {
    return (
        <div>
            <h1>React Level 3</h1>            
            <h5>In this final challenge</h5>
            <div style={{ width: '450px', margin: '0 auto', textAlign: 'left' }}>
                <ul>
                    <li>Add a details link on each list</li>
                    <div style={{marginTop:"10px"}}>
                        <img src={details} alt="result" style={{ width: '100%' }} />
                    </div>                    
                    <li>When click on details: Navigate to a Details component</li>                    
                    <li>In Details component show that particular list</li>
                    <li>In Details component show stats fetched from API</li>
                    
                    <li>API URL: <pre>https://www.therogerlab.com/examples/lists-stats.php</pre></li>
                    <li>JSON Response: <pre>"success":"ok","total": 56,"done": 50,"delayed": 6</pre></li>
                    <li>Add a link to navigate back to Lists components</li>                    
                    <div style={{marginTop:"30px"}}>
                        <img src={detailsStats} alt="result" style={{ width: '100%' }} />
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