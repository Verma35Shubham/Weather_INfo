// import { useState } from "react";
import React from "react";
import { View, Text, ScrollView } from 'react-native';
import sheet1 from "./Infos";
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Info = ({ data }) => {

    // const [givedata,takedata]=useState()
    const {
        MinTemp,
        MaxTemp,
        humidity,
        temp,
        main,
        WindSpeed,
        DateTime,
        cityname,
        country,
        population,
        sunrise,
        sunset,
    } = data;


    let Sr = new Date(sunrise * 1000)
    let SnuRise = `${Sr.getHours()}:${Sr.getMinutes()}`;
    let Ss = new Date(sunset * 1000)
    let SnuSet = `${Ss.getHours()}:${Ss.getMinutes()}`;
    let dtime = String(DateTime)


    return (
        <ScrollView style={sheet1.card}>
            <View style={sheet1.section1}>
                <Entypo name="thunder-cloud" style={sheet1.logo} />
            </View>
            <View style={sheet1.section2}>
                <View style={sheet1.datetime}>
                    <Text style={{ fontSize: 15.4, paddingTop: 10, color: 'midnightblue', fontWeight: 'bold' }}>DATE: {dtime.slice(0, 10)}</Text>
                    <Text style={{ fontSize: 15.4, paddingTop: 10, color: 'midnightblue', fontWeight: 'bold' }}>Time: {new Date().toLocaleTimeString()}</Text>
                </View>
                <View style={sheet1.tempcountry}>
                    <View style={sheet1.temprature}>
                        <Text style={{ fontSize: 40, color: 'darkslategrey' }}>{temp}°</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, color: 'darkslategrey' }}>{main}</Text>
                        <Text style={{ color: 'darkslategrey',fontWeight: 'bold' }}>{cityname}</Text>
                        <Text style={{ color: 'darkslategrey',fontWeight: 'bold' }}>{country}</Text>
                    </View>
                </View>

            </View>

            {/* -============================six blocks================================== */}

            <View style={sheet1.section3}>
                <View style={{ width: '100%', }}>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>

                        <View style={{ borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', width: '50%' }}>
                            <Feather name="sunrise" style={{ fontSize: 30, color: '#193b2a', fontWeight: '900', padding: 10, }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sunrise</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{SnuRise}</Text>
                        </View>

                        <View style={{ width: '50%', borderRitghtWidth: 1, borderBottomWidth: 1, alignItems: 'center' }}>
                            <Feather name="sunset" style={{ fontSize: 30, color: '#193b2a', fontWeight: '900', padding: 10, }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>sunset</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{SnuSet}</Text>
                        </View>

                    </View>


                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', width: '50%' }}>
                            <FontAwesome5 name="temperature-low" style={{ fontSize: 30, color: '#193b2a', fontWeight: '900', padding: 10, }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Min temprature</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{MinTemp}°</Text>
                        </View>
                        <View style={{ borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', width: '50%' }}>
                            <FontAwesome5 name="temperature-high" style={{ fontSize: 30, color: '#193b2a', fontWeight: '900', padding: 10, }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Max Temprature</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{MaxTemp}°</Text>
                        </View>
                    </View>



                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', width: '50%' }}>
                            <MaterialCommunityIcons name="water-percent" style={{ fontSize: 40, color: '#193b2a', fontWeight: '900', padding: 10, }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Humidity</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{humidity}</Text>
                        </View>
                        <View style={{ borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', width: '50%' }}>
                            <FontAwesome5 name="wind" style={{ fontSize: 30, color: '#193b2a', fontWeight: '900', padding: 10, }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Wind Speed</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{WindSpeed} km/h</Text>
                        </View>
                    </View>




                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Population Of City:- {population}</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>er.shubham35@gamil.com</Text>
                    </View>
                </View>

            </View>
            <View style={sheet1.section1}>

            </View>
        </ScrollView>
    )
}

export default Info;