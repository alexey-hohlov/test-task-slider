import './Counter.scss';

interface Props {
  className?: string;
}

const Counter: React.FC<Props> = ({ className }) => {
  return (
    <div className={`counter ${className}`}>
      <button>-</button>
      <span>4</span>
      <button>+</button>
    </div>
  );
};

export default Counter;
