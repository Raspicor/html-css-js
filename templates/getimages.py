import urllib.request
from bs4 import BeautifulSoup
from selenium import webdriver
import os

terminal_command1 = "python -m pip install beautifulsoup4" 
terminal_command2 = "python -m pip install selenium" 
os.system(terminal_command1)
os.system(terminal_command2)

outerlink = []
upperlink = []
pantslink = []
shoeslink = []

def musinsaouterCrawling(pageNum):
    baseUrl = 'https://www.musinsa.com/categories/item/002?d_cat_cd=002&brand=&list_kind=small&sort=sale_high&sub_sort=1m&page=1&display_cnt=90&group_sale=&exclusive_yn=&sale_goods=&timesale_yn=&ex_soldout=&kids=&color=&price1=&price2=&shoeSizeOption=&tags=&campaign_id=&includeKeywords=&measure='
    baseUrl1 = '&page='
    url = baseUrl + baseUrl1 + str(pageNum)
    driver = webdriver.Chrome()
    driver.get(url)

    pageString = driver.page_source
    soup = BeautifulSoup(pageString, features="html.parser")
    result1 = soup.find(name='ul', attrs={
                        'class': 'snap-article-list boxed-article-list article-list center list goods_small_media8'})
    result2 = result1.find_all(name="img")
    for i in result2:
        try:
            image = i.attrs['data-original']
            outerlink.append("http:" + image)
        except:
            continue
    driver.close()

def musinsapantsCrawling(pageNum):
    baseUrl = 'https://www.musinsa.com/categories/item/003?d_cat_cd=003&brand=&list_kind=small&sort=sale_high&sub_sort=1m&page=1&display_cnt=90&group_sale=&exclusive_yn=&sale_goods=&timesale_yn=&ex_soldout=&kids=&color=&price1=&price2=&shoeSizeOption=&tags=&campaign_id=&includeKeywords=&measure='
    baseUrl1 = '&page='
    url = baseUrl + baseUrl1 + str(pageNum)
    driver = webdriver.Chrome()
    driver.get(url)

    pageString = driver.page_source
    soup = BeautifulSoup(pageString, features="html.parser")

    result1 = soup.find(name='ul', attrs={
                        'class': 'snap-article-list boxed-article-list article-list center list goods_small_media8'})
    result2 = result1.find_all(name="img")

    for i in result2:
        try:
            image = i.attrs['data-original']
            pantslink.append("http:" + image)
        except:
            continue
    driver.close()

def musinsashoesCrawling(pageNum):
    baseUrl = 'https://www.musinsa.com/categories/item/005?d_cat_cd=005&brand=&list_kind=small&sort=sale_high&sub_sort=1m&page=1&display_cnt=90&group_sale=&exclusive_yn=&sale_goods=&timesale_yn=&ex_soldout=&kids=&color=&price1=&price2=&shoeSizeOption=&tags=&campaign_id=&includeKeywords=&measure='
    baseUrl1 = '&page='
    url = baseUrl + baseUrl1 + str(pageNum)
    driver = webdriver.Chrome()
    driver.get(url)

    pageString = driver.page_source
    soup = BeautifulSoup(pageString, features="html.parser")

    result1 = soup.find(name='ul', attrs={
                        'class': 'snap-article-list boxed-article-list article-list center list goods_small_media8'})
    result2 = result1.find_all(name="img")

    for i in result2:
        try:
            image = i.attrs['data-original']
            shoeslink.append("http:" + image)
        except:
            continue
    driver.close()

def musinsaupperCrawling(pageNum):
    baseUrl = 'https://www.musinsa.com/categories/item/001?d_cat_cd=001&brand=&list_kind=small&sort=sale_high&sub_sort=1m&page=1&display_cnt=90&group_sale=&exclusive_yn=&sale_goods=&timesale_yn=&ex_soldout=&kids=&color=&price1=&price2=&shoeSizeOption=&tags=&campaign_id=&includeKeywords=&measure='
    baseUrl1 = '&page='
    url = baseUrl + baseUrl1 + str(pageNum)
    driver = webdriver.Chrome()
    driver.get(url)

    pageString = driver.page_source
    soup = BeautifulSoup(pageString, features="html.parser")

    result1 = soup.find(name='ul', attrs={
                        'class': 'snap-article-list boxed-article-list article-list center list goods_small_media8'})
    result2 = result1.find_all(name="img")

    for i in result2:
        try:
            image = i.attrs['data-original']
            upperlink.append("http:"+image)
        except:
            continue
    driver.close()

for i in range(1, 2):
    musinsaouterCrawling(i)
    musinsapantsCrawling(i)
    musinsashoesCrawling(i)
    musinsaupperCrawling(i)

n = 1
print("outer links : \n")
for i in range(5):
    print(outerlink[i], '\n')

print("upper links : \n")
for i in range(5):
    print(upperlink[i], '\n')
    
print("pants links : \n")
for i in range(5):
    print(pantslink[i], '\n')
    
print("shoes links : \n")
for i in range(5):
    print(shoeslink[i], '\n')