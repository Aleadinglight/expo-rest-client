import { Text, StyleSheet, SafeAreaView, TextInput, Pressable, View, Button } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PairInput from '@/components/pairinput/PairInput';

export default function FormScreen() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView>
            <View style={styles.horizontalContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Paste your url here"

                />
                <Pressable
                    style={styles.squareButton}
                    onPress={() => console.log('Button pressed')}
                    accessibilityLabel="Learn more about this purple button"
                >
                    <MaterialIcons name="content-paste" size={24} color="black" />
                </Pressable>

            </View>
            <Text>
                Headers
            </Text>
            <PairInput />
            <Button
                title="Submit"
                onPress={() => console.log('Button pressed')}
            />
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        flex: 1,
    },
    squareButton: {
        height: 40,
        width: 40,
        padding: 10,
        margin: 5,
    },
    horizontalContainer: {
        flexDirection: 'row',
        height: 100,
        padding: 10,
    }
});
