# Web

## Initiate the Web project

### 0. Angular CLI

Initiate the project using Angular cli

```sh
ng new control-panel --defaults --style=scss --skip-git --directory ./
```

### 1. Material Design

Install material design

```sh
ng g m shared/material --flat
# https://material.angular.io/guide/getting-started#install-angular-material
ng add @angular/material --defaults
```

Import the **MaterialModule** in the `src/app/app.module.ts`

```ts
import { MaterialModule } from './shared/material.module';

@NgModule({
  imports: [
    MaterialModule
  ]
})
```

Add the following code into the `./shared/material.module`

```ts
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
```

## Add Components

```sh
ng g c components/sidenav
ng g c components/toolbar
ng g c components/home
ng g c components/home/components/agento
ng g c components/internet
```
