function Button(props) {

  return (
    <button type={props.type} className="btn btn-primary" onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;