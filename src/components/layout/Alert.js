
const Alert = ({ alert }) => {
  return (
    alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            { alert.msg }
        </div>

        )
    )
};

export default Alert;
