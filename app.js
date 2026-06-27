const form = document.querySelector("form")
const todoUlContainer = document.querySelector("#todoUl")
const todoInput = document.querySelector("#todoInput")

const check = (e) => {
    const checkBtn = e.target

    const input = checkBtn.parentElement.querySelector("input")
    input.classList.toggle("line-through")
}

const remove = (e) => {
    e.target.parentElement.remove()
}

const edit = (e) => {
    const editBtn = e.target
    const input = editBtn.parentElement.querySelector("input")

    if (editBtn.dataset.action === "edit") {
        input.disabled = false;
        input.focus()
        console.log("clicked")
        editBtn.dataset.action = "save"
        
        editBtn.classList.remove("fa", "fa-pencil")
        editBtn.classList.add("fa", "fa-bookmark")
    } else {
        input.disabled = true;

        editBtn.dataset.action = "edit"
        editBtn.classList.add("fa-pencil")
        editBtn.classList.remove("fa-bookmark")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (todoInput.value !== "") {

        const div = document.createElement("div")
        div.classList.add("flex", "bg-gray-800", "p-3", "rounded-[4rem]", "text-white", "space-x-3", "border")

        const userInput = document.createElement("input")
        userInput.classList.add("bg-gray-800", "p-2", "rounded-lg", "text-white", "w-full")
        userInput.value = todoInput.value.trim()
        userInput.disabled = true;

        const check = document.createElement("button")
        check.classList.add("fa", "fa-check", "my-auto", "bg-gray-700", "rounded-full", "p-2")
        check.dataset.action = "check"

        const x = document.createElement("button")
        x.classList.add("fa", "fa-times", "my-auto", "bg-gray-700", "rounded-full", "p-2")
        x.dataset.action = "remove"

        const editBtn = document.createElement("button")
        editBtn.classList.add("fa", "fa-pencil", "my-auto", "bg-gray-700", "rounded-full", "p-2")
        editBtn.dataset.action = "edit"

        div.append(userInput, check, x, editBtn)
        todoUlContainer.append(div)

        todoInput.value = ""
    } else {

        todoInput.placeholder = "Input a task!"
        setTimeout(() => {
            todoInput.placeholder = "Add a task"
        }, 1000);

    }
})

todoUlContainer.addEventListener("click", (e) => {
    const action = e.target.dataset.action

    if (action === "check") {
        check(e)
    }
    if (action === "remove") {
        remove(e)
    }
    if (action === "edit" || action === "save") {
        edit(e)
    }
})



