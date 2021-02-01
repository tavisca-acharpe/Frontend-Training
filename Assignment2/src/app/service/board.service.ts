import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICard } from '../Model/card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }
  
  cards : ICard[] = [];
  
  public cardEvent = new Subject<ICard[]>();

  createCard(notes : string, cardId : number,  status : string)
  {  
    this.cards.push({
      id : cardId,
      notes : notes,
      status : status,
      likes : 0
    })
    this.cardEvent.next(this.cards);
  }

  updateLike(cardId : number)
  {
    var index = this.cards.findIndex(x =>x.id == cardId);
    this.cards[index].likes += 1;
    this.cardEvent.next(this.cards);
  }

  deleteCard(cardId : number)
  {
    var index = this.cards.findIndex(x =>x.id == cardId);
    this.cards.splice(index, 1);
    this.cardEvent.next(this.cards);
  }

  
  editCard(cardId : number, notes : string)
  {
    var index = this.cards.findIndex(x =>x.id == cardId);
    this.cards[index].notes = notes;
    this.cardEvent.next(this.cards);
  }
}
