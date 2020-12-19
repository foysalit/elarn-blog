import {Button, Div, Icon, Text} from "react-native-magnus";
import React from "react";

export const CourseVideo = ({title, duration}: {title: string, duration: string}) => (
    <Button block bg="white" mb={15} py={15} px={15} rounded="circle" shadow="xl">
        <Div row flex={1} alignItems="center" pr={10}>
            <Div bg="pink900" rounded="circle" p={10} mr={10}>
                <Icon name="play" fontFamily="Ionicons" color="white" fontSize="3xl" />
            </Div>
            <Div flex={2} row justifyContent="space-between">
                <Text fontWeight="bold" fontSize="lg">{ title }</Text>
                <Text fontWeight="bold" fontSize="lg">{duration}</Text>
            </Div>
        </Div>
    </Button>
);