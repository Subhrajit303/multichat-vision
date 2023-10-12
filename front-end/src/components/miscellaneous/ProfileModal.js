// import { ViewIcon } from '@chakra-ui/icons';
// import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
// import React from 'react'

// const ProfileModal = ({ user, children }) => {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     return (
//         <>
//             {children ? (
//                 <span onClick={onOpen}>{children}</span>
//             ) : (
//                 <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
//             )}
//             <Modal size={"lg"} isOpen={isOpen} onClose={onClose} isCentered>
//                 <ModalOverlay />
//                 <ModalContent h={"410px"}>
//                     <ModalHeader fontFamily={"Work sans"} fontSize={"40px"} justifyContent={"center]"}>{user.name}</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody
//                         d="flex"
//                         flexDirection={"column"}
//                         alignItems={"center"}
//                         justifyContent={'space-between'}
//                     >
//                         <Image
//                             borderRadius={"full"}
//                             boxSize={"150px"}
//                             src={user.pic}
//                             alt={user.name}
//                         />
//                         <Text
//                             fontFamily={"Work sans"}
//                             fontSize={{ base: "28px", md: "30px" }}
//                         >
//                             Email:{user.email}
//                         </Text>
//                     </ModalBody>

//                     <ModalFooter>
//                         <Button colorScheme='blue' mr={3} onClick={onClose}>
//                             Close
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }

// export default ProfileModal;

import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
