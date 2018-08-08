import gql from "graphql-tag";


export function getTasksGQL() {
    return gql`
        query {
          getTaskList {
             id
             name
             status
           }
        }
        `
}
export function getTasksByIdGQL() {
    return gql`
        query GetTaskListById($id: String){
          getTaskListById(id: $id) {
             id
             name
             status
           }
        }
        `
}

export function addTasksGQL() {
    return gql`
        mutation AddTask($name: String!) {
            addTask(name: $name) {
                id
                name
            }
          }
        `
}

export function updateTasksGQL() {
    return gql`
        mutation UpdateTask($id: String!, $name: String, $status: String) {
            updateTask(id: $id, name: $name, status: $status) {
                id
                name
            }
          }
        `
}

export function deleteTasksGQL() {
    return gql`
        mutation DeleteTask($id: String!) {
            deleteTask(id: $id) {
                id
                name
            }
          }
        `
}
