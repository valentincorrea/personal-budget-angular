import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DonutChart } from './d3-donut-chart';

describe('D3DonutChart', () => {
  let component: D3DonutChart;
  let fixture: ComponentFixture<D3DonutChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3DonutChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3DonutChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
