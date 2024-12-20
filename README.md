# Currency Converter

## Problem Statement
Given a value and its currency, convert it into another currency and return the value. 

### Example Valid output:
```bash
# For value = 2000, base currency = 'usd' and target currency = 'brl'
$ node src/index.js
2000 USD  ==  undefined BRL
```

## Tips:
- You need to use an external API in order to load valid currencies rates;
    - Example external api: [exchange-api](https://github.com/fawazahmed0/exchange-api)
- Although not necessary, you can create more services, models, and any other kind of files that you see as necessary (how you manage and organize everything is taken into account when grading your solution);
