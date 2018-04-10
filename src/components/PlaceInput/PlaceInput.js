import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from "../UI/DefaultInput/DefaultInput";

const PlaceInput = (props)=>  {
    return (
        <DefaultInput placeholder="Placename" 
        onChangeText={props.onChangeText} value = {props.placeName}/>
    );
}


export default PlaceInput;
