import Badge from '../../components/Badge';
import Text from '../../components/Text';
import useTasks from '../../hooks/use-tasks';

export default function TasksSummary() {
  const { tasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge loading={isLoadingTasks} variant="secondary">
          {tasksCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge loading={isLoadingTasks} variant="primary">
          {concludedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}
