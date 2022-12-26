import React from 'react';
import { Button, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/HeroComponents';
import Card from '../components/CardComponent';

import { cardData } from '../utils/cardData';

function MainScreen() {
    return (
        <ScrollView style={{ marginBottom: 10 }}>
            <HeaderComponent />
            <HeroSection />

            {cardData && cardData.map((item, index) => {
                const { text, name, time, date } = item;
                return (
                    <Card text={text} name={name} time={time} date={date} key={index.toString()} />
                )
            })}
        </ScrollView >
    )
}

export default MainScreen