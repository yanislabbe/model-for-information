window.addEventListener('DOMContentLoaded', () => {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('email').value = data.email;
            document.getElementById('add-to-contacts').value = data["add-to-contacts"];
            document.getElementById('call-now').value = data["call-now"];
            document.getElementById('hours-of-operation').value = data["hours-of-operation"];
            document.getElementById('facebook').value = data.facebook;
            document.getElementById('instagram').value = data.instagram;
            document.getElementById('website').value = data.website;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    const form = document.getElementById('modify-form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);
        const modifiedData = {};
        for (let [key, value] of formData.entries()) {
            modifiedData[key] = value;
        }

        fetch('update_data.php', {
            method: 'POST',
            body: JSON.stringify(modifiedData)
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('Data updated successfully:', responseData);
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });
    });
});
