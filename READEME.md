# Description : 

very simple State Management Library . . . support Angular 😎 . 

# Installation Guide : 

``` npm i angular-bloc ```

# Building Steps : 

1. build Event interface . 

2. Build State interface . 

3. extend Bloc from the library and provide the Event interface , and the State interface . 

4. implement the MapEventToState function in order to emit the states later after dispatching the events . 

5. make the ViewModel ( ts Component file ) subscribe on the Bloc Service . 

6. generate new State and allow the Html View to bind on that state -> update the screen ui . 

7. we are done . 

## extras : 

you can use this library in many formats according to the reference that provided below 

# Guide Reference : 

https://stackblitz.com/edit/angular-ivy-unuttt?file=src/app/Blocs/CounterBloc/CounterBloc.ts

https://angular-ivy-unuttt.stackblitz.io
