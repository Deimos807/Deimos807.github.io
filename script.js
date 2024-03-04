function displaySection(sectionID){
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const seleected = document.getElementById(sectionID);
    if (seleected){
        seleected.classList.add('active');
    }
}