const scrollToSection = (id: string) => {
  const div = document.getElementById(id);
  if (div) {
    div.scrollIntoView({ behavior: 'smooth' });
  }
};

export default scrollToSection;
