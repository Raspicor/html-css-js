import urllib.request
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver


def musinsaCrawling(pageNum):
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
            reallink.append(image)
        except:
            continue
    driver.close()


reallink = []

for i in range(1, 2):
    musinsaCrawling(i)


n = 1
for i in range(0, 5):
    urllib.request.urlretrieve(
        "http:"+reallink[i], "images/" + "아우터("+str(n)+")"+".jpg")
    n += 1
