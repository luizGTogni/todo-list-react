import PlusIcon from '../../assets/icons/plus.svg?react';
import Button from '../../components/Button';
import TaskItem from '../TaskItem';

export default function TaskList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
