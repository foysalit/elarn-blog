import * as React from 'react';
import Constants from "expo-constants";
import {Avatar, Div, Icon, Input, Text} from "react-native-magnus";

import { CategoryCard } from '../components/CategoryCard';
import {ScrollView} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {ListHeader} from "../components/ListHeader";
import {categories} from "../types";

export default function TabOneScreen({ navigation }: StackScreenProps<any>) {
  return (
      <ScrollView>
        <Div px={25}>
            <Div mt={Constants.statusBarHeight} row justifyContent={"space-between"} alignItems="center">
                <Div>
                    <Div row>
                        <Text fontSize="5xl" mr={5}>Hi</Text>
                        <Text fontSize="5xl" fontWeight="bold">Sheila</Text>
                    </Div>
                    <Text fontSize="lg">Let's upgrade your skill</Text>
                </Div>
                <Avatar shadow={1} source={{uri: 'https://i.pravatar.cc/300'}}/>
            </Div>
            <Div my={30}>
                <Input
                    py={15}
                    px={25}
                    bg="white"
                    rounded={30}
                    placeholder="Search Class"
                    prefix={<Icon name="search" color="gray900" fontFamily="Feather" />}
                />
            </Div>
            <ListHeader title="Popular" />
            <Div row flexWrap="wrap" justifyContent="space-between">
                {categories.map((category) => (
                    <CategoryCard
                        {...category}
                        onPress={() => navigation.navigate('TabOne', {
                            screen: 'CourseDetailScreen',
                            params: {category}
                        })}
                    />
                ))}
            </Div>
        </Div>
      </ScrollView>
  );
}