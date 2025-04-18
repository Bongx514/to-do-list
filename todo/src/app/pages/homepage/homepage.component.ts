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
}
