import { moduleMetadata} from '@storybook/angular';
import { ColorDirective } from 'src/app/core/directives/color.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { colorsWithDefault } from './const';
import { IconButtonDirective } from 'src/app/core/directives/icon-button.directive';
import { LinkButtonDirective } from 'src/app/core/directives/link-button.directive';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
export default {
  title: 'Button',
  decorators: [
    moduleMetadata({ 
      imports: [SharedModule, ColorDirective, IconButtonDirective, LinkButtonDirective]
    })
  ]
}


// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default = {
  render: (args: any) => ({
    template: `<ef-button [EFColor]="theme" [isDisabled]="disabled">
      {{content}}
    </ef-button>`,
    props: args
  }),
  args: {
    theme: colorsWithDefault.Default,
    content: 'My button',
    disabled: false
  },
  argTypes: {
    theme: {
      control: 'select',
      options: colorsWithDefault,
      mapping: colorsWithDefault

    }
  },
  tags: ['autodocs'],
}



export const Icon = {
  render: (args: any) => ({
    template: `<ef-button [EFColor]="theme" EFIconButton [filled]="filled" [isDisabled]="disabled">
      <i class="ef-icon ef-icon--search"></i>
    </ef-button>`,
    props: args
  }),
  args: {
    theme: colorsWithDefault.Default,
    content: 'My button',
    disabled: false,
    filled: true
  },
  argTypes: {
    theme: {
      control: 'select',
      options: colorsWithDefault,
      mapping: colorsWithDefault

    }
  },
  tags: ['autodocs'],
}

export const Link = {
  render: (args: any) => ({
    template: `<ef-button [EFColor]="theme" EFLinkButton [isDisabled]="disabled">
      <a href={{link}}>{{label}}</a>
    </ef-button>`,
    props: args
  }),
  args: {
    theme: colorsWithDefault.Default,
    label: 'My Link',
    link: 'https://www.experienciafraternidad.com',
    disabled: false,
  },
  argTypes: {
    theme: {
      control: 'select',
      options: colorsWithDefault,
      mapping: colorsWithDefault
    }
  },
  tags: ['autodocs'],
}


