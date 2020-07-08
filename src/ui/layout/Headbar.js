import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../context'

import Web3 from 'web3'

import { getAddressShort } from '../../utils'
import { Link } from "react-router-dom";
import { Row, Col, Button, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../App.css';

import { getWalletData} from '../../client/web3'
import { LabelGrey } from '../components/elements';

const { Header } = Layout;

const Headbar = (props) => {

    const context = useContext(Context)
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        connect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.wallet])

    const connect = async () => {
        window.web3 = new Web3(window.ethereum);
        const accountConnected = (await window.web3.eth.getAccounts())[0];
        if(accountConnected){
            // const accounts = await window.web3.eth.getAccounts()
            // const address = accounts[0]
            context.setContext({ wallet: await getWalletData() })
            setConnected(true)
        } else {
            setConnected(false)
        }
    }

    const ethConnected = async () => {
        setInterval(async function() {
            const accountConnected = (await window.web3.eth.getAccounts())[0];
            if(accountConnected){
                setConnected(true)
            } else {
                setConnected(false)
            }
        }, 100);
    }

	const ethEnabled = () => {
        console.log('connecting')
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			window.ethereum.enable();
			ethConnected()
			return true;
		}
		return false;
	}

    // const connectWallet = async () => {
    //     // alert("Please connect");
    //     // context.setContext({ wallet: await getWalletData() })
    //     context.setContext({ connected: true })
    //     setConnected(true)
    // }

    const addr = () => {
        // console.log(context.BASEData)
        return getAddressShort(context.wallet?.address)
    }

    return (
        <Header>
            <Row>
                <Col xs={12}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                        <Menu.Item key='1'>
                            <Link to={"/emp"}>EMP</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={8} style={{ textAlign: 'center' }}>
                    <LabelGrey>KOVAN TESTNET ONLY</LabelGrey>
                </Col>
                <Col xs={4} style={{ textAlign: 'right' }}>
                    {!connected &&
                        <Button type="primary" onClick={ethEnabled}>CONNECT</Button>
                    }
                    {connected &&
                        <Button type="primary" icon={<UserOutlined />}>{addr()}</Button>
                    }
                </Col>
            </Row>
        </Header>
    )
}

export default Headbar