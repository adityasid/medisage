import { Button, ScroolView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'



export default function Card(props) {

    const { text, name, time, date: { day, month }, imagePath } = props;

    return (
        <View {...props}>

            <View style={{
                display: 'flex',
                marginTop: 20,
                marginLeft: 10,
                marginRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 7,
                borderColor: 'gray',
                borderWidth: 1,

            }}>
                <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: "40%", height: '100%' }}>
                        <View style={{ display: 'flex', alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 28 }}>{day}</Text>
                            <Text style={{ fontSize: 20 }}>{month}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', width: "60%", height: '100%', }}>

                        <Image
                            style={{ width: 150, height: 150, }}
                            source={require('../../assests/images/image1.jpg')}
                        />

                    </View>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{text}</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 18 }}>{name}</Text>
                    <Text style={{ fontSize: 18 }}>{time}</Text>
                </View>


                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <ButtonComponent name="Register Now" borderColor="#0077e4" />
                    <ButtonComponent name="Details" borderColor="#0077e4" />
                </View>

                <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: 10 }}>
                    <ButtonComponent name="Invite" width="90%" bgcolor={"white"} textColor={"black"} />
                </View>
            </View>
        </View>
    )
}