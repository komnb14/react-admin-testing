import {Edit, ReferenceInput, SimpleForm, TextInput} from 'react-admin';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled={true}/>
            <ReferenceInput source="userId" reference="users"/>
            <TextInput source="title"/>
            <TextInput source="body" multiline={true} rows={5}/>
        </SimpleForm>
    </Edit>
);
