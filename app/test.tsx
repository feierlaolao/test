import { Alert, Button, Pressable, Text, View } from "react-native";
export default function TestScreen() {

    return <View style={{
        flex: 1
    }}>
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Pressable
                onPress={() => {
                    Alert.alert('okk')
                }}
            >
                <Text>Pressable</Text>
            </Pressable>
            <Button title="Button" />
        </View>
        <View style={{
            flex: 1,
            backgroundColor: 'blue'
        }}>
            <Text>test</Text>
        </View>
    </View>
}