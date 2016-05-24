#-*- coding:utf-8 -*-
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

    def craw_url(self):
        count=1
        for url in self.init_urls.init_url_list():
            try:
                html_cont = self.downloader.download(url)
                new_urls = self.parser.parse_url(html_cont)
                self.urls.add_new_urls(new_urls)
                print("count: %d %s" % (count, url))

                if count == 50:
                    break
                count += 1
            except:
                print("craw failed")
        self.outputer.output_urllist(self.urls.new_url_list())

if __name__ ==  '__main__':
    obj_spider_url = SpiderUrl()
    obj_spider_url.craw_url()