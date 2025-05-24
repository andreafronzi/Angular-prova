import {Component, inject, OnInit} from '@angular/core';
import {MioServizioService} from '../services/mio-servizio.service';
import {Resp} from '../interfaces/resp';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-esempio',
  imports: [
    JsonPipe
  ],
  templateUrl: './esempio.component.html',
  styleUrl: './esempio.component.scss'
})
export class EsempioComponent implements  OnInit{
  posts: Resp[] = [
  {
    userId: 1,
    id: 1,
    title: "Esempio di titolo",
    body: "Questo è un esempio di corpo del post."
  }
];
  private mioServizioService = inject(MioServizioService);
    ngOnInit(): void {
    this.mioServizioService.getPosts().subscribe(response => { debugger; this.posts = response;})
    }

}
