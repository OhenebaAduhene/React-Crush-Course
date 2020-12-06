import Axios from "axios";

export default Axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YjT81SDtnqowO6sjJPoETj0s74WDzsQ0yaQ85fC6-JI'
    }
})