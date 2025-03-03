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