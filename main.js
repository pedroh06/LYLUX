document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('suggestions');

    const suggestions = [
        { text: 'Ciência de Dados', url: 'area_ciencia_dados.html' },
        { text: 'Back-end', url: 'area_backend.html' },
        { text: 'Front-end', url: 'area_frontend.html' },
        { text: 'Redes', url: 'area_redes.html' }
    ];

    function showSuggestions(query = '') {
        suggestionsContainer.innerHTML = '';

        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.text.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredSuggestions.length > 0) {
            suggestionsContainer.classList.add('show');

            filteredSuggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion-item');
                suggestionElement.textContent = suggestion.text;
                suggestionElement.addEventListener('click', () => {
                    window.location.href = suggestion.url;
                });
                suggestionsContainer.appendChild(suggestionElement);
            });
        } else if (query !== '') {
            suggestionsContainer.classList.add('show');
            const noResults = document.createElement('div');
            noResults.classList.add('suggestion-item');
            noResults.textContent = 'Nenhum resultado encontrado';
            suggestionsContainer.appendChild(noResults);
        } else {
            suggestionsContainer.classList.add('show');
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion-item');
                suggestionElement.textContent = suggestion.text;
                suggestionElement.addEventListener('click', () => {
                    window.location.href = suggestion.url;
                });
                suggestionsContainer.appendChild(suggestionElement);
            });
        }
    }

    searchInput.addEventListener('click', (event) => {
        event.stopPropagation(); 
        showSuggestions(searchInput.value); 
    });

    searchInput.addEventListener('input', () => {
        showSuggestions(searchInput.value); 
    });

    document.addEventListener('click', () => {
        suggestionsContainer.classList.remove('show');
    });

    suggestionsContainer.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});
