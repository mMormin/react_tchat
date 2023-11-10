import { useState } from 'react';
import { Input, Form } from 'semantic-ui-react';
import { useAppDispatch } from '../../hooks/redux';
import { sendMessage } from '../../store/reducers/chat';
import './NewMessage.scss';

function NewMessage() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(sendMessage(inputValue));
    setInputValue('');
  };

  return (
    <Form className="message" onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          icon="send"
          focus
          placeholder="Ecrire un message ..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form.Field>
    </Form>
  );
}

export default NewMessage;
