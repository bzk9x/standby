//onCreate

window.addEventListener('load', function() {
    this.document.body.classList.add('body-fade-in')
})

//menu 
document.getElementById('back').addEventListener('click', function() {
    window.location.href = 'index.html';
});

//read manifest
fetch('theme/manifest.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('theme-name').textContent = data.theme_name;
        document.getElementById('theme-description').textContent = data.theme_description;
    })
    .catch(error => console.error('Error loading theme manifest:', error));

//open themes folder
//i was lazy

//get themes
document.getElementById('open-theme-folder').addEventListener('click', function() {
    const url = 'https://discord.com/invite/8eg8d24WKC';
    window.electron.openUrl(url);
});