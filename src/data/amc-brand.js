let AMCBrand = []

const name = [
  {
    display: 'AMC',
  }
]

const colors = [
  {
    slug: 'primary-brand',
    name: 'Marigold',
    hex: '#ffc600',
    rgb: 'rgba(255,199,0,1)',
  },
  {
    slug: 'primary-dark',
    name: 'Black',
    hex: '#000000',
    rgb: 'rgba(0,0,0,1)',
  },
  {
    slug: 'accent-dark',
    name: 'Black 60',
    hex: '#000000',
    rgb: 'rgba(0,0,0,0.6)',
  },
  {
    slug: 'accent-light',
    name: 'White 60',
    hex: '#FFFFFF',
    rgb: 'rgba(255,255,255,0.6)',
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
    name: 'primary-dark',
    src: require('../img/logos/amc/amc-dark.svg'),
    alt: 'AMC Outline Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'primary-light',
    src: require('../img/logos/amc/amc-light.svg'),
    alt: 'AMC Outline Light',
    type: 'svg',
    dark: false,
  },
  {
    slug: 'amc-premiere-dark',
    src: require('../img/logos/amc/amc-premiere-dark.svg'),
    alt: 'AMC Premiere Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'amc-premiere-light',
    src: require('../img/logos/amc/amc-premiere-light.svg'),
    alt: 'AMC Premiere Light',
    type: 'svg',
    dark: false,
  },
  {
    name: 'amc-dark-sm',
    src: require('../img/logos/amc/amc-dark-sm.png'),
    alt: 'AMC Small Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'amc-light-sm',
    src: require('../img/logos/amc/amc-light-sm.png'),
    alt: 'AMC Small Light',
    type: 'png',
    dark: false,
  },
  {
    slug: 'amc-dark-lg',
    src: require('../img/logos/amc/amc-dark-lg.png'),
    alt: 'AMC Large Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'amc-light-lg',
    src: require('../img/logos/amc/amc-light-lg.png'),
    alt: 'AMC Large Light',
    type: 'png',
    dark: false,
  },
]

const fonts = [
  {
    slug: 'unitext',
    name: 'Unitext',
    img: require('../img/tiles/typography.png'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
]

const placeholders = [
  {
    slug: 'ultrawide',
    name: 'AMC Ultra Wide',
    src: require('../img/placeholders/amc-ultrawide.jpg'),
  },
  {
    slug: 'wide',
    name: 'AMC Wide',
    src: require('../img/placeholders/amc-wide.jpg'),
  },
  {
    slug: 'poster',
    name: 'AMC Poster',
    src: require('../img/placeholders/amc-poster.jpg'),
  },
  {
    slug: 'square',
    name: 'AMC square',
    src: require('../img/placeholders/amc-square.jpg'),
  },
  {
    slug: 'background',
    name: 'AMC Background',
    src: require('../img/placeholders/amc-background.jpg'),
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
    desc: 'All of the vanilla brand icons in SVG format.',
    src: 'https://amcnetworks.box.com/shared/static/9o7tr1er3l8iwmx690lzzl1q4sr4yn63.zip'
  },
  {
    slug: 'placeholders',
    name: 'Placeholder Images',
    desc: 'All of the placeholder images needed for the AMC network configuration.',
    src: 'https://amcnetworks.box.com/shared/static/paltjb8b1531vm1tx7a9cwc6s9yvj8kj.zip'
  },
  {
    slug: 'logos',
    name: 'Logos',
    desc: 'Approved logos for AMC.',
    src: 'https://amcnetworks.box.com/shared/static/fshn0tanlqhcxp1fs5ix5vf8wtzw80np.zip'
  },
  {
    slug: 'fonts',
    name: 'Fonts',
    desc: 'Downloads for the fonts used on AMC. *Note: An amcnetworks email address is required for download.',
    src: 'https://amcnetworks.box.com/shared/static/ww3fq7vr5ozr0iqo26iav3wxaam126jp.zip'
  }
]

AMCBrand = {name: name, colors: colors, logos: logos, fonts: fonts, placeholders: placeholders, icons: icons, downloads: downloads}

export default AMCBrand
