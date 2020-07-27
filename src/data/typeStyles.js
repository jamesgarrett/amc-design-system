import AmcTypeStyles from '../data/typeStyles/v2/amc.js';
import BBCATypeStyles from '../data/typeStyles/v2/bbca.js';
import IfcTypeStyles from '../data/typeStyles/v2/ifc.js';
import SundanceTypeStyles from '../data/typeStyles/v2/sundance.js';
import TwdTypeStyles from '../data/typeStyles/twd.js';
import WEtvTypeStyles from '../data/typeStyles/v2/wetv.js';

let typeStyles = []
let VanillaTypeStyles = []

typeStyles = {vanilla: VanillaTypeStyles, amc: AmcTypeStyles, bbca: BBCATypeStyles, ifc: IfcTypeStyles, sundance: SundanceTypeStyles, twd: TwdTypeStyles, wetv: WEtvTypeStyles}

export default typeStyles
