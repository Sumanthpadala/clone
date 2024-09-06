document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-box').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

document.getElementById('lucky-button').addEventListener('click', () => {
    const query = document.getElementById('search-box').value;
    if (query) {
        window.location.href = `https://www.google.com/search?btnI=I’m+Feeling+Lucky&q=${encodeURIComponent(query)}`;
    }
});

document.getElementById('address-bar').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const url = document.getElementById('address-bar').value;
        if (url) {
            if (url.startsWith('http://') || url.startsWith('https://')) {
                window.location.href = url;
            } else {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
            }
        }
    }
});

document.getElementById('signup-button').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('cancel-button').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
});

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Sign up successful!');
    document.getElementById('signup-form').style.display = 'none';
});
