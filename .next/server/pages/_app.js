/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apollo-client.ts":
/*!**************************!*\
  !*** ./apollo-client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// To work with other networks, change the uri to any Dandelion GraphQL instance:\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://graphql-api-iohk-preprod.gimbalabs.io/\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUU3RCxpRkFBaUY7QUFDakYsTUFBTUUsTUFBTSxHQUFHLElBQUlGLHdEQUFZLENBQUM7SUFDNUJHLEdBQUcsRUFBRSxnREFBZ0Q7SUFDckRDLEtBQUssRUFBRSxJQUFJSCx5REFBYSxFQUFFO0NBQzdCLENBQUM7QUFFRixpRUFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vYXBvbGxvLWNsaWVudC50cz8zOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG4vLyBUbyB3b3JrIHdpdGggb3RoZXIgbmV0d29ya3MsIGNoYW5nZSB0aGUgdXJpIHRvIGFueSBEYW5kZWxpb24gR3JhcGhRTCBpbnN0YW5jZTpcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogXCJodHRwczovL2dyYXBocWwtYXBpLWlvaGstcHJlcHJvZC5naW1iYWxhYnMuaW8vXCIsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo-client.ts\n");

/***/ }),

/***/ "./contexts/wallet.tsx":
/*!*****************************!*\
  !*** ./contexts/wallet.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WalletProvider\": () => (/* binding */ WalletProvider),\n/* harmony export */   \"default\": () => (/* binding */ useWallet)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @martifylabs/mesh */ \"@martifylabs/mesh\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__]);\n_martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    wallet: {},\n    connecting: false,\n    refreshing: false,\n    walletNameConnected: \"\",\n    walletConnected: false,\n    connectWallet: async (walletName)=>{},\n    refreshBalance: async ()=>{},\n    handlockContrat: async ()=>{},\n    handSendAda: async ()=>{},\n    connectedAddress: \"\",\n    formattedAddress: \"\",\n    currentNetwork: \"\",\n    currentbalance: \"\",\n    currentERROR: \"\"\n});\nconst WalletProvider = ({ children  })=>{\n    const { 0: currentbalance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: currentUtxos , 1: setUtxos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: wallet , 1: setWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: walletConnected , 1: setWalletConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: connecting , 1: setConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: refreshing , 1: setRefreshing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: walletNameConnected , 1: setWalletNameConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: connectedAddress , 1: setConnectedAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: formattedAddress , 1: setFormattedAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentNetwork , 1: setCurrentNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: currentChangeAddress , 1: setChangeAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentloveLace , 1: setloveLace  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentbuild , 1: setBuild  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentsignTx , 1: setSignTx  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentSubmitTx , 1: setSubmitTx  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currenttxHash , 1: settxHash  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: currentERROR , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentConnect , 1: setConnect  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const tokensTolock = [\n        {\n            unit: \"64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e\",\n            quantity: \"1\"\n        }\n    ];\n    const handSendAda = async ()=>{\n        try {\n            if (walletConnected) {\n                const transaction = new _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__.Transaction({\n                    initiator: wallet\n                }).sendLovelace(\"addr_test1qrqasyjrvff5skkxyf49t6feq0597exxzwu7sdszl89r64nsuygajm0vp4m29g85nr86sedq6rg4kmzt9c2ghmqld4ask5tdam\", \"5000000\");\n                const build = await transaction.build();\n                const sign = await wallet.signTx(build);\n                const hash = await wallet.submitTx(sign);\n                console.log(hash);\n            } else {\n                alert(\"please connect a wallet\");\n            }\n        } catch (error) {\n            alert(error.any);\n        }\n    };\n    const handlockContrat = async ()=>{\n        setConnecting(true);\n        if (walletConnected) {\n            try {\n                const netWork = await wallet.getNetworkId();\n                const tx = new _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__.Transaction({\n                    initiator: wallet,\n                    parameters: {\n                        epoch: 0,\n                        coinsPerUTxOSize: \"34482\",\n                        priceMem: 0.0577,\n                        priceStep: 0.0000721,\n                        minFeeA: 44,\n                        minFeeB: 155381,\n                        keyDeposit: \"2000000\",\n                        maxTxSize: 16384,\n                        maxValSize: \"5000\",\n                        poolDeposit: \"500000000\",\n                        maxCollateralInputs: 3,\n                        maxBlockSize: 65536,\n                        collateralPercent: 150,\n                        maxBlockHeaderSize: 1100,\n                        minPoolCost: \"0\",\n                        maxTxExMem: \"10000000\",\n                        maxTxExSteps: \"10000000000\",\n                        maxBlockExMem: \"50000000\",\n                        maxBlockExSteps: \"40000000000\"\n                    },\n                    era: \"ALONZO\"\n                }).sendAssets(\"addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8\", tokensTolock, {\n                    datum: \"supersecret\"\n                });\n                const unsignedTx = await tx.build();\n                const signedTx = await wallet.signTx(unsignedTx);\n                const txHash = await wallet.submitTx(signedTx);\n                settxHash(txHash);\n                setConnecting(false);\n            } catch (error) {\n                setError(error);\n            }\n        } else {\n            setConnect(false);\n        }\n    };\n    const connectWallet = async (walletName)=>{\n        setConnecting(true);\n        const _wallet = await _martifylabs_mesh__WEBPACK_IMPORTED_MODULE_2__.BrowserWallet.enable(walletName);\n        const _address = await _wallet.getUsedAddresses();\n        const _network = await _wallet.getNetworkId();\n        if (_wallet) {\n            setWallet(_wallet);\n            setWalletNameConnected(walletName);\n            setWalletConnected(true);\n            const walletAddress = _address[0];\n            setConnectedAddress(walletAddress);\n            setFormattedAddress(`${walletAddress.substring(0, 12)}...${walletAddress.substring(walletAddress.length - 8)}`);\n            if (_network == 0) setCurrentNetwork(\"Testnet\");\n            if (_network == 1) setCurrentNetwork(\"Mainnet\");\n        }\n        setConnecting(false);\n    };\n    const refreshBalance = async ()=>{\n        setRefreshing(true);\n        if (wallet) {\n            const _lovelace = await wallet.getLovelace();\n            const _balance = await wallet.getBalance();\n            setBalance(_balance[0]);\n            setloveLace(_lovelace);\n        }\n        setRefreshing(false);\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            wallet,\n            connecting,\n            walletNameConnected,\n            walletConnected,\n            connectWallet,\n            refreshBalance,\n            handlockContrat,\n            handSendAda,\n            connectedAddress,\n            formattedAddress,\n            currentNetwork,\n            currentbalance,\n            currenttxHash,\n            currentConnect,\n            currentERROR\n        }), [\n        wallet,\n        walletConnected,\n        connecting,\n        walletNameConnected,\n        connectedAddress,\n        currentNetwork,\n        currentbalance,\n        currenttxHash,\n        currentConnect,\n        currentERROR\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletContext.Provider, {\n        value: memoedValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yannick/Sites/ekival/ekival_client/contexts/wallet.tsx\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useWallet() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WalletContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFDekIsQ0FBQztRQUNEMUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNOEUsV0FBVyxHQUFHekcsOENBQU8sQ0FDekIsSUFBTztZQUNMSSxNQUFNO1lBQ05DLFVBQVU7WUFDVkUsbUJBQW1CO1lBQ25CQyxlQUFlO1lBQ2ZDLGFBQWE7WUFDYkUsY0FBYztZQUNkQyxlQUFlO1lBQ2ZDLFdBQVc7WUFDWEMsZ0JBQWdCO1lBQ2hCQyxnQkFBZ0I7WUFDaEJDLGNBQWM7WUFDZEMsY0FBYztZQUNkMEIsYUFBYTtZQUNiRyxjQUFjO1lBQ2Q1QixZQUFZO1NBRWIsR0FDRDtRQUFDZCxNQUFNO1FBQUVJLGVBQWU7UUFBRUgsVUFBVTtRQUFFRSxtQkFBbUI7UUFBRU8sZ0JBQWdCO1FBQUVFLGNBQWM7UUFBRUMsY0FBYztRQUFFMEIsYUFBYTtRQUFFRyxjQUFjO1FBQUU1QixZQUFZO0tBQUMsQ0FDMUo7SUFFRCxxQkFDRSw4REFBQ2YsYUFBYSxDQUFDdUcsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLFdBQVc7a0JBQ3ZDckYsUUFBUTs7Ozs7aUJBQ2MsQ0FDekI7QUFDSixDQUFDLENBQUM7QUFFYSxTQUFTd0YsU0FBUyxHQUFHO0lBQ2xDLE9BQU83RyxpREFBVSxDQUFDSSxhQUFhLENBQUMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29udGV4dHMvd2FsbGV0LnRzeD8xZTc0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VDb250ZXh0LFxuICB1c2VNZW1vLFxuICBSZWFjdE5vZGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXNzZXQsIEJyb3dzZXJXYWxsZXQsIFVUeE8sIFRyYW5zYWN0aW9uIH0gZnJvbSBcIkBtYXJ0aWZ5bGFicy9tZXNoXCI7XG5cbmNvbnN0IFdhbGxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgd2FsbGV0OiB7fSBhcyBCcm93c2VyV2FsbGV0LFxuICBjb25uZWN0aW5nOiBmYWxzZSxcbiAgcmVmcmVzaGluZzogZmFsc2UsXG4gIHdhbGxldE5hbWVDb25uZWN0ZWQ6ICcnLFxuICB3YWxsZXRDb25uZWN0ZWQ6IGZhbHNlLFxuICBjb25uZWN0V2FsbGV0OiBhc3luYyAod2FsbGV0TmFtZTogc3RyaW5nKSA9PiB7IH0sXG4gIHJlZnJlc2hCYWxhbmNlOiBhc3luYyAoKSA9PiB7IH0sXG4gIGhhbmRsb2NrQ29udHJhdDogYXN5bmMgKCkgPT4geyB9LFxuICBoYW5kU2VuZEFkYTogYXN5bmMgKCkgPT4geyB9LFxuICBjb25uZWN0ZWRBZGRyZXNzOiAnJyxcbiAgZm9ybWF0dGVkQWRkcmVzczogJycsXG4gIGN1cnJlbnROZXR3b3JrOiAnJyxcbiAgY3VycmVudGJhbGFuY2U6ICcnLFxuICBjdXJyZW50RVJST1I6ICcnXG59KTtcblxuXG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xuXG4gIGNvbnN0IFtjdXJyZW50YmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZTxBc3NldD4oKTtcblxuICBjb25zdCBbY3VycmVudFV0eG9zLCBzZXRVdHhvc10gPSB1c2VTdGF0ZTxVVHhPPih7fSBhcyBVVHhPKVxuICBjb25zdCBbd2FsbGV0LCBzZXRXYWxsZXRdID0gdXNlU3RhdGU8QnJvd3NlcldhbGxldD4oe30gYXMgQnJvd3NlcldhbGxldCk7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjb25uZWN0aW5nLCBzZXRDb25uZWN0aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3JlZnJlc2hpbmcsIHNldFJlZnJlc2hpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbd2FsbGV0TmFtZUNvbm5lY3RlZCwgc2V0V2FsbGV0TmFtZUNvbm5lY3RlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbY29ubmVjdGVkQWRkcmVzcywgc2V0Q29ubmVjdGVkQWRkcmVzc10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2Zvcm1hdHRlZEFkZHJlc3MsIHNldEZvcm1hdHRlZEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtjdXJyZW50TmV0d29yaywgc2V0Q3VycmVudE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IFtjdXJyZW50Q2hhbmdlQWRkcmVzcywgc2V0Q2hhbmdlQWRkcmVzc10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuXG4gIGNvbnN0IFtjdXJyZW50bG92ZUxhY2UsIHNldGxvdmVMYWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IFtjdXJyZW50YnVpbGQsIHNldEJ1aWxkXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbY3VycmVudHNpZ25UeCwgc2V0U2lnblR4XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbY3VycmVudFN1Ym1pdFR4LCBzZXRTdWJtaXRUeF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2N1cnJlbnR0eEhhc2gsIHNldHR4SGFzaF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRFUlJPUiwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oJycpXG4gIGNvbnN0IFtjdXJyZW50Q29ubmVjdCwgc2V0Q29ubmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgdG9rZW5zVG9sb2NrID0gW1xuICAgIHtcbiAgICAgIHVuaXQ6IFwiNjRhZjI4NmUyYWQwZGY0ZGUyZTdkZTE1ZjhmZjViM2QyN2ZhZWNmNGFiMjc1NzA1NmQ4NjBhNDI0ZDY1NzM2ODU0NmY2YjY1NmVcIixcbiAgICAgIHF1YW50aXR5OiBcIjFcIixcbiAgICB9XG4gIF1cbiAgY29uc3QgaGFuZFNlbmRBZGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oeyBpbml0aWF0b3I6IHdhbGxldCB9KS5zZW5kTG92ZWxhY2UoXG4gICAgICAgICAgXCJhZGRyX3Rlc3QxcXJxYXN5anJ2ZmY1c2treHlmNDl0NmZlcTA1OTdleHh6d3U3c2Rzemw4OXI2NG5zdXlnYWptMHZwNG0yOWc4NW5yODZzZWRxNnJnNGttenQ5YzJnaG1xbGQ0YXNrNXRkYW1cIiwgXCI1MDAwMDAwXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYnVpbGQgPSBhd2FpdCB0cmFuc2FjdGlvbi5idWlsZCgpO1xuICAgICAgICBjb25zdCBzaWduID0gYXdhaXQgd2FsbGV0LnNpZ25UeChidWlsZCk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB3YWxsZXQuc3VibWl0VHgoc2lnbilcbiAgICAgY29uc29sZS5sb2coaGFzaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcInBsZWFzZSBjb25uZWN0IGEgd2FsbGV0XCIpXG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcbiAgICAgIGFsZXJ0KGVycm9yLmFueSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbG9ja0NvbnRyYXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICBpZiAod2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXRXb3JrID0gYXdhaXQgd2FsbGV0LmdldE5ldHdvcmtJZCgpO1xuXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICBpbml0aWF0b3I6IHdhbGxldCwgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgZXBvY2g6IDAsXG4gICAgICAgICAgICBjb2luc1BlclVUeE9TaXplOiAnMzQ0ODInLFxuICAgICAgICAgICAgcHJpY2VNZW06IDAuMDU3NyxcbiAgICAgICAgICAgIHByaWNlU3RlcDogMC4wMDAwNzIxLFxuICAgICAgICAgICAgbWluRmVlQTogNDQsXG4gICAgICAgICAgICBtaW5GZWVCOiAxNTUzODEsXG4gICAgICAgICAgICBrZXlEZXBvc2l0OiAnMjAwMDAwMCcsXG4gICAgICAgICAgICBtYXhUeFNpemU6IDE2Mzg0LFxuICAgICAgICAgICAgbWF4VmFsU2l6ZTogJzUwMDAnLFxuICAgICAgICAgICAgcG9vbERlcG9zaXQ6ICc1MDAwMDAwMDAnLFxuICAgICAgICAgICAgbWF4Q29sbGF0ZXJhbElucHV0czogMyxcbiAgICAgICAgICAgIG1heEJsb2NrU2l6ZTogNjU1MzYsXG4gICAgICAgICAgICBjb2xsYXRlcmFsUGVyY2VudDogMTUwLFxuICAgICAgICAgICAgbWF4QmxvY2tIZWFkZXJTaXplOiAxMTAwLFxuICAgICAgICAgICAgbWluUG9vbENvc3Q6ICcwJyxcbiAgICAgICAgICAgIG1heFR4RXhNZW06ICcxMDAwMDAwMCcsXG4gICAgICAgICAgICBtYXhUeEV4U3RlcHM6ICcxMDAwMDAwMDAwMCcsXG4gICAgICAgICAgICBtYXhCbG9ja0V4TWVtOiAnNTAwMDAwMDAnLFxuICAgICAgICAgICAgbWF4QmxvY2tFeFN0ZXBzOiAnNDAwMDAwMDAwMDAnLFxuICAgICAgICAgIH0sIGVyYTogJ0FMT05aTydcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2VuZEFzc2V0cyhcbiAgICAgICAgICAgIFwiYWRkcl90ZXN0MXdwbmx4djJ4djlhOXVjdm52enFha3dlcHpsOWx0eDdqemdtNTNhdjJlOW5jdjRzeXNlbW04XCIsXG4gICAgICAgICAgICB0b2tlbnNUb2xvY2ssXG4gICAgICAgICAgICB7IGRhdHVtOiAnc3VwZXJzZWNyZXQnIH0pO1xuXG4gICAgICAgIGNvbnN0IHVuc2lnbmVkVHggPSBhd2FpdCB0eC5idWlsZCgpO1xuICAgICAgICBjb25zdCBzaWduZWRUeCA9IGF3YWl0IHdhbGxldC5zaWduVHgodW5zaWduZWRUeCk7XG4gICAgICAgIGNvbnN0IHR4SGFzaCA9IGF3YWl0IHdhbGxldC5zdWJtaXRUeChzaWduZWRUeCk7XG4gICAgICAgIHNldHR4SGFzaCh0eEhhc2gpO1xuICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDb25uZWN0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKHdhbGxldE5hbWU6IHN0cmluZykgPT4ge1xuICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgY29uc3QgX3dhbGxldCA9IGF3YWl0IEJyb3dzZXJXYWxsZXQuZW5hYmxlKHdhbGxldE5hbWUpO1xuICAgIGNvbnN0IF9hZGRyZXNzID0gYXdhaXQgX3dhbGxldC5nZXRVc2VkQWRkcmVzc2VzKCk7XG4gICAgY29uc3QgX25ldHdvcmsgPSBhd2FpdCBfd2FsbGV0LmdldE5ldHdvcmtJZCgpO1xuXG4gICAgaWYgKF93YWxsZXQpIHtcbiAgICAgIHNldFdhbGxldChfd2FsbGV0KTtcbiAgICAgIHNldFdhbGxldE5hbWVDb25uZWN0ZWQod2FsbGV0TmFtZSk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgICBjb25zdCB3YWxsZXRBZGRyZXNzID0gX2FkZHJlc3NbMF1cbiAgICAgIHNldENvbm5lY3RlZEFkZHJlc3Mod2FsbGV0QWRkcmVzcyk7XG4gICAgICBzZXRGb3JtYXR0ZWRBZGRyZXNzKGAke3dhbGxldEFkZHJlc3Muc3Vic3RyaW5nKDAsIDEyKX0uLi4ke3dhbGxldEFkZHJlc3Muc3Vic3RyaW5nKHdhbGxldEFkZHJlc3MubGVuZ3RoIC0gOCl9YClcblxuICAgICAgaWYgKF9uZXR3b3JrID09IDApIHNldEN1cnJlbnROZXR3b3JrKFwiVGVzdG5ldFwiKTtcbiAgICAgIGlmIChfbmV0d29yayA9PSAxKSBzZXRDdXJyZW50TmV0d29yayhcIk1haW5uZXRcIik7XG5cbiAgICB9XG4gICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVmcmVzaEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UmVmcmVzaGluZyh0cnVlKVxuICAgIGlmICh3YWxsZXQpIHtcbiAgICAgIGNvbnN0IF9sb3ZlbGFjZSA9IGF3YWl0IHdhbGxldC5nZXRMb3ZlbGFjZSgpO1xuICAgICAgY29uc3QgX2JhbGFuY2UgPSBhd2FpdCB3YWxsZXQuZ2V0QmFsYW5jZSgpO1xuICAgICAgc2V0QmFsYW5jZShfYmFsYW5jZVswXSk7XG4gICAgICBzZXRsb3ZlTGFjZShfbG92ZWxhY2UpO1xuICAgIH1cbiAgICBzZXRSZWZyZXNoaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBtZW1vZWRWYWx1ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHdhbGxldCxcbiAgICAgIGNvbm5lY3RpbmcsXG4gICAgICB3YWxsZXROYW1lQ29ubmVjdGVkLFxuICAgICAgd2FsbGV0Q29ubmVjdGVkLFxuICAgICAgY29ubmVjdFdhbGxldCxcbiAgICAgIHJlZnJlc2hCYWxhbmNlLFxuICAgICAgaGFuZGxvY2tDb250cmF0LFxuICAgICAgaGFuZFNlbmRBZGEsXG4gICAgICBjb25uZWN0ZWRBZGRyZXNzLFxuICAgICAgZm9ybWF0dGVkQWRkcmVzcyxcbiAgICAgIGN1cnJlbnROZXR3b3JrLFxuICAgICAgY3VycmVudGJhbGFuY2UsXG4gICAgICBjdXJyZW50dHhIYXNoLFxuICAgICAgY3VycmVudENvbm5lY3QsXG4gICAgICBjdXJyZW50RVJST1JcblxuICAgIH0pLFxuICAgIFt3YWxsZXQsIHdhbGxldENvbm5lY3RlZCwgY29ubmVjdGluZywgd2FsbGV0TmFtZUNvbm5lY3RlZCwgY29ubmVjdGVkQWRkcmVzcywgY3VycmVudE5ldHdvcmssIGN1cnJlbnRiYWxhbmNlLCBjdXJyZW50dHhIYXNoLCBjdXJyZW50Q29ubmVjdCwgY3VycmVudEVSUk9SXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFdhbGxldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbW9lZFZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dhbGxldENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXYWxsZXQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsIkJyb3dzZXJXYWxsZXQiLCJUcmFuc2FjdGlvbiIsIldhbGxldENvbnRleHQiLCJ3YWxsZXQiLCJjb25uZWN0aW5nIiwicmVmcmVzaGluZyIsIndhbGxldE5hbWVDb25uZWN0ZWQiLCJ3YWxsZXRDb25uZWN0ZWQiLCJjb25uZWN0V2FsbGV0Iiwid2FsbGV0TmFtZSIsInJlZnJlc2hCYWxhbmNlIiwiaGFuZGxvY2tDb250cmF0IiwiaGFuZFNlbmRBZGEiLCJjb25uZWN0ZWRBZGRyZXNzIiwiZm9ybWF0dGVkQWRkcmVzcyIsImN1cnJlbnROZXR3b3JrIiwiY3VycmVudGJhbGFuY2UiLCJjdXJyZW50RVJST1IiLCJXYWxsZXRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0QmFsYW5jZSIsImN1cnJlbnRVdHhvcyIsInNldFV0eG9zIiwic2V0V2FsbGV0Iiwic2V0V2FsbGV0Q29ubmVjdGVkIiwic2V0Q29ubmVjdGluZyIsInNldFJlZnJlc2hpbmciLCJzZXRXYWxsZXROYW1lQ29ubmVjdGVkIiwic2V0Q29ubmVjdGVkQWRkcmVzcyIsInNldEZvcm1hdHRlZEFkZHJlc3MiLCJzZXRDdXJyZW50TmV0d29yayIsInVuZGVmaW5lZCIsImN1cnJlbnRDaGFuZ2VBZGRyZXNzIiwic2V0Q2hhbmdlQWRkcmVzcyIsImN1cnJlbnRsb3ZlTGFjZSIsInNldGxvdmVMYWNlIiwiY3VycmVudGJ1aWxkIiwic2V0QnVpbGQiLCJjdXJyZW50c2lnblR4Iiwic2V0U2lnblR4IiwiY3VycmVudFN1Ym1pdFR4Iiwic2V0U3VibWl0VHgiLCJjdXJyZW50dHhIYXNoIiwic2V0dHhIYXNoIiwic2V0RXJyb3IiLCJjdXJyZW50Q29ubmVjdCIsInNldENvbm5lY3QiLCJ0b2tlbnNUb2xvY2siLCJ1bml0IiwicXVhbnRpdHkiLCJ0cmFuc2FjdGlvbiIsImluaXRpYXRvciIsInNlbmRMb3ZlbGFjZSIsImJ1aWxkIiwic2lnbiIsInNpZ25UeCIsImhhc2giLCJzdWJtaXRUeCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImVycm9yIiwiYW55IiwibmV0V29yayIsImdldE5ldHdvcmtJZCIsInR4IiwicGFyYW1ldGVycyIsImVwb2NoIiwiY29pbnNQZXJVVHhPU2l6ZSIsInByaWNlTWVtIiwicHJpY2VTdGVwIiwibWluRmVlQSIsIm1pbkZlZUIiLCJrZXlEZXBvc2l0IiwibWF4VHhTaXplIiwibWF4VmFsU2l6ZSIsInBvb2xEZXBvc2l0IiwibWF4Q29sbGF0ZXJhbElucHV0cyIsIm1heEJsb2NrU2l6ZSIsImNvbGxhdGVyYWxQZXJjZW50IiwibWF4QmxvY2tIZWFkZXJTaXplIiwibWluUG9vbENvc3QiLCJtYXhUeEV4TWVtIiwibWF4VHhFeFN0ZXBzIiwibWF4QmxvY2tFeE1lbSIsIm1heEJsb2NrRXhTdGVwcyIsImVyYSIsInNlbmRBc3NldHMiLCJkYXR1bSIsInVuc2lnbmVkVHgiLCJzaWduZWRUeCIsInR4SGFzaCIsIl93YWxsZXQiLCJlbmFibGUiLCJfYWRkcmVzcyIsImdldFVzZWRBZGRyZXNzZXMiLCJfbmV0d29yayIsIndhbGxldEFkZHJlc3MiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJfbG92ZWxhY2UiLCJnZXRMb3ZlbGFjZSIsIl9iYWxhbmNlIiwiZ2V0QmFsYW5jZSIsIm1lbW9lZFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/wallet.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.ts\");\n/* harmony import */ var _contexts_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/wallet */ \"./contexts/wallet.tsx\");\n/* harmony import */ var _styles_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/css/main.css */ \"./styles/css/main.css\");\n/* harmony import */ var _styles_css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css_main_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_css_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/css/theme.css */ \"./styles/css/theme.css\");\n/* harmony import */ var _styles_css_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sass/app.scss */ \"./styles/sass/app.scss\");\n/* harmony import */ var _styles_sass_app_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_sass_balance_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/sass/balance.scss */ \"./styles/sass/balance.scss\");\n/* harmony import */ var _styles_sass_balance_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_balance_scss__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__]);\n_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_wallet__WEBPACK_IMPORTED_MODULE_3__.WalletProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/yannick/Sites/ekival/ekival_client/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yannick/Sites/ekival/ekival_client/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yannick/Sites/ekival/ekival_client/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNnRDtBQUNYO0FBQ2U7QUFDcEI7QUFDQztBQUNBO0FBQ0k7QUFHckMsU0FBU0csS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNMLDBEQUFjO1FBQUNDLE1BQU0sRUFBRUEsc0RBQU07a0JBQzVCLDRFQUFDQyw0REFBYztzQkFDYiw0RUFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2Q7Ozs7O1lBQ0QsQ0FDbEI7QUFDSCxDQUFDO0FBQ0QsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9hcG9sbG8tY2xpZW50J1xuaW1wb3J0IHsgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy93YWxsZXQnO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2Nzcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2Nzcy90aGVtZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zYXNzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc2Fzcy9iYWxhbmNlLnNjc3NcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxXYWxsZXRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICA8L1dhbGxldFByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJXYWxsZXRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/css/main.css":
/*!*****************************!*\
  !*** ./styles/css/main.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/css/theme.css":
/*!******************************!*\
  !*** ./styles/css/theme.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sass/app.scss":
/*!******************************!*\
  !*** ./styles/sass/app.scss ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sass/balance.scss":
/*!**********************************!*\
  !*** ./styles/sass/balance.scss ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@martifylabs/mesh":
/*!************************************!*\
  !*** external "@martifylabs/mesh" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@martifylabs/mesh");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();