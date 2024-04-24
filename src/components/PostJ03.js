import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostJ03 = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="j03" />
        <TextField source="nomin" />
        <TextField source="plva" />
        <TextField source="nomcitta" />
        <TextField source="nomcap" />
        <TextField source="nomindirizzo" />
        <TextField source="nomprov" />
        <TextField source="nomnote" />
        <TextField source="condident" />
        <TextField source="pec" />
        <EditButton basepath="/j03" />
        <DeleteButton basepath="/j03" />
      </Datagrid>
    </List>
  );
};

export default PostJ03