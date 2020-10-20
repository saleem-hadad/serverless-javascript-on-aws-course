function handleSearchForm() {
    // if a user submitted the form with "video1" value, then redirect to  https://www.youtube.com/watch?v=-5KAN9_CzSA
    // if a user submitted the form with "video1" value, then redirect to https://www.youtube.com/watch?v=Oh6QSomwTaQ&ab_channel=RelaxCafeMusic

    // 1. get the value of the search input
    let inputElement = document.getElementById('search');

    // 2. check if the value is "video1" or "video2"
    let videos = {
        video1 : "https://www.youtube.com/watch?v=-5KAN9_CzSA",
        video2: "https://www.youtube.com/watch?v=Oh6QSomwTaQ",
    };

    if(inputElement.value in videos) {
        return window.location.href = videos[inputElement.value];
    }

    // 4. if the value not exists, then show a warning message on the page
    let errorElement = document.getElementById('error');
    errorElement.innerHTML = "The video you're looking for doesn't exists!";
}