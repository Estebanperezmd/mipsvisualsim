document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');

    let currentStage = 0;

    function highlightStage() {
        // Resetear todas las etapas
        stages.forEach(stage => stage.style.backgroundColor = '#f0f0f0');
        
        // Resaltar la etapa actual
        if (currentStage < stages.length) {
            stages[currentStage].style.backgroundColor = '#a0d8f0';
            currentStage++;
            setTimeout(highlightStage, 1000); // Espera 1 segundo antes de pasar a la siguiente etapa
        }
    }

    // Iniciar la animación al cargar la página
    highlightStage();
});
