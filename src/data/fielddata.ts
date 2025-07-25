export type FieldRow = {
  title:string;
  name: string;
  type: string;
  defaultValue: string;
};

export const fieldData: FieldRow[] = [
  {
    title: "Name",
    name: "Tag",
    type: "Text Input",
    defaultValue: "Tag",
  },
  {
    title: "Type",
    name: "Progress",
    type: "Range Input",
    defaultValue: "Checked",
  },
  {
    title: "Default Value",
    name: "Date",
    type: "Date Input",
    defaultValue: "unTag",
  },
  {
    title: "Action",
    name: "Group",
    type: "Text Input",
    defaultValue: "preTag",
  },
];
