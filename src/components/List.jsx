import '../assets/css/components/list.css'

export default (props) => {
    return (
        <div className='list-container flex flex--column bkg-default'>
            <div className='item-list flex flex--column'>
                <p className='App-fifth' style={{fontSize: '14px'}}>{props.title}</p>
                <h4 className='App-second' style={props.color}>{props.value}</h4>
            </div>
        </div>
    )
}