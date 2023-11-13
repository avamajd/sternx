export enum ContentType {
  Critical = "Critical",
  Checked = "Checked",
  IT = "IT",
  HR = "HR",
  Info = "Info",
}

export interface INoteCard {
  id: string;
  date: number;
  author: string;
  title: string;
  tag: ContentType;
  description: string;
}

export type Note = Omit<INoteCard, "id">;
