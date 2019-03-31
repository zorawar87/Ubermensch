var contractAddress = "0xe28ecdd5a4ad5d3e83fbcf838461efbfd57e03fb";
var debugging;
var abi = 
    [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "addGoal",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_wager",
				"type": "uint256"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_goals",
				"type": "uint256[]"
			},
			{
				"name": "_lossDonationPercent",
				"type": "uint256"
			}
		],
		"name": "addTheme",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getGoalCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getThemeCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "goals",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "dateUNIX",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "int256"
			},
			{
				"name": "proof_URL",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "themes",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "wager",
				"type": "uint256"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "lossDonationPercent",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
