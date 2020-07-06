import AmcTypeStyles from '../data/typeStyles/amc.js';
import BBCATypeStyles from '../data/typeStyles/bbca.js';
import IfcTypeStyles from '../data/typeStyles/ifc.js';
import SundanceTypeStyles from '../data/typeStyles/sundance.js';
import TwdTypeStyles from '../data/typeStyles/twd.js';
import WEtvTypeStyles from '../data/typeStyles/wetv.js';

let typeStyles = []
let VanillaTypeStyles = []

typeStyles = {vanilla: VanillaTypeStyles, amc: AmcTypeStyles, bbca: BBCATypeStyles, ifc: IfcTypeStyles, sundance: SundanceTypeStyles, twd: TwdTypeStyles, wetv: WEtvTypeStyles}

export default typeStyles
