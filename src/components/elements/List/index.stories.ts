import type { Meta, StoryObj } from '@storybook/react';
import { goods } from 'mocks/features/data/goods.json';
import { menu } from 'mocks/features/data/menu.json';
import { List } from '.';

const meta = {
  title: 'Elements/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalList: Story = {
  args: {
    list: goods,
  },
};
export const NormalIconList: Story = {
  args: {
    list: menu,
  },
};
export const NoDataList: Story = {
  args: {
    list: [],
  },
};
