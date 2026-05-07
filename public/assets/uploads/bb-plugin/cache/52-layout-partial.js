/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(name, definition)
  else this[name] = definition()
}('bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera|opr|opios/i.test(ua)) {
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      if( /touchpad\//i.test(ua) ){
        result.touchpad = t;
      }
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.msedge && (android || result.silk)) {
      result.android = t
    } else if (iosdevice) {
      result[iosdevice] = t
      result.ios = t
    } else if (mac) {
      result.mac = t
    } else if (xbox) {
      result.xbox = t
    } else if (windows) {
      result.windows = t
    } else if (linux) {
      result.linux = t
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});

(function($){
  UABBTrigger = {

      /**
       * Trigger a hook.
       *
       * @since 1.1.0.3
       * @method triggerHook
       * @param {String} hook The hook to trigger.
       * @param {Array} args An array of args to pass to the hook.
       */
      triggerHook: function( hook, args )
      {
        $( 'body' ).trigger( 'uabb-trigger.' + hook, args );
      },
    
      /**
       * Add a hook.
       *
       * @since 1.1.0.3
       * @method addHook
       * @param {String} hook The hook to add.
       * @param {Function} callback A function to call when the hook is triggered.
       */
      addHook: function( hook, callback )
      {
        $( 'body' ).on( 'uabb-trigger.' + hook, callback );
      },
    
      /**
       * Remove a hook.
       *
       * @since 1.1.0.3
       * @method removeHook
       * @param {String} hook The hook to remove.
       * @param {Function} callback The callback function to remove.
       */
      removeHook: function( hook, callback )
      {
        $( 'body' ).off( 'uabb-trigger.' + hook, callback );
      },
  };
})(jQuery);

jQuery(document).ready(function( $ ) {

    if( typeof bowser !== 'undefined' && bowser !== null ) {

      var uabb_browser   = bowser.name,
          uabb_browser_v = bowser.version,
          uabb_browser_class = uabb_browser.replace(/\s+/g, '-').toLowerCase(),
          uabb_browser_v_class = uabb_browser_class + parseInt( uabb_browser_v );
      
      $('html').addClass(uabb_browser_class).addClass(uabb_browser_v_class);
      
    }

    $('.uabb-row-separator').parents('html').css('overflow-x', 'hidden');
});

;(function($) {

	/**
	 * Class for Menu Module
	 *
	 * @since 1.6.1
	 */
	FLBuilderMenu = function( settings ){

		// set params
		this.nodeId              = settings.id;
		this.nodeClass           = '.fl-node-' + settings.id;
		this.wrapperClass        = this.nodeClass + ' .fl-menu';
		this.type				 = settings.type;
		this.mobileToggle		 = settings.mobile;
		this.mobileBelowRow		 = settings.mobileBelowRow;
		this.mobileFlyout		 = settings.mobileFlyout;
		this.breakPoints         = settings.breakPoints;
		this.mobileBreakpoint	 = settings.mobileBreakpoint;
		this.currentBrowserWidth = $( window ).width();
		this.postId              = settings.postId;
		this.mobileStacked       = settings.mobileStacked;
		this.submenuIcon         = settings.submenuIcon;

		// initialize the menu
		this._initMenu();

		// check if viewport is resizing
		$( window ).on( 'resize', $.proxy( function( e ) {

			var width = $( window ).width();

			// if screen width is resized, reload the menu
		    if( width != this.currentBrowserWidth ){

				this.currentBrowserWidth = width;
				this._initMenu();
 				this._clickOrHover();
			}

			this._resizeFlyoutMenuPanel();
		}, this ) );

		$( window ).on( 'scroll', $.proxy( function( e ) {
			this._resizeFlyoutMenuPanel();
		}, this ) );

		$( 'body' ).on( 'click', $.proxy( function( e ) {
			if ( 'undefined' !== typeof FLBuilderConfig ){
				return;
			}

			var activeMobileMenu = $(this.wrapperClass + ' .fl-menu-mobile-toggle.fl-active' );
			if ( activeMobileMenu.length && ( 'expanded' !== this.mobileToggle ) ){
				$( activeMobileMenu ).trigger('click');
			}

			$( this.wrapperClass ).find( '.fl-has-submenu' ).removeClass( 'focus' );
			$( this.wrapperClass ).find( '.fl-has-submenu .sub-menu' ).removeClass( 'focus' );

		}, this ) );

		// Close Mobile menu when tabbing out from the last menu item.
		$( this.wrapperClass + ' ul.menu > li:last-child' ).on( 'focusout', $.proxy(function (e) {
			if ( $( this.wrapperClass ).find( '.fl-menu-mobile-toggle' ).hasClass( 'fl-active' ) && ( 'expanded' !== this.mobileToggle ) ) {
				if ( ! $( e.relatedTarget ).parent().hasClass( 'menu-item' ) ) {
					$( this.wrapperClass ).find( '.fl-menu-mobile-toggle' ).trigger( 'click' );
				}
			}
		}, this ) );

	};

	FLBuilderMenu.prototype = {
		nodeClass               : '',
		wrapperClass            : '',
		type 	                : '',
		breakPoints 			: {},
		$submenus				: null,

		/**
		 * Check if the screen size fits a mobile viewport.
		 *
		 * @since  1.6.1
		 * @return bool
		 */
		_isMobile: function(){
			return this.currentBrowserWidth <= this.breakPoints.small ? true : false;
		},

		/**
		 * Check if the screen size fits a medium viewport.
		 *
		 * @since  1.10.5
		 * @return bool
		 */
		_isMedium: function(){
			return this.currentBrowserWidth <= this.breakPoints.medium ? true : false;
		},

		/**
		 * Check if the screen size fits a large viewport.
		 *
		 * @since  1.10.5
		 * @return bool
		 */
		_isLarge: function(){
			return this.currentBrowserWidth <= this.breakPoints.large ? true : false;
		},

		/**
		 * Check if the menu should toggle for the current viewport base on the selected breakpoint
		 *
		 * @see 	this._isMobile()
		 * @see 	this._isMedium()
		 * @since  	1.10.5
		 * @return bool
		 */
		_isMenuToggle: function(){
			if ( ( 'always' == this.mobileBreakpoint
				|| ( this._isMobile() && 'mobile' == this.mobileBreakpoint )
				|| ( this._isMedium() && 'medium-mobile' == this.mobileBreakpoint )
				|| ( this._isLarge() && 'large-mobile' == this.mobileBreakpoint )
			) && ( $( this.wrapperClass ).find( '.fl-menu-mobile-toggle' ).is(':visible') || 'expanded' == this.mobileToggle ) ) {
				return true;
			}

			return false;
		},

		/**
		 * Initialize the toggle logic for the menu.
		 *
		 * @see    this._isMenuToggle()
		 * @see    this._menuOnCLick()
		 * @see    this._clickOrHover()
		 * @see    this._submenuOnRight()
		 * @see    this._submenuRowZindexFix()
		 * @see    this._toggleForMobile()
		 * @since  1.6.1
		 * @return void
		 */
		_initMenu: function(){
			this._setupSubmenu();
			this._menuOnFocus();
			this._menuOnEscape();
			this._submenuOnClick();
			if ( $( this.nodeClass ).length && this.type == 'horizontal' ) {
				this._initMegaMenus();
			}

			if( this._isMenuToggle() || this.type == 'accordion' ){

				$( this.wrapperClass ).off( 'mouseenter mouseleave' );
				this._menuOnClick();
				this._clickOrHover();

			} else {
				$( this.wrapperClass ).off( 'click' );
				this._submenuOnRight();
				this._submenuRowZindexFix();
			}

			if( this.mobileToggle != 'expanded' ){
				this._toggleForMobile();
			}

			if( $( this.wrapperClass ).find( '.fl-menu-search-item' ).length ){
				this._toggleMenuSearch();
			}

			if( $( this.wrapperClass ).find( '.fl-menu-cart-item').length ){
				this._wooUpdateParams();
			}
		},

		/**
		 * Initializes submenu dropdowns.
		 *
		 * @since 3.0
		 * @return void
		 */
		_setupSubmenu: function() {
			$( this.wrapperClass + ' ul.sub-menu' ).each( function(){
				$( this ).closest( 'li' ).find('a').first().attr( 'aria-haspopup', 'true' );
			});
		},

		/**
		 * Adds a focus class to menu elements similar to be used similar to CSS :hover psuedo event
		 *
		 * @since  1.9.0
		 * @return void
		 */
		_menuOnFocus: function(){
			var cKey      = 0,
			    isShifted = false;

			$( this.nodeClass ).off('keydown').on( 'keydown', 'a', function( e ){
				cKey      = e.which;
				isShifted = e.shiftKey;
			});

			$( this.nodeClass ).off('focus').on( 'focus', 'a', $.proxy( function( e ){
				var $menuItem	= $( e.target ).parents( '.menu-item' ).first(),
					$parents	= $( e.target ).parentsUntil( this.wrapperClass );

				$('.fl-menu .focus').removeClass('focus');

				$parents.addClass('focus')

				if ( ! $menuItem.closest('.fl-has-submenu').hasClass('escaped') ) {
					$menuItem.addClass('focus')
				}
				else {
					$menuItem.closest('.fl-has-submenu').removeClass('focus escaped')
				}
			}, this ) ).on( 'focusout', 'a', $.proxy( function( e ){
				var el            = $(e.target).parent(),
		            $megaMenu     = el.closest( '.mega-menu' ),
		            $megaLastItem = $megaMenu.find('> .sub-menu > .menu-item:last-child'),
					$lastItem     = el.parents('.fl-has-submenu:last').find('.menu-item:last'),
					isLastChild   = ! $megaMenu.length && el.is( $lastItem );

		        if( $megaMenu.length ) {
					isLastChild = el.is( $megaLastItem ) || el.is( $megaLastItem.find( '.menu-item:last-child' ) );
				}

				if ( isLastChild && cKey === 9 && isShifted ) {
					isLastChild = false;
					cKey       = 0;
					isShifted  = false;
				}
				else if ( cKey === 27 ) {
					isLastChild = false;
				}

				if ( isLastChild ) {
					$( e.target ).parentsUntil( this.wrapperClass ).removeClass( 'focus' );
				}

			}, this ) );
		},

		/**
		 * Logic for submenu items when Escape key is pressed.
		 *
		 * @since  2.7.1
		 * @return void
		 */
		_menuOnEscape: function(){
			$( 'body' ).off('keydown').on( 'keydown', $.proxy( function( e ){
				if ( e.which !== 27 ) {
					return;
				}

				if ( $( e.target ).closest('.menu-item').length ) {
					var activeSubmenu = null,
						menuItem      = $( e.target ).closest('.menu-item'),
						type          = menuItem.closest('.fl-menu-accordion').length ? 'accordion' : 'horizontal';

					if ( 'horizontal' === type ) {
						if ( menuItem.hasClass( 'fl-has-submenu' ) && menuItem.hasClass( 'focus' ) ) {
							activeSubmenu = menuItem.find('> ul.sub-menu');
						}
						else {
							activeSubmenu = menuItem.closest('ul.sub-menu');
						}
						activeSubmenu.parent().addClass('escaped');
						activeSubmenu.parent().find('a:first').focus();
					}
					else {
						if ( menuItem.hasClass( 'fl-has-submenu' ) && 'accordion' === type && menuItem.hasClass( 'fl-active' ) ) {
							activeSubmenu = menuItem.find('> ul.sub-menu');
						}
						else {
							activeSubmenu = menuItem.closest('ul.sub-menu');
						}

						activeSubmenu.slideUp(400, function(){
							if ( menuItem.hasClass( 'fl-has-submenu' ) && menuItem.hasClass( 'fl-active' ) ) {
								activeSubmenu.parent().last().find('a:first').focus();
							}
							else {
								menuItem.removeClass('focus');
								menuItem.parents('.menu-item').first().find('a:first').focus();
							}
							activeSubmenu.parent().last().removeClass( 'fl-active' );
						});

					}
				}
				else {
					$('.fl-menu').find( 'li.menu-item.focus' ).last().removeClass('focus');
				}
			}, this ) );
		},

		/**
		 * Logic for submenu toggling on accordions or mobile menus (vertical, horizontal)
		 *
		 * @since  1.6.1
		 * @return void
		 */
		_menuOnClick: function(){
			$( this.wrapperClass ).off().on( 'click', '.fl-has-submenu-container', $.proxy( function( e ){

				var $link			= $( e.target ).parents( '.fl-has-submenu' ).first(),
					$subMenu 		= $link.children( '.sub-menu' ).first(),
					$href	 		= $link.children('.fl-has-submenu-container').first().find('> a').attr('href') || false,
					$subMenuParents = $( e.target ).parents( '.sub-menu' ),
					$activeParents 	= $( e.target ).parents( '.fl-has-submenu.fl-active' );
				if(
					( ! $subMenu.is(':visible') && 'none' === this.submenuIcon )
					|| $(e.target).hasClass('fl-menu-toggle')
					|| ($subMenu.is(':visible') && (typeof $href === 'undefined'|| $href == '#'))
					|| ( ! $href || '#' === $href )
				){
					e.preventDefault();
				} else {
						e.stopPropagation();
						window.location.href = $href;
						return false;
				}

				if ($(this.wrapperClass).hasClass('fl-menu-accordion-collapse')) {

					if ( !$link.parents('.menu-item').hasClass('fl-active') ) {
						$('.menu .fl-active', this.wrapperClass).not($link).removeClass('fl-active');
					}
					else if ($link.parents('.menu-item').hasClass('fl-active') && $link.parent('.sub-menu').length) {
						$('.menu .fl-active', this.wrapperClass).not($link).not($activeParents).removeClass('fl-active');
					}

					$('.sub-menu', this.wrapperClass).not($subMenu).not($subMenuParents).slideUp('normal');
				}

				if ( ! this.mobileStacked && 'horizontal' == this.type && 'expanded' == this.mobileToggle ) {
					$( this.wrapperClass ).find( '.fl-active' ).not($link).not($activeParents).removeClass( 'fl-active' );
				}
				else {
					$subMenu.slideToggle();
				}

				$link.toggleClass( 'fl-active' );
				e.stopPropagation();

			}, this ) );

		},

		/**
		 * Logic for submenu items click event
		 *
		 * @since  1.10.6
		 * @return void
		 */
		_submenuOnClick: function(){
			$( this.wrapperClass + ' .sub-menu' ).off().on( 'click', 'a', $.proxy( function( e ){
				if ( $( e.target ).parent().hasClass('focus') ) {
					$( e.target ).parentsUntil( this.wrapperClass ).removeClass('focus');
				}
			}, this ) );
		},

		/**
		 * Changes general styling and behavior of menus based on mobile / desktop viewport.
		 *
		 * @see    this._isMenuToggle()
		 * @since  1.6.1
		 * @return void
		 */
		_clickOrHover: function(){
			this.$submenus = this.$submenus || $( this.wrapperClass ).find( '.sub-menu' );
			var $wrapper   = $( this.wrapperClass ),
				$menu      = $wrapper.find( '.menu' );
				$li        = $wrapper.find( '.fl-has-submenu' );

			if( this._isMenuToggle() ){
				$li.each( function( el ){
					if( !$(this).hasClass('fl-active') ){
						$(this).find( '.sub-menu' ).fadeOut();
					}
				} );
			} else {
				$li.each( function( el ){
					if( !$(this).hasClass('fl-active') ){
						$(this).find( '.sub-menu' ).css( {
							'display' : '',
							'opacity' : ''
						} );
					}
				} );
			}
		},

		/**
		 * Logic to prevent submenus to go outside viewport boundaries.
		 *
		 * @since  1.6.1
		 * @return void
		 */
		_submenuOnRight: function(){

			$( this.wrapperClass )
				.on( 'mouseenter focus', '.fl-has-submenu', $.proxy( function( e ){

					if( $ ( e.currentTarget ).find('.sub-menu').length === 0 ) {
						return;
					}

					var $link           = $( e.currentTarget ),
						$parent         = $link.parent(),
						$subMenu        = $link.find( '.sub-menu' ),
						subMenuWidth    = $subMenu.width(),
						subMenuPos      = 0,
						bodyWidth       = $( 'body' ).width();

					if( $link.closest( '.fl-menu-submenu-right' ).length !== 0) {

						$link.addClass( 'fl-menu-submenu-right' );

					} else if( $( 'body' ).hasClass( 'rtl' ) ) {

						subMenuPos = $parent.is( '.sub-menu' ) ?
									 $parent.offset().left - subMenuWidth:
									 $link.offset().left - $link.width() - subMenuWidth;

						if( subMenuPos <= 0 ) {
							$link.addClass( 'fl-menu-submenu-right' );
						}

					} else {

						subMenuPos = $parent.is( '.sub-menu' ) ?
									 $parent.offset().left + $parent.width() + subMenuWidth :
									 $link.offset().left + $link.width() + subMenuWidth;

						if( subMenuPos > bodyWidth ) {
							$link.addClass('fl-menu-submenu-right');
						}
					}
				}, this ) )
				.on( 'mouseleave', '.fl-has-submenu', $.proxy( function( e ){
					$( e.currentTarget ).removeClass( 'fl-menu-submenu-right' );
				}, this ) );

		},

		/**
		 * Logic to prevent submenus to go behind the next overlay row.
		 *
		 * @since  1.10.9
		 * @return void
		 */
		_submenuRowZindexFix: function( e ){

			$( this.wrapperClass )
				.on( 'mouseenter', 'ul.menu > .fl-has-submenu', $.proxy( function( e ){

					if( $ ( e.currentTarget ).find('.sub-menu').length === 0 ) {
						return;
					}

					$( this.nodeClass )
						.closest( '.fl-row' )
						.find( '.fl-row-content' )
						.css( 'z-index', '10' );

				}, this ) )
				.on( 'mouseleave', 'ul.menu > .fl-has-submenu', $.proxy( function( e ){

					$( this.nodeClass )
						.closest( '.fl-row' )
						.find( '.fl-row-content' )
						.css( 'z-index', '' );

				}, this ) );
		},

		/**
		 * Logic for the mobile menu button.
		 *
		 * @since  1.6.1
		 * @return void
		 */
		_toggleForMobile: function(){

			var $wrapper = null,
				$menu    = null,
				self     = this;

			if( this._isMenuToggle() ){

				if ( this._isMobileBelowRowEnabled() ) {
					this._placeMobileMenuBelowRow();
					$wrapper = $( this.wrapperClass );
					$menu    = $( this.nodeClass + '-clone' );
					$menu.find( 'ul.menu' ).show();
				}
				else {
					$wrapper = $( this.wrapperClass );
					$menu    = $wrapper.find( '.menu' );
				}

				if( !$wrapper.find( '.fl-menu-mobile-toggle' ).hasClass( 'fl-active' ) && ! self.mobileFlyout ){
					$menu.css({ display: 'none' });
				}

				// Flayout Menu
				if ( self.mobileFlyout ) {
					this._initFlyoutMenu();
				}

				$wrapper.on( 'click', '.fl-menu-mobile-toggle', function( e ){

					$( this ).toggleClass( 'fl-active' );

					if ( self.mobileFlyout ) {
						self._toggleFlyoutMenu();
					}
					else {
						var targetMenu = null;

						if ( self.mobileBelowRow ) {
							var $closestCol = $( this ).parents( '.fl-col, .fl-module-box' ),
								$closestColGroup = $closestCol.length ? $closestCol.parent( '.fl-col-group' ) : null,
								targetMenu  = $closestCol.length ? $closestCol.last().next( '.fl-menu-mobile-clone' ) : null;

							if ( $closestColGroup.length ) {
								if ( $closestColGroup.hasClass( 'fl-col-group-responsive-reversed' ) ) {
									$closestColGroup.find( '.fl-menu-mobile-clone' ).css( 'order', -1 );
								} else if ( $closestColGroup ) {
									$closestColGroup.find( '.fl-menu-mobile-clone' ).css( 'order', 2 );
								}
							}
						} else {
							targetMenu = $( this ).closest( '.fl-menu' ).find( 'ul.menu' );
						}

						if ( targetMenu.length ) {
							$menu = $( targetMenu );
						}

						$menu.slideToggle();
					}

					e.stopPropagation();
				} );

				// Hide active menu when click on anchor link ID that exists on a page.
				$menu.off().on( 'click', '.menu-item > a[href*="#"]:not([href="#"])', function(e){
					var $href = $(this).attr('href'),
						$targetID = $href.split('#')[1],
						element = $('#' + $targetID);
					if ( $('body').find(element).length > 0 ) {
						$( this ).toggleClass( 'fl-active' );
						FLBuilderLayout._scrollToElement( element );
						if ( ! self._isMenuToggle() ) {
							$menu.slideToggle();
						}
					}
				});
			}
			else {

				if ( this._isMobileBelowRowEnabled() ) {
					this._removeMenuFromBelowRow();
				}

				$wrapper = $( this.wrapperClass ),
				$menu    = $wrapper.find( 'ul.menu' );
				$wrapper.find( '.fl-menu-mobile-toggle' ).removeClass( 'fl-active' );
				$menu.css({ display: '' });

				if ( ! this._isMobileBelowRowEnabled() ) {
					$menu.off( 'click', '.menu-item > a[href*="#"]:not([href="#"])' );
				}

				if ( this.mobileFlyout && $wrapper.find( '.fl-menu-mobile-flyout' ).length > 0 ) {
					$( 'body' ).css( 'margin', '' );
					$( '.fl-builder-ui-pinned-content-transform' ).css( 'transform', '' );
					$menu.unwrap();
					$wrapper.find( '.fl-menu-mobile-close' ).remove();
					$wrapper.find( '.fl-menu-mobile-opacity' ).remove();
				}
			}
		},

		/**
		 * Init any mega menus that exist.
		 *
		 * @see 	this._isMenuToggle()
		 * @since  	1.10.4
		 * @return void
		 */
		_initMegaMenus: function(){

			var module     = $( this.nodeClass ),
				rowContent = module.closest( '.fl-row-content' ),
				rowWidth   = rowContent.width(),
				megas      = module.find( '.mega-menu' ),
				disabled   = module.find( '.mega-menu-disabled' ),
				isToggle   = this._isMenuToggle();

			if ( isToggle ) {
				megas.removeClass( 'mega-menu' ).addClass( 'mega-menu-disabled' );
				module.find( 'li.mega-menu-disabled > ul.sub-menu' ).css( 'width', '' );
				rowContent.css( 'position', '' );
			} else {
				disabled.removeClass( 'mega-menu-disabled' ).addClass( 'mega-menu' );
				module.find( 'li.mega-menu > ul.sub-menu' ).css( 'width', rowWidth + 'px' );
				rowContent.css( 'position', 'relative' );
			}
		},

		/**
		 * Check to see if Below Row should be enabled.
		 *
		 * @since  	1.11
		 * @return boolean
		 */
		_isMobileBelowRowEnabled: function() {
			return this.mobileBelowRow && ( $( this.nodeClass ).parents( '.fl-col, .fl-module-box' ).length );
		},

		/**
		 * Logic for putting the mobile menu below the menu's
		 * column so it spans the full width of the page.
		 *
		 * @since  1.10
		 * @return void
		 */
		_placeMobileMenuBelowRow: function(){

			if ( $( this.nodeClass + '-clone' ).length ) {
				return;
			}

			var module = $( this.nodeClass ),
				clone  = null,
				col    = module.parents( '.fl-col, .fl-module-box' ).last();

			if ( module.length < 1 ) {
				return;
			}

			clone = ( module.length > 1 ) ? $( module[0] ).clone() : module.clone();
			module.find( 'ul.menu' ).remove();
			clone.addClass( ( this.nodeClass + '-clone' ).replace( '.', '' ) );
			clone.addClass( 'fl-menu-mobile-clone' );
			clone.find( '.fl-menu-mobile-toggle' ).remove();
			col.after( clone );

			// Removes animation when enabled.
			if ( module.hasClass( 'fl-animation' ) ) {
				clone.removeClass( 'fl-animation' );
			}

			this._menuOnClick();
		},

		/**
		 * Logic for removing the mobile menu from below the menu's
		 * column and putting it back in the main wrapper.
		 *
		 * @since  1.10
		 * @return void
		 */
		_removeMenuFromBelowRow: function(){

			if ( ! $( this.nodeClass + '-clone' ).length ) {
				return;
			}

			var module = $( this.nodeClass ),
				clone  = $( this.nodeClass + '-clone' ),
				menu   = clone.find( 'ul.menu' );

			module.find( '.fl-menu-mobile-toggle' ).after( menu );
			clone.remove();
			menu.find( 'a' ).each( FLBuilderLayout._initAnchorLink );
		},

		/**
		 * Logic for Flyout responsive menu.
		 *
		 * @since 2.2
		 * @return void
		 */
		_initFlyoutMenu: function(){
			var win     = $( window ),
				wrapper = $( this.wrapperClass ),
				menu  	= wrapper.find( 'ul.menu' ),
				button	= wrapper.find( '.fl-menu-mobile-toggle' );

			if ( 0 === wrapper.find( '.fl-menu-mobile-flyout' ).length ) {
				menu.wrap( '<div class="fl-menu-mobile-flyout"></div>' );
			}

			if ( 0 === wrapper.find( '.fl-menu-mobile-close' ).length ) {
				close = window.fl_responsive_close || 'Close'
				wrapper.find( '.fl-menu-mobile-flyout' )
					.prepend( '<button class="fl-menu-mobile-close" aria-label="' + close + '"><i class="fas fa-times" aria-hidden="true"></i></button>' );
			}

			// Push with opacity
			if ( wrapper.hasClass( 'fl-menu-responsive-flyout-push-opacity' ) && 0 === wrapper.find( '.fl-menu-mobile-opacity' ).length ) {
				wrapper.append( '<div class="fl-menu-mobile-opacity"></div>' );
			}

			wrapper.on( 'click', '.fl-menu-mobile-opacity, .fl-menu-mobile-close', function(e){
				button.trigger( 'click' );
				e.stopPropagation();
			});

			if ( 'undefined' !== typeof FLBuilder ) {
				FLBuilder.addHook('restartEditingSession', function(){
					$( '.fl-builder-ui-pinned-content-transform' ).css( 'transform', '' );

					// Toggle active menu.
					if ( button.hasClass( 'fl-active' ) ) {
						button.trigger( 'click' );
					}
				});
			}
		},

		/**
		 * Logic to enable/disable the Flyout menu on button click.
		 *
		 * @since 2.2
		 * @return void
		 */
		_toggleFlyoutMenu: function(){
			var wrapper		= $( this.wrapperClass ),
				button		= wrapper.find( '.fl-menu-mobile-toggle' ),
				wrapFlyout	= wrapper.find( '.fl-menu-mobile-flyout' ),
				position 	= wrapper.hasClass( 'fl-flyout-right' ) ? 'right' : 'left',
				pushMenu 	= wrapper.hasClass( 'fl-menu-responsive-flyout-push' ) || wrapper.hasClass( 'fl-menu-responsive-flyout-push-opacity' ),
				opacity		= wrapper.find( '.fl-menu-mobile-opacity' ),
				marginPos	= {},
				posAttr		= {},
				fixedPos 	= {},
				winHeight	= $(window).height(),
				fixedHeader	= $('header, header > div');

			this._resizeFlyoutMenuPanel();

			// Fix the push menu when builder ui panel is pinned.
			if ( $( '.fl-builder-ui-pinned-content-transform' ).length > 0 && ! $( 'body' ).hasClass( 'fl-builder-edit' ) ) {
				$( '.fl-builder-ui-pinned-content-transform' ).css( 'transform', 'none' );
			}

			if ( pushMenu ) {
				marginPos[ 'margin-' + position ] = button.hasClass( 'fl-active' ) ? '250px' : '0px';
				$( 'body' ).animate( marginPos, 200);

				// Fixed header
				if ( fixedHeader.length > 0 ) {
					fixedPos[ position] = button.hasClass( 'fl-active' ) ? '250px' : '0px';
					fixedHeader.each(function(){
						if ( 'fixed' == $( this ).css( 'position' ) ) {
							$( this ).css({
								'-webkit-transition': 'none',
								'-o-transition'		: 'none',
								'transition'		: 'none'
							});
							$( this ).animate( fixedPos, 200 );
						}
					});
				}
			}

			if ( opacity.length > 0 && button.hasClass( 'fl-active' ) ) {
				opacity.show();
			}
			else {
				opacity.hide();
			}
		},

		/**
		 * Resize or reposition the Flyout Menu Panel.
		 *
		 * @since 2.8.1
		 * @returns void
		 */
		_resizeFlyoutMenuPanel: function(){
			const wrapper    = $( this.wrapperClass );
			const wrapFlyout = wrapper.find( '.fl-menu-mobile-flyout' );

			if ( wrapFlyout.length > 0 ) {
				wrapFlyout.css( this._getFlyoutMenuPanelPosition() );
			}
		},

		/**
		 * Compute the Flyout Menu Panel's position on the screen.
		 *
		 * @since 2.8.1
		 * @returns object
		 */
		_getFlyoutMenuPanelPosition: function() {
			var wrapper        = $( this.wrapperClass ),
				button         = wrapper.find( '.fl-menu-mobile-toggle' ),
				wrapFlyout     = wrapper.find( '.fl-menu-mobile-flyout' ),
				side           = wrapper.hasClass( 'fl-flyout-right' ) ? 'right' : 'left',
				winHeight      = $(window).outerHeight(),
				winTop         = $(window).scrollTop(),
				adminBarHeight = $( '#wpadminbar' ).length ? $( '#wpadminbar' ).height() : 0,
				flyoutPosition = {};

			flyoutPosition[ side ]  = '-267px';
			if ( ! button.hasClass( 'fl-active' ) ) {
				return flyoutPosition;
			}

			flyoutPosition[ side ]  = '0px';
			flyoutPosition[ 'height' ]  = winHeight + 'px';
			flyoutPosition[ 'top' ] = '0px';

			if ( adminBarHeight > 0 ) {
				const diff = adminBarHeight - winTop;
				flyoutPosition[ 'top' ] = diff <= 0 ? '0px' : (diff) + 'px';
			}

			return flyoutPosition;
		},

		/**
		 * Shows or hides the nav search form.
		 *
		 * @since 2.5
		 * @method _toggleMenuSearch
		 */
		_toggleMenuSearch: function(){
			var wrapper = $( this.wrapperClass ).find('.fl-menu-search-item'),
				button  = wrapper.find('a.fl-button'),
				form    = wrapper.find('.fl-search-form-input-wrap'),
				self    = this;

			button.on('click', function(e){
				e.preventDefault();

				if(form.is(':visible')) {
					form.stop().fadeOut(200);
				}
				else {
					form.stop().fadeIn(200);
					$('body').on('click.fl-menu-search', $.proxy(self._hideMenuSearch, self));
					form.find('.fl-search-text').focus();
				}
			});
		},

		/**
		 * Hides the nav search form.
		 *
		 * @since 2.5
		 * @method _hideMenuSearch
		 */
		_hideMenuSearch: function(e){
			var form = $( this.wrapperClass ).find('.fl-search-form-input-wrap');

			if(e !== undefined) {
				if($(e.target).closest('.fl-menu-search-item').length > 0) {
					return;
				}
			}

			form.stop().fadeOut(200);
			$('body').off('click.fl-menu-search');
		},

		/**
		 * Adds menu node and post ID to WooCommerce ajax URL requests.
		 *
		 * @since  3.0
		 * @return void
		 */
		_wooUpdateParams: function() {
			if ( 'undefined' !== typeof wc_cart_fragments_params ) {
				wc_cart_fragments_params.wc_ajax_url += '&fl-menu-node='+ this.nodeId +'&post-id='+ this.postId;
			}
			if ( 'undefined' !== typeof wc_add_to_cart_params ) {
				wc_add_to_cart_params.wc_ajax_url += '&fl-menu-node='+ this.nodeId +'&post-id='+ this.postId;
			}
		},
	};

})(jQuery);

(function($) {

	$(function() {

		new FLBuilderMenu({
			id: '61b1880f328b9',
			type: 'horizontal',
			mobile: 'expanded',
			mobileBelowRow: false,
			mobileFlyout: false,
			breakPoints: {
				large: 1200,
				medium: 768,
				small: 480			},
			mobileBreakpoint: 'mobile',
			postId : '52',
			mobileStacked: true,
			submenuIcon: 'none',
		});

	});

})(jQuery);

(function($) {

	jQuery(document).ready(function() {
			});

})(jQuery);

(function($) {

	jQuery(document).ready(function() {
			});

})(jQuery);
(function($) {
	if ( $('.fl-node-61b1880f328c2 .pp-photo-rollover').length > 0 ) {
		$('body').on( 'mouseenter.pp-rollover', '.fl-node-61b1880f328c2 .pp-photo-rollover .pp-photo-content', function() {
			$(this).addClass( 'is-hover' );
		} ).on( 'mouseleave.pp-rollover', '.fl-node-61b1880f328c2 .pp-photo-rollover .pp-photo-content', function() {
			$(this).removeClass( 'is-hover' );
		} );
	}
})(jQuery);(function($) {
	if ( $('.fl-node-61b1880f328c6 .pp-photo-rollover').length > 0 ) {
		$('body').on( 'mouseenter.pp-rollover', '.fl-node-61b1880f328c6 .pp-photo-rollover .pp-photo-content', function() {
			$(this).addClass( 'is-hover' );
		} ).on( 'mouseleave.pp-rollover', '.fl-node-61b1880f328c6 .pp-photo-rollover .pp-photo-content', function() {
			$(this).removeClass( 'is-hover' );
		} );
	}
})(jQuery);
(function($) {

	jQuery(document).ready(function() {
			});

})(jQuery);

(function($) {

	jQuery(document).ready(function() {
			});

})(jQuery);
(function($) {
	if ( $('.fl-node-61b1880f328cf .pp-photo-rollover').length > 0 ) {
		$('body').on( 'mouseenter.pp-rollover', '.fl-node-61b1880f328cf .pp-photo-rollover .pp-photo-content', function() {
			$(this).addClass( 'is-hover' );
		} ).on( 'mouseleave.pp-rollover', '.fl-node-61b1880f328cf .pp-photo-rollover .pp-photo-content', function() {
			$(this).removeClass( 'is-hover' );
		} );
	}
})(jQuery);
(function($) {

	jQuery(document).ready(function() {
			});

})(jQuery);

(function($) {

	jQuery(document).ready(function() {
			});

})(jQuery);

/* Start Layout Custom JS */

/* End Layout Custom JS */

