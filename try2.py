#本程序的目的为寻找"url_readed.txt","urllist.txt"两个文件中重复的url，并输出覆盖原来的"urllist.txt".当时由于出现了莫名的错误，
# 导致list中已经被爬过的没有删除.
import re

count = 0
urls_readed = []
with open('url_readed.txt','r',encoding='utf-8') as f:
    for url in f.readlines():
        urls_readed.append(re.sub(r'[\s\"\n]','',url))
while '' in urls_readed:
    urls_readed.remove('')
print('urls_readed',len(set(urls_readed)))
#print(urls_readed)

urls_waited = []
with open('urllist.txt','r',encoding='utf-8') as f:
    for url in f.readlines():
        urls_waited.append(re.sub(r'[\s\"\n]','',url))
print('urls_waited',len(set(urls_waited)))

for url in urls_readed:
    while url in urls_waited:
        urls_waited.remove(url)
print('urls_waited dealed with',len(set(urls_waited)))

with open('urllist.txt', 'w') as f:
    for url in urls_waited:
        f.write(url+'\n')