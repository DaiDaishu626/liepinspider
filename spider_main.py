#-*- coding:utf-8 -*-
import html_downloader
import html_outputer
import html_parser
import url_manager


class SpiderMain(object): #初始化url管理器 下载器 解析器 输出器
    def __init__(self):
        self.init_urls = url_manager.InitUrlList()
        self.urls = url_manager.UrlManager()
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = html_parser.HtmlParser()
        self.outputer = html_outputer.HtmlOutputer()




    def craw_data(self):
        count=1
        self.urls.add_new_url(root_url)
        while self.urls.has_new_url():
           try:
               new_url = self.urls.get_new_url()
               print ("count: %d %s" %(count,new_url))
               html_cont = self.downloader.download(new_url)
               new_urls,new_data = self.parser.parse(new_url,html_cont)
               self.urls.add_new_urls(new_urls)
               self.outputer.collect_data(new_data)

               if count == 10:
                   break

               count += 1
           except:
               print("craw failed")
        self.outputer.output_html()


if __name__ ==  '__main__':
    obj_spider = SpiderMain()
    obj_spider.craw_data()