let BBCABrand = []

const colors = [
  {
    slug: 'accent-color-1',
    name: 'Battleship Grey',
    hex: '#6a8186',
    rgb: 'rgba(106,129,134,1)',
  },
  {
    slug: 'primary-dark',
    name: 'Dark Gray',
    hex: '#101010',
    rgb: 'rgba(16,16,16,1)',
  },
  {
    slug: 'primary-light',
    name: 'Off White',
    hex: '#efefef',
    rgb: 'rgba(239,239,239,1)',
  },
  {
    slug: 'secondary-dark',
    name: 'Pale Midnight',
    hex: '#060606',
    rgb: 'rgba(0,0,0,0.6)',
  },
  {
    slug: 'secondary-light',
    name: 'Pale Grey',
    hex: '#d8d8d8',
    rgb: 'rgba(216,216,216,1)',
  },
]

const logos = [
  {
    name: 'primary',
    src: require('../img/logos/bbca/bbca.svg'),
    alt: 'BBCA',
    type: 'svg',
    dark: true,
  },
  {
    name: 'bbca-sm',
    src: require('../img/logos/bbca/bbca-sm.png'),
    alt: 'BBCA Small',
    type: 'png',
    dark: true,
  },
  {
    slug: 'bbca-md',
    src: require('../img/logos/bbca/bbca-md.png'),
    alt: 'BBCA Medium',
    type: 'png',
    dark: false,
  },
  {
    slug: 'bbca-lg',
    src: require('../img/logos/bbca/bbca-lg.png'),
    alt: 'BBCA Large Light',
    type: 'png',
    dark: false,
  },
]

const fonts = [
  {
    slug: 'verlag',
    name: 'Verlag',
    img: require('../img/tiles/verlag.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/3h34pm40dks5srg750hgp94q73es3466.zip',
  },
  {
    slug: 'stymie',
    name: 'Stymie',
    img: require('../img/tiles/stymie.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/3h34pm40dks5srg750hgp94q73es3466.zip',
  },
]

const placeholders = [
  {
    slug: 'ultrawide',
    name: 'BBCA Ultra Wide',
    src: require('../img/placeholders/bbca-ultrawide.jpg'),
  },
  {
    slug: 'wide',
    name: 'BBCA Wide',
    src: require('../img/placeholders/bbca-wide.jpg'),
  },
  {
    slug: 'poster',
    name: 'BBCA Poster',
    src: require('../img/placeholders/bbca-poster.jpg'),
  },
  {
    slug: 'square',
    name: 'BBCA square',
    src: require('../img/placeholders/bbca-square.jpg'),
  },
  {
    slug: 'background',
    name: 'BBCA Background',
    src: require('../img/placeholders/bbca-background.jpg'),
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

BBCABrand = {colors: colors, logos: logos, fonts: fonts, placeholders: placeholders, icons: icons}

export default BBCABrand;
