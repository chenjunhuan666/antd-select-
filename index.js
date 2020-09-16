import React, { useEffect, useState } from 'react'
import './add.scss'
import city from './city'
import county from './county'
import province from './province'
import { Modal, Form, Input, Select } from 'antd';
const { Option } = Select;

function Index(props) {
    
    const provinceData = province // 省级数据

    const cityData = city // 市区数据

    const countyData=county // 县级数据    

    const [oneCity, setOneCity] = useState(provinceData[0])

    const [cities, setCities] = useState(cityData[provinceData[0]])

    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0])

    const [citiesTwo, setCitiesTwo] = useState(countyData[provinceData[0]][cityData[provinceData[0]][0]])

    const [thirdCity, setThirdCity] = useState(countyData[provinceData[0]][cityData[provinceData[0]][0]][0])
   
    useEffect(()=>{
        form.setFieldsValue({city:secondCity,county:thirdCity})
    },[secondCity,thirdCity,form])

    // 一级点击
    const handleProvinceChange = value => {
        setOneCity(value)
        setCities(cityData[value])
        setSecondCity(cityData[value][0])
        setCitiesTwo(countyData[value][cityData[value][0]])
        setThirdCity(countyData[value][cityData[value][0]][0])
    };
    
    // 二级点击
    const onSecondCityChange = value => {
        setSecondCity(value )
        setCitiesTwo(countyData[oneCity][value])
        setThirdCity(countyData[oneCity][value][0])
    };
    
    // 三级点击
    const onThirdCityChange = value => {
        setThirdCity(value)
    }

    const citySelect = () => {
        return(
            <div>
                <Select
                    style={{ width: 120 }}
                    onChange={handleProvinceChange}
                >
                    {provinceData.map(province => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>

                <Select
                    style={{ width: 120 }}
                    value={secondCity}
                    onChange={onSecondCityChange}
                >
                    {cities.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>

                <Select
                    style={{ width: 120 }}
                    value={thirdCity}
                    onChange={onThirdCityChange}
                >
                    {citiesTwo.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>

            </div>
        )
    }

    return(
        <div>
          {citySelect()}
        </div>
    )

}

export default Index