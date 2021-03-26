import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import * as data from '/src/app/files/baseData.json';

export interface ImageWidthType {
  x1: string;
  x2: string;
  webp_x1: string;
  webp_x2: string;
}

export interface ImagesType {
  image: {
    tablet: ImageWidthType;
    desktop: ImageWidthType;
    mobile: ImageWidthType;
  };
}

export interface CategoryProps {
  category: {
    id: number;
    title: string;
    slug: string
  };
}

export interface ChildrenType {
  id: number;
  title: string;
  slug: string;
}


export interface ResponseMainSliderType extends ImagesType {
  id: number;
  title: string;
  link_title: string;
  link_url: string;
}

export interface ResponsePropositionType extends CategoryProps {
  id: number;
  title: string;
  slug: string;
  is_second_hand: boolean;
  price: string;
  discount_trade_in: null | boolean;
  is_new: boolean;
  condition: number;
  in_stock: boolean;
  image: {
    tablet: ImageWidthType;
    desktop: ImageWidthType;
    mobile: ImageWidthType;

  } | null;
}

export interface ResponseCategoryType {
  id: number;
  title: string;
  icon: string;
  slug: string;
  image: {
    desktop: ImageWidthType;
    tablet: ImageWidthType;
    mobile: ImageWidthType
  } | null;
  children: Array<ChildrenType>;
}

export interface ResponseBrandType extends ImagesType {
  id: number;
  title: string;
}

export interface ResponseReviewType {
  id: number;
  review: string;
  full_name: string;
  link: string | null;
  date: string;
  image: {
    tablet: ImageWidthType;
    desktop: ImageWidthType;
    mobile: ImageWidthType;
  } | null;
}

export interface ResponseLatestBlogType {
  id: number;
  title: string;
  slug: string;
  fixed: boolean;
  category: {
    id: number;
    title: string;
    posts_count: null | number
  };
  video_link: string;
  discussion_link: string;
  created_at: string;
  preview: {
    desktop: ImageWidthType;
    tablet: ImageWidthType;
    mobile: ImageWidthType
  };
}

export interface RequestData {
  result: 'success' | string;
  main_slider: Array<ResponseMainSliderType>;
  good_propositions: Array<ResponsePropositionType>;
  new_propositions: Array<ResponsePropositionType>;
  categories: Array<ResponseCategoryType>;
  brands: Array<ResponseBrandType>;
  reviews: Array<ResponseReviewType>;
  latest_blog: Array<ResponseLatestBlogType>;


}

@Injectable({providedIn: 'root'})
export class RequestDataService {
  constructor(private http: HttpClient) {
  }

  // readonly ROOT_URL = 'https://getlens-master.stage.dev.family/api/pages/';
  // getData(): Observable<RequestData> {
  //    return this.http.get<RequestData>(this.ROOT_URL);
  // }
  data: RequestData = {

    result: 'success',
    main_slider: [
      {
        'id': 1,
        'title': 'Выгодные комплекты Canon',
        'link_title': 'Комплекты Canon',
        'link_url': 'https://getlens-master.stage.dev.family/zerkalnye-kamery?brands%5B%5D=1',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/mLD3zLTIT0OG1blBwQSLq2fufQ5CNLyzIPbulY2ozXM/h:360/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/6BLe26dyt1IEUkzVhVxBCDp0fG78j61c8SKmvJ3ocFo/h:720/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/x-7RwXX814iozIOGn9bvBvUquHVDG2HUJKBsD-pwaD8/h:360/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/JN3UiV_4bM0TX6uLxRuvdP96ONK_t6ttHP-67WkFg5E/h:720/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/mLD3zLTIT0OG1blBwQSLq2fufQ5CNLyzIPbulY2ozXM/h:360/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/6BLe26dyt1IEUkzVhVxBCDp0fG78j61c8SKmvJ3ocFo/h:720/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/x-7RwXX814iozIOGn9bvBvUquHVDG2HUJKBsD-pwaD8/h:360/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/JN3UiV_4bM0TX6uLxRuvdP96ONK_t6ttHP-67WkFg5E/h:720/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/5jeCu-rBY8h8UuMlicQo4jLpXgLU14n2N-3YbWT81uE/h:335/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/sQjA1CEI-T2AmB4z7q4pN1lty6PzCcSF3RlcLXokHxg/h:670/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/bQ115rXjcBWUtM7657wcuM8OTexPauAL62XLiGXD0q4/h:335/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/9nT1_o3CMYuwhM9DB6140jl1HTmUSfvcH_nnNyZgRFc/h:670/czM6Ly9nZXRsZW5zLzEyL2ltZy0xLmpwZw.webp'
          }
        }
      },
      {
        'id': 2,
        'title': 'Акции Sony',
        'link_title': 'Акции Sony',
        'link_url': 'https://getlens-master.stage.dev.family/ekstendery-kovertery',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/KHi-8soli7dUw56nZBS_U6OZElZzQTxMTSfr9d8A-nk/h:360/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/kxegnsZb4sFnEqbe3diTdeNqotOZQk_S11kttUCNRso/h:720/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/NH_Vt3hG_X16GRBJJ8KvG03PAl8cOPIgtXSA4gad868/h:360/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/BiT4Mp_JzztsEAkFpkrySV10TvPnGGLvXs-hp1qdxU0/h:720/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/KHi-8soli7dUw56nZBS_U6OZElZzQTxMTSfr9d8A-nk/h:360/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/kxegnsZb4sFnEqbe3diTdeNqotOZQk_S11kttUCNRso/h:720/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/NH_Vt3hG_X16GRBJJ8KvG03PAl8cOPIgtXSA4gad868/h:360/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/BiT4Mp_JzztsEAkFpkrySV10TvPnGGLvXs-hp1qdxU0/h:720/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/HjzKoIhR_BVRGuVn5JD47Rr1FcUnd343ceWAFh6SxFQ/h:335/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/h71DTUR8aUll1jTOVcAPJFhxtZGzz0TFMwc5WYw69E4/h:670/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/PDH8abYrQCx7NkGO0jqhLysCddnW9jzg0szUhu77Gnw/h:335/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/vou3Vx8Xnh6MfN09IeZ0UEX_q6a1OCY7f540AJFwMc0/h:670/czM6Ly9nZXRsZW5zLzEzL2ltZy0yLmpwZw.webp'
          }
        }
      },
      {
        'id': 3,
        'title': 'Аксессуары Nikon',
        'link_title': 'Аксессуары Nikon',
        'link_url': 'https://getlens-master.stage.dev.family/ekstendery-kovertery',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/5S0WxLVZsfkjeciZjw71uja2MjfIc2Y1rXOkEvfwZBg/h:360/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/Irn-lo8eUkgAN0tmj-mGTPODtGFjgVxqXuRxudsthjk/h:720/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/bjnyqLZL04dvnAD3KxB1EBG73n-jh9XOqFDZLIjdUfM/h:360/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/_cSlYK2TZUoELqp5lo4OiUMsI0B7B7WY1YA3Isf_N_I/h:720/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/5S0WxLVZsfkjeciZjw71uja2MjfIc2Y1rXOkEvfwZBg/h:360/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/Irn-lo8eUkgAN0tmj-mGTPODtGFjgVxqXuRxudsthjk/h:720/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/bjnyqLZL04dvnAD3KxB1EBG73n-jh9XOqFDZLIjdUfM/h:360/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/_cSlYK2TZUoELqp5lo4OiUMsI0B7B7WY1YA3Isf_N_I/h:720/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/o07eCffOkz3zTEG0L5Jd42BDV2HDpyj46qCN-rZHSeA/h:335/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/sUB1Xz29I4TVGPccah04Cob7SUoUXFz9JRftiwXdiBU/h:670/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/CFyKF_PoCgSSH96DYBuQITq92kW2ciMQGsCABNBR_Eg/h:335/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/1d6ZaLNKd8BQM2WXYX2BXKlUMDA-N0gx_Pc_coacnJs/h:670/czM6Ly9nZXRsZW5zLzE0L2ltZy0zLmpwZw.webp'
          }
        }
      },
      {
        'id': 4,
        'title': 'Оптика Sony',
        'link_title': 'Оптика Sony',
        'link_url': 'https://getlens-master.stage.dev.family/ekstendery-kovertery',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/-Ny0JQ8gx11Zr-QHw5_QFdtzSTlsDyEjKABFKbrkoo0/h:360/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/Dlb_fZnlMixG9K1N9KdiJLfZRH-tSwW55c-rOX-ni8I/h:720/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/lAmEO5oWoFatZj1cPzus80ZzwPx6_ZOLkfHV0y2cKtM/h:360/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/oHK6tgUA2YFIcDmLMC_cSB_rG0WNrClMQKNU-1UUG9E/h:720/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/-Ny0JQ8gx11Zr-QHw5_QFdtzSTlsDyEjKABFKbrkoo0/h:360/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/Dlb_fZnlMixG9K1N9KdiJLfZRH-tSwW55c-rOX-ni8I/h:720/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/lAmEO5oWoFatZj1cPzus80ZzwPx6_ZOLkfHV0y2cKtM/h:360/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/oHK6tgUA2YFIcDmLMC_cSB_rG0WNrClMQKNU-1UUG9E/h:720/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/rHCGdBgNdqERQ6TjU8n0ay7cBKT55VXkb3Rz6e9fb18/h:335/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/rc4ZDAwz84U5GT3fvO8tJBgyShVzuWoaojxiUrMjvUs/h:670/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/SMFlxiTMrQBa8imR3RWHVdfs7B3622pelOC5J6Oxxc0/h:335/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/zH1UfEtP8qgx-hp6dJYY69fmdmiK-T-rxuMA9Sx2tRA/h:670/czM6Ly9nZXRsZW5zLzE1L2ltZy00LmpwZw.webp'
          }
        }
      },
      {
        'id': 5,
        'title': 'Трейд-ин',
        'link_title': 'Трейд-ин',
        'link_url': 'https://getlens-master.stage.dev.family/ekstendery-kovertery',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/AQNVRQ7Jt6ts_ua2XcOpBMDUND5OOdLAuExLS9bIWL0/h:360/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/12zIcZ5FAfGsvrKhxNhqWd6jqfZcvQz92NIAPrr21nk/h:720/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/b-ExXMkPkOw7muLA8Nej60fxQrNwiqVZMwSqHtpsUgI/h:360/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/6NBj0KqdGLBrMobrAdDRKaIVheijlmN4Vyql6e-rON8/h:720/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/AQNVRQ7Jt6ts_ua2XcOpBMDUND5OOdLAuExLS9bIWL0/h:360/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/12zIcZ5FAfGsvrKhxNhqWd6jqfZcvQz92NIAPrr21nk/h:720/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/b-ExXMkPkOw7muLA8Nej60fxQrNwiqVZMwSqHtpsUgI/h:360/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/6NBj0KqdGLBrMobrAdDRKaIVheijlmN4Vyql6e-rON8/h:720/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/Ou_P-KOJFR5U1kD4IbgijJYu4qoK4rzhMztJqBjfr4U/h:335/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/WU4IelCb8qfWr2QW6o_E-wwGCfCpEy7ouIMn3dyH-Uc/h:670/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/9u5VJoaqMfqMRS9WnBnTqzx2z300ilXbns5gVVzPNQE/h:335/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/0m1QmpKRI_fY-UelezDN6dCfDYSM7W4pwLnWP-uvS4Q/h:670/czM6Ly9nZXRsZW5zLzE2L2ltZy01LmpwZw.webp'
          }
        }
      },
      {
        'id': 6,
        'title': 'Выкуп вашей техники',
        'link_title': 'Выкуп вашей техники',
        'link_url': 'https://getlens-master.stage.dev.family/ekstendery-kovertery/tovar-1-kategoriya-ekstendery-kovertery2',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/TXMV-Zz_9_6WpFKDn4j4j3x-53C0-xv_8n_XeDjU16w/h:360/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/DtgM0eIP8V4SggTEvhLkO5RtNrpJQjTLDvro4EgLOzw/h:720/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/YWKmarzWY1MX1EpM4_9ytv7NTSmIvXy3Au9x3PDwJkc/h:360/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/CTIYDv61NmDkqr1XW9k68z4AaxliOIRNOovbnAtPzxA/h:720/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/TXMV-Zz_9_6WpFKDn4j4j3x-53C0-xv_8n_XeDjU16w/h:360/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/DtgM0eIP8V4SggTEvhLkO5RtNrpJQjTLDvro4EgLOzw/h:720/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/YWKmarzWY1MX1EpM4_9ytv7NTSmIvXy3Au9x3PDwJkc/h:360/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.webp',
            webp_x2: 'https://imgproxy.by.dev.family/CTIYDv61NmDkqr1XW9k68z4AaxliOIRNOovbnAtPzxA/h:720/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/RA-shzUUETVJDCVTp3bRbwaErsf-j654o9d2yJ6KsXA/h:335/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/V3n9G-DG04c30HEgekkD5-LhAuvEzcaM4X489iWJQYw/h:670/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/cuWOlKaW3xLYW_5rpdz69yINxYViNTYCJgh_cLSk95U/h:335/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/D6_lZbHs4yFm6bR-bew4wQFrLm3mSDEOgM2BzC0xKrQ/h:670/czM6Ly9nZXRsZW5zLzE3L2ltZy02LmpwZw.webp'
          }
        }
      }
    ],
    'good_propositions': [
      {
        'id': 1285,
        'title': 'Товар 19 категория Крепеж',
        slug: 'tovar-19-kategoriya-krepezh1',
        is_second_hand: false,
        'price': '2460.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': true,
        'category': {
          'id': 51,
          'title': 'Крепеж',
          'slug': 'krepezh'
        },
        'image': null
      }
    ],
    'new_propositions': [
      {
        'id': 701,
        'title': 'Товар 7 категория Зеркальные камеры',
        'slug': 'tovar-7-kategoriya-zerkalnye-kamery1',
        'is_second_hand': false,
        'price': '1933.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 34,
          'title': 'Зеркальные камеры',
          'slug': 'zerkalnye-kamery'
        },
        'image': null
      },
      {
        'id': 1169,
        'title': 'Товар 1 категория Штативы',
        'slug': 'tovar-1-kategoriya-shtativy1',
        'is_second_hand': false,
        'price': '5780.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 49,
          'title': 'Штативы',
          'slug': 'shtativy'
        },
        'image': null
      },
      {
        'id': 1105,
        'title': 'Товар 9 категория Сумки',
        'slug': 'tovar-9-kategoriya-sumki1',
        'is_second_hand': false,
        'price': '8467.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 46,
          'title': 'Сумки',
          'slug': 'sumki'
        },
        'image': null
      },
      {
        'id': 1143,
        'title': 'Товар 8 категория Рюкзаки',
        'slug': 'tovar-8-kategoriya-ryukzaki1',
        'is_second_hand': false,
        'price': '3350.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 47,
          'title': 'Рюкзаки',
          'slug': 'ryukzaki'
        },
        'image': null
      },
      {
        'id': 1129,
        'title': 'Товар 1 категория Рюкзаки',
        'slug': 'tovar-1-kategoriya-ryukzaki1',
        'is_second_hand': false,
        'price': '8341.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': true,
        'category': {
          'id': 47,
          'title': 'Рюкзаки',
          'slug': 'ryukzaki'
        },
        'image': null
      },
      {
        'id': 747,
        'title': 'Товар 10 категория Беззеркальные камеры',
        'slug': 'tovar-10-kategoriya-bezzerkalnye-kamery1',
        'is_second_hand': false,
        'price': '8227.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': true,
        'category': {
          'id': 35,
          'title': 'Беззеркальные камеры',
          'slug': 'bezzerkalnye-kamery'
        },
        'image': null
      },
      {
        'id': 1191,
        'title': 'Товар 12 категория Штативы',
        'slug': 'tovar-12-kategoriya-shtativy1',
        'is_second_hand': false,
        'price': '4386.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 49,
          'title': 'Штативы',
          'slug': 'shtativy'
        },
        'image': null
      },
      {
        'id': 1013,
        'title': 'Товар 3 категория Насадки, макролинзы',
        'slug': 'tovar-3-kategoriya-nasadki-makrolinzy1',
        'is_second_hand': false,
        'price': '3191.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 43,
          'title': 'Насадки, макролинзы',
          'slug': 'nasadki-makrolinzy'
        },
        'image': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/lp1UBhtOupOykX0qjbUgqvMUDlOq92JhtpIJkWv5MEc/w:266/h:266/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/IjqWgo1T4VpmBqRr8FoSWqSvWab2ADoQ1KnI6WbhUps/w:532/h:532/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/gxqhcuejFgeOH3PrFslVYJUelXD4tdsKv0vanBVB15g/w:266/h:266/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/H_LAtOagTaPyLBthheFSEI_Aeihnf8KCr9CBMI-38ig/w:532/h:532/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/kq0WARiP-Wy-aYxpkPhawdUOdL9RJTFur5sD0_aJ9cY/w:218/h:218/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/Nin77Ek4eDVWg2UO8HWCYsZA6ka6M8dk2sEhVsCH0Nk/w:436/h:436/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/jr49QPr17RPRdMjd-PxHopqyFTOF95ZbDSEvBvsZpGY/w:218/h:218/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/HVyzdOxZlDl-VwbGNPytG5hYgo7eI6n9SMQ9En04PmM/w:436/h:436/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/qOsUBkijgwPUjtSCYMLGwFYtC9tdnMBEwi3cKx6sy5c/w:171/h:171/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/sNx7V_QqGp4vuTX7704AX9S6yUBgsve8OEMvpA8web4/w:342/h:342/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/JvH_pKYyZHKLyKvVbBlnVUYXuLhs7_hCdjnUOPLwtEM/w:171/h:171/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/ZbIufSxOth0i4f2uwK4ffFG9iHDqVqEBZLLN98bvlBo/w:342/h:342/czM6Ly9nZXRsZW5zLzkvaW1hZ2UtMzkuanBn.webp'
          }
        }
      },
      {
        'id': 1071,
        'title': 'Товар 12 категория Экстендеры, ковертеры',
        'slug': 'tovar-12-kategoriya-ekstendery-kovertery1',
        'is_second_hand': false,
        'price': '74.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': true,
        'category': {
          'id': 44,
          'title': 'Экстендеры, ковертеры',
          'slug': 'ekstendery-kovertery'
        },
        'image': null
      },
      {
        'id': 997,
        'title': 'Товар 15 категория Бленды для объективов',
        'slug': 'tovar-15-kategoriya-blendy-dlya-obektivov1',
        'is_second_hand': false,
        'price': '1056.00',
        'discount_trade_in': null,
        'is_new': true,
        'condition': 0,
        'in_stock': false,
        'category': {
          'id': 42,
          'title': 'Бленды для объективов',
          'slug': 'blendy-dlya-obektivov'
        },
        'image': null
      }
    ],
    'categories': [
      {
        'id': 33,
        'title': 'Камеры',
        'icon': 'camera',
        'slug': 'kamery',
        'image': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png',
            'x2': 'https://imgproxy.by.dev.family/Ot0PeJOvAnYNkbJ0Ro2-4OEqceYyBn1wrr6Ud4YNLuU/w:370/h:370/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png',
            'webp_x1': 'https://imgproxy.by.dev.family/P5lKzIDXzpsFi6wvMHZ-66vWBTQjfb9gYb9ieTkeHHQ/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/LoZTkj3xJad8VIhc7KCy9jiS1uDAJkgT_i6J8sa2KVI/w:370/h:370/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png',
            'x2': 'https://imgproxy.by.dev.family/Ot0PeJOvAnYNkbJ0Ro2-4OEqceYyBn1wrr6Ud4YNLuU/w:370/h:370/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png',
            'webp_x1': 'https://imgproxy.by.dev.family/P5lKzIDXzpsFi6wvMHZ-66vWBTQjfb9gYb9ieTkeHHQ/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/LoZTkj3xJad8VIhc7KCy9jiS1uDAJkgT_i6J8sa2KVI/w:370/h:370/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png',
            'x2': 'https://imgproxy.by.dev.family/Ot0PeJOvAnYNkbJ0Ro2-4OEqceYyBn1wrr6Ud4YNLuU/w:370/h:370/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png',
            'webp_x1': 'https://imgproxy.by.dev.family/P5lKzIDXzpsFi6wvMHZ-66vWBTQjfb9gYb9ieTkeHHQ/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/LoZTkj3xJad8VIhc7KCy9jiS1uDAJkgT_i6J8sa2KVI/w:370/h:370/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.webp'
          }
        },
        'children': [
          {
            'id': 36,
            'title': 'Компактные камеры',
            'slug': 'kompaktnye-kamery'
          },
          {
            'id': 56,
            'title': 'Объективы 1',
            'slug': 'obuektivy-1'
          },
          {
            'id': 38,
            'title': 'Аксессуары для фотокамер',
            'slug': 'aksessuary-dlya-fotokamer'
          },
          {
            'id': 34,
            'title': 'Зеркальные камеры',
            'slug': 'zerkalnye-kamery'
          },
          {
            'id': 37,
            'title': 'Вспышки и аксессуары',
            'slug': 'vspyshki-i-aksessuary'
          },
          {
            'id': 35,
            'title': 'Беззеркальные камеры',
            'slug': 'bezzerkalnye-kamery'
          }
        ]
      },
      {
        'id': 39,
        'title': 'Объективы',
        'icon': 'lenses',
        'slug': 'obektivy',
        'image': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/WR7wkaMFWqvQX3ZpRKO0QfEWEJeUVCIKTOqivJjuuzI/w:185/h:185/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/rzRra85miF-dzomGP6M4rq23jJQB01Ynm2h1l7yorc0/w:370/h:370/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/np7fHKXHJcqsQ65JWolI7JCpALuEq7cX65c1D_jF8lM/w:185/h:185/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/fMiLi8t30TIaQodsjf3dL2H3pMUWLuDYQp9R-cz6sDI/w:370/h:370/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/WR7wkaMFWqvQX3ZpRKO0QfEWEJeUVCIKTOqivJjuuzI/w:185/h:185/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/rzRra85miF-dzomGP6M4rq23jJQB01Ynm2h1l7yorc0/w:370/h:370/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/np7fHKXHJcqsQ65JWolI7JCpALuEq7cX65c1D_jF8lM/w:185/h:185/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/fMiLi8t30TIaQodsjf3dL2H3pMUWLuDYQp9R-cz6sDI/w:370/h:370/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/WR7wkaMFWqvQX3ZpRKO0QfEWEJeUVCIKTOqivJjuuzI/w:185/h:185/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/rzRra85miF-dzomGP6M4rq23jJQB01Ynm2h1l7yorc0/w:370/h:370/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/np7fHKXHJcqsQ65JWolI7JCpALuEq7cX65c1D_jF8lM/w:185/h:185/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/fMiLi8t30TIaQodsjf3dL2H3pMUWLuDYQp9R-cz6sDI/w:370/h:370/czM6Ly9nZXRsZW5zLzUzL2E5YTY0OGVlYmQuanBn.webp'
          }
        },
        'children': [
          {
            'id': 43,
            'title': 'Насадки, макролинзы',
            'slug': 'nasadki-makrolinzy'
          },
          {
            'id': 44,
            'title': 'Экстендеры, ковертеры',
            'slug': 'ekstendery-kovertery'
          },
          {
            'id': 40,
            'title': 'Светофильтры',
            'slug': 'svetofiltry'
          },
          {
            'id': 41,
            'title': 'Наборы светофильтров',
            'slug': 'nabory-svetofiltrov'
          },
          {
            'id': 42,
            'title': 'Бленды для объективов',
            'slug': 'blendy-dlya-obektivov'
          }
        ]
      },
      {
        'id': 48,
        'title': 'Штативы, стойки, крепеж',
        'icon': 'tripod',
        'slug': 'shtativy-stoyki-krepezh',
        'image': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/pR6LW4SKunT7WVH7QrgXW1JvKrZE2VDi5ZNueDqiDX4/w:185/h:185/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/Akkwx8DGzW5myKqzgT7dSpg4gnRHNc_03FhECAbkGm0/w:370/h:370/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/ELRRoBL0RYl38XLWuj7abpE2saIbhMy69FmzlEo-Viw/w:185/h:185/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/aO74nA4_24xiXknRCD3MZr3G9CLM6zmHMhA4SA2udSs/w:370/h:370/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/pR6LW4SKunT7WVH7QrgXW1JvKrZE2VDi5ZNueDqiDX4/w:185/h:185/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/Akkwx8DGzW5myKqzgT7dSpg4gnRHNc_03FhECAbkGm0/w:370/h:370/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/ELRRoBL0RYl38XLWuj7abpE2saIbhMy69FmzlEo-Viw/w:185/h:185/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/aO74nA4_24xiXknRCD3MZr3G9CLM6zmHMhA4SA2udSs/w:370/h:370/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/pR6LW4SKunT7WVH7QrgXW1JvKrZE2VDi5ZNueDqiDX4/w:185/h:185/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/Akkwx8DGzW5myKqzgT7dSpg4gnRHNc_03FhECAbkGm0/w:370/h:370/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/ELRRoBL0RYl38XLWuj7abpE2saIbhMy69FmzlEo-Viw/w:185/h:185/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/aO74nA4_24xiXknRCD3MZr3G9CLM6zmHMhA4SA2udSs/w:370/h:370/czM6Ly9nZXRsZW5zLzU1L2M0MDVhNTM2NWYuanBn.webp'
          }
        },
        'children': [
          {
            'id': 50,
            'title': 'Стойки',
            'slug': 'stoyki'
          },
          {
            'id': 51,
            'title': 'Крепеж',
            'slug': 'krepezh'
          },
          {
            'id': 49,
            'title': 'Штативы',
            'slug': 'shtativy'
          }
        ]
      },
      {
        'id': 54,
        'title': 'Карты памяти',
        'icon': 'card',
        'slug': 'karty-pamyati',
        'image': null,
        'children': [
          {
            'id': 55,
            'title': 'Sd карты',
            'slug': 'sd-karty'
          }
        ]
      },
      {
        'id': 45,
        'title': 'Сумки и рюкзаки',
        'icon': 'bags',
        'slug': 'sumki-i-ryukzaki',
        'image': null,
        'children': [
          {
            'id': 46,
            'title': 'Сумки',
            'slug': 'sumki'
          },
          {
            'id': 47,
            'title': 'Рюкзаки',
            'slug': 'ryukzaki'
          }
        ]
      },
      {
        'id': 52,
        'title': 'Аксессуары',
        'icon': 'accessories',
        'slug': 'aksessuary',
        'image': null,
        'children': [
          {
            'id': 53,
            'title': 'Чехлы',
            'slug': 'chekhly'
          }
        ]
      }
    ],
    'brands': [
      {
        'id': 1,
        'title': 'Canon',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/QKFyMB6wal6mLlOkFN5oYCAqezL_6QfqQyHv88EjqO4/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/QKFyMB6wal6mLlOkFN5oYCAqezL_6QfqQyHv88EjqO4/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/iLYdSRzy7bLReKTZ3KMPnfkpdQ_zeY01AraD7U6c-tM/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/iLYdSRzy7bLReKTZ3KMPnfkpdQ_zeY01AraD7U6c-tM/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/QKFyMB6wal6mLlOkFN5oYCAqezL_6QfqQyHv88EjqO4/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/QKFyMB6wal6mLlOkFN5oYCAqezL_6QfqQyHv88EjqO4/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/iLYdSRzy7bLReKTZ3KMPnfkpdQ_zeY01AraD7U6c-tM/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/iLYdSRzy7bLReKTZ3KMPnfkpdQ_zeY01AraD7U6c-tM/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/QKFyMB6wal6mLlOkFN5oYCAqezL_6QfqQyHv88EjqO4/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/QKFyMB6wal6mLlOkFN5oYCAqezL_6QfqQyHv88EjqO4/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/iLYdSRzy7bLReKTZ3KMPnfkpdQ_zeY01AraD7U6c-tM/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/iLYdSRzy7bLReKTZ3KMPnfkpdQ_zeY01AraD7U6c-tM/h:50/czM6Ly9nZXRsZW5zLzEvaW1hZ2UtNjAucG5n.webp'
          }
        }
      },
      {
        'id': 3,
        'title': 'Olympus',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/uSmZcimmcnqcOfjzbnF5FxAIgH3oGxbMH6651th-E9w/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/uSmZcimmcnqcOfjzbnF5FxAIgH3oGxbMH6651th-E9w/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/UC1JiV-1OW31Ta_ZjGSE8g5ykDeLwjkjkqvdRsifd_M/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/UC1JiV-1OW31Ta_ZjGSE8g5ykDeLwjkjkqvdRsifd_M/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/uSmZcimmcnqcOfjzbnF5FxAIgH3oGxbMH6651th-E9w/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/uSmZcimmcnqcOfjzbnF5FxAIgH3oGxbMH6651th-E9w/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/UC1JiV-1OW31Ta_ZjGSE8g5ykDeLwjkjkqvdRsifd_M/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/UC1JiV-1OW31Ta_ZjGSE8g5ykDeLwjkjkqvdRsifd_M/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/uSmZcimmcnqcOfjzbnF5FxAIgH3oGxbMH6651th-E9w/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/uSmZcimmcnqcOfjzbnF5FxAIgH3oGxbMH6651th-E9w/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/UC1JiV-1OW31Ta_ZjGSE8g5ykDeLwjkjkqvdRsifd_M/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/UC1JiV-1OW31Ta_ZjGSE8g5ykDeLwjkjkqvdRsifd_M/h:50/czM6Ly9nZXRsZW5zLzMvaW1hZ2UtNjIucG5n.webp'
          }
        }
      },
      {
        'id': 5,
        'title': 'Ricoh',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/xPiO3jnpQPW5dP0LhV2h12mQxTCHB3cj5PT3HHRMRKM/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/xPiO3jnpQPW5dP0LhV2h12mQxTCHB3cj5PT3HHRMRKM/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/nw5WNJKvVkormE2MmhvxTdE4Xx2vqgtTQZFYCkfwYK4/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/nw5WNJKvVkormE2MmhvxTdE4Xx2vqgtTQZFYCkfwYK4/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/xPiO3jnpQPW5dP0LhV2h12mQxTCHB3cj5PT3HHRMRKM/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/xPiO3jnpQPW5dP0LhV2h12mQxTCHB3cj5PT3HHRMRKM/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/nw5WNJKvVkormE2MmhvxTdE4Xx2vqgtTQZFYCkfwYK4/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/nw5WNJKvVkormE2MmhvxTdE4Xx2vqgtTQZFYCkfwYK4/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/xPiO3jnpQPW5dP0LhV2h12mQxTCHB3cj5PT3HHRMRKM/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/xPiO3jnpQPW5dP0LhV2h12mQxTCHB3cj5PT3HHRMRKM/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/nw5WNJKvVkormE2MmhvxTdE4Xx2vqgtTQZFYCkfwYK4/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/nw5WNJKvVkormE2MmhvxTdE4Xx2vqgtTQZFYCkfwYK4/h:50/czM6Ly9nZXRsZW5zLzUvaW1hZ2UtNjQucG5n.webp'
          }
        }
      },
      {
        'id': 6,
        'title': 'Sigma',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/pFSL14JjyntsaSpd8kgKiSQKaEfFf2GSiOMAPiDmDlM/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/pFSL14JjyntsaSpd8kgKiSQKaEfFf2GSiOMAPiDmDlM/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/-KX4tsEXBdRPIXvzdIokqffwzsNGsF6oGSxnBKD8Gwk/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/-KX4tsEXBdRPIXvzdIokqffwzsNGsF6oGSxnBKD8Gwk/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/pFSL14JjyntsaSpd8kgKiSQKaEfFf2GSiOMAPiDmDlM/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/pFSL14JjyntsaSpd8kgKiSQKaEfFf2GSiOMAPiDmDlM/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/-KX4tsEXBdRPIXvzdIokqffwzsNGsF6oGSxnBKD8Gwk/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/-KX4tsEXBdRPIXvzdIokqffwzsNGsF6oGSxnBKD8Gwk/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/pFSL14JjyntsaSpd8kgKiSQKaEfFf2GSiOMAPiDmDlM/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/pFSL14JjyntsaSpd8kgKiSQKaEfFf2GSiOMAPiDmDlM/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/-KX4tsEXBdRPIXvzdIokqffwzsNGsF6oGSxnBKD8Gwk/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/-KX4tsEXBdRPIXvzdIokqffwzsNGsF6oGSxnBKD8Gwk/h:50/czM6Ly9nZXRsZW5zLzYvaW1hZ2UtNjUucG5n.webp'
          }
        }
      },
      {
        'id': 7,
        'title': 'Sony',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/OksdEwOW16DMTR7KpQWJqbUWYgByJO4XM2xf8Ew_62Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/OksdEwOW16DMTR7KpQWJqbUWYgByJO4XM2xf8Ew_62Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/25LeGLNdfnzwD4xQKO8vObbjR8pHQs4-vQm2ylVyR1Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/25LeGLNdfnzwD4xQKO8vObbjR8pHQs4-vQm2ylVyR1Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/OksdEwOW16DMTR7KpQWJqbUWYgByJO4XM2xf8Ew_62Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/OksdEwOW16DMTR7KpQWJqbUWYgByJO4XM2xf8Ew_62Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/25LeGLNdfnzwD4xQKO8vObbjR8pHQs4-vQm2ylVyR1Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/25LeGLNdfnzwD4xQKO8vObbjR8pHQs4-vQm2ylVyR1Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/OksdEwOW16DMTR7KpQWJqbUWYgByJO4XM2xf8Ew_62Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/OksdEwOW16DMTR7KpQWJqbUWYgByJO4XM2xf8Ew_62Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/25LeGLNdfnzwD4xQKO8vObbjR8pHQs4-vQm2ylVyR1Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/25LeGLNdfnzwD4xQKO8vObbjR8pHQs4-vQm2ylVyR1Y/h:50/czM6Ly9nZXRsZW5zLzcvaW1hZ2UtNjYucG5n.webp'
          }
        }
      },
      {
        'id': 9,
        'title': 'Nikon',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/V0_OoYZGw1BDBmqkPn-UqMzMmHf2ry3LPfXB5hDropk/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/V0_OoYZGw1BDBmqkPn-UqMzMmHf2ry3LPfXB5hDropk/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/hm4hg9VVeNZDy60jqu-DI8lpQyPLRS_JSq7DEVe_cgw/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/hm4hg9VVeNZDy60jqu-DI8lpQyPLRS_JSq7DEVe_cgw/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/V0_OoYZGw1BDBmqkPn-UqMzMmHf2ry3LPfXB5hDropk/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/V0_OoYZGw1BDBmqkPn-UqMzMmHf2ry3LPfXB5hDropk/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/hm4hg9VVeNZDy60jqu-DI8lpQyPLRS_JSq7DEVe_cgw/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/hm4hg9VVeNZDy60jqu-DI8lpQyPLRS_JSq7DEVe_cgw/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/V0_OoYZGw1BDBmqkPn-UqMzMmHf2ry3LPfXB5hDropk/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.jpg',
            'x2': 'https://imgproxy.by.dev.family/V0_OoYZGw1BDBmqkPn-UqMzMmHf2ry3LPfXB5hDropk/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/hm4hg9VVeNZDy60jqu-DI8lpQyPLRS_JSq7DEVe_cgw/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/hm4hg9VVeNZDy60jqu-DI8lpQyPLRS_JSq7DEVe_cgw/h:50/czM6Ly9nZXRsZW5zLzIwL2xvZ28tbmlrb24tY2FtZXJhLWxlbnMtbWljcm9zY29wZS1jYW1lcmEuanBn.webp'
          }
        }
      },
      {
        'id': 4,
        'title': 'Panasonic',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/cBmxBPQeKax4FT-pmc7dB63jBCgRWKqSNp_-GqhjNI0/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/cBmxBPQeKax4FT-pmc7dB63jBCgRWKqSNp_-GqhjNI0/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/lZkBsX1FBU5nARwNCwRJZjTTppyXOFq55C5W2xwvTEc/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/lZkBsX1FBU5nARwNCwRJZjTTppyXOFq55C5W2xwvTEc/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/cBmxBPQeKax4FT-pmc7dB63jBCgRWKqSNp_-GqhjNI0/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/cBmxBPQeKax4FT-pmc7dB63jBCgRWKqSNp_-GqhjNI0/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/lZkBsX1FBU5nARwNCwRJZjTTppyXOFq55C5W2xwvTEc/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/lZkBsX1FBU5nARwNCwRJZjTTppyXOFq55C5W2xwvTEc/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/cBmxBPQeKax4FT-pmc7dB63jBCgRWKqSNp_-GqhjNI0/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/cBmxBPQeKax4FT-pmc7dB63jBCgRWKqSNp_-GqhjNI0/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/lZkBsX1FBU5nARwNCwRJZjTTppyXOFq55C5W2xwvTEc/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/lZkBsX1FBU5nARwNCwRJZjTTppyXOFq55C5W2xwvTEc/h:50/czM6Ly9nZXRsZW5zLzQvaW1hZ2UtNjMucG5n.webp'
          }
        }
      },
      {
        'id': 2,
        'title': 'Fujifilm',
        'image': {
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/eF_tloSWnHr61Ifv-65679xDkUk6e8uDkXxhOjEDgNY/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/eF_tloSWnHr61Ifv-65679xDkUk6e8uDkXxhOjEDgNY/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/p8VS6hiAfAzJTT_2Z6AWtSfGT44NxmPyrYkiobxgeiU/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/p8VS6hiAfAzJTT_2Z6AWtSfGT44NxmPyrYkiobxgeiU/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.webp'
          },
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/eF_tloSWnHr61Ifv-65679xDkUk6e8uDkXxhOjEDgNY/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/eF_tloSWnHr61Ifv-65679xDkUk6e8uDkXxhOjEDgNY/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/p8VS6hiAfAzJTT_2Z6AWtSfGT44NxmPyrYkiobxgeiU/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/p8VS6hiAfAzJTT_2Z6AWtSfGT44NxmPyrYkiobxgeiU/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/eF_tloSWnHr61Ifv-65679xDkUk6e8uDkXxhOjEDgNY/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.png',
            'x2': 'https://imgproxy.by.dev.family/eF_tloSWnHr61Ifv-65679xDkUk6e8uDkXxhOjEDgNY/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.png',
            'webp_x1': 'https://imgproxy.by.dev.family/p8VS6hiAfAzJTT_2Z6AWtSfGT44NxmPyrYkiobxgeiU/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/p8VS6hiAfAzJTT_2Z6AWtSfGT44NxmPyrYkiobxgeiU/h:50/czM6Ly9nZXRsZW5zLzIvaW1hZ2UtNjEucG5n.webp'
          }
        }
      }
    ],
    'reviews': [
      {
        'id': 12,
        'review': 'Прекрасные ребята, обслуживание на высшем уровне. С удовольствием приду за следующей покупкой.',
        'full_name': 'Вероника Кушнер',
        'link': 'https://vk.com/veronika_zaikovskaya',
        'date': '12 июня, 21:39',
        'image': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/mW_pK1aDw5d0H2VDorQPan0_KYr_UcjUrTPYtIq8z7s/w:80/h:80/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/0mq655u_pf5DC9pVxCdMtXzXQ3vJCXobmFNlZEsWh44/w:160/h:160/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/vKVKUHwPya-59wX6bF1JrWYoHTyOQM-Bbg7SR3vI0-s/w:80/h:80/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/ryZ9KfWvsL9i8E56W7uwM766lFRxVeFxrmoiYhn0nbE/w:160/h:160/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/mW_pK1aDw5d0H2VDorQPan0_KYr_UcjUrTPYtIq8z7s/w:80/h:80/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/0mq655u_pf5DC9pVxCdMtXzXQ3vJCXobmFNlZEsWh44/w:160/h:160/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/vKVKUHwPya-59wX6bF1JrWYoHTyOQM-Bbg7SR3vI0-s/w:80/h:80/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/ryZ9KfWvsL9i8E56W7uwM766lFRxVeFxrmoiYhn0nbE/w:160/h:160/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/mW_pK1aDw5d0H2VDorQPan0_KYr_UcjUrTPYtIq8z7s/w:80/h:80/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/0mq655u_pf5DC9pVxCdMtXzXQ3vJCXobmFNlZEsWh44/w:160/h:160/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/vKVKUHwPya-59wX6bF1JrWYoHTyOQM-Bbg7SR3vI0-s/w:80/h:80/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/ryZ9KfWvsL9i8E56W7uwM766lFRxVeFxrmoiYhn0nbE/w:160/h:160/czM6Ly9nZXRsZW5zLzM3L3Bob3RvLmpwZw.webp'
          }
        }
      },
      {
        'id': 2,
        'review': 'С 2014 года всю технику покупаю только у Дениса и его команды.\nВсегда отличные цены, всегда отличный сервис и подход.\nОни помогали, когда были проблемы и необходимость в доп. оборудовании.\nИскренне желаю им развития и новых высот.\nGet Lens - это мини фотоклуб для тех, кто любит и ценит фото-оборудование.',
        'full_name': 'Александр Калугин',
        'link': null,
        'date': '8 июня, 16:52',
        'image': null
      },
      {
        'id': 1,
        'review': 'Как же много хорошей техники в этом магазине ! Помогли выбрать и объектив и тушку и рюкзак.',
        'full_name': 'Дмитрий Тихонов',
        'link': 'https://vk.com/',
        'date': '18 января, 16:42',
        'image': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/5A6vAMA9mOipGul5gHqdn1c9CoeChJw6_qipbSJWOSk/w:80/h:80/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.png',
            'x2': 'https://imgproxy.by.dev.family/vFXFVggoI8uPYHPbzpE54e-44MI-bCUXsfLHrnNQFzc/w:160/h:160/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.png',
            'webp_x1': 'https://imgproxy.by.dev.family/0scBtCtKrzVat2T4fBgO8SeB-1PCn3JsT_o4N-ZA3Uc/w:80/h:80/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/6SU_tOh0CK4nDhDDu8GpE_1uCXn_nTNpsEbfiC0mxu8/w:160/h:160/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/5A6vAMA9mOipGul5gHqdn1c9CoeChJw6_qipbSJWOSk/w:80/h:80/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.png',
            'x2': 'https://imgproxy.by.dev.family/vFXFVggoI8uPYHPbzpE54e-44MI-bCUXsfLHrnNQFzc/w:160/h:160/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.png',
            'webp_x1': 'https://imgproxy.by.dev.family/0scBtCtKrzVat2T4fBgO8SeB-1PCn3JsT_o4N-ZA3Uc/w:80/h:80/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/6SU_tOh0CK4nDhDDu8GpE_1uCXn_nTNpsEbfiC0mxu8/w:160/h:160/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/5A6vAMA9mOipGul5gHqdn1c9CoeChJw6_qipbSJWOSk/w:80/h:80/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.png',
            'x2': 'https://imgproxy.by.dev.family/vFXFVggoI8uPYHPbzpE54e-44MI-bCUXsfLHrnNQFzc/w:160/h:160/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.png',
            'webp_x1': 'https://imgproxy.by.dev.family/0scBtCtKrzVat2T4fBgO8SeB-1PCn3JsT_o4N-ZA3Uc/w:80/h:80/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/6SU_tOh0CK4nDhDDu8GpE_1uCXn_nTNpsEbfiC0mxu8/w:160/h:160/czM6Ly9nZXRsZW5zLzM1L2U0OWEyZDlhOWMxZDRhYWFlN2RlMGE2MTQ3M2I3YTc4LnBuZw.webp'
          }
        }
      }
    ],
    'latest_blog': [
      {
        'id': 167,
        'title': 'Sirui 50mm f/1.8 Anamorphic. "Народный" анаморфотный объектив! Кино доступно всем!',
        'slug': 'sirui-50mm-f1.8-anamorphic.-"narodnyj"-anamorfotnyj-obuektiv!-kino-dostupno-vsem!',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/Wiv5WxrqpzU',
        'discussion_link': 'https://vk.com/wall-96219277_11385',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/7uow9LbDySG2vmsRPqHGVSOKDD3-M_2rWeuyICFsOW8/w:690/h:460/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/9nQodWGJYDbqidtDuNO3Z6bDJEJgDYf3CNFRni_UVQE/w:1380/h:920/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/6kKj3I3mOn5ln66h7b1Dbpb7jNNEKe4tKruc_M4GA9U/w:690/h:460/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/O0pX1wnMN7yOWX8R50yteW8-M8rNVuCl4DrAA-_PvmE/w:1380/h:920/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/7uow9LbDySG2vmsRPqHGVSOKDD3-M_2rWeuyICFsOW8/w:690/h:460/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/9nQodWGJYDbqidtDuNO3Z6bDJEJgDYf3CNFRni_UVQE/w:1380/h:920/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/6kKj3I3mOn5ln66h7b1Dbpb7jNNEKe4tKruc_M4GA9U/w:690/h:460/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/O0pX1wnMN7yOWX8R50yteW8-M8rNVuCl4DrAA-_PvmE/w:1380/h:920/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/c3yYSJ3eGWn3kuO4eqVZc0szf3FXbGP0mx5adNXlq6Y/w:460/h:307/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/PC0xzlrmvfeCEQqDG9g9JBEh3LvnWC8FqK-NkE3OGOw/w:920/h:614/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/lSnwIhZTM8wesK8hT-Ui4cqLW46b5acmOT_A_n7KVhI/w:460/h:307/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/bYyQH4ZdvhF8f8FlwviiqnoHpkuwqgTlJNvF8Y7k4uU/w:920/h:614/czM6Ly9nZXRsZW5zLzgxL9Cf0YDQtdCy0YzRji1TaXJ1aS5qcGc.webp'
          }
        }
      },
      {
        'id': 166,
        'title': 'Разгрузки для фотографа OCTOPUS GEAR в GETLENS! Испытание пудовой гирей!',
        'slug': 'razgruzki-dlya-fotografa-octopus-gear-v-getlens!-ispytanie-pudovoj-girej!',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/NTRrklf69lw',
        'discussion_link': 'https://vk.com/wall-96219277_10648',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/3jaJ26Ce3TKCJtzmRwiatjgcU1EEG1pHcJ4VCWHEvJg/w:690/h:460/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/8tfVUMWufRxqjMK37yT3yaHbDjoMi8tV2ysjoe4b6go/w:1380/h:920/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/DDQgfRejybfdV8jU66ygD3HyRlkrjMhMsnrRXpUGmVA/w:690/h:460/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/MqXSCN2UYqIoOMxfjQFGqdDgzFVeATFZX072K6ZoSkQ/w:1380/h:920/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/3jaJ26Ce3TKCJtzmRwiatjgcU1EEG1pHcJ4VCWHEvJg/w:690/h:460/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/8tfVUMWufRxqjMK37yT3yaHbDjoMi8tV2ysjoe4b6go/w:1380/h:920/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/DDQgfRejybfdV8jU66ygD3HyRlkrjMhMsnrRXpUGmVA/w:690/h:460/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/MqXSCN2UYqIoOMxfjQFGqdDgzFVeATFZX072K6ZoSkQ/w:1380/h:920/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/MG9f7Wb0986PYIxwflSwUayHpieozjxavMVgrJQFzRo/w:460/h:307/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/trmCaGrAWK1g9OTL3lwo557Td-W5uU-J1MVtoPu-Jss/w:920/h:614/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/zGXmA92R1n0J3T9B1p9hy_gH-Qnt_tUaHfeICjmm1Cs/w:460/h:307/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/eH0kR5cgn4NiDk8SmDccdgI7rysGdlbXa3UEGEBQ9Ao/w:920/h:614/czM6Ly9nZXRsZW5zLzgwL21heHJlc2RlZmF1bHQtKDE0KS5qcGc.webp'
          }
        }
      },
      {
        'id': 165,
        'title': 'Обзор Canon RF 24-240mm f4-6.3 IS USM + ПРИМЕРЫ ФОТО',
        'slug': 'obzor-canon-rf-24-240mm-f4-6.3-is-usm-+-primery-foto',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/x4phqM75Cps',
        'discussion_link': 'https://vk.com/wall-96219277_7151',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/qLOkWi6Gdo67EICtAizHsGiNzQwMzJl2rsswlDwf0Bc/w:690/h:460/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/j50OMTex_BPqbrdQZlrzi6hq4SIIobO-FeDBndlAai8/w:1380/h:920/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/RoNm0cYbmrnH2qHrI2Gbxys23QjcVaUb0N0tJT8FZmA/w:690/h:460/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/Czg8pS6g6BcqGd4SFI2a56fqjwd5AP2rkvRQrADK7DA/w:1380/h:920/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/qLOkWi6Gdo67EICtAizHsGiNzQwMzJl2rsswlDwf0Bc/w:690/h:460/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/j50OMTex_BPqbrdQZlrzi6hq4SIIobO-FeDBndlAai8/w:1380/h:920/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/RoNm0cYbmrnH2qHrI2Gbxys23QjcVaUb0N0tJT8FZmA/w:690/h:460/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/Czg8pS6g6BcqGd4SFI2a56fqjwd5AP2rkvRQrADK7DA/w:1380/h:920/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/gJO_m8isiVFUQdueWocokqajjpHotynlpjalGrmDuXY/w:460/h:307/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/Eful9N2-aPBUz3dt3vmljIrMWQvaCKSGqSB9c022cw0/w:920/h:614/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/6FkhsbB7JVfl80JB1ENam3fUUC1NiRe4T1c5j_rLZ28/w:460/h:307/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/yvuOKy4WoVAMgaw5dwcybMUlRGhhJinoI9slFAEXAqQ/w:920/h:614/czM6Ly9nZXRsZW5zLzc5L21heHJlc2RlZmF1bHQtKDEzKS5qcGc.webp'
          }
        }
      },
      {
        'id': 164,
        'title': 'Обзор Fujifilm X-T30. Сравнение с EOS R и Sony A7S II + примеры фото.',
        'slug': 'obzor-fujifilm-x-t30.-sravnenie-s-eos-r-i-sony-a7s-ii-+-primery-foto.',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/V5FwWBImoDQ',
        'discussion_link': 'https://vk.com/wall-96219277_6991',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/xXJa4j1XBagDzfkPnbiT5RBf7mjOJIsQC1oZuVSe3Vs/w:690/h:460/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/GeLFAqkaaMMn0Olg4ZjlQxRwWbdczMyFAtlU2ZfB7xE/w:1380/h:920/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/n2q-ah-p4_9TzFDG3wK5xrTRV7jcnmemKlBWLmbPdt8/w:690/h:460/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/aWQLUpmINeOeg6ywmakGe7KBG5WY2CIygayhMJJEoD4/w:1380/h:920/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/xXJa4j1XBagDzfkPnbiT5RBf7mjOJIsQC1oZuVSe3Vs/w:690/h:460/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/GeLFAqkaaMMn0Olg4ZjlQxRwWbdczMyFAtlU2ZfB7xE/w:1380/h:920/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/n2q-ah-p4_9TzFDG3wK5xrTRV7jcnmemKlBWLmbPdt8/w:690/h:460/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/aWQLUpmINeOeg6ywmakGe7KBG5WY2CIygayhMJJEoD4/w:1380/h:920/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/vUIrt2y8sEnmb05JNDAKOznu8MA3AXvPFgt2CL1ACag/w:460/h:307/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/oQM-9wkrq3XwvtDIHQ94I2a13JcDJHmx2RcnvhrphqM/w:920/h:614/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/ymW39Qx_8TggGLmH5fNUUClWtgkHWK-6A4_sSAv1S_g/w:460/h:307/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/FfyN03OtnO9UrzFWHUnJPBAiopJqduR-ZSedhle_EYQ/w:920/h:614/czM6Ly9nZXRsZW5zLzc4L21heHJlc2RlZmF1bHQtKDEyKS5qcGc.webp'
          }
        }
      },
      {
        'id': 163,
        'title': 'Четыре недорогих беззеркальных комплекта для фотографа! Fujifilm, Olympus, Sony!',
        'slug': 'chetyre-nedorogih-bezzerkalnyh-komplekta-dlya-fotografa!-fujifilm-olympus-sony!',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/zTs-p5kHVrM',
        'discussion_link': 'https://vk.com/wall-96219277_6554',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/c_Y-jA-KJjLx7v9-JRmqgPO5EkllPPql4N7gfwgc2uI/w:690/h:460/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/Bznm1YVHW3FxihRqakrMCOq0jCSpHXtF4rOWiV0Rk50/w:1380/h:920/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/y_dZA2fDLD1L6WkF2_4is0ERIlufDzkAd5rbnvqv-UU/w:690/h:460/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/eqlSzbOg0rO2W5WhYenAFhcOdIeGOj99i3EQFzVb6oo/w:1380/h:920/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/c_Y-jA-KJjLx7v9-JRmqgPO5EkllPPql4N7gfwgc2uI/w:690/h:460/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/Bznm1YVHW3FxihRqakrMCOq0jCSpHXtF4rOWiV0Rk50/w:1380/h:920/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/y_dZA2fDLD1L6WkF2_4is0ERIlufDzkAd5rbnvqv-UU/w:690/h:460/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/eqlSzbOg0rO2W5WhYenAFhcOdIeGOj99i3EQFzVb6oo/w:1380/h:920/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/ImCmndxiv5a2yGO4cZy0HO_QOk_LvwRjvsAvKGMGmwE/w:460/h:307/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/B6dEO2hkbL5l94Wqjn6JikB89gIt577VyPOSKdiAQrE/w:920/h:614/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/I19jJ6Z9hQ6S4kZWsS_TCGv7ePx59E1Fy5pC9eOdA5Y/w:460/h:307/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/3n6Z0kuBsDwgqqbjE0fweQu1EKvtXdlDi-qmA2b9mqI/w:920/h:614/czM6Ly9nZXRsZW5zLzc3L21heHJlc2RlZmF1bHQtKDExKS5qcGc.webp'
          }
        }
      },
      {
        'id': 162,
        'title': 'Обзор Canon RF 35mm f/1.8 IS MACRO STM + ПРИМЕРЫ ФОТО',
        'slug': 'obzor-canon-rf-35mm-f1.8-is-macro-stm-+-primery-foto',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/YgEYOn_BFKA',
        'discussion_link': 'https://vk.com/wall-96219277_6332',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/c-68iAFjg2HvOFuG0rRlIDQ46poGv22SNTaRIwr2sQU/w:690/h:460/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/Lb_Lx6BJIXq7Ke4j1BsU_BNrcDPJH5fHC5NvwmhhOwo/w:1380/h:920/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/HwmmnWyOms-QrQshnIeqYoVXLO7ba0B7CLP8ByMUPpE/w:690/h:460/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/c2ern5NeyXPeoydWv_2sKfxYSzpI5gT_ermG4NiyWxk/w:1380/h:920/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/c-68iAFjg2HvOFuG0rRlIDQ46poGv22SNTaRIwr2sQU/w:690/h:460/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/Lb_Lx6BJIXq7Ke4j1BsU_BNrcDPJH5fHC5NvwmhhOwo/w:1380/h:920/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/HwmmnWyOms-QrQshnIeqYoVXLO7ba0B7CLP8ByMUPpE/w:690/h:460/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/c2ern5NeyXPeoydWv_2sKfxYSzpI5gT_ermG4NiyWxk/w:1380/h:920/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/KzHkBy4W6X9euoBh8fiL2iBD-xuGtN_mE1dmVEh6SE0/w:460/h:307/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.jpg',
            'x2': 'https://imgproxy.by.dev.family/e0mtRv10uI4LzGwJ_PyaE0Pcf0KihID_jL35Bfsak08/w:920/h:614/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/yRZPndwoDO7Zv6MbRYahTSU9rwvkqwE5c-3suSUz3YA/w:460/h:307/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/UKg8eRoFJw65A0cbGqOEUHsmh7uA6QtnYqgSbcxTB0c/w:920/h:614/czM6Ly9nZXRsZW5zLzc2L21heHJlc2RlZmF1bHQtKDEwKS5qcGc.webp'
          }
        }
      },
      {
        'id': 161,
        'title': 'РВЁМ КАМЕРУ IPHONE ЗА 7000 РУБЛЕЙ!',
        'slug': 'rvyom-kameru-iphone-za-7000-rublej!',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/u-pJLxzCe_I',
        'discussion_link': 'https://vk.com/wall-96219277_6140',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/T-DVnkgb6p4RN3Io_R7EiFQrzxOw_lB8C58AvJgxJI8/w:690/h:460/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/0nqZWo_U1d_CORYh9G5DCpf7LPZ1FOP224_Dqghtxz8/w:1380/h:920/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/lcpksSTt5SgYN4FBy0yfIzEgOWJJUCprknSZEJYQejQ/w:690/h:460/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/bmGo24gBBuQv0XAaNAn8DHJwgR0jZx2lA7Vn3NTZXUg/w:1380/h:920/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/T-DVnkgb6p4RN3Io_R7EiFQrzxOw_lB8C58AvJgxJI8/w:690/h:460/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/0nqZWo_U1d_CORYh9G5DCpf7LPZ1FOP224_Dqghtxz8/w:1380/h:920/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/lcpksSTt5SgYN4FBy0yfIzEgOWJJUCprknSZEJYQejQ/w:690/h:460/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/bmGo24gBBuQv0XAaNAn8DHJwgR0jZx2lA7Vn3NTZXUg/w:1380/h:920/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/hIcgC-qLOjpiKjPVnpNq1yXpm-T4YjB0xNNmkpcy0Ss/w:460/h:307/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/eu8X8hG1_xoafh-nQ_SIAy-RF05S8AeE9JdJM1CaxLA/w:920/h:614/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/zY-9NXooLdOEapnsWqnkzbP-memKx_gZrhqSG2CBzMM/w:460/h:307/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/bKHrznvAhSbUSkakTwG0AxFuVE3JsKqJOtt9E4OyMxY/w:920/h:614/czM6Ly9nZXRsZW5zLzc1L21heHJlc2RlZmF1bHQtKDkpLmpwZw.webp'
          }
        }
      },
      {
        'id': 160,
        'title': 'Обзор Canon RF 15-35 f/2.8 IS USM . Самый резкий широкоугольный объектив на рынке! +БОНУС',
        'slug': 'obzor-canon-rf-15-35-f2.8-is-usm-.-samyj-rezkij-shirokougolnyj-obuektiv-na-rynke!-+bonus',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/YS0Y7V2hdic',
        'discussion_link': 'https://vk.com/wall-96219277_5788',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/LYqOtCAn4bVDebuufqErJuEBbPP2-0QsJXl1C4V7Eis/w:690/h:460/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/XIhe4BpeZh_23Cb0J_s6wN3521sV_rVu3dwN46bV9vg/w:1380/h:920/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/TAdCBez7P3uL8_ssbW-nKbksntqnjFm-VNRBeY7Zf1s/w:690/h:460/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/lb02xIgxT44HzNrrtoFeNcaGFadF9A9krpM791dB4n4/w:1380/h:920/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/LYqOtCAn4bVDebuufqErJuEBbPP2-0QsJXl1C4V7Eis/w:690/h:460/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/XIhe4BpeZh_23Cb0J_s6wN3521sV_rVu3dwN46bV9vg/w:1380/h:920/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/TAdCBez7P3uL8_ssbW-nKbksntqnjFm-VNRBeY7Zf1s/w:690/h:460/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/lb02xIgxT44HzNrrtoFeNcaGFadF9A9krpM791dB4n4/w:1380/h:920/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/JrobAD5YB_4aX0nxKQ1dzjbrYh2C5wrgcSozeCfIPdc/w:460/h:307/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/20hj6kGQJz0wjWgbKJnJDaDiykVEMKmv028g6zL20dM/w:920/h:614/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/bRaXSJSZ6BjJu4_7qTi2EgHxH8sIfobRcvmBYedxF4I/w:460/h:307/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/qH-UJ06Zcd6Q-41DW48jmjwAuLSXLHDBSZ9nQOPQfsg/w:920/h:614/czM6Ly9nZXRsZW5zLzc0L21heHJlc2RlZmF1bHQtKDgpLmpwZw.webp'
          }
        }
      },
      {
        'id': 159,
        'title': 'Обзор TAMRON 15-30mm F/2.8 G2. Лучший сверхширик в соотношении цена/качество! G1 vs G2!',
        'slug': 'obzor-tamron-15-30mm-f2.8-g2.-luchshij-sverhshirik-v-sootnoshenii-cenakachestvo!-g1-vs-g2!',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/vX467ts-9lM',
        'discussion_link': 'https://vk.com/wall-96219277_5555',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/EO2bxW0Rb7njLEdJ_XNAkSO7YD-mxeVn3BQgHSbaMkA/w:690/h:460/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/b8xzm0WGwuePeOgRjlaukZPSQCogjvS0isckpJ9Rpfg/w:1380/h:920/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/Hws96Wr0j0rEfVRoFwJW-2F3-XJ4Rc1gyPxirJopsHI/w:690/h:460/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/XG9S_dBlXehcRNJCaM-h-Y4U8y3hwn_mDTQh7wv3HLY/w:1380/h:920/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/EO2bxW0Rb7njLEdJ_XNAkSO7YD-mxeVn3BQgHSbaMkA/w:690/h:460/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/b8xzm0WGwuePeOgRjlaukZPSQCogjvS0isckpJ9Rpfg/w:1380/h:920/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/Hws96Wr0j0rEfVRoFwJW-2F3-XJ4Rc1gyPxirJopsHI/w:690/h:460/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/XG9S_dBlXehcRNJCaM-h-Y4U8y3hwn_mDTQh7wv3HLY/w:1380/h:920/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/vEMwMgGFQ5zcI5X7z8MFwrvxOjmJxhzMEzp-xJ5fcps/w:460/h:307/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/qhqI8q7bpdasPvxogrDTRu59f22mvmxy5i7B2z09rqQ/w:920/h:614/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/-ZAfQqs-OIgnKAxe5sbJql0_2zhjB0nYPKZHGuuKamQ/w:460/h:307/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/fvCNPXEfxlc9IipaIWrbwDHdyyPerdx3c8083o3h8t0/w:920/h:614/czM6Ly9nZXRsZW5zLzczL21heHJlc2RlZmF1bHQtKDcpLmpwZw.webp'
          }
        }
      },
      {
        'id': 158,
        'title': 'Обзор Sony A9 II. Стоит ли купить Sony A9 Mark II? Sony Alpha 9 II против Sony A9 и Sony A7 III.',
        'slug': 'obzor-sony-a9-ii.-stoit-li-kupit-sony-a9-mark-ii-sony-alpha-9-ii-protiv-sony-a9-i-sony-a7-iii.',
        'fixed': false,
        'category': {
          'id': 4,
          'title': 'GetLens Обзор',
          'posts_count': null
        },
        'video_link': 'https://youtu.be/5dfMi2WT6FA',
        'discussion_link': 'https://vk.com/wall-96219277_5367',
        'created_at': '2 октября',
        'preview': {
          'desktop': {
            'x1': 'https://imgproxy.by.dev.family/YQEapUPWkFmiRPGboGKC1xZg58UanOif2GrhGM5Z8OU/w:690/h:460/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/PJlrW6l1DY5Wqs1d4hU9ZRxtidvQJIAh36uYx0JIjSM/w:1380/h:920/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/ZwDvgrYvQD5lujMpWEv02Y-XXxSFvCILImDYJBB76kI/w:690/h:460/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/G8jZSUT5gZKYJlwXrfodt6Df1Yp0BkQlygY96TG3l2A/w:1380/h:920/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.webp'
          },
          'tablet': {
            'x1': 'https://imgproxy.by.dev.family/YQEapUPWkFmiRPGboGKC1xZg58UanOif2GrhGM5Z8OU/w:690/h:460/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/PJlrW6l1DY5Wqs1d4hU9ZRxtidvQJIAh36uYx0JIjSM/w:1380/h:920/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/ZwDvgrYvQD5lujMpWEv02Y-XXxSFvCILImDYJBB76kI/w:690/h:460/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/G8jZSUT5gZKYJlwXrfodt6Df1Yp0BkQlygY96TG3l2A/w:1380/h:920/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.webp'
          },
          'mobile': {
            'x1': 'https://imgproxy.by.dev.family/SN-VwjDLG1rw2lz6UFiGx8-CifCn6RT7mmWuGWIzR2w/w:460/h:307/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.jpg',
            'x2': 'https://imgproxy.by.dev.family/STRfpvTUkGPf72I1WAY96rp1rgGwkrfYrnSGkm8Buh4/w:920/h:614/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.jpg',
            'webp_x1': 'https://imgproxy.by.dev.family/Tx1kaUbNVcvvMtzp-0TTSGeHCK1Ix4K63H4OS2K40vk/w:460/h:307/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.webp',
            'webp_x2': 'https://imgproxy.by.dev.family/88X31FMRqcAWHRl8v7vhPwHfqRNkywlRpxLDmfG1z9Q/w:920/h:614/czM6Ly9nZXRsZW5zLzcyL21heHJlc2RlZmF1bHQtKDYpLmpwZw.webp'
          }
        }
      }
    ]
  };
// getData(): Observable<RequestData> {
  //     return this.http.get<RequestData>('assets/src/app/files/baseData.json');
  //  }

}
