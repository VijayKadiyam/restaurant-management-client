import Errors from './Errors.js'
import axios from 'axios'
import store from 'store'  

class Form {

  constructor(data) {
    this.originalData = data;

    for(let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors;
  }

  data() { 
    let data = {}
    for(let field in this.originalData) {
      data[field] = this[field]
    } 
    return data;
  }

  get(url) {
    return this.submit('get', url);
  }

  post(url) {
    return this.submit('post', url);
  }

  patch(url) {
    return this.submit('patch', url);
  }

  submit(requestType, url) {
    let baseUrl = store.getters.api.baseUrl;
    let api_token = store.getters.user.api_token;
    let company_id = store.getters.company.id;
    axios.defaults.headers.common['Authorization'] = "Bearer " + api_token;
    axios.defaults.headers.common['company_id'] = company_id;

    return new Promise((resolve, reject) => {
      axios[requestType](baseUrl + url, this.data()) 
        .then(response  =>  {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data.errors);
          reject(error.response.data.errors)
        })
    })
  }

  onSuccess(data) {
    // alert('Handling successfully in api!');
  }

  onFail(errors) {
    this.errors.record(errors);
    // alert("Handling errors in api!");
  }

  validate(refs) {
    Object.keys(this.data()).forEach(item  =>  {
      if(refs[item])
        refs[item].validate(true);
    })
  }

}

export default Form