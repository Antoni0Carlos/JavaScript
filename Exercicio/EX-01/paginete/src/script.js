const data = Array.from({ length: 100 })
        .map((_, i) => `Item ${(i + 1)}`)

/*=================================*/
const html = {
    get(element) {
        return document.querySelector(element);
        
        let perPage = 5;
        const state = {
            page: 1,
            perPage,
            totalPage:  Math.ceil(data.length / perPage)
        }
    }
}

const controls = {
    next() {
       state.page++;
       if (state.page > state.totalPage) {
           state.page--;
       }
    },
    prev() {
        state.page--
        if(state.page < 1) {
            state.page++;
        }
    },
    goTo(page) {
        if (page < 1) {
            page = 1;
        }
        state.page = page;

        if (page > state.totalPage) {
            state.page = state.totalPage;
        }
    },
    createListeners() {
        html.get('.first').addEventListener('click',  () =>{
            controls.goTo(1)
        })

        html.get('.last').addEventListener('click', () =>{
            controls.goTo(state.totalPage)
            update()
        })

        html.get('.next').addEventListener('click', () =>{
            controls.next()
            update()
        })
        html.get('.prev').addEventListener('click', () =>{
            controls.prev()
            update()
        })
    }
}

const list = {
    create(item) {
        const div = document.createElement('div');
        div.innerHTML = item;
        html.get('.list').appendChild(div)
    },
    update() {
        html.get('.list').innerHTML = ""

        let page = state.page - 1;
        let start = page * state.perPage;
        let end = start + state.perPage;

        const paginatedItems = data.slice(start, end)
        paginatedItems.forEach((list.create) )
        console.log(data.slice(1, 6))
    }
}

controls.createListeners()

function update() {
    list.update();
}

function init() {
    controls.createListeners();
}

init()
