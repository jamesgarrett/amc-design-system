let IFCBrand = []

const name = [
  {
    display: 'IFC',
  }
]

const colors = [
  {
    slug: 'accent-color-1',
    name: 'Vermillion',
    hex: '#e34530',
    rgb: 'rgba(227,69,48,1)',
  },
  {
    slug: 'primary-dark',
    name: 'Black Three',
    hex: '#333333',
    rgb: 'rgba(51,51,51,1)',
  },
  {
    slug: 'primary-light',
    name: 'light-peach',
    hex: '#e5deda',
    rgb: 'rgba(229,222,218,1)',
  },
  {
    slug: 'secondary-dark',
    name: 'Black 60',
    hex: '#000000',
    rgb: 'rgba(0,0,0,0.6)',
  },
]

const logos = [
  {
    name: 'primary-dark',
    src: require('../img/logos/ifc/ifc-dark.svg'),
    alt: 'IFC Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'primary-light',
    src: require('../img/logos/ifc/ifc-light.svg'),
    alt: 'IFC Light',
    type: 'svg',
    dark: false,
  },
  {
    name: 'ifc-dark-sm',
    src: require('../img/logos/ifc/ifc-dark-sm.png'),
    alt: 'IFC Small Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'ifc-light-sm',
    src: require('../img/logos/ifc/ifc-light-sm.png'),
    alt: 'IFC Small Light',
    type: 'png',
    dark: false,
  },
  {
    slug: 'ifc-dark-lg',
    src: require('../img/logos/ifc/ifc-dark-lg.png'),
    alt: 'IFC Large Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'ifc-light-lg',
    src: require('../img/logos/ifc/ifc-light-lg.png'),
    alt: 'IFC Large Light',
    type: 'png',
    dark: false,
  },
]

const fonts = [
  {
    slug: 'gt-america',
    name: 'GT America',
    img: require('../img/tiles/america-gt-tile.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
  {
    slug: 'editor',
    name: 'Editor',
    img: require('../img/tiles/editor-tile.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
]

const placeholders = [
  {
    slug: 'ultrawide',
    name: 'IFC Ultra Wide',
    src: require('../img/placeholders/ifc-ultrawide.jpg'),
  },
  {
    slug: 'wide',
    name: 'IFC Wide',
    src: require('../img/placeholders/ifc-wide.jpg'),
  },
  {
    slug: 'poster',
    name: 'IFC Poster',
    src: require('../img/placeholders/ifc-poster.jpg'),
  },
  {
    slug: 'square',
    name: 'IFC square',
    src: require('../img/placeholders/ifc-square.jpg'),
  },
  {
    slug: 'background',
    name: 'IFC Background',
    src: require('../img/placeholders/ifc-background.jpg'),
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

IFCBrand = {name: name, colors: colors, logos: logos, fonts: fonts, placeholders: placeholders, icons: icons}

export default IFCBrand
