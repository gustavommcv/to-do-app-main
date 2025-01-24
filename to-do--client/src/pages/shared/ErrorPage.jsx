import { useRouteError } from 'react-router';
import Header from '../../components/Header/Header';

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'An error ocurred!';
    let message = 'Something went wrong!';

    // console.log("Response status: " + error.status);

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = "Not found!";
        message = 'Could not find resource or page';
    }

    return <>
        <Header title='To Do'></Header>
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    </>
}
