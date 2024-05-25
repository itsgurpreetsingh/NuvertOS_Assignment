import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CompoundsDataService } from '../services/compounds-data.service';
import { DeleteCompoundService } from '../services/delete-compound.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  compounds: any;
  currentPage: number = 1;
  compoundsPerPage: number = 6;

  constructor(
    private compoundData: CompoundsDataService,
    private deleteCompoundService: DeleteCompoundService,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {
    this.loadCompounds();
  }
  loadCompounds() {
    this.compoundData.compounds().subscribe((data) => {
      this.compounds = data;
      this.renderCompounds();
      this.generatePagination();
    });
  }
  renderCompounds() {
    const container = this.el.nativeElement.querySelector('.container');
    if (!container) {
      console.error('Container element not found');
      return; // Exit the method if container is null
    }

    container.innerHTML = ''; // Clear previous content
    const startIndex = (this.currentPage - 1) * this.compoundsPerPage;
    const endIndex = startIndex + this.compoundsPerPage;
    const compoundsToRender = this.compounds.slice(startIndex, endIndex);

    compoundsToRender.forEach((compound: any) => {
      const card = this.createCard(compound);
      this.renderer.appendChild(container, card);
    });
    this.router.navigate(['/']);
  }

  createCard(compound: any) {
    const card = this.renderer.createElement('div');
    this.renderer.addClass(card, 'card');

    const h2 = this.renderer.createElement('h2');
    const text = this.renderer.createText(`${compound.id}. ${compound.CompoundName}`);
    this.renderer.appendChild(h2, text);
    this.renderer.appendChild(card, h2);
    
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', compound.strImageSource);
    this.renderer.setAttribute(img, 'alt', 'Compound Image');
    this.renderer.appendChild(card, img);
    this.renderer.listen(img, 'click', () => this.onCardClick(compound.id)); // Add click listener

    const deleteButton = this.createButton('Delete', () => this.onDelete(compound.id));
    const updateButton = this.createButton('Update', () => this.onUpdate());
    this.renderer.addClass(deleteButton, 'cardbutton');
    this.renderer.addClass(updateButton,'cardbutton')
    this.renderer.appendChild(card, deleteButton);
    this.renderer.appendChild(card, updateButton);

    return card;
  }

  createButton(text: string, onClick: () => void) {
    const button = this.renderer.createElement('button');
    const buttonText = this.renderer.createText(text);
    this.renderer.listen(button, 'click', (event) => {
      event.stopPropagation(); // Prevent card click event
      onClick();
    });
    this.renderer.appendChild(button, buttonText);
    return button;
  }

  onCardClick(compoundId: number) {
    this.router.navigate(['/compound', compoundId]);
  }

  onUpdate() {
    this.router.navigate(['/update']);
  }

  onDelete(itemId: number) {
    this.deleteCompoundService.onDelete(itemId).subscribe(() => {
      console.log('Item deleted successfully');
      // this.loadCompounds();  
      window.location.reload();
    });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.renderCompounds();
    this.generatePagination()
  }

  totalPages() {
    return Math.ceil(this.compounds.length / this.compoundsPerPage);
  }

  generatePagination() {
    const cpage = this.currentPage;
    console.log('CurPage:', cpage);
    const btclass = 'currentpagebtn';
    const totalPages = this.totalPages();
    const pagecontainer = this.el.nativeElement.querySelector('.pages')
    if (pagecontainer) {
      pagecontainer.innerHTML = ''
    }
    for (let i = 1; i <= totalPages; i++) {
      const button = this.renderer.createElement('button');
      const buttonText = this.renderer.createText(`${i}`);
      this.renderer.appendChild(button, buttonText);

      if (i === cpage) {
        this.renderer.addClass(button, 'currentpagebtn');
      } else {
        this.renderer.addClass(button, 'otherpages');
      }

      this.renderer.listen(button, 'click', () => this.onPageChange(i));
      this.renderer.appendChild(pagecontainer, button);
    }
  
  }
  
}
