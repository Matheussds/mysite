import github_logo from '../assets/img/Github-Logo.png'
import '../assets/css/components/repoItem.css'

const RepoItem = (props) => {
    return (
        <a target='_blank' href={props.link}>
            <div className="flex bkg-default repo-container">
                <div className='flex logo-box flex--all--center'>
                    <img className="github-logo" src={github_logo} />
                </div>
                <div className="flex flex--column repo-content">
                    <h4 className='App-second'>{props.name}</h4>
                    <h5 className='App-fifth'>{props.description}</h5>
                </div>
            </div>
        </a>
    )
}

export default RepoItem;