document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    // Sample data for news articles
    const newsData = [
        { title: "Headline 1", image: "img/IMG_0087.JPG", content: "Lorem ipsum dolor sit amet..." },
        { title: "Headline 2", image: "news2.jpg", content: "Lorem ipsum dolor sit amet..." },
        // Add more news articles as needed
    ];

    // Render news articles
    newsData.forEach(articleData => {
        const articleElement = document.createElement("article");

        // Add a class to the article element
        articleElement.classList.add("news-article");

        articleElement.innerHTML = `
            <img class="article-image" src="${articleData.image}" alt="${articleData.title}">
            <h2>${articleData.title}</h2>
            <p>${articleData.content}</p>
            <a href="#">Read more</a>
        `;

        app.appendChild(articleElement);

       
    });
});
