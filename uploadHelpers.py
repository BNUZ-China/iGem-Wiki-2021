import os
from subprocess import run
import pyperclip
import webbrowser
from urllib import parse

location = 'production'

def runOnSingleFolder(folder):
    file_list = os.listdir(os.path.join(location, folder))

    for file in file_list:
        file_noextend = file[:-(len(folder) + 1)]
        url = f'https://2021.igem.org/wiki/index.php?title=Template:BNUZ-China/{folder}/{parse.quote(file_noextend)}&action=edit'
        webbrowser.open(url)
        print(url)
        with open(os.path.join(location, folder, file), encoding='utf-8') as f:
            content = f.read()
            pyperclip.copy(content)
        print('相应js代码已经复制，请粘贴至打开的网页，完成后请回车')
        input()

runOnSingleFolder('js')
runOnSingleFolder('css')
