/// <reference types="cypress" />

import '@angular/compiler';
import { INetworkDetail, NetworkChainId } from '@chainbrary/web3-login';
import { getNetworkDetailList, injectMetaMaskStub } from '../../injectors/metamask-stub';

describe('Metamask Injection', () => {
  it('MetaMask injection started', () => {
    const WALLET_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
    const SIGNED_MESSAGE = '...';

    // Inject MetaMask
    injectMetaMaskStub(WALLET_ADDRESS, SIGNED_MESSAGE, NetworkChainId.ETHEREUM);

    cy.visit(`${Cypress.env('baseUrl')}/`);

    // Check if MetaMask is injected
    cy.window().its('ethereum.isMetaMask').should('be.true');
    const networkFound: INetworkDetail = getNetworkDetailList().find(
      (network: INetworkDetail) => network.chainId === NetworkChainId.ETHEREUM
    );
    cy.window().its('ethereum.networkVersion').should('eq', networkFound.chainId);
    cy.window().its('ethereum.chainId').should('eq', networkFound.chainCode);
  });
});