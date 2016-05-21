#-*- coding:utf-8 -*-
import re
from urllib import parse
from bs4 import BeautifulSoup

class HtmlParser(object):

    def _get_new_urls(self, soup):

        # https://job.liepin.com/427_4279838/?imscid=R000000075
        # https://a.liepin.com/20065213/job_7798665.shtml?imscid=R000000075
        new_urls = set()
        links = soup.find_all('a',href=re.compile(r'https://(job|a)\.liepin\.com/*'))
        if links == []:
            print('Error!')
            return
        else:
            for link in links: #问：link是什么类型的数据？
                new_url = link['href']
                new_full_url = parse.urljoin(new_url, r'?imscid=R000000075')
                new_urls.add(new_full_url)
            return new_urls

    def _get_new_data(self, page_url, soup):
        res_data = {}
        # url
        res_data['url'] = page_url

        # <div class="title-info "><h1 title="数据分析主管">数据分析主管</h1>
        job_title = soup.find('div', class_="title-info ").find('h1')
        res_data['title'] = job_title.get_text()

        # <p class="job-main-title">8-11万...</p>
        job_salary = soup.find('p', class_="job-main-title")
        res_data['salary'] = re.sub(r'\s+','',re.split(r'[\r\n]',re.sub(r'[\r\n\t]','',job_salary.get_text(),count=3))[0])

        #<p class="basic-infor"><span><i class="icons24 icons24-position"></i>上海-徐汇区</span><span>...</span></p>
        job_position = soup.find('p',class_="basic-infor").find('span')
        res_data['position'] = re.sub(r'[\r\n\s+]','',job_position.get_text())

        # <div class="job-main main-message "><h3>职位描述：</h3><div class="content content-word">岗位职责：<br>1、对...<br>岗位要求：<br>1、本科...</div></div>
        job_content = soup.find('div', class_="content content-word")
        res_data['content'] = re.sub(r'[\r\n\s+]','',job_content.get_text())

        return res_data

    def parse_url(self, html_cont):
        if html_cont is None:
            return

        soup = BeautifulSoup(html_cont,'html.parser',from_encoding='utf-8')
        new_urls = self._get_new_urls(soup)
        return new_urls

    def parse_data(self,page_url,html_cont):
        if page_url is None or html_cont is None:
            return

        soup = BeautifulSoup(html_cont,'html.parser',from_encoding='utf-8')
        new_data = self._get_new_data(page_url,soup)
        return new_data


