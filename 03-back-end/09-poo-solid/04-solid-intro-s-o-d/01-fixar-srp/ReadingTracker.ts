// ReadingTracker.ts

import progressNotification from './notifications';

// separamos a classe e mehodos em que só apenas fazem o trackeaamento das leituras
// retiramos o metodo progresNotification
class ReadingTracker {
  //  retiramos atributos whishlist e os metodos de add e show
  private readingGoal: number;
  private booksRead: number;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    progressNotification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);