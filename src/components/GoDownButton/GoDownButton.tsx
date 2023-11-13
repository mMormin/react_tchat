import { Button, Icon } from 'semantic-ui-react';
import './GoDownButton.scss';

type GoDownButtonProps = {
  onClick: () => void;
};

function GoDownButton({ onClick }: GoDownButtonProps) {
  return (
    <Button
      className="button--down"
      circular
      size="large"
      icon="angle down"
      color="black"
      toggle
      onClick={onClick}
    />
  );
}

export default GoDownButton;
