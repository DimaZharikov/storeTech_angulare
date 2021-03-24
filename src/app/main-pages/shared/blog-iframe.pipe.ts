import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Pipe({
  name: 'IframeLatestBlog'
})
export class BlogIframePipe implements PipeTransform {
  constructor(private movies: DomSanitizer) {
  }

  transform(url: string): SafeUrl {
    return this.movies.bypassSecurityTrustUrl(url);
  }
}
