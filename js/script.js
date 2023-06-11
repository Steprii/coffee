function showInConsole(someItem) {
    console.log(someItem)
}

let burger = document.querySelector("#burger");
let sidebar = document.querySelector("#sidebar");
const closeSidebar = document.querySelector('.sidebar__close');

closeSidebar.addEventListener('click', (event) => {
    sidebar.classList.remove("open");
    burger.classList.remove("open");
})

burger.addEventListener(
    "click", (e) => {
        burger.classList.toggle("open");
        sidebar.classList.toggle("open");
    }
)

const btns = document.querySelectorAll(".btn"),
      modal = document.querySelector('.modal');

function openModal () {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = "hidden";
}
function closeModal () {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

btns.forEach(item => {
    item.addEventListener('click', () => {
        openModal();
    })
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal ();
    }
})