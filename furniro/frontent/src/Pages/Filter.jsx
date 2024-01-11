import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams.getAll("gender"))
    const [gender, setGender] = useState(searchParams.getAll("gender") || []);
    const [category , setCategory] = useState(searchParams.getAll("category") ||[]);
    const [order, setOrder] =useState(searchParams.get("order")||"")

    const handleChange = (e)=>{
        const { value} = e.target;
        let newGender = [...gender]

        if(newGender.includes(value)){
            newGender= newGender.filter((el)=>el!==value)
        }
        else {
            newGender.push(value)
        }
        setGender(newGender)
    }
    
    const handleChangeCategoy = (e)=>{
        const {value}= e.target;
        let newCategory= [...category];

        if(newCategory.includes(value)){
            newCategory = newCategory.filter((el)=>el!==value)
        }
        else{
            newCategory.push(value);
        }

        setCategory(newCategory)
    }

    const handleOrder=(e)=>{
        const {value}= e.target;
        setOrder(value)
    }

    useEffect(()=>{
        let newObj ={
            gender,
            category
        }
        order && (newObj.order=order)
        setSearchParams(newObj)
    },[gender,setSearchParams,category,order])

    // console.log(gender)
    return (
        <Flex>
            <div>

                <h4>Filter by Gender</h4>
                <input type='checkbox' name='male' value="male" onChange={handleChange} checked={gender.includes("male")}/>
                <label>Male</label>
                <br/>
                <input type='checkbox' name='female' value="female" onChange={handleChange} checked={gender.includes("female")}/>
                <label>Female</label>
                <br />

                <input type='checkbox' name='kid' value="kid" onChange={handleChange} checked={gender.includes("kid")}/>
                <label>
                    Kids
                </label>

            </div>

            <div>

                <h4>Filter by Category </h4>
                <input type='checkbox' name='top-wear' value="top-wear" onChange={handleChangeCategoy} checked={category.includes("top-wear")}/>
                <label>Top-wear</label>
                <br/>
                <input type='checkbox' name='bottom-wear' value="bottom-wear" onChange={handleChangeCategoy} checked={category.includes("bottom-wear")}/>
                <label>Bottom-wear</label>
                <br />

                <input type='checkbox' name='foot-wear' value="foot-wear" onChange={handleChangeCategoy} checked={category.includes("foot-wear")}/>
                <label>
                    Foot-wear
                </label>
                

            </div>
            <br />
            <div onChange={handleOrder}>
                <h3>Sort by Price </h3>
                <input type='radio' name="order" value={"asc"} defaultChecked={order=="asc"} />
                <label>Low to High </label>
                <br/>
                <input type='radio' name="order" value={"desc"} defaultChecked={order=="desc"} />
                <label>High to Low</label>
                <br/>
                <input type='radio' name="order" value={""} defaultChecked={order==""} />
                <label>Reset</label>
            </div>

        </Flex>
    )
}

export default Filter