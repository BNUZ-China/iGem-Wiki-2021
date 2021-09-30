# BNUZ-China iGem Wiki

## 添加新页面
1. 在`public`文件夹下复制一份`sample.html`文件，并将文件名改为新页面名称，例如`project.html`
2. 在`components`文件夹下复制一份`App.vue`，并写模板
3. 在`components`文件夹下复制一份`main.js`，修改第6行`import`的路径为第二步的`vue`文件
4. 在`vue.config.js`中修改`config`变量的`entry`模块

## 添加静态文件
1. 将文件上传，得到一个直链
2. 检查`components/AppRoot.vue`中的全局变量`window.isDev`, 若为`true`则引用本地文件, 若为`false`则引用网络文件
3. 在组件中导入图片时，使用
```javascript
import window_pic from '@/assets/window.png';
import conf from "@/wiki_config"; // 快捷键vconf

export default {
  name: "window",
  data() {
    return {
      window_pic: conf.isDev ? window_pic : 'https://2021.igem.org/wiki/images/2/2e/T--BNUZ-China--homepage_hospital.png'
    }
  }
}
```

## 上传与部署
1. 编译文件，注意`components/AppRoot.vue`中的全局变量`window.isDev`必须为`false`。
2. 运行`uploadHelpers.py`，注意安装依赖`pyperclip`
3. 按提示操作
4. 按iGem文档上传`html`文件