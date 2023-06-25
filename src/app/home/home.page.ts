import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  isHappy: boolean = true;
  isSad: boolean = false;
  foodScore: number = 0;
  happinessScore: number = 100;
  feedingInterval: any;
  clothes: string = 'default';

  constructor() {
    this.feedingInterval = setInterval(() => {
      this.happinessScore -= 10;
      this.foodScore += 10;

      if (this.happinessScore <= 0 || this.foodScore >= 100) {
        this.isHappy = false;
        this.isSad = true;
        clearInterval(this.feedingInterval);
      }
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.feedingInterval);
  }

  feedBichinho() {
    this.foodScore -= 20;
    this.happinessScore += 10;
    this.checkBichinhoStatus();
  }

  petBichinho() {
    this.happinessScore += 20;
    this.checkBichinhoStatus();
  }

  takeBichinhoForAWalk() {
    this.happinessScore += 30;
    this.foodScore += 10;
    this.checkBichinhoStatus();
  }

  changeBichinhoClothes() {
    if (this.clothes === 'default') {
      this.clothes = 'shirt';
    } else if (this.clothes === 'shirt') {
      this.clothes = 'hat';
    } else if (this.clothes === 'hat') {
      this.clothes = 'default';
    }
  }

  checkBichinhoStatus() {
    if (this.happinessScore > 0 && this.foodScore < 100) {
      this.isHappy = true;
      this.isSad = false;
    } else {
      this.isHappy = false;
      this.isSad = true;
    }
  }
}
