import data from "../data/data.json";
import { useState } from "react";
import { Category } from "../types/types";

export const Tasks = () => {
  const { categories } = data;

  const [tasks, setTasks] = useState<Category[]>(categories);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((category) => {
        const { tasks } = category;
        return (
          <div key={category.id}>
            <p>{category.name}</p>
            <div>
              {tasks.map((task) => (
                <div key={task.id}>
                  <p>{task.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
