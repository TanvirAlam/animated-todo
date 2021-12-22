import * as React from 'react';
import { 
    Text, 
    Box, 
    Center,
    VStack,
    themeTools, 
    useTheme,
    useColorMode,
    useColorModeValue
 } from 'native-base';
import ThemeToggle from '../components/theme-tools';

export default function MainScreen() {
    return (
        <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} px={5} flex={1}>
            <VStack space={5} alignItems="center">
                <Box>
                    <Text>
                        Olla
                    </Text>
                </Box>
                <ThemeToggle />
            </VStack>
        </Center>
    )
}