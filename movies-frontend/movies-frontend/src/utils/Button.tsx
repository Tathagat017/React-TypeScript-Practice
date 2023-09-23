const Button = (props: ButtonProps) => {
  return <button className="btn btn-primary"> {props.children}</button>;
};

export default Button;
interface ButtonProps {
  children?: React.ReactNode;
}
