import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

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
  };
  children: Array<ChildrenType>;
}

export interface ResponseBrandType extends ImagesType {
  id: number;
  title: string;
}

export interface ResponseReviewType extends ImagesType {
  id: number;
  review: string;
  full_name: string;
  link: string;
  date: string;
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
  main_slider: Array<ResponseMainSliderType>;
  good_propositions: Array<ResponsePropositionType>;
  new_propositions: Array<ResponsePropositionType>;
  categories: Array<ResponseCategoryType>;
  brands: Array<ResponseBrandType>;
  reviews: Array<ResponseReviewType>;
  latest_blog: Array<ResponseLatestBlogType>;
  result: 'success' | string;

}

@Injectable()
export class SliderService {
  constructor(private http: HttpClient) {
  }

  readonly ROOT_URL = 'https://getlens-master.stage.dev.family/api/pages/';

  getData(): Observable<RequestData> {
    return this.http.get<RequestData>(this.ROOT_URL);
  }
}
