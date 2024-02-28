import axios from "axios"

var date = new Date()
const currentYear = date.getFullYear()

const balanceURL = "https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date="+
        (currentYear-1)+"-"+(date.getMonth()+1)+"-"+date.getDate()+"T00:00&end_date="+currentYear+"-"+
        (date.getMonth()+1)+"-"+date.getDate()+"T23:59&time_trunc=day"

const mercadoPreciosRegulacionSecundariaURL = "https://apidatos.ree.es/es/datos/mercados/energia-precios-regulacion-secundaria?start_date="+
        date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T00:00&end_date="+date.getFullYear()+"-"+
        (date.getMonth()+1)+"-"+(date.getDate())+"T23:59&time_trunc=year"

const mercadoMananaURL = "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date="+
        date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate()+1)+"T00:00&end_date="+date.getFullYear()+"-"+
        (date.getMonth()+1)+"-"+(date.getDate()+1)+"T23:59&time_trunc=hour"


const mercadoAhoraURL = "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date="+
        date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T00:00&end_date="+date.getFullYear()+"-"+
        (date.getMonth()+1)+"-"+(date.getDate())+"T23:59&time_trunc=hour"

const ireURL = "https://apidatos.ree.es/en/datos/demanda/ire-general?start_date="+
       (date.getFullYear()-1)+"-"+(date.getMonth()+1)+"-"+(date.getDate())+"T00:00&end_date="+date.getFullYear()+"-"+
        (date.getMonth()+1)+"-"+(date.getDate())+"T23:59&time_trunc=month&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741"

const getBalance = () => axios.get(balanceURL,{}) 

const getIreIndex = () =>  axios.get(ireURL,{}) 

const getMercadoAhora = () => axios.get(mercadoAhoraURL,{})

const getMercadoPreciosRegulacionSecundaria = () => axios.get(mercadoPreciosRegulacionSecundariaURL,{})

const getMarketByDate = (date) => { 
    let dateMoment = moment(date)
    let url="https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date="+
    dateMoment.year()+"-"+dateMoment.month()+"-"+(dateMoment.date())+"T00:00&end_date="+
    dateMoment.year()+"-"+dateMoment.month()+"-"+(dateMoment.date())+"T23:59&time_trunc=hour"
    return axios.get(url,{}) 
  }

const getMercadoManana = () => axios.get(mercadoMananaURL,{})

export { getBalance, getIreIndex, getMercadoAhora, getMercadoPreciosRegulacionSecundaria, getMarketByDate, getMercadoManana }