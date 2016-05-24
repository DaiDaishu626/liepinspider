#-*- coding:utf-8 -*-
#本模块为输出程序，输出格式包括"txt"和"csv"
import csv

class HtmlOutputer(object):
    def __init__(self):
        pass

    def output_html(self,data):
        f = open('job_data.csv', 'a', encoding='gbk')
        writer = csv.writer(f)
        writer.writerow([data['url'], data['title'], data['salary'],data['position'],data['content']])

    def output_urllist(self, name='default.txt',urls=[]):
        with open(name,'w') as f:
            for url in urls:
                f.write(url)

