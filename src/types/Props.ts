export type Todo = {
  name: string;
  id?: string;
  isComplete: boolean;
};
export interface EditTodo {
  name: string;
}

export const url = "http://localhost:5296";
