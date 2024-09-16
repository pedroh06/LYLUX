document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('suggestions');

    const suggestions = [
        { text: 'Ciência de Dados', url: 'area_ciencia_dados.html' },
        { text: 'Back-end', url: 'area_backend.html' },
        { text: 'Front-end', url: 'area_frontend.html' }
    ];

    function showSuggestions() {
        const query = searchInput.value.toLowerCase();
        suggestionsContainer.innerHTML = '';

        if (query) {
            const filteredSuggestions = suggestions.filter(suggestion =>
                suggestion.text.toLowerCase().includes(query)
            );

            if (filteredSuggestions.length > 0) {
                suggestionsContainer.classList.add('show'); 
            } else {
                suggestionsContainer.classList.remove('show'); 
            }

            filteredSuggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.classList.add('suggestion-item');
                suggestionElement.textContent = suggestion.text;
                suggestionElement.addEventListener('click', () => {
                    window.location.href = suggestion.url;
                });
                suggestionsContainer.appendChild(suggestionElement);
            });

            if (filteredSuggestions.length === 0) {
                const noResults = document.createElement('div');
                noResults.classList.add('suggestion-item');
                noResults.textContent = 'Nenhum resultado encontrado';
                suggestionsContainer.appendChild(noResults);
            }
        } else {
            suggestionsContainer.classList.remove('show'); 
        }
    }

    searchInput.addEventListener('input', showSuggestions);
});
