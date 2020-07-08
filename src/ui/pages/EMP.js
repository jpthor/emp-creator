import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../../context'
import { Row, Col, Input, Menu, Dropdown, Button } from 'antd'
import { DownOutlined,  } from '@ant-design/icons';

import { HR, H1, H2, Text, Gap, Label, } from '../components/elements';

import { getUmaContract } from '../../client/web3'
import { convertToWei } from '../../utils'

const Overview = (props) => {
    const context = useContext(Context)

    const priceFeedArray = ['0x4554482f42544300000000000000000000000000000000000000000000000000']
    const expiryArray = ['1596240000', '1598918400', '1601510400', '1604188800', '1606780800', '1609459200', '1612137600', '1614556800', '1617235200', '1619827200', '1622505600', '1625097600']

    const [collateralAddress, setCollateralAddress] = useState('0xB7b9568073C9e745acD84eEb30F1c32F74Ba4946')
    const [finderAddress, setFinderAddress] = useState('0x6850e2B45D2951301a0BFED44F0a80E9F32fAfEe')
    const [tokenFactoryAddress, settokenFactoryAddress] = useState('0x478049C316035a3Cf0e1d73fdeD5BC45D1CeFde4')
    const [timerAddress, settimerAddress] = useState('0x0000000000000000000000000000000000000000')
    const [priceFeedIdentifier, setpriceFeedIdentifier] = useState(priceFeedArray[0])
    const [expirationTimestamp, setexpirationTimestamp] = useState(expiryArray[0])
    const [syntheticName, setsyntheticName] = useState('test')
    const [syntheticSymbol, setsyntheticSymbol] = useState('test')
    const [withdrawalLiveness, setwithdrawalLiveness] = useState(7200)
    const [liquidationLiveness, setliquidationLiveness] = useState(7200)
    const [minSponsorTokens, setminSponsorTokens] = useState(['1000000000000000000000'])
    const [collateralRequirement, setcollateralRequirement] = useState(['1200000000000000000'])
    const [disputeBondPct, setdisputeBondPct] = useState(['30000000000000000'])
    const [sponsorDisputeRewardPct, setsponsorDisputeRewardPct] = useState(['50000000000000000'])
    const [disputerDisputeRewardPct, setdisputerDisputeRewardPct] = useState(['50000000000000000'])
    const [checkString, setCheckString] = useState([])


    useEffect(() => {
        // getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const getData = async () => {
    //     context.setContext({ networkData: await getNetworkData() })
    // }

    function handleMenuClick(e) {
        setpriceFeedIdentifier(priceFeedArray[e.key - 1])
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                0x4554482f425443
          </Menu.Item>
        </Menu>
    );

    function handleMenuClick2(e) {
        setexpirationTimestamp(e.key)
    }
    const menu2 = (
        <Menu onClick={handleMenuClick2}>
            {expiryArray.map((item) => (
                <Menu.Item key={item}>
                    {item}
                </Menu.Item>
            ))}
        </Menu>
    );

    const onChange1 = async (e) => {
        setCollateralAddress(e.target.value)
    }
    const onChange2 = async (e) => {
        setFinderAddress(e.target.value)
    }
    const onChange3 = async (e) => {
        settokenFactoryAddress(e.target.value)
    }
    const onChange4 = async (e) => {
        settimerAddress(e.target.value)
    }
    const onChange5 = async (e) => {
        setpriceFeedIdentifier(e.target.value)
    }
    const onChange6 = async (e) => {
        setexpirationTimestamp(e.target.value)
    }
    const onChange7 = async (e) => {
        setsyntheticName(e.target.value)
    }
    const onChange8 = async (e) => {
        setsyntheticSymbol(e.target.value)
    }
    const onChange9 = async (e) => {
        setwithdrawalLiveness(e.target.value)
    }
    const onChange10 = async (e) => {
        setliquidationLiveness(e.target.value)
    }
    const onChange11 = async (e) => {
        setminSponsorTokens([(convertToWei(e.target.value)).toFixed(0)])
    }
    const onChange12 = async (e) => {
        setcollateralRequirement([(convertToWei(e.target.value)).toFixed(0)])
    }
    const onChange13 = async (e) => {
        setdisputeBondPct([(convertToWei(e.target.value/100)).toFixed(0)])
    }
    const onChange14 = async (e) => {
        setsponsorDisputeRewardPct([(convertToWei(e.target.value/100)).toFixed(0)])
    }
    const onChange15 = async (e) => {
        setdisputerDisputeRewardPct([(convertToWei(e.target.value/100)).toFixed(0)])
    }

    const check = async () => {
        let ConstructorParms = {
            'expirationTimestamp': expirationTimestamp,
            'withdrawalLiveness': withdrawalLiveness,
            'collateralAddress': collateralAddress,
            'finderAddress': finderAddress,
            'tokenFactoryAddress': tokenFactoryAddress,
            'timerAddress': timerAddress,
            'priceFeedIdentifier': priceFeedIdentifier,
            'syntheticName': syntheticName,
            'syntheticSymbol': syntheticSymbol,
            'minSponsorTokens': minSponsorTokens,
            'liquidationLiveness': liquidationLiveness,
            'collateralRequirement':collateralRequirement,
            'disputeBondPct': disputeBondPct,
            'sponsorDisputeRewardPct': sponsorDisputeRewardPct,
            'disputerDisputeRewardPct': disputerDisputeRewardPct,
        }
        let string = JSON.stringify(ConstructorParms)
        // const regex = /,/gi;
        // let lines = string.replace(regex, ',\n')
        setCheckString(string)
    }

    const deploy = async () => {
        let ConstructorParams = {
            'expirationTimestamp': expirationTimestamp,
            'withdrawalLiveness': withdrawalLiveness,
            'collateralAddress': collateralAddress,
            'finderAddress': finderAddress,
            'tokenFactoryAddress': tokenFactoryAddress,
            'timerAddress': timerAddress,
            'priceFeedIdentifier': priceFeedIdentifier,
            'syntheticName': syntheticName,
            'syntheticSymbol': syntheticSymbol,
            'minSponsorTokens': minSponsorTokens,
            'liquidationLiveness': liquidationLiveness,
            'collateralRequirement':collateralRequirement,
            'disputeBondPct': disputeBondPct,
            'sponsorDisputeRewardPct': sponsorDisputeRewardPct,
            'disputerDisputeRewardPct': disputerDisputeRewardPct,
        }
        console.log(ConstructorParams)
        let contract = await getUmaContract()
        await contract.methods.createExpiringMultiParty(ConstructorParams).send({ from: context.wallet?.address })
    }


    return (
        <div>

            <H1>Create Expiring Multiparty</H1>
            <HR />
            <H2>Step 1)</H2><br></br>
            <Text>Deploy a Kovan ERC20 collateral asset.</Text><br /><br />
            <H2>Step 2)</H2><br></br>
            <Text>Get UMA team to approve the asset from (1) as collateral.</Text><br /><br />
            <H2>Step 3)</H2><br></br>
            <Text>Deploy a new Expiring Multiparty Asset using this tool.</Text><br />
            <a href="https://kovan.etherscan.io/address/0x0139d00c416e9F40465a95481F4E36422a0A5fcc#writeContract" target="blank">Kovan Factory Contract</a><br /><br />

            <Label>ADDRESSES</Label>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter collateralAddress" onChange={onChange1}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>Your approved collateral address.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input defaultValue={finderAddress} onChange={onChange2}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The UMA Kovan Finder Address.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input defaultValue={tokenFactoryAddress} onChange={onChange3}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The UMA Kovan Token Factory Address.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input defaultValue={timerAddress} onChange={onChange4}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The UMA Kovan Timer Address.</Text><br />
                    <a href="https://github.com/UMAprotocol/protocol/blob/master/core/networks/42.json" target="blank">UMA Kovan Details</a><br />
                </Col>
            </Row>
            <Label>ASSET DETAILS</Label>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={8}>
                            <Dropdown overlay={menu}>
                                <Button>
                                    Identifiers <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Col>
                        <Col xs={16}>
                            <Input defaultValue={priceFeedIdentifier} onChange={onChange5} value={priceFeedIdentifier}></Input><br />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The price feed identifier for the price feed, eg ETH/BTC. </Text><br /><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={8}>
                            <Dropdown overlay={menu2}>
                                <Button>
                                    Expiries <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Col>
                        <Col xs={16}>
                            <Input defaultValue={expirationTimestamp} onChange={onChange6} value={expirationTimestamp}></Input><br />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The future expirationTimestamp for the contract.</Text><br /><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter syntheticName" onChange={onChange7}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The name for the asset, including plain language expiry date, eg UMA Synthetic Gold April 2020.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter syntheticSymbol" onChange={onChange8}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The symbol for the asset, including expiry date, eg UMAGold_Apr2020.</Text><br /><br />
                </Col>
            </Row>

            <Label>LIVENESS DETAILS</Label>
            <Row>
                <Col xs={12}>
                    <Input defaultValue={withdrawalLiveness} onChange={onChange9}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The withdrawalLiveness (2 hours in seconds).</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input defaultValue={liquidationLiveness} onChange={onChange10}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The liquidationLiveness (2 hours in seconds).</Text><br /><br />
                </Col>
            </Row>

            <Label>COLLATERAL DETAILS</Label>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter minSponsorTokens" onChange={onChange11}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The minimum synthetic tokens to mint, eg 1000.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter collateralRequirement" onChange={onChange12}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The collateral to provide (GCR * minSponsorTokens), eg 38.</Text><br /><br />
                </Col>
            </Row>

            <Label>DISPUTE DETAILS</Label>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter disputeBondPct" onChange={onChange13}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The disputeBondPct - eg 3 = 3%.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter sponsorDisputeRewardPct" onChange={onChange14}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The sponsorDisputeRewardPct - eg 5 = 5%.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input placeholder="enter disputerDisputeRewardPct" onChange={onChange15}></Input><br />
                </Col>
                <Col xs={12} style={{ paddingLeft: 20 }}>
                    <Text>The disputerDisputeRewardPct - eg 5 = 5%.</Text><br /><br />
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <Button type="secondary" onClick={check}>CHECK</Button><br /><br />  
                    <Text>{checkString}</Text><br /><br />                
                    </Col>
            </Row>

            <Button type="primary" onClick={deploy}>DEPLOY</Button>
            <Gap />
            <Gap />
        </div>
    )
}

export default Overview