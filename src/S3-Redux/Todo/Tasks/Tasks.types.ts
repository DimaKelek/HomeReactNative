export type TaskStateType = {
  tasks: {
    [key: string]: TaskType[];
  };
};
export type TaskActionsType = any;

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};
