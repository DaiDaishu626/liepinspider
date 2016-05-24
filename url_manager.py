#-*- coding:utf-8 -*-
#用以管理内容页的url
class UrlManager(object):
    def __init__(self):
        self.new_urls = set() #用set可以防止url重复
        self.old_urls = set()

    def add_new_url(self, url):
        if url is None:
            return
        if url not in self.new_urls and url not in self.old_urls:
            self.new_urls.add(url)

    def add_new_urls(self, urls):
        if urls is None or len(urls) ==0:
            return
        for url in urls:
            self.add_new_url(url)

    def has_new_url(self):
        return len(self.new_urls) !=0

    def get_new_url(self):
        new_url = self.new_urls.pop() #pop()会将某元素从list中获取并删除
        self.old_urls.add(new_url)
        return new_url

    def new_url_list(self):
        return self.new_urls

#用以生成最初的待爬取url
class InitUrlList(object):
    def __init__(self):
        self.new_urls=[]

    def init_url_list(self):
        self.new_urls.append('https://www.liepin.com/zhaopin/?sfrom=click-pc_homepage-centre_searchbox-search_new&key=%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90')
        for i in range (1,100):
            new_url = 'https://www.liepin.com/zhaopin/?sfrom=click-pc_homepage-centre_searchbox-search_new&key=%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90&curPage='+str(i)
            self.new_urls.append(new_url)
        return self.new_urls