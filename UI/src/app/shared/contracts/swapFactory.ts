import { NetworkChainId } from '@chainbrary/web3-login';
import { AbiItem } from 'web3-utils';
import { IContract } from '../interfaces';
import { environment } from '../../../environments/environment';
import { BaseContract } from './baseContract';

export class SwapFactoryContract extends BaseContract {
  constructor(public chainId: NetworkChainId) {
    super();
  }

  get fee(): string {
    return '500';
  }

  getAddress(): string {
    const contractLink: IContract = environment.contracts.swapFactory.contracts.find(
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
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'tokenA',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'tokenB',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24'
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'pool',
            type: 'address'
          }
        ],
        name: 'PoolCreated',
        type: 'event'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'tokenA',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'tokenB',
            type: 'address'
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24'
          }
        ],
        name: 'createPool',
        outputs: [
          {
            internalType: 'address',
            name: 'pool',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        name: 'feeTiers',
        outputs: [
          {
            internalType: 'uint24',
            name: '',
            type: 'uint24'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '',
            type: 'address'
          },
          {
            internalType: 'uint24',
            name: '',
            type: 'uint24'
          }
        ],
        name: 'getPool',
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
