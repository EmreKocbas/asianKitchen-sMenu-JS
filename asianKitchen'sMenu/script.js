// Define an array of menu items with their properties
const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 11.99,
        img:
            "https://fullofplants.com/wp-content/uploads/2023/08/Vegan-Jjajang-Tteokbokki-Non-Spicy-Korean-Dish-thumb.jpg",

        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Ramen.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://assets.bonappetit.com/photos/624f3dc73a6e981591892a9d/1:1/w_2800,h_2800,c_limit/0407-bibimbap-at-home-lede.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://takestwoeggs.com/wp-content/uploads/2022/02/Dan-Dan-Noodles-Dan-Dan-Mian-5overhead-sq.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://images.squarespace-cdn.com/content/v1/56801b350e4c11744888ec37/1612892513958-JJTRQSB464E2DNGVPCBE/Yangzhou+Fried+Rice+Square+reg+res.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://thejapanesepantry.com/cdn/shop/articles/Onigiri.jpg?v=1703882625",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.beyondkimchee.com/wp-content/uploads/2023/11/jajangmyeon-black-bean-noodles-thumbnail.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://mission-food.com/wp-content/uploads/2015/06/Ants-Climbing-a-Tree-Ma-Yi-Shang-Shu-Featured.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.honestfoodtalks.com/wp-content/uploads/2022/02/Dorayaki-recipe-red-bean.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    }
]

// Extract unique categories from the menu array
const values = menu.map(obj => obj.category);

// Function to execute when the window loads
window.onload = function () {
    // Event listener for the "Japan" button
    document.getElementById("japan").addEventListener("click", japan);
    function japan() {
        // Select all menu items
        let items = document.querySelectorAll(".item");
        // Loop through each menu item
        for (let i = 0; i < values.length; i++) {
            // Display items if they belong to the "Japan" category, hide otherwise
            items[i].style.display = (values[i] !== "Japan") ? "none" : "flex";
        }
    }

    // Event listener for the "Korea" button
    document.getElementById("korea").addEventListener("click", korea);
    function korea() {
        // Select all menu items
        let items = document.querySelectorAll(".item");
        // Loop through each menu item
        for (let i = 0; i < values.length; i++) {
            // Display items if they belong to the "Korea" category, hide otherwise
            items[i].style.display = (values[i] !== "Korea") ? "none" : "flex";
        }
    }

    // Event listener for the "China" button
    document.getElementById("china").addEventListener("click", china);
    function china() {
        // Select all menu items
        let items = document.querySelectorAll(".item");
        // Loop through each menu item
        for (let i = 0; i < values.length; i++) {
            // Display items if they belong to the "China" category, hide otherwise
            items[i].style.display = (values[i] !== "China") ? "none" : "flex";
        }
    }

    // Event listener for the "All" button
    document.getElementById("all").addEventListener("click", all);
    function all() {
        // Select all menu items
        let items = document.querySelectorAll(".item");
        // Loop through each menu item and display them all
        for (let i = 0; i < values.length; i++) {
            items[i].style.display = "flex";
        }
    }

    // Call the displayItem function to render menu items
    displayItem()
};

// Array to store rendered menu item elements
const items = [];

// Function to render menu items
function displayItem() {
    // Select the container for menu items
    const itemsContainer = document.querySelector("#items");
    itemsContainer.innerHTML = ""; // Clear the container

    // Loop through each menu item
    menu.forEach(item => {
        // Create a container for the item
        const container = document.createElement("div")
        container.classList.add("item")

        // Create an image element for the item
        const img = document.createElement("img");
        img.src = item.img;

        // Create a div for item details (title, price, description)
        const details = document.createElement("div");
        details.classList.add("item-details", "mx-4", "w-75");

        // Populate details with item information
        details.innerHTML = `
            <div>
            <h5 class="d-flex justify-content-between">${item.title} <span>$${item.price}</span></h5>
                
                <hr>
                <p>${item.desc}</p>
            </div>
        `;

        // Append image and details to the item container
        container.appendChild(img);
        container.appendChild(details);

        // Add the item container to the items array and to the items container
        items.push(container);
        itemsContainer.appendChild(container);
    });
}