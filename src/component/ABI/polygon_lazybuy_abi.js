export const polygon_lazybuy_abi = [
  {
    inputs: [
      { internalType: "address", name: "_cinestarToken", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "cinestarToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "lazy_buynft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
