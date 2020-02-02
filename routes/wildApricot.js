const axios = require('axios').default;
const qs = require('qs');

axios({
    method: 'post',
    
    url:'https://oauth.wildapricot.org/auth/token',
   
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic MzAwNU1lZ2Fab3JkOmc0c29icmc0NHFiNTNsbmMzd2tnbTNvdGltOWNidQ==",
        'Accept':'application/json',
        'Host': 'oauth.wildapricot.org'
    },
    data:qs.stringify({
        grant_type:'password',
        username:'alsidneio@gmail.com',
        password:'Mookie23!',
        scope:'auto',        
    })
}).then(response => { 
    console.log('Success');
	console.log(response.data);
})
.catch(error => {
    console.log('Error');
    console.log(error.response.data);
});