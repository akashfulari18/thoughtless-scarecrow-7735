// import React, { useContext } from "react";
// import {
//   Text,
//   Image,
//   Box,
//   HStack,
//   Link,
//   Avatar,
//   Heading,
//   Flex,
// } from "@chakra-ui/react";
// import Styles from "./TopNav.module.css";
// import Hover from "./Hover";
// // import Login from "../Login";
// // import Signup from "../Signup";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
// } from "@chakra-ui/react";

// import { Navigate } from "react-router-dom";
// import { TriangleDownIcon } from "@chakra-ui/icons";

// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button,
//   useDisclosure,
// } from "@chakra-ui/react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
// } from "@chakra-ui/react";
// import { FiMenu } from "react-icons/fi";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// // import { AuthContext } from "../../ContextApi/AuthContext";
// const TopNav = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const firstField = React.useRef();

//   //   const { isAuth, setisAuth, Authdata, setAuthdata } = useContext(AuthContext);

//   return (
//     <div className={Styles.tn_div_1} style={{ width: "100%" }}>
//       <div className={Styles.tn_div_2} style={{ width: "100%" }}>
//         <Box bg="#FFFFFF" mt="0.5%">
//           {/* <Box bg="" pb="0.5%" mb="0.5%" w="100%" borderRadius='1g'>
//             <Box display="flex" fontFamily="sans-serif" ml="0.3%" bg="" w="100%">
//               <Link>
//                 {" "}
//                 <Text fontSize="70%" color="#000042">
//                   Do More, Be More
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link to="">
//                 <Text fontSize="63%" color="#000042" p="">
//                   Try in 3D
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   Store Location
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 {" "}
//                 <Text fontSize="63%" color="#000042">
//                   Quality
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   USA
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   Singapore
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   UAE
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   John Jacobs
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   Aqualens
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   Cobrowsing
//                 </Text>
//               </Link>
//               <Text fontSize="100%" mt="-0.8%" p="0.4%">
//                 |
//               </Text>
//               <Link>
//                 <Text fontSize="63%" color="#000042">
//                   Engineering Blog
//                 </Text>
//               </Link>
//             </Box>
//           </Box> */}
//           <Box display="flex" p="0% 1.5%">
//             <Box w="14%" cursor="pointer" ml="-1%" bg="">
//               <Image
//                 w="100%"
//                 h="100%"
//                 src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
//                 alt="Lenskart"
//               />
//             </Box>
//             <Box width="10%" ml="5%" bg="">
//               <Image
//                 h="100%"
//                 width="100%"
//                 src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
//                 alt="ph-no"
//               ></Image>
//             </Box>
//             <Box p="0.6%" bg="" w="55%" ml="1%">
//               <Box
//                 border="1px"
//                 h="100%"
//                 w="100%"
//                 borderRadius="5px"
//                 borderColor="#000042"
//                 bg="#FFFFFF"
//               >
//                 <Text color="grey" ml="2%" mt="0.3%">
//                   What are you looking for
//                 </Text>
//               </Box>
//             </Box>
//             <Box fontSize="13px" fontFamily="sans-serif" w="30%" ml="5%">
//               <Box pt="5%" display="flex" justifyContent="space-between">
//                 <Link to="/customer/orders" cursor="pointer">
//                   Track Order
//                 </Link>
//                 <Box display="flex">
//                   <Flex gap="5px">
//                     {/* {isAuth === true ? (
//                       <Popover trigger="hover">
//                         <PopoverTrigger>
//                           <Box fontWeight={"400"} fontSize="13px" mt="-2px">
//                             {Authdata[0].first_name}
//                             <TriangleDownIcon
//                               ml="2px"
//                               fontSize={"9px"}
//                               _hover={{ transform: "rotate(180deg)" }}
//                             />{" "}
//                           </Box>
//                         </PopoverTrigger>
//                         <PopoverContent
//                           w="200px"
//                           boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
//                         >
//                           <PopoverBody
//                             display={"flex"}
//                             flexDirection="column"
//                             h={"160px"}
//                             justifyContent="space-between"
//                           >
//                             <Link to="/customer/orders" color="#333368">
//                               My orders
//                             </Link>
//                             <Link color="#333368">My Prescription</Link>
//                             <Link color="#333368">My Store credit</Link>
//                             <Link to="/customer/account" color="#333368">
//                               Account information
//                             </Link>
//                             <Box
//                               color="#333368"
//                               onClick={() => {
//                                 setisAuth(false);
//                                 setAuthdata("");
//                                 return <Navigate to="/" />;
//                               }}
//                             >
//                               Logout
//                             </Box>
//                           </PopoverBody>
//                         </PopoverContent>
//                       </Popover>
//                     ) : (
//                       <Box display={"flex"}>
//                         <Login />
//                         <Signup />
//                       </Box>
//                     )} */}
//                     <Link to="/login" fontWeight={"400"} fontSize="13px">
//                       Sign In
//                     </Link>
//                     <Link to="/signup" fontWeight={"400"} fontSize="13px">
//                       Sign Up
//                     </Link>
//                   </Flex>
//                 </Box>
//                 <Box display="flex" cursor="pointer">
//                   <Image
//                     h="75%"
//                     src="https://static.lenskart.com/media/desktop/img/wishlist.png"
//                     alt="icon"
//                   ></Image>
//                   <Text ml="15%">Wishlist</Text>
//                 </Box>

//                 <Box display="flex" cursor="pointer">
//                   <Image
//                     h="65%"
//                     src="https://static.lenskart.com/media/desktop/img/cart.png"
//                     alt="icon"
//                   ></Image>
//                   <Text ml="15%">Cart</Text>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//           <HStack
//             fontWeight="bold"
//             bg="#FBF9F7"
//             fontFamily="sans-serif"
//             h="65px"
//             w=""
//             position="relative"
//           >
//             <Hover />
//             <Box
//               spacing="5px"
//               w=""
//               display="flex"
//               alignItems="center"
//               left="79%"
//               gap="3%"
//               h="100%"
//               position="absolute"
//             >
//               <Image
//                 h="55%"
//                 w="35%"
//                 borderRadius="5px"
//                 cursor="pointer"
//                 src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
//                 alt="try on 3D"
//               ></Image>
//               <Image
//                 h="55%"
//                 w="35%"
//                 borderRadius="5px"
//                 cursor="pointer"
//                 src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
//                 alt="BLU"
//               ></Image>
//               <Image
//                 h="55%"
//                 w="35%"
//                 borderRadius="5px"
//                 cursor="pointer"
//                 src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
//                 alt="GOLD"
//               ></Image>
//             </Box>
//           </HStack>
//         </Box>
//       </div>
//       <div className={Styles.mobView}>
//         <Button
//           leftIcon={<FiMenu />}
//           colorScheme="teal"
//           onClick={onOpen}
//         ></Button>
//         <Drawer
//           isOpen={isOpen}
//           placement="left"
//           initialFocusRef={firstField}
//           onClose={onClose}
//         >
//           <DrawerOverlay />
//           <DrawerContent w="1000px" bg="#27394E">
//             <DrawerCloseButton />
//             <DrawerHeader borderBottomWidth="1px">
//               <div
//                 className={Styles.div1}
//                 style={{ borderBottom: "2px solid #18CFA8", padding: "5%" }}
//               >
//                 <div className={Styles.div2}>
//                   <Avatar src="https://bit.ly/broken-link" />
//                   <div className={Styles.div3}>
//                     <h3 style={{ color: "white", marginTop: "10px" }}>
//                       Hi Yogi
//                     </h3>
//                     <Link color="#CCCCCC" fontSize="50%" mt="5%">
//                       Enjoy Buy 1 Get 1 offer for 365 days
//                     </Link>
//                   </div>
//                 </div>
//                 <Button bg="#00BAC6" w="100%" h="32px" mt="5%" color="#FFFFFF">
//                   GET GOLD MEMBERSHIP
//                 </Button>
//               </div>
//               <Box display="flex" flexDirection="column">
//                 <Link
//                   color="white"
//                   mt="10%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   My Orders
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Manage Notification
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="3px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Contact Us
//                 </Link>
//               </Box>
//               <Heading mt="15%" color="white" fontSize="80%">
//                 HIGHLIGHTS
//               </Heading>
//               <Box display="flex" flexDirection="column">
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Check Frame Size
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Gold Membership
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Try Frames in 3D
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Dowloads Apps
//                 </Link>
//               </Box>
//               <Heading mt="15%" color="white" fontSize="80%">
//                 SHOP NOW
//               </Heading>
//               <Box display="flex" flexDirection="column">
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Men
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Women
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Kids
//                 </Link>
//               </Box>
//               <Heading mt="15%" color="white" fontSize="80%">
//                 Our Services
//               </Heading>
//               <Box display="flex" flexDirection="column">
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Free Home Trail
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Home Eye check-up
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Store Locator
//                 </Link>
//               </Box>
//               <Heading mt="15%" color="white" fontSize="80%">
//                 International
//               </Heading>
//               <Box display="flex" flexDirection="column">
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Singapore
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   USA
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   UAE
//                 </Link>
//               </Box>
//               <Heading mt="15%" color="white" fontSize="80%">
//                 FAQ's & POLICIES
//               </Heading>
//               <Box display="flex" flexDirection="column">
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Frequently Asked Questions
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Cancellation & Return Policy
//                 </Link>
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Cobrowsing
//                 </Link>
//               </Box>
//               <Box mt="15%">
//                 <Link
//                   color="white"
//                   mt="6%"
//                   borderBottom="1px solid #526171"
//                   pb="5%"
//                   fontSize="72%"
//                 >
//                   Logout
//                 </Link>
//               </Box>
//               <Accordion allowMultiple></Accordion>
//             </DrawerHeader>
//           </DrawerContent>
//         </Drawer>
//       </div>
//     </div>
//   );
// };
// export default TopNav;

import React, { useContext } from "react";
import {
  Text,
  Image,
  Box,
  HStack,
  Avatar,
  Heading,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import Styles from "./TopNav.module.css";
import Hover from "./Hover";
import final_logo from "../../assets/final-logo.png"
// import Login from "../Login";
// import Signup from "../Signup";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import { Navigate, useNavigate } from "react-router-dom";
import { TriangleDownIcon } from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AuthContext } from "../../Pages/Signup-Login/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
  updateIsAuth,
  updateIsAuthLogout,
} from "../../store/Auth/auth.actions";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../ContextApi/AuthContext";

const TopNav = () => {
  // drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  //modal
  // const { IsOpen, OnOpen, OnClose } = useDisclosure();

  const firstField = React.useRef();
  const navigate = useNavigate();

  // const { firstname, isAuth, logoutUser } = useContext(AuthContext);

  const isAuth = useSelector((store) => store.auth.isAuth);
  const user = useSelector((store) => store.auth.user);
  // console.log("isAuth",user.isAuth)
  const dispatch = useDispatch();

  return (
    <div className={Styles.tn_div_1}
     style={{ width: "100%" }}
     >
      <div className={Styles.tn_div_2} >
      <div className={Styles.mobView}>
        <Button
          leftIcon={<FiMenu />}
          colorScheme="teal"
          onClick={onOpen}
        ></Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent w="1000px" bg="#27394E">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <div
                className={Styles.div1}
                style={{ borderBottom: "2px solid #18CFA8", padding: "5%" }}
              >
                <div className={Styles.div2}>
                  <Avatar src="https://bit.ly/broken-link" />
                  <div className={Styles.div3}>
                    <h3 style={{ color: "white", marginTop: "10px" }}>
                      Hi, Specsy
                    </h3>
                    <Link color="#CCCCCC" fontSize="50%" mt="5%">
                      Enjoy Buy 1 Get 1 offer for 365 days
                    </Link>
                  </div>
                </div>
                <Button bg="#00BAC6" w="100%" h="32px" mt="5%" color="#FFFFFF">
                  GET GOLD MEMBERSHIP
                </Button>
              </div>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="10%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  My Orders
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Manage Notification
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="3px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Contact Us
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                HIGHLIGHTS
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Check Frame Size
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Gold Membership
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Try Frames in 3D
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Dowloads Apps
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                SHOP NOW
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Men
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Women
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Kids
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                Our Services
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Free Home Trail
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Home Eye check-up
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Store Locator
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                International
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Singapore
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  USA
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  UAE
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                FAQ's & POLICIES
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Frequently Asked Questions
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Cancellation & Return Policy
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Cobrowsing
                </Link>
              </Box>
              <Box mt="15%">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Logout
                </Link>
              </Box>
              <Accordion allowMultiple></Accordion>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
        <Box bg="#FFFFFF" mt="0.5%">
          <Box display="flex" p="0 2rem">
            <Box w="14%" cursor="pointer" ml="-0.5" bg=""  className={Styles.logo}>
              <Link to="/">
                <Image
                  w="80%"
                  h="100%"
                  src={final_logo}
                  alt="Lenskart"
                />
              </Link>
            </Box>
            <Box width="10%" ml="5%" bg="">
              <Image
                h="100%"
                width="100%"
                src="https://static.lenskart.com/media/mobile/images/phone_number.svg"
                alt="ph-no"
              ></Image>
            </Box>
            <Box p="0.6%" bg="" w="55%" ml="1%" className={Styles.searchBox}>
              <Box
                // border="1px"
                h="100%"
                w="100%"
                borderRadius="5px"
                borderColor="#000042"
                bg="#FFFFFF"
              >
                <Input color="grey" ml="2%" mt="0.3%" placeholder="What are you looking for">
                  
                </Input>
              </Box>
            </Box>
            <Box fontSize="13px" fontFamily="sans-serif" w="30%" ml="5%">
              <Box pt="5%" display="flex" justifyContent="space-between">
                <Link to="/customer/orders" cursor="pointer">
                  Track Order
                </Link>
                <Box display="flex">
                  <Flex gap="5px">
                    {isAuth ? (
                      <Flex>
                        <Text mr={"10px"} fontWeight={"bold"} fontSize={"15px"}>
                          {user?.firstname}
                        </Text>
                        <Link
                          to="/"
                          onClick={() => {
                            updateIsAuthLogout(user);
                            dispatch(logoutUser());
                          }}
                        >
                          Logout
                        </Link>
                      </Flex>
                    ) : (
                      <>
                      <HStack>
                        <Link
                          to="/login"
                          fontWeight={"400"}
                          fontSize="13px"
                          mr={"10px"}
                        >
                          Sign In
                        </Link>
                        <Link to="/signup" fontWeight={"400"} fontSize="13px">

                          Sign Up
                        </Link>
                      </HStack>
                      </>
                    )}
                  </Flex>
                </Box>
                <Box display="flex" cursor="pointer">
                  <Image
                    h="75%"
                    src="https://static.lenskart.com/media/desktop/img/wishlist.png"
                    alt="icon"
                  ></Image>
                  <Text ml="15%">Wishlist</Text>
                </Box>

                <Box display="flex" cursor="pointer">
                  <Image
                    h="65%"
                    src="https://static.lenskart.com/media/desktop/img/cart.png"
                    alt="icon"
                  ></Image>
                  <Text ml="15%">
                    <Link to="/cart">Cart</Link>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <HStack
            fontWeight="bold"
            bg="#FBF9F7"
            fontFamily="sans-serif"
            h="65px"
            w="100%"
            position="relative"
          >
            <Hover />
            <Box
              spacing="5px"
              w=""
              display="flex"
              alignItems="center"
              left="79%"
              gap="3%"
              h="100%"
              position="absolute"
            >
              <Image
                h="55%"
                w="35%"
                borderRadius="5px"
                cursor="pointer"
                src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
                alt="try on 3D"
              ></Image>
              <Image
                h="55%"
                w="35%"
                borderRadius="5px"
                cursor="pointer"
                src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
                alt="BLU"
              ></Image>
              <Image
                h="55%"
                w="35%"
                borderRadius="5px"
                cursor="pointer"
                src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
                alt="GOLD"
              ></Image>
            </Box>
          </HStack>
        </Box>
      </div>
      {/* <div className={Styles.mobView}>
        <Button
          leftIcon={<FiMenu />}
          colorScheme="teal"
          onClick={onOpen}
        ></Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent w="1000px" bg="#27394E">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <div
                className={Styles.div1}
                style={{ borderBottom: "2px solid #18CFA8", padding: "5%" }}
              >
                <div className={Styles.div2}>
                  <Avatar src="https://bit.ly/broken-link" />
                  <div className={Styles.div3}>
                    <h3 style={{ color: "white", marginTop: "10px" }}>
                      Hi, Specsy
                    </h3>
                    <Link color="#CCCCCC" fontSize="50%" mt="5%">
                      Enjoy Buy 1 Get 1 offer for 365 days
                    </Link>
                  </div>
                </div>
                <Button bg="#00BAC6" w="100%" h="32px" mt="5%" color="#FFFFFF">
                  GET GOLD MEMBERSHIP
                </Button>
              </div>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="10%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  My Orders
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Manage Notification
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="3px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Contact Us
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                HIGHLIGHTS
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Check Frame Size
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Gold Membership
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Try Frames in 3D
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Dowloads Apps
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                SHOP NOW
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Men
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Women
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Kids
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                Our Services
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Free Home Trail
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Home Eye check-up
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Store Locator
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                International
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Singapore
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  USA
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  UAE
                </Link>
              </Box>
              <Heading mt="15%" color="white" fontSize="80%">
                FAQ's & POLICIES
              </Heading>
              <Box display="flex" flexDirection="column">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Frequently Asked Questions
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Cancellation & Return Policy
                </Link>
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Cobrowsing
                </Link>
              </Box>
              <Box mt="15%">
                <Link
                  color="white"
                  mt="6%"
                  borderBottom="1px solid #526171"
                  pb="5%"
                  fontSize="72%"
                >
                  Logout
                </Link>
              </Box>
              <Accordion allowMultiple></Accordion>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div> */}

      {/* <div> */}
        {/* <Button onClick={OnOpen}>Open Modal</Button> */}

        {/* <Modal isOpen={isOpen} onClose={onClose}> */}
          {/* <ModalOverlay /> */}
          {/* <ModalContent> */}
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <ModalCloseButton /> */}

            {/* <ModalBody><Lorem count={2} /></ModalBody> */}

            {/* <ModalFooter> */}
              {/* <Button colorScheme="blue" mr={3} onClick={onClose}> */}
                {/* Close */}
              {/* </Button> */}
              {/* <Button variant="ghost">Secondary Action</Button> */}
            {/* </ModalFooter> */}
          {/* </ModalContent> */}
        {/* </Modal> */}
      {/* </div> */}
    </div>
  );
};
export default TopNav;
