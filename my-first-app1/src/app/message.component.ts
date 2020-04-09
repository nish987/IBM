import { Component } from '@angular/core';

@Component({
  selector: 'my-msg',
  template: `
    <h2>Today's message is : {{msg}}</h2>
    
  `
})
export class MessageComponent{
    msg: String="done"
}