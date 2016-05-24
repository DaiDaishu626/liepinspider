import html_outputer

count = 0
with open('urllist.txt', 'r', encoding='utf-8') as f:
    for url in f.readlines():
        count += 1

print(count)