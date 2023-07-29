const request = require('request');

//
const [node, file, url, time] = process.argv;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//Function to make a request
makeRequest = async () => {

  //Create a promise
  const RequestPrimise = new Promise(function (resolve, reject) {
    //Make a request
    request(url, (error, response, body) => {
      if (error) {
       //Reject with error
       reject(error);
       
     } else {
       var today  = new Date();
       var hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
       var now = {date: today.toLocaleDateString("pt-BR", options), hour: hour}
       //Resolve with response
       resolve({body, now});
       
     }
   });

  })

  return await RequestPrimise;

};

async function initRequest(time_start, time_end) {

  console.log((time_end - time_start))
  let calling = true;
  //If the last request was greater than the seconds delay
  
  console.log({start: time_start})
  await makeRequest()
      .then(function (response) {
        time1 = time_end
        console.log(response.now);
        console.log({end: response.body});
        console.log(calling)
        while(calling) {
          time2 = new Date();
          if ((time2 - time1) > (time * 1000)) {
            calling = false;
            console.log(calling)
            initRequest(time1, time2);
          }else{
            calling = true;
          }
        }
      }).catch(function (error) {

        console.log(error)
      });

  
}

//url
if (url){
  
  var time1 = 0;
  var time2 = new Date();
  initRequest(time1, time2);
    
  
}



