import type { Meta, StoryObj } from "@storybook/react";

import Table from "./index";

const meta = {
  title: "ClientSide/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columns: [
      { id: "name", label: "Name" },
      { id: "age", label: "Age" },
    ],
    rows: [
      {
        data: {
          name: "Hans",
          age: "Peter",
        },
      },
    ],
  },
};
