export class ServicesController {
  constructor(element) {
    this._parent = element || document;
    this._scrollBlock = this._parent.querySelector('.js-scroll-block');
    this._screenWrapper = this._parent.querySelector('.js-block');
    this._blocksWrapper = this._parent.querySelector('.js-block-wrapper');
    this._progressBar = this._parent.querySelector('.js-progress-bar');

    this._breakpointMob = window.matchMedia('(max-width:767px)');
    this._breakpointBig = window.matchMedia('(min-width:2560px)');
    this._offset = 50;

    this._onWindowScroll = this._onWindowScroll.bind(this);
    this._onWindowResize = this._onWindowResize.bind(this);
    this._breakpointDesktopChecker = this._breakpointDesktopChecker.bind(this);
  }

  _setBlockHeight() {
    this._windowWidth = window.innerWidth;
    this._transformValue = this._scrollBlock.scrollWidth - this._scrollBlock.offsetWidth;
    this._screenWrapper.style.height = `${this._transformValue + this._blocksWrapper.scrollHeight + this._offset}px`;
  }

  _removeBlockStyle() {
    this._screenWrapper.style.height = '';
    this._scrollBlock.style = '';
  }

  _fillProgressBar() {
    const currentProgress = -this._topBlockValue / this._transformValue * 100;
    if (currentProgress < 0) {
      this._progressBar.style.setProperty('--progress', 0);
    } else if (currentProgress > 100) {
      this._progressBar.style.setProperty('--progress', '100%');
    } else {
      this._progressBar.style.setProperty('--progress', currentProgress.toFixed(3) + '%');
    }
  }

  _moveBlock() {
    this._topBlockValue = this._screenWrapper.getBoundingClientRect().top;
    if (this._topBlockValue <= 0 && this._topBlockValue >= this._transformValue * -1) {
      this._scrollBlock.style.transform = `translateX(${this._topBlockValue}px)`;
    } else if (this._topBlockValue > 0) {
      this._scrollBlock.style.transform = 'translateX(0)';
    } else {
      this._scrollBlock.style.transform = `translateX(-${this._transformValue}px)`;
    }
    this._fillProgressBar();
  }

  _setStartBlockPosition() {
    this._setBlockHeight();
    const bottomBlockValue = this._screenWrapper.getBoundingClientRect().bottom;
    if (bottomBlockValue * -1 <= document.scrollHeight) {
      this._scrollBlock.style.transform = bottomBlockValue >= this._transformValue * -1 ? `translateX(${bottomBlockValue}px)` : `translateX(-${this._transformValue}px)`;
    }
  }

  _onWindowScroll() {
    this._moveBlock();
  }

  _onWindowResize() {
    this._setBlockHeight();
  }

  _deactivateBlocksScroll() {
    this._removeBlockStyle();
    window.removeEventListener('scroll', this._onWindowScroll);
    window.removeEventListener('resize', this._onWindowResize);
  }

  _activateBlocksScroll() {
    this._setStartBlockPosition();
    window.addEventListener('scroll', this._onWindowScroll);
    window.addEventListener('resize', this._onWindowResize);
  }

  _breakpointDesktopChecker() {
    if (this._breakpointBig.matches) {
      this._deactivateBlocksScroll();
      return;
    } else if (this._breakpointMob.matches) {
      this._deactivateBlocksScroll();
      return;
    }

    this._activateBlocksScroll();
  }

  init() {
    if (this._screenWrapper) {
      this._activateBlocksScroll();
    }
  }
}
