const axios = require('axios').default;
const qs = require('qs');
const dotenv = require('dotenv').config();

const apiBaseUrl = 'https://api.wildapricot.org/v2/';

axios({
    method: 'post',
    
    url:'https://oauth.wildapricot.org/auth/token',
   
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${process.env.WA_AUTH_CODE}`,
        'Accept':'application/json',
        
    },
    data:qs.stringify({
        grant_type:'password',
        username:process.env.WA_USER,
        password:process.env.WA_PASS,
        scope:'auto',        
    })
}).then(response => { 
    console.log('Success');
    console.log(response.data);
    listEvents(response.data.access_token)
})
.catch(error => {
    console.log('Error');
    console.log(error.response.data);
});

function listEvents(authToken) {
    axios({
        method:'get',
        url:`${apiBaseUrl}/accounts/${process.env.WA_ACCT_ID}/events`,
    }, {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Bearer ${authToken}`
        },
        qs: {
          $async: false,
          $filter: `'First name' eq '${searchString}'`,
          $select: "'First name'"
        },
        json: true
      },
      function( err, res, body) {
        if( err) {
          console.error(err);
          throw err;
        }
        else {
          for (var i = 0; i < body.Contacts.length; i++) {
            let contact = body.Contacts[i];
            console.log(`${contact.DisplayName}: ${contact.Email}`);
          }
        }
      }
    );
}