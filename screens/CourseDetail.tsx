import * as React from 'react';
import {ScrollView} from "react-native";
import { useHeaderHeight } from '@react-navigation/stack';
import {Button, Div, Icon, Image, Text} from "react-native-magnus";
import {StackScreenProps} from "@react-navigation/stack";
import {ListHeader} from "../components/ListHeader";
import {CourseVideo} from "../components/CourseVideo";
import {RootStackParamList} from "../types";

export default function CourseDetailScreen({route}: StackScreenProps<RootStackParamList, 'CourseDetailScreen'>) {
    const {category} = route.params;
    const headerHeight = useHeaderHeight();
    return (
        <>
        <ScrollView style={{marginTop: headerHeight}}>
            <Div px={25}>
                <Div row mt={15} mb={15} justifyContent="space-between">
                    <Div pb={50}>
                        <Text fontSize="4xl" fontWeight="bold">{ category.category }</Text>
                        <Div row>
                            <Text>by </Text>
                            <Text fontWeight="bold">{category.author}</Text>
                        </Div>
                        <Div row mt={15}>
                            <Div pr={30} row>
                                <Icon fontFamily="Ionicons" fontSize={20} name='people' color="pink500" />
                                <Text fontSize="lg" ml={5} fontWeight="bold">{ category.subscriberCount }</Text>
                            </Div>
                            <Div row>
                                <Icon fontFamily="Ionicons" fontSize={20} name='star' color="pink500" />
                                <Text fontSize="lg" ml={5} fontWeight="bold">{ category.rating }</Text>
                            </Div>
                        </Div>
                        <Div row mt={15}>
                            <Icon name="time-outline" fontFamily="Ionicons" fontSize={20} color="pink500"  />
                            <Text fontSize="lg" ml={5}>{category.duration}</Text>
                        </Div>
                    </Div>
                    <Image source={category.picture} w="50%" />
                </Div>
                <ListHeader title="Course Content" />
                <Div mt={15}>
                    {category.videos.map(video => (
                        <CourseVideo {...video} />
                    ))}
                </Div>
            </Div>
        </ScrollView>
        <Button block bg="pink900" rounded="circle" mx={30} top={-30} pt={20} pb={15}>
            Get the course
        </Button>
        </>
    );
}