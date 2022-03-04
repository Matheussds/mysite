import '../assets/css/components/card.css'

export default (props) => {
    return (
        <div className='card bkg-default flex flex--column'>
            <p className='App-fifth' style={{fontSize: '14px'}}>{props.label}</p>
            <div className='flex flex-column flex--all--center' style={{ flexGrow: '1'}}>
                <h4 className='App-second' >{props.value}</h4>
            </div>
        </div>
    )
}