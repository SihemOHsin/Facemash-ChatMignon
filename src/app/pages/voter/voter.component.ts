import { Component ,OnInit} from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit{
/**test data  */
  // chats: any[] = [];
  // chats: { images: any[] } = { images: [] };

  // constructor(private chatService: ChatService) { }

  // ngOnInit(): void {
  //   this.loadChats();
  // }

  // loadChats() {
  //   this.chatService.getChats().subscribe((data) => {
  //     this.chats = data;
  //     console.log('chat data:', this.chats);
  //   });
  // }

  cats: any[] = [];
  cat1: any;
  cat2: any;

  constructor(private chatService: ChatService, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats() {
    this.chatService.getChats().subscribe((data) => {
      this.cats = data.images;
      this.pickRandomCats();
    });
  }

  pickRandomCats() {
    const randomIndexes = this.getRandomIndexes(2, this.cats.length);
    this.cat1 = this.cats[randomIndexes[0]];
    this.cat2 = this.cats[randomIndexes[1]];
  }

  getRandomIndexes(num: number, max: number) {
    const indexes: number[] = [];
    while (indexes.length < num) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }

  voteChat(cat: any) {
    //increment 
    const newScore = this.scoreService.getScore(cat.id) + 1;
    this.scoreService.updateScore(cat.id, newScore);
    //test score
    console.log(`Cat ID: ${cat.id}, New Score: ${newScore}`);

    // next
    this.pickRandomCats();

}}

