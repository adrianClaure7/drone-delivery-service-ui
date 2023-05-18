import { Component, OnInit } from '@angular/core';
import { DroneTripService } from './drone-trip.service';
import { ConverterJsonString } from '../shared/converter-json-string/converter-json-string';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drone-trip',
  templateUrl: './drone-trip.component.html',
  styleUrls: ['./drone-trip.component.scss']
})
export class DroneTripComponent implements OnInit {
  fileContent: string = '';
  contentForm!: FormGroup;
  showSpinner = false;

  constructor(
    private fb: FormBuilder,
    private droneTripService: DroneTripService
  ) { }

  ngOnInit(): void {

    this.contentForm = this.fb.group({
      dataResult: [''],
    });
  }

  /**
  * This function is triggered when a file is selected using an input element.
  * It reads the content of the selected file, converts it to JSON representing drones and locations,
  * and makes an API call to assign locations to drones using the DroneTripService.
  * Finally, it updates the forn with the result of the API call.
  *
  * @param event - The event object containing information about the file selection.
  */
  async onFileSelected(event: any): Promise<string> {
    const that = this;
    that.showSpinner = true;
    return new Promise<string>((resolve, reject) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        // Read the file content as a string
        that.fileContent = reader.result as string;

        // Convert the string to JSON representing drones and locations
        const data: any = ConverterJsonString.convertStringToJsonOfDronesAndLocations(that.fileContent);

        if (!data.error) {
          // Make an API call to assign locations to drones
          that.droneTripService.assignLocationsToDrones(data).subscribe({
            next: (droneTrips: any) => {
              // Update the form with the result of the API call
              let dataResult = ConverterJsonString.convertDroneTripsJsonToString(droneTrips);
              that.contentForm.patchValue({ dataResult })
              that.showSpinner = false;
              resolve(dataResult);
            },
            error: (error) => {
              that.showSpinner = false;
              alert(error)
              console.log(error);
              reject(error);
            }
          });
        } else {
          that.showSpinner = false;
          this.contentForm.patchValue({ dataResult: data.error })
        }
      };

      // Read the file as text
      reader.readAsText(file);
    });
  }

  refresh() {
    location.reload();
  }

}
