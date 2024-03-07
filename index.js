const Pinterest = require('pinterest-api-v3');

const client = new Pinterest({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    redirectUri: 'YOUR_REDIRECT_URI'
});

const authorizationUrl = client.getAuthorizationUrl();
console.log('Please visit this URL to authorize your app:', authorizationUrl);

const authorizationCode = 'YOUR_AUTHORIZATION_CODE'; // Replace this with the authorization code from the user

client.authenticate(authorizationCode)
    .then(() => {
        const userId = client.getCurrentUser().id;
        console.log('User ID:', userId);
        console.log('Username:', client.getCurrentUser().username);
    })
    .catch((error) => {
        console.error('Error:', error);
    });