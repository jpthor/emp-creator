import Web3 from 'web3'
import UmaFactory from '../artifacts/umaFactory.json'

export const UMA_ADDR = '0x0139d00c416e9F40465a95481F4E36422a0A5fcc'
export const UMA_ABI = UmaFactory

export const getWeb3 = () => {
    return new Web3(Web3.givenProvider || "http://localhost:8545")
}
export const getEtherscanURL = () => {
    return "https://kovan.etherscan.io/"
}

export const getUmaContract = () => {
    var web3 = getWeb3()
    return new web3.eth.Contract(UMA_ABI, UMA_ADDR)
}
export const getAccountArray = async () => {
    var web3_ = getWeb3()
    var accounts = await web3_.eth.getAccounts()
    return accounts
}

export const getETHBalance = async (acc) => {
    var web3_ = getWeb3()
    var bal_ = await web3_.eth.getBalance(acc)
    return bal_
}

export const getWalletData = async () => {
    var account = await getAccountArray()
    var address = account[0]
    var accountBalance = await getETHBalance(address)
    var tokens = []
    var accountData = {
        'address': address,
        'tokens': tokens
    }
    tokens.push({
        'symbol':'ETH',
        'name':'Etherum',
        'balance': accountBalance,
        'address': '0x0000000000000000000000000000000000000000'
    })
    return accountData
}

