let AMCBrand = []

const colors = [
  {
    slug: 'accent-color-1',
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
    slug: 'secondary-dark',
    name: 'Black 60',
    hex: '#000000',
    rgb: 'rgba(0,0,0,0.6)',
  },
  {
    slug: 'tertiary-dark',
    name: 'Black 40',
    hex: '#000000',
    rgb: 'rgba(0,0,0,0.4)',
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
    name: 'amc-dark',
    src: require('../img/logos/amc/amc-dark.svg'),
    alt: 'AMC Outline Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'amc-light',
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
    img: require('../img/tiles/amc-type-tile.png'),
    download_link: 'https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip',
  },
]

const placeholders = [
  {
    slug: 'square',
    name: 'AMC square',
    src: require('../img/placeholders/amc-square.jpg'),
  },
  {
    slug: 'poster',
    name: 'AMC Poster',
    src: require('../img/placeholders/amc-poster.jpg'),
  },
  {
    slug: 'background',
    name: 'AMC Background',
    src: require('../img/placeholders/amc-background.jpg'),
  },
  {
    slug: 'wide',
    name: 'AMC Wide',
    src: require('../img/placeholders/amc-wide.jpg'),
  },
  {
    slug: 'ultrawide',
    name: 'AMC Ultra Wide',
    src: require('../img/placeholders/amc-ultrawide.jpg'),
  },
]

AMCBrand = {colors: colors, logos: logos, fonts: fonts, placeholders: placeholders}

export default AMCBrand
