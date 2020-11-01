import { observable, action, computed } from 'mobx'
import json from '../core/data.json'
import {stringToNumber} from '../core/help'

class Store {

  @observable countryId = ''
  @observable visaId = ''
  @observable countId = ''
  @observable timeId = ''
  @observable sitizenshipId = ''
  @observable startDate = 'выберите дату'
  @observable endDate = 'выберите дату'
  @observable bDate = 'выберите дату'
  @observable step = true
  @observable firstName = ''
  @observable secondName = ''

  countries = json['countries']
  types = json['types']
  trys=json['try']
  timespent=json['timespent']

  citizenship = [
    {id: "RU", name: "Россия"},
    {id: "DE", name: "Германия"},
    {id: "EE", name: "Эстония"}
  ]

  @computed get filtredTryes(){
    const {countryId} = this
    return this.trys.filter( tr => tr.relative === countryId )
  }
  @computed get filtredTimeSpent(){
    const {countryId} = this
    return this.timespent.filter( tr => tr.relative === countryId )
  }
  
   @computed get totalCost(){
    const {visaId, countId, timeId} = this
    const visaData = this.types.find(el => el.id === visaId)
    const countData = this.filtredTryes.find(el => el.id === countId)
    const timeData = this.filtredTimeSpent.find(el => el.id === timeId)
    if(!visaData || !countData || !timeData) return 0
    return stringToNumber(visaData.price) + stringToNumber(countData.price) + stringToNumber(timeData.price)
  }

  @computed get user(){
    const {firstName, secondName} = this
    const secondNameFirstChar = secondName[0] || ''
    return `${firstName} ${secondNameFirstChar}`
  }

  @action setCountryId = (id) => {
    this.countryId = id
  }
  @action setSitizenshipId = (id) => {
    this.sitizenshipId = id
  }

  @action setVisaId = (id) => {
    this.visaId = id
  }

  @action setCountId = (id) => {
    this.countId = id
  }

  @action setTimeId = (id) => {
    this.timeId = id
  }

  @action setStartDate = (date) => {
    this.startDate = date.replaceAll('-','.')
  }

  @action setEndDate = (date) => {
    this.endDate = date.replaceAll('-','.')
  }

  @action setBDate = (date) =>{
    this.bDate = date.replaceAll('-','.')
  }

  @action toggleForm = () => {
    this.step = !this.step
  }

  @action setFirstName = (name) => {
    this.firstName = name
  }

  @action setSecondName = (sName) => {
    this.secondName = sName
  }

  @action clear = () => {
    this.firstName=''
    this.secondName=''
  }

  getCountryName = () => {
    const countries = this.countries.find(el => el.id === this.countryId)
    return (countries === undefined) ? '' : countries.name
  }
  getVisaType = () => {
    const types = this.types.find(el => el.id === this.visaId)
    return (types === undefined) ? '' : types.name
  }
  getSpentTime = () => {
    const timespent = this.filtredTimeSpent.find(el => el.id === this.timeId)
    return (timespent === undefined) ? '' : timespent.name
  }
  getSitizenship = () => {
    const citizenship = this.citizenship.find(el => el.id === this.sitizenshipId)
    return (citizenship === undefined) ? '' : citizenship.name
  }

  getCountTry = () => {
    const tryes = this.filtredTryes.find(el => el.id === this.countId)
    return (tryes === undefined) ? '' : citizenship.name
  }

  checkDataFirstSTep = () => {
    if(this.countryId === '') return
    else if (this.visaId === '') return
    else if (this.countryId === '') return
    else if (this.timeId === '') return
    else if(this.startDate === 'выберите дату') return
    else if(this.endDate === 'выберите дату') return
    else this.toggleForm()
  }

  checkDataSecondStep = () => {
    if(this.firstName === '') return
    else if (this.secondName === '') return
    else if (this.sitizenshipId === '') return
    else if(this.bDate === 'выберите дату') return
    else this.createJson()
  }

  createJson = () => {
    const data = {
      name:this.firstName,
      surname:this.secondName,
      birthday:this.bDate,
      sitizenship:this.sitizenshipId,
      country:this.countryId,
      visa: this.visaId,
      'entry date': this.startDate,
      'departue date':this.endDate,
      'count of entries':this.countId,
      'time spend': this.timeId,
      'total cost': this.totalCost
    }
    console.log('datastring', JSON.stringify(data));
  }
}        


const store = new Store()
export default store