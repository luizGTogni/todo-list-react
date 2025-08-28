import React from 'react';
import useLocalStorage from 'use-local-storage';
import delay from '../helpers/utils';
import { TASK_KEY, TaskState, type Task } from '../models/task';

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  const fetchTasks = React.useCallback(async () => {
    if (isLoadingTasks) {
      await delay(200);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }, [tasksData, isLoadingTasks]);

  React.useEffect(() => {
    fetchTasks();
  }, [fetchTasks, tasksData]);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
