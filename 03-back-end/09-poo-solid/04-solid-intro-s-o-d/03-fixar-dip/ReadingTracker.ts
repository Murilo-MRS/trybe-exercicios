// ReadingTracker.ts

import EmailNotification from './EmailNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;
  constructor(readingGoal: number, email: string) {
    this.notificator = new EmailNotification(email);
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}