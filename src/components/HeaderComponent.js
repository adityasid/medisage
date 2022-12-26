import { Button, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from '@rneui/themed';


function HeaderComponent() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: 'white' }}>
            <TouchableOpacity style={{ width: "auto", }}>
                <Image
                    style={{ width: 30, height: 30, }}
                    source={require('../../assests/images/icon.png')}
                />
            </TouchableOpacity>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <TouchableOpacity style={{ width: "auto" }}>
                    <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 26, }}>MediSage</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ width: "auto", }}>
                <Image
                    style={{ width: 40, height: 40, }}
                    source={require('../../assests/images/noti.jpg')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponent