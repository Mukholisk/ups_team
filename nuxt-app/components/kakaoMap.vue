<template>
  <div id="map"></div>
</template>

<script setup>

let map

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement('script');
    script.onload = () => kakao.maps.load(initMap);
    script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=453369d72fc606e581955ae31c5af938';
    document.head.appendChild(script);
  }
})

const initMap = () => {
  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  };

  map = new kakao.maps.Map(container, options);

  const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

// 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition
  });

  marker.setMap(map);

  moveMyLocation()

  // setTimeout이 없어도 잘 작동하지만 그냥 주석으로 놔둠
  // setTimeout(() => {
  // map.relayout()
  // map.setCenter(new kakao.maps.LatLng(myinfo.memberinfo.latitude, myinfo.memberinfo.longitude))
  console.log('done!!')
  // }, 0)
}

const getCenter = () => {
  if (window.kakao && window.kakao.maps) {
    console.log("aaa")
    return map.getCenter()
  }
  return null
}

const moveMyLocation = () => {
  if (navigator.geolocation) {

    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {

      var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

      console.log(lat, lon)

      var locPosition = new kakao.maps.LatLng(lat, lon)

      map.panTo(locPosition)

      const marker = new kakao.maps.Marker({
        position: locPosition
      });

      marker.setMap(map);
    });
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
