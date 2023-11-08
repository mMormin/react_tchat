import { Input, Form } from 'semantic-ui-react';
import './NewMessage.scss';

function NewMessage() {
  return (
    <Form className="message">
      <Form.Field>
        <Input icon="search" placeholder="Ecrire un message ..." />
      </Form.Field>
    </Form>
  );
}

export default NewMessage;
