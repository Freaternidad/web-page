import { moduleMetadata } from "@storybook/angular";
import { ColorDirective } from "src/app/core/directives/color.directive";
import { SharedModule } from "src/app/shared/shared.module";

export default {
    title: 'Card',
    decorators: [
      moduleMetadata({ 
        imports: [SharedModule, ColorDirective]
      })
    ]
  }

export const Default = {
    render: (args: any) => ({
      template: `<ef-card [disabled]="disabled">
        <img width="350px" src="https://matsbirkeland.files.wordpress.com/2020/08/secret-society.jpg">
        <div style="padding: 10px 50px;background-color: var(--color-white);width: 350px; box-sizing: border-box">
            <h4>Title</h4>
            <p>Here is the paragraph</p>
            <ef-button [EFColor]="'primary'"  [isDisabled]="disabled">My Button</ef-button>
        </div>
      </ef-card>`,
      props: args
    }),
    args: {
      disabled: false
    },
    tags: ['autodocs'],
  }