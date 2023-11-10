import { Button, Form, Icon, Input } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleUserSettings } from '../../store/reducers/chat';
import './UserSettings.scss';

function UserSettings() {
  const dispatch = useAppDispatch();

  const userSettings = useAppSelector((state) => state.chat.userSettings);

  const handleToggleUserSettings = () => {
    dispatch(toggleUserSettings(userSettings));
  };

  return (
    <div className="settings-user">
      <div className="user-button">
        <Button circular icon color="teal" onClick={handleToggleUserSettings}>
          <Icon name="user" />
        </Button>
      </div>

      <div className="user-add">
        <Form className="form">
          <Form.Field>
            <Input focus placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <Input focus placeholder="Mot de passe" />
          </Form.Field>
          <Form.Field>
            <Button fluid color="green">
              Envoyer
            </Button>
          </Form.Field>
        </Form>
      </div>
    </div>
  );
}

export default UserSettings;
