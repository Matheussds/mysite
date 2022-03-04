import { useEffect, useState } from 'react'
import axios from 'axios'
import RepoItem from '../components/RepoItem'

export default () => {
    const [githubData, setGithubData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.github.com/users/Matheussds/repos')
            .then((res) => {
                setGithubData(res.data);
            })
    }, []);

    return (
        <>
        {githubData.map((item) => (
            <RepoItem name={item.name} description={item.description} link={item.html_url}/>
        ))}
        </>

    )
}