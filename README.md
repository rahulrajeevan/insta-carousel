Insta-carousel
==============

React Slider for Instagram Photos



### Getting up and running

1. Clone this repo from `https://gitlab.com/rahulrajeevan12/insta-carousel.git`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `npm run build` task (Note: the production task does not fire up the browser-sync server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

### Usage

You must provide Instagram API access token for this slider. (In this repo I have provided my Client ID and Access token)
Access token obtaining is documented in Instagram API docs in [Authentication section](https://www.instagram.com/developer/authentication/).

### Quick Links 

You can create app here: https://www.instagram.com/developer/clients/register/ 

And here is auth docs: https://www.instagram.com/developer/authentication/ (go to the "Implicit flow")

Then prepare the URL as given below

https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
Then you can get your token here 

http://your-redirect-uri#access_token=ACCESS-TOKEN
You will be redirected to http://your-redirect-uri#access_token=ACCESS-TOKEN
And ACCESS-TOKEN is your token


### Running tests

Run all tests in the tests/ directory with the `gulp test` command


### Code coverage

When running tests, code coverage will be automatically calculated and files can be seen in the generated coverage/ directory.

