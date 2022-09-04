import axios from "axios";

const  weatherDB =axios.create({

baseURL:'https://api.openweathermap.org/data/2.5',
params:{
    appid:'02e2fba771f5d3d49e87443d9c42fe6c',
    units:'metric',
    lang:'sp'
}

})

export default weatherDB