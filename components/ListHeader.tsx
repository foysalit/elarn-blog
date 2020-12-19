import * as React from "react";
import {Div, Text} from "react-native-magnus";

export const ListHeader = ({title}: {title: string}) => (
    <Div row pb={10} justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize="3xl">{title}</Text>
        <Text fontWeight="bold" fontSize="lg">See all</Text>
    </Div>
);