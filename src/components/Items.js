import './Items.css';
function Items(props) {
    return (
        <div className="item">
            <div>{props.text}</div>
            <button className="close" onClick={props.ondelete}>&times;</button>
        </div>
    );

}

export default Items;