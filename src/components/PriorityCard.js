import React from "react";

const PriorityCard = ({ customStyle, skill,handleDelete ,index}) => {
  // console.log("skill",skill)
  // Default styles for the PriorityCard component
  const defaultStyles = {
    width: '266px',
    height: "40px",
    padding: "8px 10px 8px 10px",
    borderRadius: "8px",
    border: "1.2px solid",
    display: "flex",
    flexWrap: "wrap",
    // gap: '24px',
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    cursor:'pointer'
  };

  // Function to truncate long words in the skill text
  const truncateLongWords = (inputString) => {
    const words = inputString.split(' ');

    const truncatedWords = words.map(word => {
      if (word.length > 12) {
        return word.slice(0, 12) + '...';
      }
      return word;
    });

    return truncatedWords.join(' ');
  }

  // Merge default styles with custom styles from props
  const mergedStyles = { ...defaultStyles, ...customStyle };

  // Truncate the skill text and display the PriorityCard
  const truncatedText = truncateLongWords(skill.value);

  const handleUpdate=()=>{
      handleDelete(skill,index)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'end' }}>
      <div style={mergedStyles}>
        {truncatedText}
        <img src="/images/cross.svg" alt="cross-icon" onClick={handleUpdate}/>
      </div>
    </div>
  );
};

export default PriorityCard;
