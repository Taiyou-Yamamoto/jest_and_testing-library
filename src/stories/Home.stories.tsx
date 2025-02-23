import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home';

const meta: Meta<typeof Home> = {
  title: 'Example/Home', // ← `Home` に変更
  component: Home,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {}; // ← `args` を削除
export const LoggedOut: Story = {};
