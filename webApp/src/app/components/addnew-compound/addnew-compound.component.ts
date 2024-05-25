import { Component } from '@angular/core';
import { AddcompoundService } from '../services/addcompound.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addnew-compound',
  templateUrl: './addnew-compound.component.html',
  styleUrls: ['./addnew-compound.component.css']  
})
export class AddnewCompoundComponent {

  constructor(private addcompoundService: AddcompoundService,private router: Router) { }

  onSubmit(form: any): void {
    const formData = {
      id: form.value.id,
      CompoundName: form.value.CompoundName,
      CompoundDescription: form.value.CompoundDescription,
      strImageSource: form.value.strImageSource,
      strImageAttribution: form.value.strImageAttribution,
      dateModified: form.value.dateModified
    };

    this.addcompoundService.onAddition(formData).subscribe(response => {
      console.log('Compound added successfully:', response);
      this.router.navigate(['/']);
    }, error => {
      console.error('Error adding compound:', error);
    });
  }
}
