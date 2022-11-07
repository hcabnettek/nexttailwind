import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Menu from '@/components/Menu';

export default {
  title: 'Bookstore/Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
