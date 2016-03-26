var dateFormat = d3.time.format('%B %d %Y');

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

d3.csv(
    'resource/join-dates.csv',
    function (d) {
        d.rank = +d.rank;
        d.date = dateFormat.parse(d.date);

        return d;
    },
    function (error, data) {
        stars.selectAll('path')
            .data(data)
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
                })
            .on('mouseover', function (d) {
                d3.select(this).transition()
                    .attr('fill', '#000');

                console.log(d);
            })
            .on('mouseout', function () {
                d3.select(this).transition()
                    .attr('fill', '#fff');
            });
    }
);
