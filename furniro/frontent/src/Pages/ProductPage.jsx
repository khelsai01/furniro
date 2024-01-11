import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../ProductRedux/action';
import ProductCard from './ProductCard';
import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import Filter from './Filter';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {

  const dispatch = useDispatch();
    const product = useSelector((store) => store.product)
    const [searchParams,setSearchParams] = useSearchParams();

    
    
    
    let paramsObj ={
       params :{
        gender:searchParams.getAll("gender"),
        category:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order: searchParams.get("order")
       }
    }

    useEffect(() => {
        dispatch(getProduct(paramsObj))
    }, [searchParams]);

  return (
    <Container>
      <Box>
        <Image w="100%" src="shop.png" alt="shop" />
      </Box >
      {/* <Filter /> */}
      <Box w="1440px">

        <Grid templateColumns='repeat(4, 1fr)' gap="32px" w="1236px" m='auto' >
        {product?.map((data)=>(
          <GridItem key={data._id} className=''>
            <ProductCard {...data} />
          </GridItem>
        ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default ProductPage