<template>
  <div>
    <div class="dark:bg-gray-800  text-center grid shadow-md bg-gray-200 rounded p-4 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-sm  mx-auto mb-2">
      <div class="dark:text-gray-100 text-3xl text-gray-700 animate-pulse font-semibold"><i class="fas fa-globe-asia"></i></div>
      <div class="dark:text-gray-100 text-md text-gray-700 mt-4 mb">
          <i class="fas fa-calendar-week"></i>
          {{ timeDate }}  
      </div>
    </div>
    
    <div class="">
      <div class="dark:bg-gray-500 dark:text-gray-300 dark:bg-opacity-20 bg-gray-300 shadow rounded-md mt-4 mb-4 p-4 md:max-w-screen-md max-w-sm w-full mx-auto">
        <div class="dark:text-gray-300 text-2xl flex text-gray-700 mb-2">
          Country Data
        </div>
        <select @change="onChange" v-model="selectedCountry" class="dark:text-gray-200 dark:bg-opacity-40 dark:bg-gray-900 form-select bg-gray-200 mt-1 block w-full rounded shadow p-1">
          <option value="0">Select A Country</option>
          <option v-for="c in countries" :key="c.ID" :value="c.ID">{{ c.Country }}</option>
        </select>
      </div>

      <div class="dark:bg-gray-600 dark:bg-opacity-20 text-center grid shadow-md bg-gray-300 rounded p-4 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-sm  mx-auto mb-2">
        <div class="dark:text-gray-300 text-2xl text-center text-gray-700 mb-2"> Showing Data For </div>
        <div v-if="selectedCountry" class="dark:text-gray-300 text-lg text-gray-500 mt-1">
          {{ stats.Country }}  
          <img class="center animate-pulse" :src="flagURL" >
        </div>
        <div v-else class="dark:text-gray-300 text-lg text-gray-500 mt-4 mb">
          {{ title }}  
          <img class="center animate-pulse" :src="flagURL" >
        </div>  
      </div>
    </div>

    <div v-if="!loading" >
      <div class="grid lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl md:max-w-screen-md text-center w-full mx-auto md:grid-cols-3 gap-x-2">

        <div class="dark:bg-blue-900 dark:bg-opacity-30  shadow bg-blue-100 rounded-md xl:max-w-screen-md mb-2 p-4 max-w-sm w-full mx-auto">
          <div class="dark:text-gray-300 text-2xl animate-pulse flex  text-gray-700 mb-2">
            Cases
          </div>
          <div class="dark:bg-blue-600 dark:bg-opacity-80 dark:text-gray-300 col-6 shadow bg-blue-200 rounded text-center mx-auto text-xl text-gray-600 font-thin mb-2 border-red-400">
            <strong>New Cases:</strong>   
            {{ numToCommas(stats.NewConfirmed) }}
          </div>
          <div class="dark:bg-blue-900 dark:bg-opacity-80 dark:text-gray-300 col-6 shadow bg-blue-300 rounded text-center mx-auto text-xl  text-gray-600 font-thin mb-2 border-red-400">
            <strong>Total Cases:</strong>   
            {{ numToCommas(stats.TotalConfirmed) }}
          </div>
        </div>
        <div class="dark:bg-red-900 dark:bg-opacity-30  bg-red-100 shadow rounded-md xl:max-w-screen-md mb-2 p-4 max-w-sm w-full mx-auto">
          <div class="dark:text-gray-300 text-2xl animate-pulse flex  text-gray-700 mb-2">
            Deaths
          </div>
          <div class="dark:bg-red-600 dark:bg-opacity-80 dark:text-gray-300 col-6  bg-red-400 rounded text-center mx-auto text-xl font-thin text-white mb-2 border-red-400">
            <strong>New Deaths:</strong>   
            {{ numToCommas(stats.NewDeaths) }}
          </div>
          <div class="dark:bg-red-900 dark:bg-opacity-80 dark:text-gray-300 col-6  bg-red-500 rounded text-center mx-auto text-xl text-white  font-thin mb-2 border-red-400">
            <strong>Total Deaths:</strong>   
            {{ numToCommas(stats.TotalDeaths) }}
          </div>
        </div>
        <div class="dark:bg-green-900 dark:bg-opacity-30 bg-green-100 shadow rounded-md xl:max-w-screen-md mb-2 p-4 max-w-sm w-full mx-auto">
          <div class="dark:text-gray-300 text-2xl animate-pulse flex  text-gray-700 mb-2">
            Recovered
          </div>
          <div class="dark:bg-green-600 dark:bg-opacity-80 dark:text-gray-30 col-6  bg-green-400 rounded text-center mx-auto text-xl font-thin text-white mb-2 border-red-400">
            <strong>New Recovered:</strong>   
            {{ numToCommas(stats.NewRecovered) }}
          </div>
          <div class="dark:bg-green-900 dark:bg-opacity-80 dark:text-gray-30 col-6  bg-green-500 rounded text-center mx-auto text-xl text-white  font-thin mb-2 border-red-400">
            <strong>Total Recovered:</strong>   
            {{ numToCommas(stats.TotalRecovered) }}
          </div>
        </div>
      
      </div>
    </div>

    <div v-else>
      <div class=" shadow rounded-md bg-red-200 p-10 max-w-sm 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-red-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-red-400 rounded"></div>
              <div class="h-4 bg-red-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
      <img :src="img" alt="" class="w-24 m-auto" />
    </div>

    <footer class="bg-gray-800 grid mt-4 shadow-md rounded p-2 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-md mx-auto">
      <div class="text-gray-500 text-center font-thin font-sans text-sm"> <small> Developed By </small><a href="https://github.com/mohsin-riad" class=" font-semibold text-gray-400 "> Mohsin Riad </a> </div>
    </footer>

  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {
        NewConfirmed :  '',
        TotalConfirmed :  '',
        NewDeaths :  '',
        TotalDeaths :  '',
        NewRecovered  : '',
        TotalRecovered :  '',
        Date : ''
      },
      countries: [{
        ID : '' ,
        Country : '' ,
        CountryCode : '' ,
        Slug : '' ,
        NewConfirmed : '' ,
        TotalConfirmed : '' ,
        NewDeaths : '' ,
        TotalDeaths : '' ,
        NewRecovered : '' ,
        TotalRecovered : '' ,
        Date : '' ,
        Premium: '',
      }],
      selectedCountry: '',
      Country : {
        ID : '' ,
        Country : '' ,
        CountryCode : '' ,
        Slug : '' ,
        NewConfirmed : '' ,
        TotalConfirmed : '' ,
        NewDeaths : '' ,
        TotalDeaths : '' ,
        NewRecovered : '' ,
        TotalRecovered : '' ,
        Date : '' ,
        Premium: '',
      } ,
      flagURL : '',
      img: require('../assets/loading.gif'),
    }
  },
  methods: {
    numToCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async onChange() {
      this.Country = this.countries.find((item) => item.ID === this.selectedCountry);
      this.stats = this.Country;
      this.flagURL = 'https://www.countryflags.io/'+this.stats.CountryCode+'/shiny/64.png';

      // console.log(this.Country); 
    }
  },
  async created(){
    const baseURL = 'https://api.covid19api.com/summary';
    const response = await axios.get(baseURL);
    const res = response.data;
    this.dataDate = res.Date
    this.stats = res.Global
    this.countries = res.Countries
    this.loading = false
    // console.log(res);
    // console.log(response);
  },
  computed : {
    timeDate(){
      return moment(new Date()).format('MMMM Do YYYY, h:mm:ss a') 
    }
  }
}
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
</style>