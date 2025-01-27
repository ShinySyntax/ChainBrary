import { INetworkDetail } from '@chainbrary/web3-login';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { selectCurrentNetwork } from '../../auth-store/state/selectors';
import { ActionStoreProcessing, IPaymentRequest, IToken, StoreState } from './../../../shared/interfaces';
import { IPaymentRequestState, PAYMENT_REQUEST_FEATURE_KEY } from './interfaces';

export const selectPaymentRequest = createFeatureSelector<IPaymentRequestState>(PAYMENT_REQUEST_FEATURE_KEY);

export const selectPaymentNetwork: MemoizedSelector<object, INetworkDetail | null> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.network
);

export const selectPaymentToken: MemoizedSelector<object, IToken | null> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.token
);

export const selectPaymentConversion: MemoizedSelector<object, DataConversionStore> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => ({ conversionToken: s.conversionToken, conversionUSD: s.conversionUSD })
);

export const selectConversionToken: MemoizedSelector<object, StoreState<number | null>> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.conversionToken
);

export const selectIsNonNativeToken: MemoizedSelector<object, boolean> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.requestDetail.data?.tokenId !== s.network?.nativeCurrency.id
);

export const selectSmartContractCanTransfer: MemoizedSelector<object, boolean> = createSelector(
  selectPaymentRequest,
  selectIsNonNativeToken,
  (s: IPaymentRequestState, isNonNative: boolean) => s.smartContractCanTransfer.data || !isNonNative
);

export const selectSmartContractCanTransferIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.smartContractCanTransfer.loading
);

export const selectSmartContractCanTransferError: MemoizedSelector<object, string | null> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.smartContractCanTransfer.error
);

export const selectPaymentNetworkIsMathing: MemoizedSelector<object, boolean> = createSelector(
  selectPaymentRequest,
  selectCurrentNetwork,
  (s: IPaymentRequestState, network: INetworkDetail | null) => s.network?.chainId === network?.chainId
);

export const selectPaymentRequestDetail: MemoizedSelector<object, StoreState<IPaymentRequest | null>> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.requestDetail
);

export const selectPayNowIsProcessing: MemoizedSelector<object, ActionStoreProcessing> = createSelector(
  selectPaymentRequest,
  (s: IPaymentRequestState) => s.payNowIsProcessing
);

export interface DataConversionStore {
  conversionToken: StoreState<number | null>;
  conversionUSD: StoreState<number | null>;
}
