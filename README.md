# Covid-19 Tracker

##Live 
> [covid-19-info](https://covid19vue.netlify.app/)

## installation
``` bash
git clone https://github.com/mohsin-riad/Covid-19-Tracker.git
cd Covid-19-Tracker
npm install
```
### Tailwind integration
* setup: [Tailwind-css](https://tailwindcss.com/docs/installation)
``` bash
# Generate tailwind.config.js >full
vue add tailwind 
```

### Compiles and hot-reloads for development
``` bash
npm run serve
```

## Build
> install Node Js(v8 engine) | dependency (npm)
* setup: [NOdeJs LTS](https://nodejs.org/en/download/)
``` bash
# select: vue 3, vue router, bebel
vue create Covid-19-Tracker

# run localhost server
npm run serve
```

### Api Package configuration [Axios]
``` bash
# individual project integration
npm i axios --save
```
> Add to:  ``` src/main.js ```
``` bash
import axios from 'axios'
```
> used to sent POST and GET request to the server

### Api 
> Open source api from [covid19api](https://covid19api.com/)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
