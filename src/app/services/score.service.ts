import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scores: { [catId: string]: number } = {};

  getScore(catId: string): number {
    return this.scores[catId] || 0;
  }

  updateScore(catId: string, score: number): void {
    this.scores[catId] = score;
  }

  getAllScores(): { [catId: string]: number } {
    return { ...this.scores };
  }
}