import { createBrowserRouter } from 'react-router-dom';
import ContactsPage from '../ContactsPage';
import UpsertContactPage from '../UpsertContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ContactsPage />,
    },
    {
        path: '/upsert/:id?',
        element: <UpsertContactPage />,
    }
])

export default router;
