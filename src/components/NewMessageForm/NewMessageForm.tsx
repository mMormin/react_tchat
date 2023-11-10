import { Input, Form } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeInputValue, sendMessage } from '../../store/reducers/chat';
import './NewMessageForm.scss';

function NewMessageForm() {
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector((state) => state.chat.inputValue);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;

    dispatch(changeInputValue(newValue));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(sendMessage(inputValue));
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
