# ctrl-api-nodejs

This is a server stack which stands up the CTRL API after initializing geth, ipfs, and mongodb.

## How to use
1. [Get docker & docker-compose.](https://www.google.com/search?q=get+docker&rlz=1C5CHFA_enUS754US754&oq=get+docker&aqs=chrome.0.0j69i60j0l4.978j0j7&sourceid=chrome&ie=UTF-8)
2. Run this code:
```
git clone https://github.com/LedgerCTRL/ctrl-api-nodejs.git
cd ctrl-api-nodejs/
docker-compose build
docker-compose up
```
3. Read the docs at [localhost:8088/docs/](http://localhost:8088/docs/)

Make calls to `localhost:8088/v2/`


Enjoy!
