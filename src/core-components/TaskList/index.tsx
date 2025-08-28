import PlusIcon from '../../assets/icons/plus.svg?react';
import Button from '../../components/Button';
import useTask from '../../hooks/use-task';
import useTasks from '../../hooks/use-tasks';
import { TaskState } from '../../models/task';
import TaskItem from '../TaskItem';

export default function TaskList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
          onClick={handleNewTask}
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
