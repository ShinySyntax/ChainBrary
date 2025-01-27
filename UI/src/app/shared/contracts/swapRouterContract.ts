import { NetworkChainId } from '@chainbrary/web3-login';
import { AbiItem } from 'web3-utils';
import { IContract } from '../interfaces';
import { environment } from '../../../environments/environment';
import { BaseContract } from './baseContract';

export interface SwapRouterObjectResponse {
  0: bigint;
  1: bigint;
}

export class SwapRouterContract extends BaseContract {
  constructor(public chainId: NetworkChainId) {
    super();
  }

  getAddress(): string {
    const contractLink: IContract = environment.contracts.swapRouter.contracts.find(
      (contract: IContract) => this.chainId === contract.chainId
    ) as IContract;
    return contractLink.address;
  }

  getAbi(): (AbiItem | object)[] {
    return [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        inputs: [],
        name: 'InvalidInitialization',
        type: 'error'
      },
      {
        inputs: [],
        name: 'NotInitializing',
        type: 'error'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          }
        ],
        name: 'OwnableInvalidOwner',
        type: 'error'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'OwnableUnauthorizedAccount',
        type: 'error'
      },
      {
        inputs: [],
        name: 'ReentrancyGuardReentrantCall',
        type: 'error'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address'
          }
        ],
        name: 'SafeERC20FailedOperation',
        type: 'error'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'messageId',
            type: 'bytes32'
          }
        ],
        name: 'CrossChainSwapInitiated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'receiver',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'messageId',
            type: 'bytes32'
          }
        ],
        name: 'CrossChainSwapReceived',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'version',
            type: 'uint64'
          }
        ],
        name: 'Initialized',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address'
          }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'messageId',
                type: 'bytes32'
              },
              {
                internalType: 'uint64',
                name: 'sourceChainSelector',
                type: 'uint64'
              },
              {
                internalType: 'bytes',
                name: 'sender',
                type: 'bytes'
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address'
                  },
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256'
                  }
                ],
                internalType: 'struct Client.EVMTokenAmount[]',
                name: 'destTokenAmounts',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct Client.Any2EVMMessage',
            name: 'message',
            type: 'tuple'
          }
        ],
        name: 'ccipReceive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'ccipRouter',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: 'destinationChainSelector',
            type: 'uint64'
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]'
          },
          {
            internalType: 'uint24[]',
            name: 'fees',
            type: 'uint24[]'
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address'
          }
        ],
        name: 'crossChainSwap',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [
          {
            internalType: 'contract ChainbrarySwapFactory',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256'
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]'
          },
          {
            internalType: 'uint24[]',
            name: 'fees',
            type: 'uint24[]'
          }
        ],
        name: 'getAmountsOut',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_factory',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_ccipRouter',
            type: 'address'
          }
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256'
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]'
          },
          {
            internalType: 'uint24[]',
            name: 'fees',
            type: 'uint24[]'
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address'
          }
        ],
        name: 'swapExactTokensForTokens',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address'
          }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ];
  }
}
