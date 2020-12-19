import * as React from "react";
import {Button, Div, Image, Text} from "react-native-magnus";
import { Category} from "../types";

type CategoryCardProp = Category & {onPress(): void};

export const CategoryCard = ({category, count, picture, bg, onPress}: CategoryCardProp) => (
    <Button
        block
        w="48%"
        mb={10}
        p="none"
        bg="white"
        rounded="lg"
        onPress={onPress}>
        <Div flex={1}>
            <Image source={picture} h={120} roundedTop="lg" bg={bg} />
            <Div p={10}>
                <Text fontWeight="bold" fontSize="xl">{category}</Text>
                <Text>{count} Courses</Text>
            </Div>
        </Div>
    </Button>
);
