import { moduleMetadata } from "@storybook/angular";
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IsInvalidPipe } from "src/app/core/pipes/is-invalid.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { SelectOptionModel } from "src/app/core/models/select-option.model";

export default {
    title: 'Forms/Input',
    decorators: [
      moduleMetadata({ 
        imports: [SharedModule, FormsModule, ReactiveFormsModule, IsInvalidPipe]
      })
    ]
}


export const Text = {
    render: (args: any) => ({
        template: `<ef-form-input-text 
            [isInvalid]="isInvalid"
        >
            <ng-container label>{{label}}</ng-container>
            <ng-container errors>{{errorText}}</ng-container>
            <ng-container warnings>{{warningText}}</ng-container>
            <ng-container success>{{successText}}</ng-container>
        </ef-form-input-text>`,
        props: args
      }),
      args: {
        isInvalid: false,
        label: 'My label',
        errorText: 'My error text',
        warningText: 'My warning text',
        successText: 'My success text',
      },
      tags: ['autodocs'],
}


const options: SelectOptionModel[] = [
    {
        id: '1',
        label: 'Option 1'
    },
    {
        id: '2',
        label: 'Option 2'
    },
    {
        id: '3',
        label: 'Option 3'
    },
    {
        id: '4',
        label: 'Option 4'
    }
]

export const Dropdown = {
    render: (args: any) => ({
        template: `<ef-form-select-dropdown 
            [isInvalid]="isInvalid"
            [options]="options"
        >
            <ng-container label>{{label}}</ng-container>
            <ng-container errors>{{errorText}}</ng-container>
            <ng-container warnings>{{warningText}}</ng-container>
            <ng-container success>{{successText}}</ng-container>
        </ef-form-select-dropdown>`,
        props: args
      }),
      args: {
        options: options,
        isInvalid: false,
        label: 'My label',
        errorText: 'My error text',
        warningText: 'My warning text',
        successText: 'My success text',
      },
      tags: ['autodocs'],
}