import { Component, OnInit, OnDestroy, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {
  private globalKeyPressCallbackFn: Function;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.globalKeyPressCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'keypress', (event: any) => {
      console.log('全局键盘点击事件监听 > ' + JSON.stringify(event));
    });
    /*this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    console.log('检测到的浏览器语言 > ' + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');*/
  }

  ngOnDestroy() {
    if (this.globalKeyPressCallbackFn) {
      this.globalKeyPressCallbackFn();
    }
  }
}
