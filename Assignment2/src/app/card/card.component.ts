import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../Model/card';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private _boardService : BoardService) { 

  }

  ngOnInit(): void {
  }

  @Input() public card : ICard =
  {
    id : 1,
    status : "todo",
    notes : "sdf",
    likes : 0
  }

  likeCard(cardId : number)
  {    
    this._boardService.updateLike(cardId);
  }

  deleteCard(cardId : number)
  {    
    this._boardService.deleteCard(cardId);
  }

  editCard(cardId : number)
  {    
    var notes = prompt("enter the name") ?? "Default";  
    this._boardService.editCard(cardId, notes);
  }
}
