import { Component, OnInit, OnDestroy } from '@angular/core';
import { Annyang, CommandOption } from 'annyang';
declare const annyang: Annyang;

@Component({
  selector: 'kdas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'alexa';
  ListenBtnText = "Listen";
  YouSaid: string = "";

  ngOnInit(): void {
    this._addCommands();
    this._addListeners();
  }
  ngOnDestroy(): void {
    annyang.removeCallback();
  }

  private _addCommands() {

    var showFlickr = function(tag) {
      console.log(tag);
    }

    var commands = {
      'hello :name': () => {
        alert('dfdfdf');
        this.YouSaid = "ssf";
      },
      'ABC': () => {
        debugger;
        window.open("https://www.w3schools.com","_blank");
      },
      'show me *tag': showFlickr,
    }
    
    annyang.removeCommands();
    // @ts-ignore
    annyang.addCommands(commands);
  }
  private _addListeners() {
    annyang.removeCallback();

    const start = () => { console.log('start'); };
    const end = () => { console.log('end'); };

    annyang.addCallback('start', start); // $ExpectType void
    annyang.addCallback('end', end); // $ExpectType void

    annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
      console.log(userSaid); // sample output: 'hello'
      console.log(commandText); // sample output: 'hello (there)'
      console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    });

    annyang.addCallback('resultNoMatch', function(userSaid, commandText, phrases) {
      console.log(userSaid); // sample output: 'hello'
      console.log(commandText); // sample output: 'hello (there)'
      console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    });
  }

  Listen() {
    if(annyang.isListening)
    annyang.start();
    this.YouSaid = "Listning";
  }

  Stop() {
    annyang.pause();
  }

}
