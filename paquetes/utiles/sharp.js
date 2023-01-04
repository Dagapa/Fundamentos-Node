const sharp = require('sharp');

sharp('./bb8d1ccfc8358b5b1e48bfa12ce1635d.jpg')
.resize(80)
.grayscale()
.toFile('Rick-resize.jpg')