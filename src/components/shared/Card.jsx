import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#112D4E" : "#F9F7F7",
        color: reverse ? "#f9f7f7" : "#112D4E",
      }}
    >
      {children}
    </div>
  );
};
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
