const handleSkillDrag = (data, sourceSkillName, destinationSkillName, itemToAdd) => {
  const sourceCategory = data.find((category) => category.skillName === sourceSkillName);
  const destinationCategory = data.find((category) => category.skillName === destinationSkillName);

  // Ensure both source and destination skill categories are found
  if (sourceCategory && destinationCategory) {
    // Remove the item from the source skill category's skill array
    sourceCategory.skill = sourceCategory.skill.filter((skill) => skill.value !== itemToAdd.value);

    // Check for duplicacy in the destination skill category's skill array
    const isDuplicate = destinationCategory.skill.some((skill) => skill.value === itemToAdd.value);

    // Add the item to the destination skill category's skill array if not a duplicate
    if (!isDuplicate) {
      destinationCategory.skill.push(itemToAdd);
    }
  }

  // Return the updated data
  return [...data];
};

const moveSkillToPriority = (skillData, priorityData, sourceSkillName, destinationPrioritySkillName, itemToAdd) => {
  // Find the source skill category in skillData
  const sourceCategoryIndex = skillData.findIndex((category) => category.skillName === sourceSkillName);

  // Ensure the source skill category is found
  if (sourceCategoryIndex !== -1) {
    // Remove the item from the source skill category's skill array
    skillData[sourceCategoryIndex].skill = skillData[sourceCategoryIndex].skill.filter((skill) => skill.value !== itemToAdd.value);

    // Check for duplicacy in the entire priorityData set
    const isDuplicateInPriorityData = priorityData.some((category) =>
      category.skill.some((skill) => skill.value === itemToAdd.value)
    );

    // Find the destination priority category in priorityData
    const destinationPriorityCategory = priorityData.find((category) => category.skillName === destinationPrioritySkillName);

    // Ensure the destination priority category is found and there is no duplicate
    if (destinationPriorityCategory && !isDuplicateInPriorityData) {
      destinationPriorityCategory.skill.push(itemToAdd);
    }
  }

  // Return the updated data
  return {
    updatedSkillData: [...skillData],
    updatedPriorityData: [...priorityData],
  };
};

export { handleSkillDrag, moveSkillToPriority };
