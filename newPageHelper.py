import os
from shutil import copy


class newPageHelper():
    def __init__(self) -> None:
        self.new_page_conf_string = ''

    def newHTML(self, name):
        copy('public/sample.html', f'public/{self.model_name}/{name}.html')

    def newTemplate(self, name):
        copy('src/App.vue', f'src/pages/{self.model_name}/{name}.vue')

    def newMainJS(self, name):
        code = '''import Vue from 'vue'
    import BootstrapVue from "bootstrap-vue";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-vue/dist/bootstrap-vue.min.css';

    import App from './pages/{model_name}/{name}';

    Vue.use(BootstrapVue);

    Vue.prototype.$isDev = true;
    Vue.config.productionTip = false;

    new Vue({{
    render: h => h(App),
    }}).$mount('#app')'''.format(model_name=self.model_name, name=name)
        with open(f'src/{name}.js', 'w') as f:
            f.write(code)

    def setModelName(self, model_name):
        self.model_name = model_name

    def newPage(self, page_name):
        self.newHTML(page_name)
        self.newMainJS(page_name)
        self.newTemplate(page_name)
        # conf_string = f'''
        # {page_name}_page: {{
        #     entry: 'src/{page_name}.js',
        #     template: 'public/{self.model_name}/{page_name}.html',
        #     filename: '{page_name}.html',
        #     title: '{page_name}'
        # }},'''
        # self.new_page_conf_string += conf_string
        

if __name__ == '__main__':
    helper = newPageHelper()
#     c = {
#         'project': ['description', 'design', 'experiment', 'result', 'engineering', 'implementation'],
#         'model': ['introduction', 'models_and_results', 'discussion'],
#         'safety': ['safety'],
#         'human_practice': ['human_practice', 'partnership', 'communication'],
#         'parts': ['parts', 'contribution'],
#         'team': ['members', 'attributions', 'notebook']
#     }

    c = {
        'human_practice': ['collaboration']
    }

    for model_name in c.keys():
        helper.setModelName(model_name)
        print('new page name is ?')
        for new_page_name in c[model_name]:
            helper.newPage(new_page_name)
            print(f'create new page {new_page_name}')
    # try:
    # except:
    #     print('error')
    # finally:
    print(helper.new_page_conf_string)


