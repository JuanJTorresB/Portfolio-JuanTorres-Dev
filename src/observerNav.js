// scrollObserver.js
export const initScrollObserver = () => {
    // Selecciona todas las secciones y los enlaces de la navbar
    const sections = document.querySelectorAll('.main-section');
    console.log(sections);

    // Crear un observer para detectar cuando una sección entra en el viewport
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                console.log(id);
                
                // Corregido: Uso de comillas dobles o simples
                const navLink = document.querySelector(`h4[identificador="${id}"]`);

                if (entry.isIntersecting) {
                    
                    // Cuando la sección entra en el viewport, marcar el enlace como activo
                    navLink?.classList.add('active');
                } else {
                    
                    // Cuando la sección sale del viewport, quitar la clase activa
                    navLink?.classList.remove('active');
                }
            });
        },
        { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
    );

    // Observar todas las secciones
    sections.forEach((section) => {
        observer.observe(section);
    });

    // Limpiar el observer cuando ya no sea necesario
    return () => {
        observer.disconnect();
    };
};
