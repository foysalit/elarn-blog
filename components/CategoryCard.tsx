import * as React from "react";
import {Div, Image, Text} from "react-native-magnus";
import {ImageSourcePropType} from "react-native";

type Category = {
    count: number;
    category: string;
    picture: ImageSourcePropType;
}

export const categories = [
    {category: 'Marketing', count: 12, picture: require('../assets/images/illustration_one.png')},
    {category: 'Investing', count: 8, picture: require('../assets/images/illustration_two.png')},
    {category: 'Drawing', count: 22, picture: require('../assets/images/illustration_three.png')},
    {category: 'Marketing', count: 12, picture: require('../assets/images/illustration_one.png')},
    {category: 'Investing', count: 8, picture: require('../assets/images/illustration_two.png')},
    {category: 'Drawing', count: 22, picture: require('../assets/images/illustration_three.png')},
    {category: 'Drawing', count: 22, picture: require('../assets/images/illustration_three.png')},
];

export const CategoryCard = ({category, count, picture}: Category) => (
    <Div rounded="lg" bg="white" mb={10} w="48%">
        <Image source={picture} h={120} roundedTop="lg" />
        <Div p={10}>
            <Text fontWeight="bold" fontSize="xl">{category}</Text>
            <Text>{count} Courses</Text>
        </Div>
    </Div>
);
