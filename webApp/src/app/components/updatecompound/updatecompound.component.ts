import { Component } from '@angular/core';
import { UpdateService } from '../services/update.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatecompound',
  templateUrl: './updatecompound.component.html',
  styleUrls: ['./updatecompound.component.css']  // Corrected to 'styleUrls'
})
export class UpdatecompoundComponent {
  constructor(private updateService: UpdateService, private router:Router) { }

  onUpdate(form: any): void {
    const formData = {
      id: form.value.id,
      CompoundName: form.value.CompoundName,
      CompoundDescription: form.value.CompoundDescription,
      strImageSource: form.value.strImageSource,
      strImageAttribution: form.value.strImageAttribution,
      dateModified: form.value.dateModified
    };

    this.updateService.onUpdate(formData).subscribe(response => {
      console.log('Compound updated successfully:', response);
      this.router.navigate(['/']);
      // Handle success response, maybe reset the form or show a success message
    }, error => {
      console.error('Error updating compound:', error);
      // Handle error response, maybe show an error message
    });
  }
}
