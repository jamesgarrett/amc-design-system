let VanillaBrand = []

const name = [
  {
    display: 'Vanilla',
  }
]

const colors = [
  {
    slug: 'primary-light',
    name: 'Athens Gray',
    hex: '#F5F5F6',
    rgb: 'rgba(245,245,246,1)',
  },
  {
    slug: 'accent-light',
    name: 'Pale Lavender',
    hex: '#B9CCED',
    rgb: 'rgba(185, 204, 237, 1)',
  },
  {
    slug: 'brand-primary',
    name: 'Crocus Blue',
    hex: '#529BD9',
    rgb: 'rgba(82, 155, 217, 1)',
  },
  {
    slug: 'accent-dark',
    name: 'Regent Gray',
    hex: '#7d8b99',
    rgb: 'rgba(125,139,153,1)',
  },
  {
    slug: 'primary-dark',
    name: 'Charade',
    hex: '#2E2A3B',
    rgb: 'rgba(46,42,59,1)',
  },
]

const logos = [
  {
    slug: 'primary-dark',
    src: require('../img/logos/vanilla/vanilla-dark.svg'),
    alt: 'Vanilla Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'primary-light',
    src: require('../img/logos/vanilla/vanilla-light.svg'),
    alt: 'Vanilla Light',
    type: 'svg',
    dark: false,
  },
  {
    slug: 'vanilla-dark-sm',
    src: require('../img/logos/vanilla/vanilla-dark-sm.png'),
    alt: 'Vanilla Small Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'vanilla-light-sm',
    src: require('../img/logos/vanilla/vanilla-light-sm.png'),
    alt: 'Vanilla Small Light',
    type: 'png',
    dark: false,
  },
  {
    slug: 'vanilla-dark-md',
    src: require('../img/logos/vanilla/vanilla-dark-md.png'),
    alt: 'Vanilla Medium Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'vanilla-light-md',
    src: require('../img/logos/vanilla/vanilla-light-md.png'),
    alt: 'Vanilla Medium Light',
    type: 'svg',
    dark: false,
  },
  {
    slug: 'vanilla-dark-lg',
    src: require('../img/logos/vanilla/vanilla-dark-lg.png'),
    alt: 'Vanilla Large Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'vanilla-light-lg',
    src: require('../img/logos/vanilla/vanilla-light-lg.png'),
    alt: 'Vanilla Large Light',
    type: 'png',
    dark: false,
  },
]

const fonts = [
  {
    slug: 'sf-pro',
    name: 'San Francisco Pro',
    img: require('../img/tiles/sf-pro.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
]

const placeholders = [
  {
    slug: 'ultrawide',
    name: 'Vanilla Ultra Wide',
    src: require('../img/placeholders/vanilla-ultrawide.jpg'),
  },
  {
    slug: 'wide',
    name: 'Vanilla Wide',
    src: require('../img/placeholders/vanilla-wide.jpg'),
  },
  {
    slug: 'poster',
    name: 'Vanilla Poster',
    src: require('../img/placeholders/vanilla-poster.jpg'),
  },
  {
    slug: 'square',
    name: 'Vanilla Square',
    src: require('../img/placeholders/vanilla-square.jpg'),
  },
  {
    slug: 'background',
    name: 'Vanilla Background',
    src: require('../img/placeholders/vanilla-background.jpg'),
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

VanillaBrand = {name: name, colors: colors, logos: logos, fonts: fonts, placeholders: placeholders, icons: icons}

export default VanillaBrand
