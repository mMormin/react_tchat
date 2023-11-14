import { Input, Form } from 'semantic-ui-react';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeInputValue } from '../../store/reducers/chat';
import { sendMessage } from '../../socket/chat';
import './NewMessageForm.scss';

function NewMessageForm() {
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector((state) => state.chat.inputValue);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    dispatch(changeInputValue(newValue));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendMessage();
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          icon="send"
          focus
          placeholder="Ecrire un message ..."
          value={inputValue}
          onChange={handleChangeInputValue}
        />
      </Form.Field>
    </Form>
  );
}

export default NewMessageForm;
