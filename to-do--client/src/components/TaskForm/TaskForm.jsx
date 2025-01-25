/* eslint-disable react/prop-types */
import { Form, useNavigation, useSubmit } from 'react-router-dom';
import { useContext, useRef } from 'react';
import './TaskForm.scss';
import ThemeContext from '../../context/themeContext';

export default function TaskForm({ statuses, task, method, children = 'Form', errors }) {
    const isSubmitting = useNavigation().state === 'submitting';
    const submit = useSubmit();
    
    const formRef = useRef(null);

    const { theme } = useContext(ThemeContext);

    const handleDelete = () => {
        const proceed = window.confirm('Are you sure you want to delete this task?');

        if (proceed) {
            submit(null, {
                method: 'delete',
                action: `/${task.id}/delete`,
            });
        }
    };

    const handleSave = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    };

    return (
        <div className='task-details__container'>
            <h1 className={`task-details__title task-details__title--${theme}`}>{children}</h1>
            <Form className="task-details" method={method} ref={formRef} onKeyDown={handleKeyDown}>
                <div className={`task-details__fields task-details__fields--${theme}`}>
                    <input
                        id="title"
                        name='title'
                        className={`task-details__input task-details__input--${theme}`}
                        type="text"
                        placeholder='Title'
                        defaultValue={task && task.title}
                    />
                    <input
                        id="description"
                        name='description'
                        className={`task-details__input task-details__input--${theme}`}
                        placeholder='Description'
                        defaultValue={task && task.description}
                    />
                    <select
                        id="status"
                        name='status'
                        className="task-details__select"
                        defaultValue={task && task.status}
                    >
                        {statuses.map((status) => (
                            <option className={`task-details__select__option task-details__select__option--${theme}`} key={status} value={status}>
                                {status.replace('_', ' ')}
                            </option>
                        ))}
                    </select>
                </div>
            </Form>
            {isSubmitting ? (
                <span className="loader"></span>
            ) : (
                <button type="button" onClick={handleSave} className={` task-details__button task-details__button--${theme} task-details__button--save`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256">
                        <g fill="currentColor" fillRule="evenodd">
                            <path d="M65.456 48.385c10.02 0 96.169-.355 96.169-.355c2.209-.009 5.593.749 7.563 1.693c0 0-1.283-1.379.517.485c1.613 1.67 35.572 36.71 36.236 37.416c.665.707.241.332.241.332c.924 2.007 1.539 5.48 1.539 7.691v95.612c0 7.083-8.478 16.618-16.575 16.618c-8.098 0-118.535-.331-126.622-.331c-8.087 0-16-6.27-16.356-16.1c-.356-9.832.356-118.263.356-126.8c0-8.536 6.912-16.261 16.932-16.261zm-1.838 17.853l.15 121c.003 2.198 1.8 4.003 4.012 4.015l120.562.638a3.971 3.971 0 0 0 4-3.981l-.143-90.364c-.001-1.098-.649-2.616-1.445-3.388L161.52 65.841c-.801-.776-1.443-.503-1.443.601v35.142c0 3.339-4.635 9.14-8.833 9.14H90.846c-4.6 0-9.56-4.714-9.56-9.14s-.014-35.14-.014-35.14c0-1.104-.892-2.01-1.992-2.023l-13.674-.155a1.968 1.968 0 0 0-1.988 1.972zm32.542.44v27.805c0 1.1.896 2.001 2 2.001h44.701c1.113 0 2-.896 2-2.001V66.679a2.004 2.004 0 0 0-2-2.002h-44.7c-1.114 0-2 .896-2 2.002z"/>
                            <path d="M127.802 119.893c16.176.255 31.833 14.428 31.833 31.728s-14.615 31.782-31.016 31.524c-16.401-.259-32.728-14.764-32.728-31.544s15.735-31.963 31.91-31.708zm-16.158 31.31c0 9.676 7.685 16.882 16.218 16.843c8.534-.039 15.769-7.128 15.812-16.69c.043-9.563-7.708-16.351-15.985-16.351c-8.276 0-16.045 6.52-16.045 16.197z"/>
                        </g>
                    </svg> Save
                </button>
            )}
            {!isSubmitting && task && (
                <button type="button" onClick={() => handleDelete(task.id)} className={`task-details__button task-details__button--${theme} task-details__button--delete`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512v128zM768 256h384V128H768v128zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45V384zM768 1664H640V640h128v1024zm256 0H896V640h128v1024zm256 0h-128V640h128v1024z"/></svg>Delete
                </button>
            )}

            <div className="errors">
                {errors && errors.map(error => {
                    return <p key={error.msg}>{error.msg}</p>
                })}
            </div>
        </div>
    );
}
