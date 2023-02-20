import {Datagrid, EditButton, List, ReferenceField, TextField} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);
