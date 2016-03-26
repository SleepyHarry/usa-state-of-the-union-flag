var margin = {top: 0, right: 0, bottom: 0, left: 0},
    outerWidth = 1235,
    outerHeight = 650,
    width = outerWidth - margin.left - margin.right,
    height = outerHeight - margin.top - margin.bottom;

var svg = d3.select('body').append('svg')
    .attr({
        width: outerWidth,
        height: outerHeight,
        viewBox: '0 0 7410 3900'
    });

svg.append('rect')
    .attr({
        width: 7410,
        height: 3900,
        fill: '#b22234'
    });

svg.append('path')
    .attr({
        d: 'M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0',
        stroke: '#fff',
        'stroke-width': 300
    });

svg.append('rect')
    .attr({
        width: 2964,
        height: 2100,
        fill: '#3c3b6e'
    });

var starD = 'm 247,90 70.53423,217.08204 -184.66101,-134.16408 228.25356,0 -184.66101,134.16408 z';

var stars = svg.append('g')
    .attr({
        transform: 'translate(0,11.458991)',
        style: 'fill: #ffffff'
    });

var starXDiff = 247,
    starYDiff = 210;

stars.selectAll('path')
    .data(Array(50))
    .enter()
        .append('path')
        .attr({
            d: starD,
            //x: (d,i) => (i%11) * starXDiff,
            //y: (d,i) => Math.floor(i/11) * starYDiff,
            transform: (d,i) => 'translate(' +
                (((i%11) * 2 * starXDiff) % (11 * starXDiff)) +
                ',' +
                (Math.floor(i/5.5) * starYDiff) +
                ')'
        });



//<g xmlns="http://www.w3.org/2000/svg" id="g3844" transform="translate(0,11.458981)" style="fill:#ffffff">
//  <g id="s18">
//      <g id="s9">
//          <g id="s5">
//              <g id="s4">
//                  <path id="s" d="m 247,90 70.53423,217.08204 -184.66101,-134.16408 228.25356,0 -184.66101,134.16408 z" />
//                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s" y="420" id="use3851" x="0" width="100%" height="100%"/>
//                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s" y="840" id="use3853" x="0" width="100%" height="100%"/>
//                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s" y="1260" id="use3855" x="0" width="100%" height="100%"/>
//              </g>
//              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s" y="1680" id="use3857" x="0" width="100%" height="100%"/>
//          </g>
//          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s4" x="247" y="210" id="use3859" width="100%" height="100%"/>
//      </g>
//      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s9" x="494" id="use3861" y="0" width="100%" height="100%"/>
//  </g>
//  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s18" x="988" id="use3863" y="0" width="100%" height="100%"/>
//  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s9" x="1976" id="use3865" y="0" width="100%" height="100%"/>
//  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s5" x="2470" id="use3867" y="0" width="100%" height="100%"/>
//</g>