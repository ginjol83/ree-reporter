import axios from "axios"

var date = new Date()

const lastYearNextMonth = `${(date.getFullYear()-1)}-${(date.getMonth()+1)}-${date.getDate()}`
const currentMonth =      `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`
const tomorrow =          `${date.getFullYear()}-${(date.getMonth()+1)}-${(date.getDate()+1)}`
const nextMonth =         `${date.getFullYear()}-${(date.getMonth()+1)}-${(date.getDate())}`
const lastYear =          `${(date.getFullYear()-1)}-${(date.getMonth()+1)}-${(date.getDate())}`

const reeApiUrl = `https://apidatos.ree.es/es/datos/`

const balanceURL = 
        `${reeApiUrl}balance/balance-electrico?start_date=${lastYearNextMonth}T00:00&end_date=${currentMonth}T23:59&time_trunc=day`

const mercadoPreciosRegulacionSecundariaURL = 
        `${reeApiUrl}mercados/energia-precios-regulacion-secundaria?start_date=${nextMonth}T00:00&end_date=${nextMonth}T23:59&time_trunc=year`

const mercadoMananaURL = 
        `${reeApiUrl}mercados/precios-mercados-tiempo-real?start_date=${tomorrow}T00:00&end_date=${tomorrow}T23:59&time_trunc=hour`

const mercadoAhoraURL = 
        `${reeApiUrl}mercados/precios-mercados-tiempo-real?start_date=${nextMonth}T00:00&end_date=${nextMonth}T23:59&time_trunc=hour`

const ireURL = 
        `${reeApiUrl}demanda/ire-general?start_date=${lastYear}T00:00&end_date=${nextMonth}T23:59&time_trunc=month&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741`

        
const getIreIndex = () =>  axios.get(ireURL,{}) 

const getBalance = () => axios.get(balanceURL,{}) 

const getMercadoAhora = () => axios.get(mercadoAhoraURL,{})

const getMercadoManana = () => axios.get(mercadoMananaURL,{})

const getMercadoPreciosRegulacionSecundaria = () => axios.get(mercadoPreciosRegulacionSecundariaURL,{})

const getMarketByDate = (date) => { 
  const dateMoment = moment(date)
  const url="https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date="+
  dateMoment.year()+"-"+dateMoment.month()+"-"+(dateMoment.date())+"T00:00&end_date="+dateMoment.year()+"-"+dateMoment.month()+"-"+(dateMoment.date())+"T23:59&time_trunc=hour"

  return axios.get(url,{})
}

export { getBalance, getIreIndex, getMercadoAhora, getMercadoPreciosRegulacionSecundaria, getMarketByDate, getMercadoManana }