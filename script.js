async function getWeather(){
    try {
      const city = document.getElementById('city').value
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?main.temp=imperial&q="+`${city}`+"&appid=ae64732385e11918898d1f94aaf74823")
      if(!response.ok){
        throw new Error(response.status)
      }
      const data = await response.json()
      console.log(data)
    
      weather.innerHTML=data.weather[0].description
      temp.innerHTML = Math.round((data.main.temp - 273.15) * 9/5 + 32) + " degrees fahrenheit"
    }
    catch(err){
      console.log(err)
    }
    finally {
      console.log('done')
    }
  }
  
  //getWeather()
  
  //key=ae64732385e11918898d1f94aaf74823
  
  /*async function getForecast(){
    try {
      const city = document.getElementById('city').value
      const response = await fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&appid=724be9911e7d12431d5bdfba6170f3ed")
      if(!response.ok){
        throw new Error(response.status)
      }
      const data = await response.json()
      console.log(data)
    }
    catch(err){
      console.log(response.status)
    }
    finally {
      console.log("done x 2")
    }
  }
  
  */