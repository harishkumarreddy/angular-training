# Angular
### Symantic Version:
Major.Minor.Patch
### Major:
overal project structure, new features, breaking changes
EX:
1.0.0 -> 2.0.0 -> 3.0.0 -> ...
### Minor:
new features, no breaking changes
EX:
1.0.0 -> 1.1.0 -> 1.2.0 -> ...

### Patch:
bug fixes, no new features, no breaking changes
EX:
1.0.0 -> 1.0.1 -> 1.0.2 -> ...

# Angular symantic structure:
```
|-project
|---src
|-----app
|-------module
|---------routing
|---------component(ts)
|---------component-view(HTML)
|---------component-stylesw(css)
|---------component-spec(test)
|-------module
|---------component
|-----------component(ts)
|-----------component-view(HTML)
|-----------component-stylesw(css)
|-----------component-spec(test)
|---------Services
|-----------api intigration(http)
|---------Models
|-----------user model
|---------Interfaces
|-----------user interface
|---------Pipes
|-----------custom pipes
|---------Directives
|-----------custom directives
|---------Forms
|-----------custom forms
```

# Design Patterns & Principles:
1. SOLID principles
    1. Single Responsibility Principle
        -- A class should have only one reason to change.
    2. Open Closed Principle
        -- A class should be open for extension but closed for modification.
    3. Liskov Substitution Principle
        -- Derived classes must be substitutable for their base classes.
    4. Interface Segregation Principle
        -- Make fine grained interfaces that are client specific.
    5. Dependency Inversion Principle
        -- Depend on abstractions. Do not depend on concretions.
2. Design Patterns
    1. Singleton
        -- A class of which only a single instance can exist.
    2. Factory
        -- A component responsible solely for the wholesale (not piecewise) creation of objects.
    3. Observer
        -- A way of notifying change to a number of classes.
    4. Decorator
        -- Adding behaviour to individual objects dynamically.
    6. Adapter
        -- Match interfaces of different classes.
    
    7. DRY* -> Don't Repeat Yourself
        -- Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
    8. KISS* -> Keep It Simple Stupid
        -- Keep things as simple as possible, but no simpler.
    9. YAGNI* -> You Ain't Gonna Need It
        -- You aren't going to need it.

    10. TDD* -> Test Driven Development
        -- Write tests before writing code.
    11. BDD* -> Behavior Driven Development
        -- Write tests before writing code.
    12. DDD* -> Domain Driven Development
        -- Write tests before writing code.

## Pre-requisites: (* is required)
1. Javascript*
2. HTML*
3. CSS*
4. Typescript
5. NodeJS

# Bulding Blocks:
0. Script 
    1. Javascript
    2. EcmaScript (ES) ->javascript standard ES5, ES6, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020
    3. Typescript -> superset of javascript
1. Modules
2. Components and Templates
3. Data binding
    1. uni-directional data flow
        a. class to view -> Data binding {{variable}}
        b. view to class -> Event binding (click)="function(e)"
    2. bi-directional data flow(MVVM) -> 2 way data binding [(ngModel)]="variable"
3A. Property binding -> [property]="variable"
3B. Event binding -> (event)="function(e)"
3C. input & output binding -> @Input() @Output()
    1. input -> @Input() variable: type -> parent to child data flow
    2. output -> @Output() variable: EventEmitter<type> -> child to parent data flow
4. Directives
    1. Structural directives -> *ngIf, *ngFor
    2. Attribute directives -> [ngClass], [ngStyle]
    3. Component directives -> <app-component></app-component>
    4. Custom directives -> @Directive()
5. Pipes/filters 
    1. built-in pipes -> {{variable | pipe}}
        a. date -> {{variable | date: 'short'}}, {{variable | date: 'shortDate'}}, {{variable | date: 'shortTime'}}, {{variable | date: 'medium'}}, {{variable | date: 'mediumDate'}}, {{variable | date: 'mediumTime'}}, {{variable | date: 'long'}}, {{variable | date: 'longDate'}}, {{variable | date: 'longTime'}}
        b. currency -> {{variable | currency: 'USD': 'symbol'}}
        c. number -> {{variable | number: '1.2-2'}}
        d. json -> {{variable | json}}
        e. slice -> {{variable | slice: 0: 2}}
        f. uppercase -> {{variable | uppercase}}
        g. lowercase -> {{variable | lowercase}}
        h. titlecase -> {{variable | titlecase}}
        i. percent -> {{variable | percent}}
        j. decimal -> {{variable | decimal}}
        k. async -> {{variable | async}}
    2. custom pipes -> {{variable | customPipe}}
6. Forms
    1. Template / model driven forms
        ex: <form> 
        <input type="text" [(ngModel)]="variable"> 
        </form>
    2. Reactive forms
        ex: <form [formGroup]="formGroup"> 
        <input type="text" formControlName="variable"> 
        </form>
    3. Dynamic Reactive forms
        ex: <form [formGroup]="formGroup"> 
        <div formArrayName="formArray">
            <div *ngFor="let itemForm of formArray.controls; let i=index">
                <div [formGroup]="itemForm">
                    <input type="text" formControlName="variable">
                </div>
            </div>
        </div>
        </form>
7. Services
    1. Logic seperation
    2. API intigration
8. Dependency Injection
9. Http/ API intigration
10. Routing
11. RXJS
12. Testing
13. Interfaces
14. Models
