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
  order: number;
  items: Task[];
};

type CategoryPick = Pick<Category, "name" | "color">;

type TaskPick = Pick<Task, "name" | "description">;

export type { Task, Category, CategoryPick, TaskPick };
