import { FormControl, FormGroup } from '@angular/forms';
import { NetworkChainId, TokenId } from '@chainbrary/web3-login';

export interface IPaymentRequest {
  publicAddress: string;
  name: string;
  chainId: NetworkChainId;
  tokenId: TokenId | string | null;
  amount: number | null;
  usdEnabled: boolean;
}

export interface PriceSettingsForm {
  token: FormGroup<TokenChoiceMakerForm>;
  amount: FormControl<number | null>;
  amountInUsd: FormControl<number | null>;
  valueLockedInUsd: FormControl<boolean | null>;
}

export interface ProfileForm {
  publicAddress: FormControl<string | null>;
  username: FormControl<string | null>;
}

export interface PaymentMakerForm {
  price: FormGroup<PriceSettingsForm>;
  profile: FormGroup<ProfileForm>;
}

export interface TokenChoiceMakerForm {
  tokenId: FormControl<string | null>;
  chainId: FormControl<string | null>;
}

export interface TokenChoiceMaker {
  tokenId: TokenId | string;
  chainId: NetworkChainId;
}

export interface IProfilePayment {
  publicAddress: string | null;
  avatarUrl: string | null;
  username: string | null;
}

export interface IConversionToken {
  usdAmount: number | null;
  tokenAmount: number | null;
  priceInUsdEnabled: boolean;
}

export interface TransactionTokenBridgePayload {
  ownerAdress: string;
  tokenAddress: string;
  amount: number;
  chainId: NetworkChainId;
}

export interface SendTransactionTokenBridgePayload extends TransactionTokenBridgePayload {
  destinationAddress: string;
}

export interface SendNativeTokenPayload {
  from: string;
  to: string;
  amount: number;
  chainId: NetworkChainId;
}

export enum PaymentTypes {
  USD,
  TOKEN
}
