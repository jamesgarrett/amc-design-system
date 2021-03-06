let SundanceBrand = []

const name = [
  {
    display: 'Sundance TV',
  }
]

const colors = [
  {
    slug: 'primary-dark',
    name: 'Outer Space',
    hex: '#1d1f21',
    rgb: 'rgba(29,31,33,1)',
  },
  {
    slug: 'accent-light',
    name: 'Sun Glow',
    hex: '#FFCB2F',
    rgb: 'rgba(255,203,47,1)',
  },
  {
    slug: 'primary-brand',
    name: 'Orange Dusk',
    hex: '#ed6300',
    rgb: 'rgba(237,99,0,1)',
  },
  {
    slug: 'accent-dark',
    name: 'Cloudy Moonlight',
    hex: '#848280',
    rgb: 'rgba(132,130,128,1)',
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
    src: require('../img/logos/sundance/sundance-dark.svg'),
    alt: 'Sundance TV Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'primary-light',
    src: require('../img/logos/sundance/sundance-light.svg'),
    alt: 'Sundance TV Light',
    type: 'svg',
    dark: false,
  },
  {
    slug: 'sundance-dark-sm',
    src: require('../img/logos/sundance/sundance-dark-sm.png'),
    alt: 'Sundance TV Small Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'sundance-light-sm',
    src: require('../img/logos/sundance/sundance-light-sm.png'),
    alt: 'Sundance TV Small Light',
    type: 'png',
    dark: false,
  },
  {
    slug: 'sundance-dark-md',
    src: require('../img/logos/sundance/sundance-dark-md.png'),
    alt: 'Sundance TV Medium Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'sundance-light-md',
    src: require('../img/logos/sundance/sundance-light-md.png'),
    alt: 'Sundance TV Medium Light',
    type: 'svg',
    dark: false,
  },
  {
    slug: 'sundance-dark-lg',
    src: require('../img/logos/sundance/sundance-dark-lg.png'),
    alt: 'Sundance TV Large Dark',
    type: 'png',
    dark: true,
  },
  {
    slug: 'sundance-light-lg',
    src: require('../img/logos/sundance/sundance-light-lg.png'),
    alt: 'Sundance TV Large Light',
    type: 'png',
    dark: false,
  },
]

const fonts = [
  {
    slug: 'benton-sans',
    name: 'Benton Sans',
    img: require('../img/tiles/benton-sans.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
  {
    slug: 'benton-sans-extra-compressed',
    name: 'Benton Sans Extra Compressed Regular',
    img: require('../img/tiles/benton-sans-condensed.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/6w3rzjlofln76e2cxku5bvctd86qq25l.zip',
  },
]

const placeholders = [
  {
    slug: 'ultrawide',
    name: 'Sundance Ultra Wide',
    src: require('../img/placeholders/sdtv-ultrawide.jpg'),
  },
  {
    slug: 'wide',
    name: 'Sundance Wide',
    src: require('../img/placeholders/sdtv-wide.jpg'),
  },
  {
    slug: 'poster',
    name: 'Sundance Poster',
    src: require('../img/placeholders/sdtv-poster.jpg'),
  },
  {
    slug: 'square',
    name: 'Sundance Square',
    src: require('../img/placeholders/sdtv-square.jpg'),
  },
  {
    slug: 'background',
    name: 'Sundance Background',
    src: require('../img/placeholders/sdtv-background.jpg'),
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
    desc: 'All of the Sundance TV brand icons in SVG format.',
    src: 'https://amcnetworks.box.com/shared/static/9o7tr1er3l8iwmx690lzzl1q4sr4yn63.zip'
  },
  {
    slug: 'placeholders',
    name: 'Placeholder Images',
    desc: 'All of the placeholder images needed for the Sundance TV network configuration.',
    src: 'https://amcnetworks.box.com/shared/static/ekx5grwcnp7e26z450eef6opt3tphef2.zip'
  },
  {
    slug: 'logos',
    name: 'Logos',
    desc: 'Approved logos for Sundance TV.',
    src: 'https://amcnetworks.box.com/shared/static/gqyhcjkwdkioqiuby6mcs6y76yadeyxu.zip'
  },
  {
    slug: 'fonts',
    name: 'Fonts',
    desc: 'Downloads for the fonts used on Sundance TV.',
    src: 'https://amcnetworks.box.com/shared/static/lc883jnuxrn24wirhuz4u2a8wbyeu89i.zip'
  },
]

SundanceBrand = {name: name, colors: colors, logos: logos, fonts: fonts, placeholders: placeholders, icons: icons, downloads: downloads}

export default SundanceBrand
