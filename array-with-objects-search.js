const results = [
    {                                                   // 0
        title: "Cats are cute",
        description: "Here are some cute cat pictures"
    },
    {                                                   // 1
        title: "Dogs are cute",
        description: "Here are some cute dog pictures"
    },
    {                                                   // 2
        title: "Spiders are not cute",
        description: "Dont look at this if you dont like spiders"
    }
];

function search(query) {
    const foundResults = [];
    const queryLower = query.toLowerCase();

    results.forEach(function(item){
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();

        // || = eller

        if (title.includes(queryLower) || description.includes(queryLower)) {
            foundResults.push(item);
        }
    });

    return foundResults;
}

const found = search("spider");

console.log(found);