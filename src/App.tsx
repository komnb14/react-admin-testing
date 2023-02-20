import {Admin, EditGuesser, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "../domains/usersList";
import {PostList} from "../domains/postList";
import {PostEdit} from "../components/PostEdit";


const url = "https://jsonplaceholder.typicode.com";
const dataProvider = jsonServerProvider(url);

function App() {

    return (
        <>
            <Admin dataProvider={dataProvider}>
                <Resource name="posts" list={PostList} edit={PostEdit}/>
                <Resource name="users" list={UserList}  recordRepresentation={"name"}/>
            </Admin>

        </>
    )
}

export default App
