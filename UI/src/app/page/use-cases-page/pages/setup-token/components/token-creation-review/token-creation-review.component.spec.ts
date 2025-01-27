import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkChainId } from '@chainbrary/web3-login';
import { SharedTestModule } from './../../../../../../shared/components/shared-components.module';
import { ITokenCreationPayload } from './../../../../../../shared/interfaces';
import { TokenCreationReviewComponent } from './token-creation-review.component';

describe('TokenCreationReviewComponent', () => {
  let component: TokenCreationReviewComponent;
  let fixture: ComponentFixture<TokenCreationReviewComponent>;

  beforeEach(async () => {
    const tokenPayloadReview: ITokenCreationPayload = {
      name: 'My New Token',
      symbol: 'MNT',
      network: NetworkChainId.LOCALHOST,
      maxSupply: 21000000,
      decimals: 18,
      canBurn: false,
      canMint: false,
      canPause: false
    };

    await TestBed.configureTestingModule({
      imports: [SharedTestModule],
      declarations: [TokenCreationReviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TokenCreationReviewComponent);
    component = fixture.componentInstance;
    component.tokenPayloadReview = tokenPayloadReview;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
