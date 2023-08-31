import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useMemo, useState } from 'react';
import Cards from './Card';
import Image1 from '@/app/assets/img1.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img3.png'
import Image4 from '../assets/img4.png'
import Image5 from '../assets/img5.png'
import Image6 from '../assets/img6.png'

interface Articlesprop{
    title:string 
    shortDesc: string 
    articleImg: any

}


export const articleData:Articlesprop[] = [
    { title: "Grilled Tomatoes at Home", 
    shortDesc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", articleImg: Image1 },

    { title: "Snacks for Travel", 
    shortDesc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", articleImg: Image2 },

    { title: "Post-workout Recipes", 
    shortDesc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", articleImg: Image3},

    { title: "How to grill corn", 
    shortDesc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", articleImg: Image4 },

    { title: "Crunchwrap Supreme", 
    shortDesc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", articleImg: Image5 },

    { title: "Broccoli Cheese Soup", 
    shortDesc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", articleImg: Image6 }
];

const Articles = () => {

    const [page, setPage] = useState(1);
    const [currentPageData, setcurrentPageData] = useState(articleData.slice(page - 1, page + 2));

    const maxPage = Math.ceil(articleData.length / 3);

    useMemo(() => {
        setcurrentPageData(articleData.slice(page - 1, page + 2));
    }, [page]);

    return (
        <Flex direction={"column"}>
            <Box px={{ base: "30px", lg: "50px", xl: "80px" }}>
                <Heading as={"h3"} fontSize={"56px"} color={"#0E2368"} fontFamily={"600"} textAlign={"left"} pt={{md:"60px", lg:"100px"}}>Latest Articles</Heading>
                <Flex mt={"30px"} justify={"space-between"} align={{ base: "center", lg: "baseline" }} direction={{ base: "column", lg: "row" }}>
                    {currentPageData.map((item) => (
                        <Cards data={item} key={item.title} />
                    ))
                    }
                </Flex>
                <Flex align={"center"} justify={"center"} my={"30px"}>
                    <Box border={"1px"} borderColor={"#0E2368"} borderRadius={"6px"} p={"6px"} cursor={"pointer"} _hover={{ bg: "#e9edfc" }} onClick={() => setPage(page > 1 ? page - 1 : 1)}>
                        <AiOutlineLeft
                            style={{
                                width: "20px",
                                height: "20px",
                                cursor: "pointer",
                            }}
                        />
                    </Box>

                    <Text as={"span"} mx={"10px"}>{page}/{maxPage}</Text>

                    <Box border={"1px"} borderColor={"#0E2368"} borderRadius={"6px"} p={"6px"} cursor={"pointer"} _hover={{ bg: "#e9edfc" }} onClick={() => setPage(page < maxPage ? page + 1 : maxPage)}>
                        <AiOutlineRight
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Articles;