const form = document.querySelector("form")
const todoUlContainer = document.querySelector("#todoUl")
const todoInput = document.querySelector("#todoInput")

const remove = (e) => {
    e.target.parentElement.remove()
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (todoInput.value !== "") {
        const todoListDiv = document.createElement("div")
        todoListDiv.classList.add("flex", "bg-gray-800", "p-3", "rounded-[4rem]", "text-white", "space-x-3", "border")

        const newLi = document.createElement("li")
        newLi.classList.add("bg-gray-800", "p-2", "rounded-lg", "text-white", "w-full")

        const check = document.createElement("button")
        check.classList.add("fa", "fa-check", "my-auto", "bg-gray-700", "rounded-full", "p-2")
        check.addEventListener("click", () => {
            newLi.classList.toggle("line-through")
        })

        const x = document.createElement("button")
        x.classList.add("fa", "fa-times", "my-auto", "bg-gray-700", "rounded-full", "p-2")
        x.addEventListener("click", remove)

        newLi.append(todoInput.value)
        todoListDiv.append(newLi, check, x)
        todoUlContainer.append(todoListDiv)

        todoInput.value = ""
    } else {

        todoInput.placeholder = "Input a task!"
        setTimeout(() => {
            todoInput.placeholder = "Add a task"
        }, 1000);

    }
})




