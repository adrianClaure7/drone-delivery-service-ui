import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { DroneTripComponent } from './drone-trip.component';
import { DroneTripService } from './drone-trip.service';
import { ConverterJsonString } from '../shared/converter-json-string/converter-json-string';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { DroneTripMockData } from './drone-trip.data.spec';

describe('DroneTripComponent', () => {
  let component: DroneTripComponent;
  let fixture: ComponentFixture<DroneTripComponent>;
  let droneTripService: DroneTripService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule],
      declarations: [DroneTripComponent],
      providers: [DroneTripService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneTripComponent);
    component = fixture.componentInstance;
    droneTripService = TestBed.inject(DroneTripService);
    fixture.detectChanges();
  });

  it('should call assignLocationsToDrones and update dataResult with the file content', fakeAsync(async () => {
    // Create mock data
    const fileDronesLocations = DroneTripMockData.fileDronesLocations; // Provide the file content you want to test

    // Create mock response
    const droneTrips = DroneTripMockData.droneTrips;
    const dronesLocations = DroneTripMockData.dronesLocations;
    const fileDroneTrips = DroneTripMockData.fileDroneTrips;

    // Create spies
    spyOn(ConverterJsonString, 'convertStringToJsonOfDronesAndLocations').and.returnValue(dronesLocations);
    spyOn(ConverterJsonString, 'convertDroneTripsJsonToString').and.returnValue(fileDroneTrips);
    spyOn(droneTripService, 'assignLocationsToDrones').and.returnValue(of(droneTrips));

    // Create a mock file object
    const mockFile = new File([fileDronesLocations], 'mockFile.txt', { type: 'text/plain' });

    // Trigger the onFileSelected event with the mock file
    const result = await component.onFileSelected({ target: { files: [mockFile] } });

    // Check if the spy functions were called
    expect(ConverterJsonString.convertStringToJsonOfDronesAndLocations).toHaveBeenCalledWith(fileDronesLocations);
    expect(droneTripService.assignLocationsToDrones).toHaveBeenCalledWith(dronesLocations);

    // Check if the dataResult is updated with the mock response
    expect(result).toEqual(fileDroneTrips);
  }));
});
