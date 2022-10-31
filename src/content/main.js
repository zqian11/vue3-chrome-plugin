import {createApp} from 'vue'
import app from './components/app.vue'

joinContent(app)
injectJsInsert()

//  页面中注入DOM
function joinContent(element) {
    const div = document.createElement('div')
    div.id = 'contentApp'
    document.body.appendChild(div)
    createApp(element).mount('#contentApp')
}
// 页面中注入JS脚本
function injectJsInsert() {
    document.addEventListener('readystatechange', () => {
        const injectPath = 'js/inject.js'
        const script = document.createElement('script')

        script.setAttribute('type', 'text/javascript')
        script.src = chrome.extension.getURL(injectPath)
        document.body.appendChild(script)
    })
}
