/* eslint-disable react/prop-types */
import { useState } from 'react';
import SingleFieldForm from '../SingleFieldForm/SingleFieldForm';
import './TasksList.scss';
import { Link, useSubmit } from 'react-router-dom';

export default function TasksList({ tasks, statuses }) {

    const submit = useSubmit();

    const [currentTasks, setCurrentTasks] = useState(tasks);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleDelete = (taskId) => {
        const proceed = window.confirm('Are you sure you want to delete this task?');

        if (proceed) {
            setCurrentTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== taskId)
            );

            submit(null, {
                method: 'delete', 
                action: `/${taskId}/delete`,
            });
        }
    };

    const getRemainingTasksLength = () => {
        const arr = tasks.filter(task => task.status === 'pending' || task.status ==='in_progress');
        return arr.length;
    }

    return (
        <div className='tasks-list__container'>
            <Link to={'/create'} className="tasks-list__create">
                <svg className='tasks-list__icon tasks-list__icon--create' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"/></svg>

                <p className='tasks-list__create-link' to={'/create'}>Create a new todo</p>
            </Link>

            <div className="tasks-list">
                {currentTasks && currentTasks.map(task => (<div className='tasks-list__row' key={task.id}>
                    <div className='tasks-list__row--left'>
                        <SingleFieldForm field="status" type='select' task={task} statuses={statuses} />
                    </div>

                    <div className="tasks-list__row--right">
                        <Link to={`${task.id}`} className="tasks-list__row-link">Details</Link>
                        <p>/</p>
                        <button onClick={() => handleDelete(task.id)} className="tasks-list__row-link">Delete</button>
                    </div>

                </div>))}
                
                <div className="tasks-list__row">
                    <p className="tasks-list__count">{getRemainingTasksLength()} items left</p>

                    <div className="tasks-list__filter-container">
                        <button
                            className={`tasks-list__filter-button ${activeFilter === 'all' ? 'tasks-list__filter-button--active' : ''}`}
                            onClick={() => {
                                setActiveFilter('all');
                                setCurrentTasks(tasks);
                            }}
                        >
                            All
                        </button>
                        <button
                            className={`tasks-list__filter-button ${activeFilter === 'active' ? 'tasks-list__filter-button--active' : ''}`}
                            onClick={() => {
                                setActiveFilter('active');
                                setCurrentTasks(tasks.filter((task) => task.status === 'pending' || task.status === 'in_progress'));
                            }}
                        >
                            Active
                        </button>
                        <button
                            className={`tasks-list__filter-button ${activeFilter === 'completed' ? 'tasks-list__filter-button--active' : ''}`}
                            onClick={() => {
                                setActiveFilter('completed');
                                setCurrentTasks(tasks.filter((task) => task.status === 'completed'));
                            }}
                        >
                            Completed
                        </button>
                    </div>

                    <button onClick={() => {window.alert('Not implemented')}} className="tasks-list__clear-button">
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    );
}
