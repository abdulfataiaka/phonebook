import { createBrowserRouter } from 'react-router-dom';
import ContactsPage from '../ContactsPage';
import UpsertContactPage from '../UpsertContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ContactsPage />,
    },
    {
        path: '/upsert',
        element: <UpsertContactPage />,
    }
])

export default router;
