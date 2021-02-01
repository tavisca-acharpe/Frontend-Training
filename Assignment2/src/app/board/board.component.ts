import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ICard } from '../Model/card';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
   
  cards : ICard [];

  constructor(private _boardService : BoardService) { 
    this.cards = this._boardService.cards;
  }

  ngOnInit(): void {
    this._boardService.cardEvent.subscribe((cards: ICard[]) => {
      this.cards = cards;
    });
  }

  cardTitle : string = "Default";
  cardId : number = 0;

  createCard(key : string)
  {  
    this.cardTitle = prompt("enter the name") ?? "Default";  
    this._boardService.createCard(this.cardTitle,this.cardId,key);
    this.cardId ++;
  }
}
