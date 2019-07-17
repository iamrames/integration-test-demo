import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {

  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote() {
    // tslint:disable-next-line: curly
    if (this.myVote === 1)
        return;

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    // tslint:disable-next-line: curly
    if (this.myVote === -1)
        return;

    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }

}
