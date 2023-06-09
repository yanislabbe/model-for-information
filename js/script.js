window.addEventListener('DOMContentLoaded', () => {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            const info1 = document.getElementById('info1');
            const info2 = document.getElementById('info2');
            const info3 = document.getElementById('info3');
            const info4 = document.getElementById('info4');
            const info5 = document.getElementById('info5');
            const info6 = document.getElementById('info6');
            const info7 = document.getElementById('info7');

            if (data.email) {
                info1.style.display = 'flex';
                document.getElementById('email').textContent = data.email;
            } else {
                info1.style.display = 'none';
            }

            if (data['add-to-contacts']) {
                info2.style.display = 'flex';
                const addToContactsLink = document.getElementById('add-to-contacts').querySelector('a');

                const firstName = encodeURIComponent(data.firstName);
                const lastName = encodeURIComponent(data.lastName);
                const role = encodeURIComponent(data.role);
                const companyName = encodeURIComponent(data.companyName);
                const phone = encodeURIComponent(data.phone);
                const email = encodeURIComponent(data.email);
                const website = encodeURIComponent(data.website);

                const addToContactsURL = `https://yanislabbe.github.io/model-for-information/?label=Add%20To%20Contacts&firstName=${firstName}&lastName=${lastName}&role=${role}&companyName=${companyName}&phone=${phone}&email=${email}&website=${website}`;

                addToContactsLink.href = addToContactsURL;
            } else {
                info2.style.display = 'none';
            }

            if (data['call-now'].trim() !== "") {
                info3.style.display = 'flex';
                document.getElementById('call-now').textContent = data['call-now'];
            } else {
                info3.style.display = 'none';
            }

            if (data['hours-of-operation']) {
                info4.style.display = 'flex';
                document.getElementById('hours-of-operation').textContent = data['hours-of-operation'];
            } else {
                info4.style.display = 'none';
            }

            if (data.facebook) {
                info5.style.display = 'flex';
                const facebookLink = document.getElementById('facebook').querySelector('a');
                facebookLink.textContent = data.facebook;
                facebookLink.href = data.facebook;
            } else {
                info5.style.display = 'none';
            }

            if (data.instagram) {
                info6.style.display = 'flex';
                const instagramLink = document.getElementById('instagram').querySelector('a');
                instagramLink.textContent = data.instagram;
                instagramLink.href = data.instagram;
            } else {
                info6.style.display = 'none';
            }

            if (data.website) {
                info7.style.display = 'flex';
                const websiteLink = document.getElementById('website').querySelector('a');
                websiteLink.textContent = data.website;
                websiteLink.href = data.website;
            } else {
                info7.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
window.addEventListener('DOMContentLoaded', () => {
    fetch('json/data.json')
        .then(response => response.json())
        .then(data => {
            const info1 = document.getElementById('info1');
            const info2 = document.getElementById('info2');
            const info3 = document.getElementById('info3');
            const info4 = document.getElementById('info4');
            const info5 = document.getElementById('info5');
            const info6 = document.getElementById('info6');
            const info7 = document.getElementById('info7');

            if (data.email) {
                info1.style.display = 'flex';
                document.getElementById('email').textContent = data.email;
            } else {
                info1.style.display = 'none';
            }

            if (data['add-to-contacts']) {
                info2.style.display = 'flex';
                const addToContactsLink = document.getElementById('add-to-contacts').querySelector('a');
                const addToContactsData = data['add-to-contacts'];

                addToContactsLink.textContent = 'Add To Contacts';
                addToContactsLink.href = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify({
                    "first_name": addToContactsData.firstName,
                    "last_name": addToContactsData.lastName,
                    "phone_numbers": [{ "value": addToContactsData.phone }],
                    "email_addresses": [{ "value": addToContactsData.email }],
                    "postal_addresses": [{ "street": addToContactsData.address }],
                    "urls": [{ "value": addToContactsData.website }]
                }))}`;
                addToContactsLink.download = 'contact.vcf';
            } else {
                info2.style.display = 'none';
            }

            if (data['call-now'].trim() !== "") {
                info3.style.display = 'flex';
                document.getElementById('call-now').textContent = data['call-now'];
            } else {
                info3.style.display = 'none';
            }

            if (data['hours-of-operation']) {
                info4.style.display = 'flex';
                document.getElementById('hours-of-operation').textContent = data['hours-of-operation'];
            } else {
                info4.style.display = 'none';
            }

            if (data.facebook) {
                info5.style.display = 'flex';
                const facebookLink = document.getElementById('facebook').querySelector('a');
                facebookLink.textContent = data.facebook;
                facebookLink.href = data.facebook;
            } else {
                info5.style.display = 'none';
            }

            if (data.instagram) {
                info6.style.display = 'flex';
                const instagramLink = document.getElementById('instagram').querySelector('a');
                instagramLink.textContent = data.instagram;
                instagramLink.href = data.instagram;
            } else {
                info6.style.display = 'none';
            }

            if (data.website) {
                info7.style.display = 'flex';
                const websiteLink = document.getElementById('website').querySelector('a');
                websiteLink.textContent = data.website;
                websiteLink.href = data.website;
            } else {
                info7.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
