import { Component } from '@angular/core';
import { testimonialData } from './testimonial-data'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent{
  testimonialData = testimonialData;

  logos = [
    '3m.svg',
    'barstool-store.svg',
    'buzzfeed.svg',
    'budweiser.svg',
    'forbes.svg',
    'macys.svg',
    'menshealth.svg',
    'mrbeast.svg',
    // Añade aquí más logotipos
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
