import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollectionCardComponent } from './product-collection-card.component';

describe('ProductCollectionCardComponent', () => {
  let component: ProductCollectionCardComponent;
  let fixture: ComponentFixture<ProductCollectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCollectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCollectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
