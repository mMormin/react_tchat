import { Button, Form, Icon, Input } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  toggleUserSettings,
  changeEmailValue,
  changePasswordValue,
  connectUser,
} from '../../store/reducers/userSettings';
import './UserSettings.scss';

function UserSettings() {
  const dispatch = useAppDispatch();

  const userSettings = useAppSelector((state) => state.userSettings.isVisible);
  const email = useAppSelector((state) => state.userSettings.email);
  const password = useAppSelector((state) => state.userSettings.password);

  const handleToggleUserSettings = () => {
    dispatch(toggleUserSettings());
  };

  const handleChangeEmailValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;

    dispatch(changeEmailValue(newValue));
  };

  const handleChangePasswordValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;

    dispatch(changePasswordValue(newValue));
  };

  const handleSubmitForm = () => {
    dispatch(connectUser());
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
        <Form className="form">
          <Form.Field>
            <Input
              focus
              value={email}
              onChange={handleChangeEmailValue}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <Input
              focus
              value={password}
              onChange={handleChangePasswordValue}
              placeholder="Mot de passe"
            />
          </Form.Field>
          <Form.Field>
            <Button fluid onClick={handleSubmitForm} color="green">
              Envoyer
            </Button>
          </Form.Field>
        </Form>
      </div>
    </div>
  );
}

export default UserSettings;
