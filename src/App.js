import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "./contacts";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader() {
  const contact = await createContact();
  return { contact };
}

/* other code */

export default function App() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          {/* other code */}
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        {/* other code */}
      </div>
    </>
  );
}
