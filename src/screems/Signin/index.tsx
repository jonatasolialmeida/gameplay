import React from "react";
import {
    Text,
    View,
    Image,
    StatusBar
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'

export function Signin() {
    return (
        <View style={styles.container}>
            {/* 
                Acima de Image
                light-content deixa a cor dos icones brancos com fundo preto
                transparent deixa ele todo branco
                translucent vai encaixar novamente a cor de fundo que defini em toda tela
            */}
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                // epera por padrão um booleano, 
                // translucent={true}
                // por isso usamos short sintaxes = forma curta
                // nesse formato já retorna verdadeiro
                translucent
            />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode='stretch'
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conect-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie Grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title={'Entrar com discord'}
                    activeOpacity={0.7}
                />
            </View>
        </View>
    );
}