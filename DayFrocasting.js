import React from "react"
import { View, TouchableOpacity, Text } from 'react-native';
import sheet1 from "./src/Infos";

const Menues = ({ data }) => {
    const {
        date1,
        date2,
        date3,
        date4,
        date5

    } = data;
    let arr2 = []
    let arr = [date1, date2, date3, date4, date5]
    for (let i = 0; i < 5; i++) {
        let dd = new Date(arr[i] * 1000)
        let d1 = dd.toDateString()
        let fd = d1.slice(0, 3)
        arr2.push(fd)

    }
    console.log(arr2)
    let d1 = String()
    return (
        <View style={sheet1.buttons}>
            <TouchableOpacity style={sheet1.days} onPress={getdata}><Text style={sheet1.day}>{arr2[0]}</Text></TouchableOpacity>
            <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[1]}</Text></TouchableOpacity>
            <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[2]}</Text></TouchableOpacity>
            <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[3]}</Text></TouchableOpacity>
            <TouchableOpacity style={sheet1.days}><Text style={sheet1.day}>{arr2[4]}</Text></TouchableOpacity>
        </View>
    )
}

export default Menues;