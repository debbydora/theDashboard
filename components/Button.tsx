interface ButtonProps {
  type: "submit" | "button" | "reset";
  className?: string;
  loading?: boolean;
  title?: string | React.ReactNode;
  onClick?: (e: any) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={(e) => {
        props.onClick && props.onClick(e);
      }}
    >
      {props.loading ? "...loading" : <p>{props.title}</p>}
    </button>
  );
};

export default Button;
