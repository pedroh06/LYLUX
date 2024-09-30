document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('suggestions');

    const suggestions = [
        { text: 'Ciência de Dados', url: 'area_ciencia_dados.html' },
        { text: 'Back-end', url: 'area_backend.html' },
        { text: 'Front-end', url: 'area_frontend.html' },
        { text: 'Redes', url: 'area_redes.html' }
    ];

    let currentIndex = 0; // Controla o índice da sugestão selecionada

    function showSuggestions(query = '') {
        // Só mostra sugestões se houver texto no input
        if (query.trim() === '') {
            suggestionsContainer.classList.remove('show');
            return;
        }
        
        suggestionsContainer.innerHTML = '';
        currentIndex = 0; // Reseta a seleção ao exibir novas sugestões

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

    function highlightSuggestion(index) {
        const items = suggestionsContainer.querySelectorAll('.suggestion-item');
        items.forEach(item => item.classList.remove('highlighted')); // Remove o destaque de todos os itens
        if (index >= 0 && index < items.length) {
            items[index].classList.add('highlighted'); // Adiciona destaque ao item selecionado
            items[index].scrollIntoView({ block: 'nearest' }); // Garante que o item esteja visível
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
    // Adicionando navegação via teclado
    searchInput.addEventListener('keydown', (event) => {
        const items = suggestionsContainer.querySelectorAll('.suggestion-item');

        if (event.key === 'ArrowDown') {
            // Move para baixo
            currentIndex = (currentIndex + 1) % items.length;
            highlightSuggestion(currentIndex);
        } else if (event.key === 'ArrowUp') {
            // Move para cima
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            highlightSuggestion(currentIndex);
        } else if (event.key === 'Enter') {
            // Seleciona o item destacado
            if (currentIndex >= 0 && currentIndex < items.length) {
                items[currentIndex].click();
            }
        }
    });
});


function markAsWatched(button) {
    const card = button.closest('.card');
    card.classList.toggle('watched');
}

//Função de tabs (pagina curso_matematica)
function abrirTab(evt, nome) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nome).style.display = "block";
    evt.currentTarget.className += " active";
}
