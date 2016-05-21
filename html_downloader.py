#-*- coding:utf-8 -*-
import random
from time import sleep
from urllib import request
class HtmlDownloader(object):
    def download(self,url):
        if url is None:
            return None
        else:
            response = request.urlopen(url)
            if response.getcode() != 200:
                print(response.getcode())
                return None
            else:
                sleep(random.randint(180, 300))
                return response.read()