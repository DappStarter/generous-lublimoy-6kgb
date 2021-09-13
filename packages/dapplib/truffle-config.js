require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember modify give globe forget ten'; 
let testAccounts = [
"0xa03232d4e9bbc82fa105f856ba07d04d58a1b9422f6cd6ae61c4d462f9a07385",
"0xbb06f7c37b56345f31652524cdf01cc6c928d31b22ab38940601bc4fa1327bda",
"0xc7b52769c6c8ce0de19f312fc4d42326a9d61a563e6d75fd41b49796c835bd70",
"0x43bb6ec539e88993dca851945731b101b3da4dbc704ef70ce8c96501e4ec9545",
"0x566e3d024ace16c3f4acc9bddc466d8248e1ef41040054187d207eb78823a1d1",
"0x5bbb50315ae4a1faf36145ffd3cb637a21c7a727fcb6e40ab0489d2da5bddf0d",
"0xf2ba2502908a78bb2ff27dc4a9d457b8d97aaa40571240fcaa5a4e153a5bc1ce",
"0xb64351d234eaa9407e5f0b345e85c02dc2d87bad342f458217c5ec85d8b98c06",
"0xf04370bfc9f41c08e9a03f69cbc912b0e6ff2139a282ee8fbb63b6e4d2c973bf",
"0x901e08a408a46590c07dccd534a7c1945fa67cfe456a134fe7bf15c8a4c4609e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

