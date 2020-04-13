const colors = [
  {
    name: 'accent-color-1',
    color: 'Orange Dusk',
    hex: '#ed6300',
    rgb: 'rgba(237,99,0,1)',
  },
  {
    name: 'primary-dark',
    color: 'Black',
    hex: '#000000',
    rgb: 'rgba(0,0,0,1)',
  },
  {
    name: 'secondary-dark',
    color: 'Dark Gray',
    hex: '#1d1f21',
    rgb: 'rgba(29,31,33,1)',
  },
  {
    name: 'tertiary-dark',
    color: 'Black 60',
    hex: '#000000',
    rgb: 'rgba(0,0,0,.6)',
  },
  {
    name: 'primary-light',
    color: 'White',
    hex: '#FFFFFF',
    rgb: 'rgba(255,255,255,1)',
  },
]

const logos = [
  {
    name: 'sundance-dark',
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
    name: 'sundance-dark-sm',
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

const SundanceBrand = {colors: colors, logos: logos}

export default SundanceBrand
