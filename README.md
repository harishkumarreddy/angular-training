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
4. Directives
5. Pipes/filters
6. Forms
7. Services
8. Dependency Injection
9. Routing
10. Http/ API intigration
11. RXJS
12. Testing
13. Interfaces
14. Models
