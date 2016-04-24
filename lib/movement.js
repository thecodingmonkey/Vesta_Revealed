AFRAME.registerComponent('sphere-move', {
  schema: { },

  /**
   * Add event listener.
   */
  tick: function (oldData) {
    var vesta = document.querySelector('#vesta');
    var person = this.el;
    var RADIUS = 3;

    if (!vesta.getAttribute("rotation"))
      vesta.setAttribute("rotation", {x:0, y:0, z:0});

    // console.log(this.el.position);

    // if (this.el.position != "0 3 0" && this.el.position)
    if (this.el.getAttribute("position").x != 0 ||
      this.el.getAttribute("position").z != 0) {

      var x = this.el.getAttribute("position").x;
      var z = this.el.getAttribute("position").z;

      // axes are swapped
      var x_angle = -1 * Math.atan(z/RADIUS);
      var z_angle = Math.atan(x/RADIUS);

      // get angle, convert from radians to degrees
      var rot = vesta.getAttribute("rotation");
      var rad_to_deg = 180/Math.PI;  // OPTIMIZATION
      rot.x += x_angle * rad_to_deg;
      rot.z += z_angle * rad_to_deg;

      // apply rotation
      vesta.setAttribute("rotation", rot)

      // move user back to original position
      this.el.setAttribute("position", {x:0, y:RADIUS, z:0})
    }
      // debugger;

  },

});

// click-listener component to pass window clicks to an entity.
// AFRAME.registerComponent('click-listener', {
//   init: function () {
//     var el = this.el;
//     window.addEventListener('click', function () {
//       el.emit('click', null, false);
//     });
//   }
// });