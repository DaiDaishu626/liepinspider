#-*- coding:utf-8 -*-
# 本模块为本爬虫程序的辅助调用程序，用以爬取内容页的url，最终输出url池"urllist.txt"
import html_downloader
import html_outputer
import html_parser
import url_manager

class SpiderUrl(object):
    def __init__(self):
        self.init_urls = url_manager.InitUrlList()
        self.urls = url_manager.UrlManager()
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = html_parser.HtmlParser()
        self.outputer = html_outputer.HtmlOutputer()

    def craw_url(self,n):
        count=0
        for url in self.init_urls.init_url_list():
            try:
                html_cont = self.downloader.download(url, count)
                new_urls = self.parser.parse_url(html_cont)
                self.urls.add_new_urls(new_urls)
                print("count: %d %s" % (count, url))

                if count == n-1:
                    count = 0
                count += 1
            except:
                print("craw failed")
        self.outputer.output_urllist('urllist2.txt',self.urls.new_url_list())

if __name__ ==  '__main__':
    obj_spider_url = SpiderUrl()
    obj_spider_url.craw_url(100)