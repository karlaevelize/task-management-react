type Task = {
  id: number;
  name: string;
  category_id: number;
  description: string;
};

type Category = {
  id: number;
  name: string;
  tasks: Task[];
};

export type { Task, Category };
