import { Button } from 'components/Button/Button.Styled';
import PropTypes from 'prop-types';

export const ButtonLoad = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};
Button.PropTypes = { onClick: PropTypes.func };
