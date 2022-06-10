"use strict";
/**
 @description : Angular Bloc Pattern . . .
 * you can extends this package and control your UI easily with this package
 @dependencies : rxjs
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloc = void 0;
const rxjs_1 = require("rxjs");
class Bloc extends rxjs_1.BehaviorSubject {
    constructor(initialState) {
        super(initialState);
        this.state = initialState;
    }
    /**
     * @description : we use emit to emit new State to listeners
     */
    emit(state) {
        this.state = state;
        this.next(this.state);
    }
    add(event) {
        // will work only in case of event is mapped to sepecefic state
        if (this.mapEventToState(event).has(event)) {
            this.emit(this.mapEventToState(event).get(event));
        }
    }
}
exports.Bloc = Bloc;
