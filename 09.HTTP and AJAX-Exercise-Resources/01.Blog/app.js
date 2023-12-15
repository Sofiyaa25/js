function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog/';
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const postSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    allPosts = {};

    loadPostsButton.addEventListener('click', async () => {
        postSelect.innerHTML = '';
        const response = await fetch(baseURL + 'posts')
        allPosts = await response.json();

        for (const [postId, postObject] of Object.entries(allPosts)) {
            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObject.title;
            postSelect.appendChild(option);
        }


    });

    viewButton.addEventListener('click', async () => {
        const postId = postSelect.value;
        postBody.textContent=allPosts[postId].body;
        postTitle.textContent=allPosts[postId].title;

        const response = await fetch(baseURL+'comments');
        const commentsInfo = await response.json();
        
        const filteredComments = Object.values(commentsInfo).filter(e=> e.postId === postId);
        filteredComments.forEach(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            postComments.appendChild(li);

        });

    });

}

attachEvents();