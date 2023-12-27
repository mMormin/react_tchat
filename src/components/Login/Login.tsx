import { Button, Form, Icon, Input } from 'semantic-ui-react';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  toggleUserSettings,
  changeInputLoginValue,
  login,
} from '../../store/reducers/login';
import './Login.scss';

function Login() {
  const dispatch = useAppDispatch();

  const userSettings = useAppSelector((state) => state.login.isVisible);
  const emailValue = useAppSelector((state) => state.login.credentials.email);
  const passwordValue = useAppSelector(
    (state) => state.login.credentials.password
  );
  const isLoading = useAppSelector((state) => state.login.isLoading);
  const errorMsg = useAppSelector((state) => state.login.error);

  const handleToggleUserSettings = () => {
    dispatch(toggleUserSettings());
  };

  const handleChangeEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    dispatch(changeInputLoginValue({ fieldName: 'email', value: newValue }));
  };

  const handleChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    dispatch(changeInputLoginValue({ fieldName: 'password', value: newValue }));
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      login({
        email: emailValue,
        password: passwordValue,
      })
    );
  };

  return (
    <div className="settings-user">
      <div className="user-button">
        <Button
          circular
          icon
          color="teal"
          onClick={handleToggleUserSettings}
          toggle
          active={userSettings}
        >
          <Icon name={userSettings ? `close` : `user`} />
        </Button>
      </div>

      <div className={`user-add ${userSettings ? 'active' : ``}`}>
        <Form className="form" onClick={handleSubmitForm}>
          <Form.Field>
            <Input
              focus
              type="email"
              value={emailValue}
              onChange={handleChangeEmailValue}
              placeholder="Email"
            />
          </Form.Field>

          <Form.Field>
            <Input
              focus
              type="password"
              value={passwordValue}
              onChange={handleChangePasswordValue}
              placeholder="Mot de passe"
            />
          </Form.Field>

          <Form.Field>
            <Button type="submit" fluid color="green">
              Envoyer
            </Button>
          </Form.Field>

          {errorMsg && <div>{errorMsg}</div>}
        </Form>
      </div>
    </div>
  );
}

export default Login;
