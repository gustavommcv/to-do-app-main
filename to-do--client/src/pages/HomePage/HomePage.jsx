// import { useEffect, useState } from "react";
import TasksList from "../../components/TasksList/TasksList";

import './HomePage.scss';
import { useLoaderData } from "react-router-dom";

export default function HomePage() {

    const data = useLoaderData();

    return (
        <div className="home">
            <TasksList statuses={data.statuses} tasks={data.tasks} />
        </div>
    );
}
