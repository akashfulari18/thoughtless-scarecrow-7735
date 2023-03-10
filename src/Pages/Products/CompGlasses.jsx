import {Box,Button,Center,Checkbox,Flex,Grid,GridItem,Select,Switch,Text,VStack,} from "@chakra-ui/react";
  import { TbArrowsUpDown } from "react-icons/tb";
//   import ProductTemplate from "./ProductTemplate";
  import React, { useEffect, useState } from "react";
  import FrameType from "./FrameType";
  import axios from "axios";
  import LoadingState from "./LoadingState";
import TopNav from "../../Components/Navbar/TopNav";
import { useDispatch, useSelector } from "react-redux";
import { getCompProducts } from "../../store/App/app.actions";
import CompProductCard from "./CompProductCard";
  
const CompGlasses = () => {
    const {compGlassesData,isLoading} = useSelector((store)=>store.app);
    const dispatch = useDispatch();
    // console.log(compGlassesData)


    useEffect(()=>{
        dispatch(getCompProducts());
    },[])
    // const [products , setProducts]=useState([])
    // const [isLoding , setIsLoding]=useState(false)
    const [filters , setfilters]=useState([])
    // const [page , setPage]=useState(1)
    // const handleFilter =()=>{
      
    // }
  
    let loader=[1,2,3,4,5,6]
    
    const handleSort=(e)=>{
      dispatch(getCompProducts(e.target.value))
    }
   
    return (
      <>
      <TopNav/>
      <Flex m="0" px="2%">
        <Box w="20%" m={0}>
          <Box my="20px">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">
              FRAME TYPE
            </Text>
            <Flex>
            <FrameType
              src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"
              type="Full Rim"
              />
            <FrameType
              src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"
              type="Half Rim"
              />
            <FrameType
              src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"
              type="Rimless"
              />
              </Flex>
          </Box>
          <Box mb="20px">
            <Text fontWeight="bold" mb="3px" color="blackAlpha.600">FRAME SHAPE</Text>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png"  type="Rectangle"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png" type="Round"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png" type="Cat Eye"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Square.png" type="Square"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Geometric.png"  type="Geometric"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Wayfarer.png" setfilter={setfilters} fil="wayfarer" type="Wayfarer"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Aviator.png" type="Aviator"/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Hexagonal.png" type="Hexago..."/></GridItem>
              <GridItem><FrameType src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Clubmaster.png" type="Clubmas..."/></GridItem>
            </Grid>
          </Box>
          <VStack mb="20px" alignItems="flex-start">
          <Text fontWeight="bold" mb="3px" color="blackAlpha.600">FRAME COLOR</Text>
          <Checkbox colorScheme="green">Black ({285})</Checkbox>
          <Checkbox colorScheme="green">Blue ({285})</Checkbox>
          <Checkbox colorScheme="green">White ({285})</Checkbox>
          <Checkbox colorScheme="green">Gold ({285})</Checkbox>
          <Checkbox colorScheme="green">Silver ({285})</Checkbox>
          <Checkbox colorScheme="green">Green ({285})</Checkbox>
          </VStack>
          <Select
                border="0px"
                borderTop="1px"
                borderRadius="0px"
                borderColor="gray.300"
                p="0px"
              >
                <option>BRANDS</option>
                <option>Price : low to high</option>
                <option>Price : high to low</option>
              </Select>
          <Select
                border="0px"
                borderTop="1px"
                borderRadius="0px"
                borderColor="gray.300"
                p="0px"
              >
                <option>FRAME SIZE</option>
                <option>Price : low to high</option>
                <option>Price : high to low</option>
              </Select>
          <Select
                border="0px"
                borderTop="1px"
                borderRadius="0px"
                borderColor="gray.300"
                p="0px"
              >
                <option>PRICE</option>
                <option>Price : low to high</option>
                <option>Price : high to low</option>
              </Select>
          <Select
                border="0px"
                borderTop="1px"
                borderRadius="0px"
                borderColor="gray.300"
                p="0px"
              >
                <option>GENDER</option>
                <option>Price : low to high</option>
                <option>Price : high to low</option>
              </Select>
          <Select
                border="0px"
                borderTop="1px"
                borderBottom="1px"
                borderRadius="0px"
                borderColor="gray.300"
                p="0px"
              >
                <option>MATERIAL</option>
                <option>Price : low to high</option>
                <option>Price : high to low</option>
              </Select>
          
        </Box>
  
        <Box
          overflow="scroll"
          w="82%"
          borderLeft="1px solid"
          borderColor="gray.300"
          m={0}
          
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            p="5px"
            bg="#e2e8f0"
            border="1px"
            borderColor="gray.400"
          >
            <Text>ALL COMPUTER GLASSES</Text>
            <Flex alignItems="center">
              <Text fontWeight="bold" mr="5px" color="green">
                VIEW FRAMES
              </Text>
              <Switch colorScheme="green" isChecked size="lg" />
              <Text ml="5px">VIEW 3D TRY ON</Text>
            </Flex>
            <Flex>
              <Flex alignItems="center">
                <TbArrowsUpDown color="green" fontWeight="bold" />
                <Text fontWeight="bold" color="green">
                  SortBy
                </Text>
              </Flex>
              <Select onChange={handleSort}
                border="2px"
                borderRadius="3px"
                borderColor="black"
                ml="4px"
                p="0px"
              >
                <option value="">Select</option>
                <option value="asc">Price : low to high</option>
                <option value="desc">Price : high to low</option>
              </Select>
            </Flex>
          </Flex>
          <Text mt="5px" textAlign="center">
            Showing {compGlassesData.length} Results
          </Text>
          {!isLoading?<Grid
            m="20px 10px"
            templateColumns="repeat(3, 1fr)"
            height="100vh"
            gap={6}
          > 
            {
              compGlassesData.map(ele=><CompProductCard id={ele.id} key={ele.id} product={ele} mprice={ele.mPrice} colors={ele.color_options} size={ele.size} name={ele.brand_name} src={ele.image_url} rating={ele.avgRating} userRated={ele.userRated} price={ele.price} tags={ele.tags}/>)
            } 
          </Grid>:  
          <Grid
            m="20px 10px"
            templateColumns="repeat(3, 1fr)"
            height="100vh"
            gap={6}
          >
            {
              loader.map(ele=><LoadingState key={ele}/>)
            }
          </Grid>
            }
        </Box>
      </Flex>
            {/* <Flex mt={5} mb={10} gap={5} justifyContent="Center" ml="17%">
            <Button disabled={page===1} onClick={()=>(setPage(pre=>pre-1))}>PRE</Button>
            <Button>{page}</Button>
            <Button onClick={()=>(setPage(pre=>pre+1))}>NEXT</Button>
            </Flex> */}
     </>
    );
  };
  
  export default CompGlasses;