import { useQuery } from "@apollo/client";
import TaskColumn from "../../components/taskcolumn/TaskColumn";
import "../sharedStyles.scss";
import "./Dashboard.scss";
import GET_TASKS_QUERY from "../../queries/tasks";
import { ApolloTaskResponse, Status } from "../../interfaces/Tasks";
import {groupByStatus, mapTasks} from "../../utils/tasksUtils";

export default function Dashboard() {
  let columnNames: Record<Status, string> = {
    BACKLOG: "Backlog",
    TODO: "TODO",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    CANCELLED: "Cancelled",
  };

  const result = useQuery<ApolloTaskResponse>(GET_TASKS_QUERY);

  const tasks = result.data?.tasks || [];

  console.log(`Tasks ${result}` )
  const mappedTasks = mapTasks(tasks);
  console.log(mappedTasks)
  const groupedTasks = groupByStatus(mappedTasks);
  return (
    <div className="view-content dashboard">
      {Object.keys(groupedTasks).map((name, index) => {
        return (
          <TaskColumn
            key={index}
            title={columnNames[name as Status]}
            tasks={groupedTasks[name as Status]}
          />
        );
      })}
    </div>
  );
}
