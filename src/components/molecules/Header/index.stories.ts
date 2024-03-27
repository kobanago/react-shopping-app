import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalHeader: Story = {};