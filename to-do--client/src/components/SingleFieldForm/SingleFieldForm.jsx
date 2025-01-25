import { useContext, useState } from 'react';
import { Form, useSubmit } from 'react-router-dom';
import './SingleFieldForm.scss';
import ThemeContext from '../../context/themeContext';

/* eslint-disable react/prop-types */
export default function SingleFieldForm({ task, statuses, className }) {
    const [status, setStatus] = useState(task.status);
    const submit = useSubmit();

    const { theme } = useContext(ThemeContext);

    const handleChange = (event) => {
        if (event.type === 'change') {
            const newStatus = event.target.value;
            setStatus(newStatus);
        }

        if (event.type === 'change' || (event.type === 'keydown' && event.key === 'Enter')) {
            event.preventDefault();
            event.target.blur();
            submit(event.target.form); 
        }
    };

    return (
        <Form className="single-field-form" method="patch" action={`/${task.id}/patch`}>
            <select
                className={`single-field-form__select single-field-form__select--${theme}`}
                id="status"
                name="status"
                defaultValue={task.status}
                onChange={handleChange}
            >
                {statuses.map((statusOption) => (
                    <option key={statusOption} value={statusOption} className={`single-field-form__option single-field-form__option--${theme}`}>
                        {statusOption.replace('_', ' ')}
                    </option>
                ))}
            </select>

            <input
                className={`${className} single-field-form__input--${theme} single-field-form__input ${status === 'completed' ? 'completed' : ''}`}
                id="title"
                name="title"
                type="text"
                disabled={status === 'completed' ? true : false}
                defaultValue={task.title}
                onKeyDown={handleChange}
            />
        </Form>
    );
}
