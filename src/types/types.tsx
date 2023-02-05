type Task = {
  id: number;
  name: string;
  category_id: number;
};

type Category = {
  id: number;
  name: string;
  tasks: Task[];
};

export type { Category };
