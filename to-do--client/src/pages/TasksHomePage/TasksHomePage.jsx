// import { useEffect, useState } from "react";
import TasksList from "../../../components/TasksList/TasksList";

import './TasksHomePage.scss';
import { useLoaderData } from "react-router-dom";

export default function TasksHomePage() {

    const data = useLoaderData();

    return (
        <div className="tasks-home-page">
            <TasksList statuses={data.statuses} tasks={data.tasks} />
        </div>
    );
}
