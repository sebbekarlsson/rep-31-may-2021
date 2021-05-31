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

const search = (query) => results.filter(
    item => item.title.toLowerCase().includes(query.toLowerCase() ||
    item.description.toLowerCase().includes(query.toLowerCase()))
);

const found = search("spider");

console.log(found);