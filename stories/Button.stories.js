import ButtonComponent from '~/components/Button'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    level: {
      name: 'level',
      description:
        'class名と連動。スタイルはclass名に全て紐づけていて、class名の出しわけのみでデザインを変更している。',
      control: 'text',
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonComponent },
  template: '<ButtonComponent @onClick="onClick" v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
  level: 'primary',
  label: 'ボタン',
}

export const Secondary = Template.bind({})
Secondary.args = {
  level: 'secondary',
  label: 'ボタン',
}

export const Third = Template.bind({})
Third.args = {
  level: 'third',
  label: 'ボタン',
}

export const Reset = Template.bind({})
Reset.args = {
  level: 'reset',
  label: 'ボタン',
}
