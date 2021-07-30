const myModule = require('./data.js');

// section 1

// return records with count more than three and required reason
const filteredArray = myModule.send_log_data.filter((element) => {
  return element.count > 3 && (element.reason === 'sendFailure' || element.reason === 'buildError');
})

// filter out duplicates and return only the sendFailure one
const result = filteredArray.filter((v,i,a)=>a.findIndex(t=>(t.emailName === v.emailName && t.count===v.count && t.reason === "sendFailure"))===i)

// display result
console.log(result);
