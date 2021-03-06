let WEtvBrand = []

const name = [
  {
    display: 'WEtv',
  }
]

const colors = [
  {
    slug: 'primary-dark',
    name: 'Denim',
    hex: '#212844',
    rgb: 'rgba(33,40,68,1)',
  },
  {
    slug: 'accent-light',
    name: 'Sky Blue',
    hex: '#67b2e8',
    rgb: 'rgba(103,178,232,1)',
  },
  {
    slug: 'primary-brand',
    name: 'Sunflower',
    hex: '#e2e71f',
    rgb: 'rgba(226,231,31,1)',
  },
  {
    slug: 'accent-dark',
    name: 'Black 60',
    hex: '#000000',
    rgb: 'rgba(0,0,0,.6)',
  },
  {
    slug: 'primary-light',
    name: 'White',
    hex: '#FFFFFF',
    rgb: 'rgba(255,255,255,1)',
  },
]

const logos = [
  {
    slug: 'primary-dark',
    src: require('../img/logos/wetv/wetv.svg'),
    alt: 'WEtv Logo',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'wetv-sm',
    src: require('../img/logos/wetv/wetv-sm.png'),
    alt: 'WEtv Small',
    type: 'png',
    dark: false,
  },
  {
    slug: 'wetv-md',
    src: require('../img/logos/wetv/wetv-md.png'),
    alt: 'WEtv Medium',
    type: 'svg',
    dark: false,
  },
  {
    slug: 'wetv-lg',
    src: require('../img/logos/wetv/wetv-lg.png'),
    alt: 'WEtv Large',
    type: 'png',
    dark: true,
  },
]

const fonts = [
  {
    slug: 'futura-round-cond-bold',
    name: 'Futura Round Condensed',
    img: require('../img/tiles/futura-round-condensed.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
  {
    slug: 'futura-round',
    name: 'Futura Round',
    img: require('../img/tiles/futura-round.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/6w3rzjlofln76e2cxku5bvctd86qq25l.zip',
  },
]

const placeholders = [
  {
    slug: 'ultrawide',
    name: 'WEtv Ultra Wide',
    src: require('../img/placeholders/wetv-ultrawide.jpg'),
  },
  {
    slug: 'wide',
    name: 'WEtv Wide',
    src: require('../img/placeholders/wetv-wide.jpg'),
  },
  {
    slug: 'poster',
    name: 'WEtv Poster',
    src: require('../img/placeholders/wetv-poster.jpg'),
  },
  {
    slug: 'square',
    name: 'WEtv Square',
    src: require('../img/placeholders/wetv-square.jpg'),
  },
  {
    slug: 'background',
    name: 'WEtv Background',
    src: require('../img/placeholders/wetv-background.jpg'),
  },
]

const icons = [
  { slug: '10-second-forward', src: require('../img/icons/10-second-forward.svg'), alt: '10 Second Forward' },
  { slug: '10-second-rewind', src: require('../img/icons/10-second-rewind.svg'), alt: '10 Second Rewind' },
  { slug: '15-second-forward', src: require('../img/icons/15-second-forward.svg'), alt: '15 Second Forward' },
  { slug: '15-second-rewind', src: require('../img/icons/15-second-rewind.svg'), alt: '15 Second Rewind' },
  { slug: 'arrow-down', src: require('../img/icons/arrow-down.svg'), alt: 'Arrow Down' },
  { slug: 'arrow-left', src: require('../img/icons/arrow-left.svg'), alt: 'Arrow Left' },
  { slug: 'arrow-right', src: require('../img/icons/arrow-right.svg'), alt: 'Arrow Right' },
  { slug: 'arrow-up', src: require('../img/icons/arrow-up.svg'), alt: 'Arrow Up' },
  { slug: 'cast', src: require('../img/icons/cast.svg'), alt: 'Cast' },
  { slug: 'close-x', src: require('../img/icons/close-x.svg'), alt: 'Close X' },
  { slug: 'closed-captions--active', src: require('../img/icons/closed-captions--active.svg'), alt: 'Closed Captions Active' },
  { slug: 'closed-captions--default', src: require('../img/icons/closed-captions--default.svg'), alt: 'Closed Captions Default' },
  { slug: 'download', src: require('../img/icons/download.svg'), alt: 'Download' },
  { slug: 'download--complete', src: require('../img/icons/download--complete.svg'), alt: 'Download Complete' },
  { slug: 'facebook', src: require('../img/icons/facebook.svg'), alt: 'Facebook' },
  { slug: 'instagram', src: require('../img/icons/instagram.svg'), alt: 'Instagram' },
  { slug: 'menu', src: require('../img/icons/menu.svg'), alt: 'Menu' },
  { slug: 'more-info', src: require('../img/icons/more-info.svg'), alt: 'More Info' },
  { slug: 'pause--outline', src: require('../img/icons/pause--outline.svg'), alt: 'Pause Icon Primary' },
  { slug: 'play-icon-primary', src: require('../img/icons/play-icon-primary.svg'), alt: 'Play Icon Primary' },
  { slug: 'play-icon-secondary', src: require('../img/icons/play-icon-secondary.svg'), alt: 'Play Icon Secondary' },
  { slug: 'screen-maximize', src: require('../img/icons/screen--maximize.svg'), alt: 'Screen Maximize' },
  { slug: 'screen-minimize', src: require('../img/icons/screen--minimize.svg'), alt: 'Screen Minimize' },
  { slug: 'search', src: require('../img/icons/search.svg'), alt: 'Search' },
  { slug: 'tumblr', src: require('../img/icons/tumblr.svg'), alt: 'Tumblr' },
  { slug: 'volume', src: require('../img/icons/volume.svg'), alt: 'Volume' },
  { slug: 'volume--mute', src: require('../img/icons/volume--mute.svg'), alt: 'Mute' },
  { slug: 'youtube', src: require('../img/icons/youtube.svg'), alt: 'Youtube' }
]

const downloads = [
  {
    slug: 'icons',
    name: 'Icons',
    desc: 'All of the WEtv brand icons in SVG format.',
    src: 'https://amcnetworks.box.com/shared/static/9o7tr1er3l8iwmx690lzzl1q4sr4yn63.zip'
  },
  {
    slug: 'placeholders',
    name: 'Placeholder Images',
    desc: 'All of the placeholder images needed for the WEtv network configuration.',
    src: 'https://amcnetworks.box.com/shared/static/gpg743ub05ikxawijast17w89kpdzbc5.zip'
  },
  {
    slug: 'logos',
    name: 'Logos',
    desc: 'Approved logos for WEtv.',
    src: 'https://amcnetworks.box.com/shared/static/cm1615ws30u1hf8loqx6sl7gnk7udbip.zip'
  }
]

WEtvBrand = {name: name, colors: colors, logos: logos, fonts: fonts, placeholders: placeholders, icons: icons, downloads: downloads}

export default WEtvBrand;
