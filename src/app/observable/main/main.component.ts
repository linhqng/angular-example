import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(
      (observer: {
        next: (arg0: number) => void;
        complete: () => void;
        error: (arg0: Error) => void;
      }) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 5) {
            observer.complete();
          }
          if (count > 3) {
            observer.error(new Error('Count is greater 3!'));
          }
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data: string) => {
          console.log(data);
        },
        (error: { message: string }) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
