import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const ChoosingPage = () => {

    const [shouldReload, setShouldReload] = useState(true);
    // Function to trigger the page reload
    const reloadPage = () => {
        if (shouldReload) {
            window.location.reload();
            setShouldReload(false); // Set shouldReload to false to prevent further reloads
        }
    };

    const history = useHistory();
    const toChatPage = () => {
        history.push("/chats");
        reloadPage();
    }
    return (
        <Flex >
            <Card maxW='sm' marginLeft={"15rem"} marginTop={"5rem"} marginBottom={"10rem"} >
                <CardBody>
                    <Image
                        src="https://th.bing.com/th/id/OIP.ey10UJuRvaqpomLZNtH4LQHaEz?w=307&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Chatting Room</Heading>
                        <Text>
                            The chat room provides users with a versatile and efficient way to communicate with one another.
                            It offers a real-time, text-based communication platform that enables users to exchange messages, emojis content seamlessly.
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={toChatPage}>
                            Rock an Roll
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>

            <Card maxW='sm' marginTop={"5rem"} marginLeft={"20rem"} marginBottom={"10rem"}>
                <CardBody>
                    <Image
                        src="https://th.bing.com/th/id/OIP.by5MEay04LMwP1kmpnpMPwHaEO?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Video Conferencing</Heading>
                        <Text>
                            The video conferencing takes communication to the next level by enabling users to have face-to-face conversations, no matter where they are located.
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <a href="https://multichatvision.web.app">Lets Connect</a>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>

        </Flex>
    )
}

export default ChoosingPage;
