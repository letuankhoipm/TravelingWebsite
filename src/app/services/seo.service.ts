import { Injectable, Inject } from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private titleService: Title, @Inject(DOCUMENT) private doc) { }
  generateTags(config) {
    config = Object.assign({
      title: 'Phương Bình | Tin đăng du lich, các gói du lịch và kì nghỉ dài, ngắn hạn.',
      description: 'Kênh du lịch hàng đầu miền Tây Việt Nam với các gói kì nghỉ trong và ngoài nước chất lượng với giá rẻ',
      image: 'https://phuongbinh-2019.firebaseapp.com/assets/images/background-beach.jpg',
      slug: '',
      keywords: ''
    }, config);

    if (!config.image) {
      config.image = 'https://phuongbinh-2019.firebaseapp.com/assets/images/background-beach.jpg';
    }
    this.meta.updateTag({ name: 'slug', content: config.slug });
    this.meta.updateTag({ name: 'image', content: config.image });
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ name: 'title', content: config.title });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@phuongbinh' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title })
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Phương Bình | Tin đăng du lich, các gói du lịch và kì nghỉ dài, ngắn hạn.' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });

    this.titleService.setTitle(config.title);
    this.setCanonical();

  }

  setCanonical() {
    // console.log(this.doc.querySelector('link[rel="canonical"]'));
    let docURL = this.doc.URL;
    let url = docURL.slice(0, docURL.lastIndexOf('?') > 0 ? docURL.lastIndexOf('?') : docURL.length);
    console.log(url);

    let link: HTMLLinkElement = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute("href", url);
      return;
    }

    link = this.doc.createElement('link') as HTMLLinkElement;
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.doc.head.appendChild(link);


  }

}
