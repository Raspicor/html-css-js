import urllib.request
from urllib.parse import quote_plus  # 아스키 코드로 변환해준다
from bs4 import BeautifulSoup
from selenium import webdriver

savelink = 'images'


def musinsaCrawling(pageNum):
    baseUrl = 'https://store.musinsa.com/app/product/search?search_type=1&q='
    baseUrl1 = '&page='
    url = baseUrl + quote_plus(plusUrl) + baseUrl1 + str(pageNum)
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


plusUrl = input('검색할 옷을 입력하시오: ')
reallink = []

for i in range(1, 2):
    musinsaCrawling(i)

if plusUrl == '스몰로고맨투맨':
    title = 'small logo sweatshir'
elif plusUrl == '빅로고맨투맨':
    title = 'big logo sweatshir'
elif plusUrl == '스트라이프맨투맨':
    title = 'stripe sweatshir'


n = 1
for i in range(0, 5):
    urllib.request.urlretrieve(
        "http:"+reallink[i], "images/" + title + "("+str(n)+")"+".jpg")
    n += 1

for i in range(0, 5):
    print(i + 1, '번 째 링크 :', reallink[i])
