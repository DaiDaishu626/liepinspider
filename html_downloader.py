#-*- coding:utf-8 -*-
#本模块为爬虫下载器，用以打开和读取网页内容
import random
from time import sleep
from urllib import request
class HtmlDownloader(object):
    def __init__(self):
        self.proxys = []
        with open('avb_ip.txt','r',encoding='utf-8') as f:
            for proxy_host in f.readlines():
                proxy = {"http": proxy_host}
                self.proxys.append(proxy)
        self.header = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

    def download(self, url, i):
        if url is None:
            return None
        else:
            proxy_support = request.ProxyHandler(self.proxys[i])
            opener = request.build_opener(proxy_support)
            request.install_opener(opener)
            req = request.Request(url, headers=self.header)
            response = request.urlopen(req)
            #print('2', response.read())
            #print(response.getcode())

            if response.getcode() != 200:
                print(response.getcode())
                return None
            else:
                sleep(random.randint(5,10))
                return response.read()