module.exports = {
    addPost: post => {
        post.save()
        .then(savedPost => console.log('post was saved.'))
        .catch(er => console.log(er));
    }
};