import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import sheet1 from './src/Header';
// import Menues from './src/DayFrocasting';
import Info from './src/Index';




const App = () => {

  const [getcity, setcity] = useState("Deoria")
  const [giveinfo, setinfo] = useState({})
  const [getday, setday] = useState({})
  const [goday, setgoday] = useState(0)


  const { date1, date2, date3, date4, date5 } = getday;

  let arr2 = []
  let arr = [date1, date2, date3, date4, date5]
  for (let i = 0; i < 5; i++) {
    let dd = new Date(arr[i] * 1000)
    let d1 = dd.toDateString()
    let fd = d1.slice(0, 3)
    arr2.push(fd)

  }

  const gobtn = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=bareilly&appid=2f342325329b86077c2b6c4512adbc61&units=metric`
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)

    } catch (error) {
      console.log(error)

    }
  }

  const onclic = async () => {

    try {
      let day1 = 0;
      let day2 = 7;
      let day3 = 14;
      let day4 = 21;
      let day5 = 28;
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${getcity}&appid=2f342325329b86077c2b6c4512adbc61&units=metric`
      const res = await fetch(url);
      const data = await res.json();
      const { temp_min: MinTemp, temp_max: MaxTemp, humidity, temp } = data.list[28].main;
      const { main } = data.list[28].weather[0];
      const { speed: WindSpeed } = data.list[28].wind;
      const { dt_txt: DateTime } = data.list[28];
      const { dt: date1 } = data.list[day1];
      const { dt: date2 } = data.list[day2];
      const { dt: date3 } = data.list[day3];
      const { dt: date4 } = data.list[day4];
      const { dt: date5 } = data.list[day5];
      const { name: cityname, country, population, sunrise, sunset } = data.city;

      const daydata = { date1, date2, date3, date4, date5 };
      setday(daydata)
      const info = { date1, MinTemp, MaxTemp, humidity, temp, main, WindSpeed, DateTime, cityname, country, population, sunrise, sunset, };
      setinfo(info)
      setcity("")


    } catch (error) {
      console.log(error)

    }

  }

  useEffect(() => {
    onclic("")
    setcity("")
  });

  return (
    <View style={sheet1.main}>
      <View style={sheet1.header}>
        <Text style={sheet1.appname}>WEAHTER Information</Text>

        <TextInput style={sheet1.searchbar}
          placeholder="Search..."
          onChangeText={setcity}
          placeholderTextColor="#1d5457" />

        <TouchableOpacity onPress={onclic}>
          <EvilIcons name="search" style={sheet1.searchicon} />
        </TouchableOpacity>
        <Ionicons name="menu" style={sheet1.menueicon} />



      </View>
      <View style={sheet1.buttons}>
        <TouchableOpacity style={sheet1.days} ><Text style={sheet1.day}>{arr2[0]}</Text></TouchableOpacity>
        <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[1]}</Text></TouchableOpacity>
        <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[2]}</Text></TouchableOpacity>
        <TouchableOpacity style={sheet1.days} onPress={gobtn}><Text style={sheet1.day}>{arr2[3]}</Text></TouchableOpacity>
        <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[4]}</Text></TouchableOpacity>
      </View>
      <Info data={giveinfo} />
    </View>
  )

}
export default App;