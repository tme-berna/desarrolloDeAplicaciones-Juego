import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',


    },
    headerTitle: {
        color: colors.white,
        fontSize: 22,
    },
});