import classNames from 'classnames';
import styles from './button.module.scss';

const Button = ({ text, type, classes, ...props }) => {
  return (
    <button
      type={type || 'button'}
      className={classNames(styles.button, classes)}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
