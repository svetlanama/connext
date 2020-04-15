import React, { Component }  from 'react'
//const Web3 = require("web3");
import { getConnextClient } from "connext/dist/Connext.js"
import Web3 from "web3"
//import * as Connext from 'connext'


export default class ConnextView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			customWeb3: null,
			tokenContract: null,
			tokenAddress: null,
			connext: null,
			address: "0x0949d494A5Ca5AFdbd2881D58b3804D9382a48dB",
			hubUrl: null,
			rpcUrl: null
		}
		//initWeb3()


	}

	async testConnext() {

		// const opts = {
		//   web3: customWeb3,
		//   hubUrl, // in dev-mode: http://localhost:8080,
		//   user: address,
		//   origin: "localhost" // TODO: what should this be
		// };

		const opts = {
			web3Provider: window.web3,
			connextProvider: window.connext
		}
		console.log("test window.web3: ", window.web3)
		//let connext = await getConnextClient(opts)
	}

	// This is typescript code
	//componentDidMount(): void { /* do something */ }

	async componentDidMount(): Promise<void> {
		//await this.testConnext()
		await this.setWeb3();
		await this.setConnext();
	}


	setWeb3(rpc) {
		const rpcUrl = 'https://rinkeby.hub.connext.network/api/eth'
		const hubUrl = 'https://rinkeby.hub.connext.network/api/hub'
		//const rpcUrl = 'http://localhost:8080/api/eth' //overrides.localEth //|| `${publicUrl}/api/local/eth`;
		//const hubUrl = 'http://localhost:8080/api/hub'//overrides.localHub //|| `${publicUrl}/api/local/hub`;

		// Ask permission to view accounts
		console.log(`  - before window.web3: `, window.web3);
		if (window.ethereum) {
			console.log(" HERE>>>>")
			window.web3 = new Web3(window.ethereum);
			//windowId = await window.web3.eth.net.getId();
		}
		console.log(`  - after window.web3: `, window.web3);
		const customWeb3 = window.web3
		console.log(`  - window.ethereum:  `, window.ethereum);
		console.log(`  - customWeb3: `, customWeb3);
		console.log(`  - hubUrl: ${hubUrl}`);
		console.log(`  - rpcUrl: ${rpcUrl}`);
		this.setState({ customWeb3, hubUrl, rpcUrl });
	}

	async setConnext() {
		const { address, customWeb3, hubUrl } = this.state;

		//let customWeb3 = window.web3
		console.log(`  - setConnext customWeb3: `, customWeb3);
		console.log(`  - hubUrl: ${hubUrl}`);
		console.log(`  - user: ${address}`);


		// const opts = {
		// 	web3: customWeb3,
		// 	hubUrl: hubUrl, // in dev-mode: http://localhost:8080,
		// 	user: address,
		// 	origin: "localhost", // TODO: what should this be
		// }

		const opts: ConnextOptions = {
			connextProvider: window.connext,
			web3: window.web3
		}

		console.log(`opts:  `, opts);
		// *** Instantiate the connext client ***
		const connext = await getConnextClient(opts);
		// console.log(`Successfully set up connext! Connext config:`);
		// console.log(`  - tokenAddress: ${connext.opts.tokenAddress}`);
		// console.log(`  - hubAddress: ${connext.opts.hubAddress}`);
		// console.log(`  - contractAddress: ${connext.opts.contractAddress}`);
		// console.log(`  - ethNetworkId: ${connext.opts.ethNetworkId}`);
	}


	render() {

		return <div>ConnextView</div>
	}
}

/*async initWeb3() {

	const hubUrl="https://rinkeby.hub.connext.network/api/hub"
	const mnemonic="load pyramid shove bomb bounce photo critic blouse mind brother vote coyote"

	const connextOptions: ConnextOptions = {
		hubUrl,
		mnemonic, //OR mnemonic
	}
	console.log("connextOptions: ", connextOptions)
	// const connextOptions = {
	// 	connextProvider: window.connext,
	// 	web3: window.web3
	// }

	const opts = {
	  web3: customWeb3,
	  hubUrl, // in dev-mode: http://localhost:8080,
	  user: address,
	  origin: "localhost" // TODO: what should this be
	};

	// *** Instantiate the connext client ***
	const connext = await getConnextClient(opts);
	console.log(`Successfully set up connext! Connext config:`);
	console.log(`  - tokenAddress: ${connext.opts.tokenAddress}`);
	console.log(`  - hubAddress: ${connext.opts.hubAddress}`);
	console.log(`  - contractAddress: ${connext.opts.contractAddress}`);
	console.log(`  - ethNetworkId: ${connext.opts.ethNetworkId}`);
	connext.start() //starts polling for updates

	//const connext = getConnextClient //(connextOptions)
	//connext.start() //starts polling for updates

	// const connext = getConnextClient({
	// 	web3Provider: window.web3,
	// 	connextProvider: window.connext
	// })

	//connext.deposit(1.0);
	console.log("connext: ", connext)

	// const connext = Connext.getConnextClient({
	// 	web3Provider: window.web3,
	// 	connextProvider: window.connext
	// })



}*/
