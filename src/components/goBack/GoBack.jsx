import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import css from 'components/goBack/GoBack.module.css';

export const GoBackBtn = ({ path }) => {
  return (
    <div className={css.btnWrap}>
      <Link className={css.btn} to={path}>
        Go back
      </Link>
    </div>
  );
};

// GoBackBtn.propTypes = {
//   path: PropTypes.object.isRequired,
// };
