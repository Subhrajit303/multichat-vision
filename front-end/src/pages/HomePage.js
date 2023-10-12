// import React, { useEffect } from 'react';
// import { Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
// import Login from '../components/Authentication/Login';
// import Signup from '../components/Authentication/Signup';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


// const HomePage = () => {
//   const history = useHistory();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (user) history.push("/chats");
//   }, [history]);

//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         <Text fontSize="4xl" fontFamily={"work sans"} color={"black"} ><Center>Talk-A-Tive</Center> </Text>
//       </Box>
//       <Box bg={"white"} w="100%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
//         <Tabs variant='soft-rounded' >
//           <TabList mb={"1em"}>
//             <Tab width={"50%"}>Login</Tab>
//             <Tab width={"50%"}>Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>

//     </Container>
//   )
// }

// export default HomePage

import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW={"xl"} centerContent >
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#F9F5EB"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth={"1PX"}
      >
        <Text fontSize="4xl" fontFamily="Work sans" style={{ zIndex: 1 }}>
          MULTI CHAT VISION
        </Text>
      </Box>

      <Box bg="#F9F5EB" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab >Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>

  );
}

export default Homepage;






















































