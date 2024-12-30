const output = document.getElementById("output")
const button = document.getElementById("get-posts-btn")
const form = document.getElementById("add-post-form")

async function showPosts() {
    const res = await fetch("http://localhost:3000/api/posts")
    try {
    if (!res.ok) {
        throw new Error("Failed to fetch posts")

    }

    const posts = await res.json()
    output.innerHTML = ""

    posts.forEach((post) => {
        const newPost = document.createElement("div")
        newPost.textContent = post.title
        output.appendChild(newPost)
    });
    } catch (error) {
        console.log("Error fetching posts", error)
    }
}

// Submit new post
async function addPost(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const title = formData.get("title")
    try {
        const res = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title})
        })

        if (!res.ok) {
            throw new Error("Failed too add post")
        }

        const newPost = await res.json()
        const postEl = document.createElement("div")
        postEl.textContent = newPost.title
        output.appendChild(postEl)
        showPosts()
    } catch (error) {
        console.log("Error adding post", error)
    }
}


// Event listeners
button.addEventListener("click", showPosts)
form.addEventListener("submit", addPost)