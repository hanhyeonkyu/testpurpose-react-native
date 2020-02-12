/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default class HomeScreen extends React.Component {
    public render(): JSX.Element {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="gray" barStyle="light-content" />
                <WebView source={{ uri: 'https://apollo-movie-app.herokuapp.com/' }} />
            </View>
        );
    }
}
