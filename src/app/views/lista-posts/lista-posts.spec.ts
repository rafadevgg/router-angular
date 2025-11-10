import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPosts } from './lista-posts';

describe('ListaPosts', () => {
  let component: ListaPosts;
  let fixture: ComponentFixture<ListaPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
