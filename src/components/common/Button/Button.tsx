import './Button.scss';

interface Props {
  title: string;
  className?: string;
}

const Button: React.FC<Props> = ({ title, className }) => {
  return <button className={`button ${className}`}>{title}</button>;
};

export default Button;
