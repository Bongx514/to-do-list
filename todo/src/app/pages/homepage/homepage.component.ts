import { Component } from '@angular/core';
import { ListComponentComponent } from "../../components/list-component/list-component.component";
import { PopupModalComponent } from "../../components/popup-modal/popup-modal.component";

@Component({
  selector: 'app-homepage',
  imports: [ListComponentComponent, PopupModalComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.less'
})
export class HomepageComponent {
  label = 'Add new task here...';

  createTask() {
    var tasktitle = document.getElementById('taskTitle') as HTMLInputElement,
        modal = document.getElementById('modal-block') as HTMLDivElement;
    
    if (tasktitle.value == '' || tasktitle.value.length < 2) {
      alert('Please enter a task title');
      return;
    } else if (tasktitle.value.length > 2) {
      this.label = tasktitle.value;
      console.log(this.label);
      tasktitle.value = '';
      modal.style.display = 'flex';
    }
  }
}
