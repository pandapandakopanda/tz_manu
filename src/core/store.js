import { observable, action, computed } from 'mobx'
import json from '../core/data.json'

class Store {

  @observable countryId = ''
  @observable visaId = ''
  @observable countId = ''
  @observable timeId = ''

  countries = json['countries']
  types = json['types']
  trys=json['try']
  timespent=json['timespent']
  
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