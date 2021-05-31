function getUrl(artist, songTitle) {
    return `https://api.lyrics.ovh/v1/${artist}/${songTitle}`;
}

function showLyrics(artist, songTitle) {
    const url = getUrl(artist, songTitle);

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data.lyrics);
        });
    });
}

showLyrics("Led Zeppelin", "Stairway to heaven");