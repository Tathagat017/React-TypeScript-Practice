const Button = (props: ButtonProps) => {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      {" "}
      {props.children}
    </button>
  );
};

export default Button;
interface ButtonProps {
  children?: React.ReactNode;
  onClick(): void;
}
