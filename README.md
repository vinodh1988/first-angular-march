#### Angular Directives

A Directive is a custom element or attribute
created by using angular

There are three types of angular directives

* Component Directive
* Structural Directive
* Attribute Directive


### Component Directive

   The custom elements that you create is called component directive

   Every component is actually called component directive

### Structural Directive

    Structural directives are custom attributes that could
    be applied either for html elements or angular components

    Structural directives when applied , it either generates
    code,hides/unhides template

    <li *ngFor="let x of ['apple','boy','çat']">{{x}}</li>

    it would produce three list items

    <div *ngIf="show"></div>

    the above division will be shown if show is true will be hidden
    if show is false

    Note: structural directives are prefixed with *
### Attribute directives

Attribute directives are further classifed into three kinds 
* Input directive
* Output directive
* Input Output directive

* Input Directive
   
   Input directives are directives that are applied
on target elements (html elements or component) if
applied it would change the behavior of the target element
data change, style size

    some inbuilt attribute directives : style,ngStyle,ngClass

 Input directives receives values from the right
 The values must be variables
 Input directives are enclosed within []

 <h1 [style.color]='mycolor'>Hello</h1>

   here mycolor is a variable , if mycolor=green the h1 will be green

 <h1 [ngClass]='classname'>Data </h1>
   
   here classname is a variable classname='alert alert-info' that value
   will be applied

   in case if you want to substitute direct values

<h1 ngClass="alert alert-info"></h1>

<h1 [color]="mycolor"></h1>

mycolor is a variable

<h1 color="red"> </h1>

red is a value

### Output Directive


  output directive are applied on elements(html/components)
  if applied they listen to a particular even on the target
  upon event it will call the function mentioned as the value

  Output directives are enclosed within ()

  <button (click)="fun()"></button>
  <input type="text" (keyup)="fun()">

### Input Output Directives 

Input output directives works in two ways

that is the directives receives the value from right and 
changes the behavior of the target 

and at the same time listens to the events on the target
calls the value at the right or updates the value at right


<input type="text" [(ngModel)]="name">

if name is 'Ganesh' by default the text box is filled with Ganesh

and if you type the value in the text box the value you type is updated
to name


#### Communication b/w parent child components 
 
 When ever we make angular components ,
 the information flow must be unidirectional
 that is from parent to child

 even though there is possibility to pass info
 from child to parent, unless it is really necassary avoid it

# Parent to Child

Child is the receiver
Parent is the sender

So the configuration must be done in receiver end(child)

Whatever the child want to receive from parent
it has to be declared as a variable and it must
be decorated with @Input so that for that particular
component that variable will become input attribute directive

