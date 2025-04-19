import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-popup-modal',
  imports: [NgFor],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.less'
})

export class PopupModalComponent {
  
  priorities = [
    { value: '', label: 'Please select priority' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' },
  ]
}
