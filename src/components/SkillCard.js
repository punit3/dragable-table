const SkillCard = ({ customStyle, skill }) => {
  const defaultStyles = {
    // width: 148px)
    height: "40px",
    padding: "8px 10px 8px 10px",
    borderRadius: "8px",
    border: " 1.2px solid",
    display: "flex",
    flexWrap: "wrap",
    // gap: '24px',
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };
  const mergedStyles = { ...defaultStyles, ...customStyle };
  return <div style={mergedStyles}>{skill}</div>;
};

export default SkillCard;

