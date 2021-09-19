import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// ************************
// DUAS FORMAS
// interface Props {
// title:
// }

// OUTRA FORMA

// type Props = {
// title:
// }

// Pegando todas as propriedades de Touch + a title que defini 
type Props = TouchableOpacityProps & {
    title: String;
}
// ************************

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image
                    source={DiscordImg}
                    style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
