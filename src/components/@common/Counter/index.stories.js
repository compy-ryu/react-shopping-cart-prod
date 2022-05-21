import Counter from './index';

export default {
  title: 'Component/@Common/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

const Template = (args) => <Counter {...args} />;

export const DefaultCounter = Template.bind({});
DefaultCounter.args = {};
