import { View, Text } from 'react-native';
import ButtonComponent from './ButtonComponent'

function HeroSection() {

    return (
        <View>
            <View style={{ display: 'flex', alignItems: 'center', padding: 35, backgroundColor: '#0d1ba7' }}>
                <Text style={{ color: 'white', fontSize: 24, }}>Events</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>

                <ButtonComponent name="Upcoming" bgcolor="#0d1ba7" borderColor="#0d1ba7" />
                <ButtonComponent name="Past" borderColor="#0077e4" />
            </View>
        </View>
    )

}

export default HeroSection;