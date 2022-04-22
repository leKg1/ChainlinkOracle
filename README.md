# CovidTravel Data on Chainlink



## Modules:

- Chainlink smart contracts (CovidTravel-Data-on-Chainlink/chainlink)
- API-Node (CovidTravel-Data-on-Chainlink/covid-travel-api) 

## Installation:
1. Clone this repo:
```bash
git clone https://github.com/leKg1/CovidTravel-Data-on-Chainlink.git 
```
2. Go to chainlink folder `cd chainlink` and run `npm install `
3. Go to the api folder `cd ..` then `cd covid-travel-api` and finally run `npm install `

## Usage:
- 1. Start server:

     Make sure you are in the main folder and run:
```bash
docker-compose up  
```
- 2.  Run api POST and GET request tests:

      Go to `covid-travel-api` folder and run:
```bash
npm test  
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT]()