import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }

  formateCity(cityAll) {

    // 省市区
    const province = [];
    const city = [];
    const area = [];
    // 格式化后 省市区
    const fmCity = [];

    for (const key in cityAll) {
      if (cityAll.hasOwnProperty(key)) {
        const element = cityAll[key];

        // 省
        if (key === '86') {

          // 省
          province.push(element);

          for (const item in element) {
            if (element.hasOwnProperty(item)) {
              const _element = element[item];

              const o = {
                value: item,
                title: _element,
                key: item
              };
              fmCity.push(o);
            }
          }
        } else {

          // 市
          fmCity.forEach((item) => {

            if (key === item.key) {

              let o;
              item.children = [];

              for (const _city in element) {

                if (element.hasOwnProperty(_city)) {
                  const _cityName = element[_city];

                  // 市
                  city.push(element);

                  o = {
                    value: _city,
                    title: _cityName,
                    key: _city,
                    isLeaf: true
                  };

                  item.children.push(o);
                }
              }
            }
          });

          // 区
          // fmCity.forEach(elm => {

          //     if (key == elm.key) {

          //         let _item = elm.children;

          //         _item.forEach(_elm => {

          //             for (const _areakey in element) {

          //                 if (_areakey == _elm.key) {

          //                     let _area = cityAll[_areakey], o = {};

          //                     _elm.children = [];

          //                     for (const area_key in _area) {

          //                         const element = _area[area_key];

          //                         //区
          //                         area.push(element);

          //                         o = {
          //                             value: element,
          //                             title: element,
          //                             key: area_key,
          //                             isLeaf: true
          //                         }

          //                         _elm.children.push(o)

          //                     }

          //                 }
          //             }

          //             //只有市级城市
          //             if(_elm.children.length == 0){
          //                 _elm.isLeaf = true;
          //             }

          //         });

          //     }

          // });

        }
      }
    }

    return fmCity;

  }

}
