import axios from "axios";

function githubAPI(){
    axios
    .get('https://api.github.com/users/Matheussds/repos')
    .then((res) => {
        const data = res.data;
        return data;
    })
}
export default githubAPI;