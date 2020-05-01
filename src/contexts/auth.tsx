import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
    name: string,
    email: string
}

interface AuthContextData {
    signed: boolean,
    user: User | null,
    loading: boolean,
    singIn(): Promise<void>,
    singOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storagedUser && storagedToken) {
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);

        }

        loadStorageData();
    }, [])

    async function singIn() {
        const response = await auth.singIn();

        setUser(response.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);

    }

    async function singOut() {
        await AsyncStorage.clear()

        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, singIn, singOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context
}