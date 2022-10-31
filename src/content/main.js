import {createApp} from 'vue'
import app from './components/app.vue'

joinContent(app)

/**
 *
 * @param element
 */
function joinContent(element) {
    const div = document.createElement('div')
    div.id = 'contentApp'
    document.body.appendChild(div)
    createApp(element).mount('#contentApp')
}
