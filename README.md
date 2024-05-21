# 모자익 레이아웃

모자익 레이아웃이란 크기가 다양한 이미지를 배치하는 레이아웃이다.

[pinterest](https://www.pinterest.co.kr/ideas/)의 탐색 페이지가 대표적이다.

![pinterest mosaic layout 이미지](https://s.pinimg.com/images/facebook_share_image.png)

## 구현

grid로 배치하는데, `grid-auto-row`를 `1px` 혹은 `0.1rem` 등과 같이 최소 높이 단위로 설정하는 게 핵심이다.

이미지의 가로길이를 동일하게 만들기 위해서 `grid-template-cols: repeat(auto-fit, minmax([이미지의 최소 너비], 1fr))`으로 설정한다.

그리고 `grid-row-end`에 `span [이미지의 높이]`를 줘서 각기 다른 높이를 갖게 한다.
