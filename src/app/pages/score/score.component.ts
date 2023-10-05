import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit{
  //cats?:any[]

  testValidation :String | undefined
  catScores: { catId: string; score: number; url: string }[] = [];

  constructor(
    private scoreService: ScoreService,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.loadCatScoresAndImages();
  }

  loadCatScoresAndImages() {

    const allScores = this.scoreService.getAllScores();

    this.chatService.getChats().subscribe((data) => {
      const catImages = data.images;

      this.catScores = catImages.map((catImage: { id: string | number; url: any; }) => ({
        catId: catImage.id,
        score: allScores[catImage.id] || 0,
        url: catImage.url
      }));

      // Sorted array
      this.catScores.sort((a, b) => b.score - a.score);
    });
  }
}
  
  // constructor(private chatService: ChatService) { }

  // ngOnInit(): void {
  //   this.chatService.getChats().subscribe((data) => {
  //     this.cats = data; 
  //     this.cats.sort((a, b) => b.score - a.score);
  //   });}}
