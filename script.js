document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Here you would typically send a request to your server to authenticate
    // For this example, we'll just switch to the feed page
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('feed-page').style.display = 'block';
});

document.getElementById('post-btn').addEventListener('click', () => {
    document.getElementById('post-form').style.display = 'block';
});

document.getElementById('post-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const image = document.getElementById('post-image').files[0];
    const caption = document.getElementById('post-caption').value;
    // Here you would typically send the post data to your server
    // For this example, we'll just add a post to the feed
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <img src="${URL.createObjectURL(image)}" alt="Post Image">
        <p>${caption}</p>
    `;
    document.getElementById('feed-container').appendChild(post);
    document.getElementById('post-form').style.display = 'none';
});