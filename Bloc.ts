/**
 @description : Angular Bloc Pattern . . . 
 * you can extends this package and control your UI easily with this package
 @dependencies : rxjs
 */

import { BehaviorSubject } from 'rxjs';

export abstract class Bloc<
  BlocEvent,
  BlocState
> extends BehaviorSubject<BlocState> {
  /**
   * @description : you must give the bloc initial state to start
   */
  state: BlocState;
  constructor(initialState: BlocState) {
    super(initialState);
    this.state = initialState;
  }

  /**
   * @description : we use emit to emit new State to listeners
   */
  emit(state: BlocState) {
    this.state = state;
    this.next(this.state);
  }

  abstract mapEventToState(event: BlocEvent): Map<BlocEvent, BlocState>;

  add(event: BlocEvent) {
    // will work only in case of event is mapped to sepecefic state
    if (this.mapEventToState(event).has(event)) {
      this.emit(this.mapEventToState(event).get(event)!);
    }
  }
}



