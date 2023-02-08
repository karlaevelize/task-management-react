type Task = {
  id: number;
  name: string;
  list_id: number;
  description: string;
};

type Category = {
  id: number;
  name: string;
  color: string;
  tasks: Task[];
};

export type { Task, Category };
