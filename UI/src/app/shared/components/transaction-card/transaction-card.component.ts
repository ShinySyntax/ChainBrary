import { Component, Input, OnInit } from '@angular/core';
import { NetworkChainId } from '@chainbrary/web3-login';
import { Store } from '@ngrx/store';
import { removeTransactionByHash } from '../../../store/transaction-store/state/actions';
import { ITransactionCard } from '../../interfaces';

@Component({
  selector: 'app-transaction-card[cardContent]',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {
  @Input() cardContent: ITransactionCard;
  scanLink: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.generateScanLink(this.cardContent.chainId);
  }

  removeTransaction(): void {
    return this.store.dispatch(removeTransactionByHash({ hash: this.cardContent.hash }));
  }

  private generateScanLink(chainId: NetworkChainId): void {
    switch (chainId) {
      case NetworkChainId.ETHEREUM:
        this.scanLink = `https://etherscan.io/tx/${this.cardContent.hash}`;
        break;
      case NetworkChainId.SEPOLIA:
        this.scanLink = `https://sepolia.etherscan.io/tx/${this.cardContent.hash}`;
        break;
      case NetworkChainId.POLYGON:
        this.scanLink = `https://polygonscan.com/tx/${this.cardContent.hash}`;
        break;
      case NetworkChainId.BNB:
        this.scanLink = `https://bscscan.com/tx/${this.cardContent.hash}`;
        break;
      case NetworkChainId.AVALANCHE:
        this.scanLink = `https://snowtrace.io/tx/${this.cardContent.hash}`;
        break;
    }
  }

  goToHashExplorer(): Window | null {
    return window.open(this.scanLink, '_blank');
  }
}
