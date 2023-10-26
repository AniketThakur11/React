function customreact(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute('target', reactElement.props
        [prop])

    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

const maincontainer = document.querySelector('#root')
const container =   customreact(reactElement, maincontainer)