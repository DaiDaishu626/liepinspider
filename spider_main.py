#-*- coding:utf-8 -*-
# 本模块为本爬虫程序的主调用程序，用以爬取内容页面的：岗位名称、年薪、地区、职位描述和任职要求,最终输出"job_data.csv"
import html_downloader
import html_outputer
import html_parser
import url_manager


class SpiderMain(object): #初始化url管理器 下载器 解析器 输出器
    def __init__(self):
        self.urls = url_manager.UrlManager()
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = html_parser.HtmlParser()
        self.outputer = html_outputer.HtmlOutputer()

    def craw_data(self,n):
        count = 0
        readed = 0
        with open('urllist.txt', 'r',encoding='utf-8') as f:
            urls = f.readlines()
            urlssss = urls
            for url in urlssss:
                try:
                    html_content = self.downloader.download(url, count)
                    html_data = self.parser.parse_data(url, html_content)
                    self.outputer.output_html(html_data)
                    print(count, url)
                    urls.remove(url)
                    readed += 1
                    if count == n-1 :
                        count = 0
                except:
                    print(count,url,'failed')
                count += 1
            self.outputer.output_urllist('urllist.txt',urls)
        print('%d is readed' % readed)

if __name__ ==  '__main__':
    obj_spider = SpiderMain()
    obj_spider.craw_data(5)