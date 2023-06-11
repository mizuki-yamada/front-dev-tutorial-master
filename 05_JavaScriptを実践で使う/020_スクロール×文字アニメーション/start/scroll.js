class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this.cb = cb;
    this._init();
  }

  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.io.POLL_INTERVAL = 100;
    this.els.forEach((el) => {
      this.io.observe(el); //監視する要素はel
    });
  }

  destroy() {
    //監視対象の解放を行う
    //不要になったタイミングで処理を解放する
    this.io.disconnect(); //ISOの監視が終了する
  }
}
