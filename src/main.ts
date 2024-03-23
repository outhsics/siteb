import { createApp } from "vue";
// import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
// import '@vuemap/vue-amap/dist/style.css'
import App from "./App.vue";
import router from './router/index.js'

import "~/styles/base.css";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

// import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// initAMapApiLoader({
//     key: '03475568cf97044ee9e05ed1e4c4c256',
//     securityJsCode: 'securityJsCode', // 新版key需要配合安全密钥使用
//   })
const app = createApp(App);
// app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
// app.use(VueAMap)
app.mount("#app");
