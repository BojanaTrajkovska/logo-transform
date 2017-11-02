<template>


</template>


<script>

    export default {

        created() {

            var DRUM_TEXTURE = "http://keithclark.co.uk/labs/css-fps/drum2.png";
            // Assembiles are for grouping faces and other assembiles
            function createAssembly() {
                var assembly = document.createElement("div");
                assembly.className = "threedee assembly";
                return assembly;
            }

            function createFace(w, h, x, y, z, rx, ry, rz, tsrc, tx, ty) {
                var face = document.createElement("div");
                face.className = "threedee face";
                face.style.cssText = PrefixFree.prefixCSS(
                    "background: url(" + tsrc + ") -" + tx.toFixed(2) + "px " + ty.toFixed(2) + "px;" +
                    "background-size:contain;"+
                    "width:" + w.toFixed(2) + "px;" +
                    "height:" + h.toFixed(2) + "px;" +
                    "margin-top: -" + (h / 2).toFixed(2) + "px;" +
                    "margin-left: -" + (w / 2).toFixed(2) + "px;" +
                    "transform: translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px," + z.toFixed(2) + "px)" +
                    "rotateX(" + rx.toFixed(2) + "rad) rotateY(" + ry.toFixed(2) + "rad) rotateY(" + rz.toFixed(2) + "rad);");
                return face;
            }


            function createSides(w, h, x, y, z, rx, ry, rz, color) {
                var face = document.createElement("div");
                face.className = "threedee face";
                face.style.cssText = PrefixFree.prefixCSS(
                    "background-color: " +color+ ";"+
                    "width:" + w.toFixed(2) + "px;" +
                    "height:" + h.toFixed(2) + "px;" +
                    "margin-top: -" + (h / 2).toFixed(2) + "px;" +
                    "margin-left: -" + (w / 2).toFixed(2) + "px;" +
                    "transform: translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px," + z.toFixed(2) + "px)" +
                    "rotateX(" + rx.toFixed(2) + "rad) rotateY(" + ry.toFixed(2) + "rad) rotateY(" + rz.toFixed(2) + "rad);");
                return face;
            }




            function createTube(dia, height, sides, texture) {
                var tube = createAssembly();
                var sideAngle = (Math.PI / sides) * 2;
                var sideLen = dia * Math.tan(Math.PI / sides);
                for (var c = 0; c < sides; c++) {
                    var x = Math.sin(sideAngle * c) * dia / 2;
                    var z = Math.cos(sideAngle * c) * dia / 2;
                    var ry = Math.atan2(x, z);
                    tube.appendChild(createSides(sideLen + 1, height, x, 0, z, 0, ry, 0, texture));
                }
                return tube;
            }

            function createBarrel() {

                var barrel = createTube(300, 100, 50, '#e2e2e2');

                barrel.appendChild(createFace(300, 300, 0, -48, 0, Math.PI / 2, 0, 0, 'https://www.jodidata.org/_resources/files/pages/jodi-logos/jodioil-circle-logo.png', 0, 0));

                barrel.appendChild(createFace(300, 300, 0, 48, 0, -Math.PI / 2, 0, 0, 'https://www.jodidata.org/_resources/files/pages/jodi-logos/jodioil-circle-logo.png', 0, 0));




                return barrel;
            }

            document.body.appendChild(createBarrel());

        }
    }

</script>


<style lang="scss">

    @import "logo-cilinder";
</style>