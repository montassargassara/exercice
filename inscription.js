document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscriptionForm');
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const telephoneInput = document.getElementById('telephone');
    const dateMatchInput = document.getElementById('dateMatch');
    const emailInput = document.getElementById('email');
    const nomError = document.getElementById('nomError');
    const prenomError = document.getElementById('prenomError');
    const telephoneError = document.getElementById('telephoneError');
    const dateMatchError = document.getElementById('dateMatchError');
    const emailError = document.getElementById('emailError');
    const nomSuccess = document.getElementById('nomSuccess');
    const prenomSuccess = document.getElementById('prenomSuccess');
    const telephoneSuccess = document.getElementById('telephoneSuccess');
    const dateMatchSuccess = document.getElementById('dateMatchSuccess');
    const emailSuccess = document.getElementById('emailSuccess');

    form.addEventListener('submit', function(event) {
        let hasError = false;

        // Validation du champ nom
        if (!/^[A-Za-z]+$/.test(nomInput.value) || nomInput.value.length < 1) {
            nomError.textContent = 'Le nom doit contenir que des lettres et avoir au moins 1 caractère.';
            nomError.style.color = 'red';
            hasError = true;
        } else {
            nomError.textContent = '';
            nomSuccess.textContent = 'Nom valide.';
            nomSuccess.style.color = 'green';
            nomInput.style.border = '1px solid green'; // Bordure verte en cas de succès
        }

        // Validation du champ prénom
        if (prenomInput.value.length < 1) {
            prenomError.textContent = 'Le prénom doit avoir au moins 1 caractère.';
            prenomError.style.color = 'red';
            hasError = true;
        } else {
            prenomError.textContent = '';
            prenomSuccess.textContent = 'Prénom valide.';
            prenomSuccess.style.color = 'green';
            prenomInput.style.border = '1px solid green'; // Bordure verte en cas de succès
        }

        // Validation du champ numéro de téléphone
        if (!/^\d{8}$/.test(telephoneInput.value)) {
            telephoneError.textContent = 'Le numéro de téléphone doit contenir exactement 8 chiffres.';
            telephoneError.style.color = 'red';
            hasError = true;
        } else {
            telephoneError.textContent = '';
            telephoneSuccess.textContent = 'Numéro de téléphone valide.';
            telephoneSuccess.style.color = 'green';
            telephoneInput.style.border = '1px solid green'; // Bordure verte en cas de succès
        }

        // Validation de la date du match
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Réinitialiser les heures, minutes, secondes et millisecondes
        const matchDate = new Date(dateMatchInput.value);
        if (matchDate < currentDate || matchDate > new Date('2023-12-30')) {
            dateMatchError.textContent = 'La date du match doit être comprise entre le 1er septembre 2023 et le 30 décembre 2023.';
            dateMatchError.style.color = 'red';
            hasError = true;
        } else {
            dateMatchError.textContent = '';
            dateMatchSuccess.textContent = 'Date du match valide.';
            dateMatchSuccess.style.color = 'green';
            dateMatchInput.style.border = '1px solid green'; // Bordure verte en cas de succès
        }

        // Validation de l'email
        const emailValue = emailInput.value.trim();
        if (!emailValue.endsWith('@esprit.tn')) {
            emailError.textContent = 'L\'email doit se terminer par "@esprit.tn".';
            emailError.style.color = 'red';
            hasError = true;
        } else {
            emailError.textContent = '';
            emailSuccess.textContent = 'Email valide.';
            emailSuccess.style.color = 'green';
            emailInput.style.border = '1px solid green'; // Bordure verte en cas de succès
        }

        if (hasError) {
            event.preventDefault(); // Empêcher la soumission du formulaire si des erreurs sont présentes
        } else {
            alert('Formulaire validé avec succès !'); // Afficher un message de succès
        }
    });

    // Événement keyup pour la validation en temps réel de l'email
    emailInput.addEventListener('keyup', function() {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailSuccess = document.getElementById('emailSuccess');

        if (!emailValue.endsWith('@esprit.tn')) {
            emailError.textContent = 'L\'email doit se terminer par "@esprit.tn".';
            emailError.style.color = 'red';
            emailSuccess.textContent = '';
        } else {
            emailError.textContent = '';
            emailSuccess.textContent = 'Email valide.';
            emailSuccess.style.color = 'green';
        }
    });
});
