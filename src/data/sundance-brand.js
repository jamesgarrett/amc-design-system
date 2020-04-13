const colors = [
  {
    slug: 'accent-color-1',
    name: 'Orange Dusk',
    hex: '#ed6300',
    rgb: 'rgba(237,99,0,1)',
  },
  {
    slug: 'primary-dark',
    name: 'Black',
    hex: '#000000',
    rgb: 'rgba(0,0,0,1)',
  },
  {
    slug: 'secondary-dark',
    name: 'Dark Gray',
    hex: '#1d1f21',
    rgb: 'rgba(29,31,33,1)',
  },
  {
    slug: 'tertiary-dark',
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
    slug: 'sundance-dark',
    src: require('../img/logos/sundance/sundance-dark.svg'),
    alt: 'Sundance TV Dark',
    type: 'svg',
    dark: true,
  },
  {
    slug: 'sundance-light',
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
    slug: 'benton-sans-condensed',
    name: 'Benton Sans Compressed Regular',
    img: require('../img/tiles/benton-sans-condensed.jpg'),
    download_link: 'https://amcnetworks.box.com/shared/static/6w3rzjlofln76e2cxku5bvctd86qq25l.zip',
  },
]

const SundanceBrand = {colors: colors, logos: logos, fonts: fonts}

export default SundanceBrand
