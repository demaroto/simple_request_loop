const request = require('request');

const [node, file, url, vezes] = process.argv;


if (url){

    var continued = vezes || 60;
    
    for(let i = 0; i < continued; i++){
        
          request(url, (error, response, body) => {
            if (error) {
              console.error(error);
              
            } else {
                console.info(i)
              console.log(body);
            }
          });
       
    }

}



