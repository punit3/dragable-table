// styleHelpers.js

// Helper function to set border color and background color based on skill type
export const getSkillStyles = (skillType) => {
    // debugger
    switch (skillType) {
      case 'Core':
        return {
          borderColor: '#71CA00',
          backgroundColor: '#EDFED7',
        };
      case 'Special':
        return {
          borderColor: '#F85858',
          backgroundColor: '#FEEBEB',
        };
      case 'Creative':
        return {
          borderColor: '#DF45E2',
          backgroundColor: '#FDE7FD',
        };
      default:
        return {}; // default styles if the skill type doesn't match any case
    }
  };
  