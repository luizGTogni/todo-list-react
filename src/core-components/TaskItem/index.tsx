import { cx } from 'class-variance-authority';
import React from 'react';
import CheckIcon from '../../assets/icons/check.svg?react';
import PencilIcon from '../../assets/icons/pencil.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import XIcon from '../../assets/icons/x.svg?react';
import ButtonIcon from '../../components/ButtonIcon';
import Card from '../../components/Card';
import InputCheckbox from '../../components/InputCheckbox';
import InputText from '../../components/InputText';
import Text from '../../components/Text';
import useTask from '../../hooks/use-task';
import { TaskState, type Task } from '../../models/task';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );
  const [taskTitle, setTaskTitle] = React.useState(task.title || '');
  const { updateTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '');
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsEditing(false);
    updateTask(task.id, { title: taskTitle });
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />
          <Text
            className={cx('flex-1', {
              'line-through': task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
