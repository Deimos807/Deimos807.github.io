function dispalySection(sectionID){
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionID){
            section.classList.add('active');
        } else{
            section.classList.remove('active');
        }
    });
}