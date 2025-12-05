interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  setAlertVisible?: boolean;
}
const Buttons = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
