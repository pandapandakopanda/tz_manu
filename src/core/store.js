import { observable, action, computed } from 'mobx'
import json from '../core/data.json'
import {findElementById, stringToNumber} from '../core/help'

class Store {

  @observable countryId = ''
  @observable visaId = ''
  @observable countId = ''
  @observable timeId = ''

  countries = json['countries']
  types = json['types']
  trys=json['try']
  timespent=json['timespent']

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

  @action setCountryId = (id) => {
    this.countryId = id
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


}        


const store = new Store()
export default store