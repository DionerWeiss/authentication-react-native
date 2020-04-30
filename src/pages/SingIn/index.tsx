import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

const SingIn: React.FC = () => {
    const { signed, singIn } = useContext(AuthContext);
    console.log(signed);


    function handleSignIn() {
        singIn()
    }

    return (
        <View style={styles.container}>
            <Button title="Sing In" onPress={handleSignIn} />
        </View>
    )
}

export default SingIn;