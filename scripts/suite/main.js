/**
 * Call main module
 * @module                                                  devSuite
 * @param           {Object} window                         Window containing a DOM document
 */
( ( window ) =>
{
    let _classes = [ 'Template', 'Page', 'Tool', 'Ui', 'Lab' ];

    /**
     * Array of navigation links
     * @type {Array.<Object>}
     * @example { title: 'Title', group: 'Icon folder', links: <Array.<Object>> | null }
     */
    let _navLinks =
    [
        // core
        {
            title: 'Core',
            links:
            [
                // objects
                {
                    title: 'Objects',
                    links:
                    [
                        {
                            title: 'Collections',
                            links:
                            [
                                {
                                    title: 'Lines',
                                    group: 'Object'
                                },
                                {
                                    title: 'Circles',
                                    group: 'Object'
                                },
                                {
                                    title: 'Ellipses',
                                    group: 'Object'
                                },
                                {
                                    title: 'Rectangles',
                                    group: 'Object'
                                },
                                {
                                    title: 'RoundedRectangles',
                                    group: 'Object'
                                },
                                {
                                    title: 'Texts',
                                    group: 'Object'
                                },
                                {
                                    title: 'Group',
                                    group: 'Object'
                                },
                            ]
                        },
                        {
                            title: 'Line',
                            group: 'Object'
                        },
                        {
                            title: 'Circle',
                            group: 'Object'
                        },
                        {
                            title: 'Ellipse',
                            group: 'Object'
                        },
                        {
                            title: 'Rectangle',
                            group: 'Object'
                        },
                        {
                            title: 'RoundedRectangle',
                            group: 'Object'
                        },
                        {
                            title: 'Text',
                            group: 'Object'
                        },
                        {
                            title: 'cImage',
                            group: 'Object'
                        },
                    ]
                },
                // subjects
                {
                    title: 'Subjects',
                    links:
                    [
                        {
                            title: 'Color',
                            links:
                            [
                                {
                                    title: 'Model',
                                    links:
                                    [
                                        {
                                            title: 'Rgb',
                                            group: 'Subject'
                                        },
                                    ]
                                },
                                {
                                    title: 'Gradient',
                                    links:
                                    [
                                        {
                                            title: 'Properties',
                                            links:
                                            [
                                                {
                                                    title: 'Stop',
                                                    group: 'Subject'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'Linear',
                                            group: 'Subject'
                                        },
                                        {
                                            title: 'Radial',
                                            group: 'Subject'
                                        },
                                        {
                                            title: 'Conic',
                                            group: 'Subject'
                                        },
                                    ]
                                }
                            ]
                        },
                        // {
                        //     title: 'Templates',
                        //     links:
                        //     [
                        //         {
                        //             title: 'SacredCircles',
                        //             group: 'Subject'
                        //         },
                        //     ]
                        // },
                        {
                            title: 'Staging',
                            links:
                            [
                                {
                                    title: 'Anchor',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Angle',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Aspect',
                                    group: 'Subject'
                                },
                                {
                                    title: 'ControlPoints',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Font',
                                    group: 'Subject'
                                },
                                {
                                    title: 'Point',
                                    group: 'Subject'
                                },
                            ]
                        },
                        {
                            title: 'Stroke',
                            group: 'Subject'
                        },
                        {
                            title: 'Fill',
                            group: 'Subject'
                        },
                        {
                            title: 'Shadow',
                            group: 'Subject'
                        },
                    ]
                },
            ]
        },
        // templates
        {
            title: 'Templates',
            links:
            [
                {
                    title: 'SacredCircles',
                    group: 'Template'
                },
            ]
        },
        // Animations
        {
            title: 'Animations',
            links:
            [
                // objects
                {
                    title: 'Objects',
                    links:
                    [
                        {
                            title:   'Line',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Circle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Ellipse',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Rectangle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'RoundedRectangle',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'Text',
                            group:   'Object',
                            handler: 'Animation'
                        },
                        {
                            title:   'cImage',
                            group:   'Object',
                            handler: 'Animation'
                        }
                    ]
                },
                // subjects
                {
                    title: 'Subjects',
                    links:
                    [
                        {
                            title: 'Color',
                            links:
                            [
                                {
                                    title: 'Model',
                                    links:
                                    [
                                        {
                                            title:   'Rgb',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                    ]
                                },
                                {
                                    title: 'Gradient',
                                    links:
                                    [
                                        {
                                            title: 'Properties',
                                            links:
                                            [
                                                {
                                                    title:   'Stop',
                                                    group:   'Subject',
                                                    handler: 'Animation'
                                                }
                                            ]
                                        },
                                        {
                                            title:   'Linear',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                        {
                                            title:   'Radial',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                        {
                                            title:   'Conic',
                                            group:   'Subject',
                                            handler: 'Animation'
                                        },
                                    ]
                                }
                            ]
                        },
                        // {
                        //     title: 'Templates',
                        //     links:
                        //     [
                        //         {
                        //             title: 'SacredCircles',
                        //             group: 'Subject',
                        //             handler: 'Animation'
                        //         },
                        //     ]
                        // },
                        {
                            title: 'Staging',
                            links:
                            [
                                {
                                    title:   'Anchor',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Angle',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Aspect',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'ControlPoints',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Font',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                                {
                                    title:   'Point',
                                    group:   'Subject',
                                    handler: 'Animation'
                                },
                            ]
                        },
                        {
                            title:   'Stroke',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                        {
                            title:   'Fill',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                        {
                            title:   'Shadow',
                            group:   'Subject',
                            handler: 'Animation'
                        },
                    ]
                },
                // templates
                {
                    title: 'Templates',
                    links:
                    [
                        {
                            title:   'SacredCircles',
                            group:   'Template',
                            handler: 'Animation'
                        },
                    ]
                },
            ]
        },
    ]

    /**
     * Object of demo cards
     * @type {Object.<Object>}
     * @example { type: { subType: [ { title: 'title', text: 'text', code: function } ] } }
     */
    let _cardObjects =
    {
        object:
        {
            line:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                // stroke cap
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'point' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // curve
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.curve ( 50, 0, 0, 0 );

                        _line.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.move ( 90, 25 );

                        _line.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _line.rotate ( 45 );

                        _line.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _line.options.anchor = true;

                        _line.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _line.options.anchor = true;

                        _line.anchor.align   = 'start';

                        _line.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.border = true;

                        _line.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.axis = true;

                        _line.draw ( );
                    }
                },
                // points
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.points = true;

                        _line.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.coordinates = true;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'controlpoints' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, 0, 0, -50 ];

                        _line.draw ( );
                    }
                },
            ],
            lines:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.shadow = true;

                        _lines.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.border = true;

                        _lines.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.axis = true;

                        _lines.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'line' ],
                //     code: ( ) =>
                //     {
                //         _lines.options.anchor   = true;

                //         _lines.draw ( );
                //     }
                // },
                // points
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.points = true;

                        _lines.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.coordinates = true;

                        _lines.draw ( );
                    }
                },
                // controlPoints
                {
                    title:   'controlPoints',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _lines.options.controlPoints = true;

                        _lines.draw ( );
                    }
                },
            ],
            circle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                // radius
                {
                    title:   'radius',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.radius = 50;

                        _circle.draw ( );
                    }
                },
                // radius ellipse
                {
                    title:   'radius ellipse',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.radius = { x: 25, y: 50 };

                        _circle.draw ( );
                    }
                },
                // angle start
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                // angle end
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                // angle clockwise
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern = 'images/png/sun.png';

                        _circle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern    = 'images/png/sun.png';

                        _circle.fill.repetition = 'no-repeat';

                        _circle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.move ( 90, 25 );

                        _circle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _circle.rotate ( 45 );

                        _circle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align   = 'topLeft';

                        _circle.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.border = true;

                        _circle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.axis = true;

                        _circle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.coordinates = true;

                        _circle.draw ( );
                    }
                },
            ],
            circles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.shadow = true;

                        _circles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.border = true;

                        _circles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.axis = true;

                        _circles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'circle' ],
                //     code: ( ) =>
                //     {
                //         _circles.options.anchor   = true;

                //         _circles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circles.options.coordinates = true;

                        _circles.draw ( );
                    }
                },
            ],
            ellipse:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.draw ( );
                    }
                },
                // radius
                {
                    title:   'radius',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 50, 30 );

                        _ellipse.draw ( );
                    }
                },
                // radius ellipse
                // {
                //     title:   'radius ellipse',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _ellipse.radius = { x: 25, y: 50 };

                //         _ellipse.draw ( );
                //     }
                // },
                // angle start
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.draw ( );
                    }
                },
                // angle end
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'angle' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.type = 'solid';

                        _ellipse.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.segments = [ 2, 4 ];

                        _ellipse.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.width = 5;

                        _ellipse.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.fill.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );    // [ Optional ]

                        _ellipse.fill.pattern = 'images/png/sun.png';

                        _ellipse.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );    // [ Optional ]

                        _ellipse.fill.pattern    = 'images/png/sun.png';

                        _ellipse.fill.repetition = 'no-repeat';

                        _ellipse.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color = new Rgb ( 0, 150, 200 );

                        _ellipse.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.blur = 10;

                        _ellipse.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.move ( 90, 25 );

                        _ellipse.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _ellipse.rotate ( 45 );

                        _ellipse.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align   = 'topLeft';

                        _ellipse.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.border = true;

                        _ellipse.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.axis = true;

                        _ellipse.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.coordinates = true;

                        _ellipse.draw ( );
                    }
                },
            ],
            ellipses:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.shadow = true;

                        _ellipses.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.border = true;

                        _ellipses.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.axis = true;

                        _ellipses.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'ellipse' ],
                //     code: ( ) =>
                //     {
                //         _ellipses.options.anchor   = true;

                //         _ellipses.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipses.options.coordinates = true;

                        _ellipses.draw ( );
                    }
                },
            ],
            rectangle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'aspect' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // radii general
                {
                    title:   'rounded general',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.round = [ 10 ];

                        _rectangle.draw ( );
                    }
                },
                // radii specific
                {
                    title:   'rounded specific',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.round = [ 0, 10, 0, 20 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.pattern = 'images/png/sun.png';

                        _rectangle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _rectangle.fill.pattern    = 'images/png/sun.png';

                        _rectangle.fill.repetition = 'no-repeat';

                        _rectangle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.move ( 90, 25 );

                        _rectangle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _rectangle.rotate ( 45 );

                        _rectangle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align   = 'topLeft';

                        _rectangle.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.border = true;

                        _rectangle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.axis = true;

                        _rectangle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.coordinates = true;

                        _rectangle.draw ( );
                    }
                },
            ],
            rectangles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.shadow = true;

                        _rectangles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.border = true;

                        _rectangles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.axis = true;

                        _rectangles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'rectangle' ],
                //     code: ( ) =>
                //     {
                //         _rectangles.options.anchor   = true;

                //         _rectangles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangles.options.coordinates = true;

                        _rectangles.draw ( );
                    }
                },
            ],
            roundedRectangle:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.draw ( );
                    }
                },
                // aspect
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'aspect' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
                // round general
                // {
                //     title:   'round general',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.round = [ 10 ];

                //         _roundedRectangle.draw ( );
                //     }
                // },
                // round specific
                // {
                //     title:   'round specific',
                //     text:    'blah... blah... blah...',
                //     children: undefined,
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.round = [ 0, 10, 0, 20 ];

                //         _roundedRectangle.draw ( );
                //     }
                // },
                // stroke type
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.type = 'solid';

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke segments
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.segments = [ 2, 4 ];

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.width = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.fill.color.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill pattern
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _roundedRectangle.fill.pattern = 'images/png/sun.png';

                        _roundedRectangle.draw ( );
                    }
                },
                // fill pattern no-repeat
                {
                    title:   'fill pattern no-repeat',
                    text:    'blah... blah... blah...',
                    children: [ 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 200, height: 100 };    // [ Optional ]

                        _roundedRectangle.fill.pattern    = 'images/png/sun.png';

                        _roundedRectangle.fill.repetition = 'no-repeat';

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.blur = 10;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.move ( 90, 25 );

                        _roundedRectangle.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _roundedRectangle.rotate ( 45 );

                        _roundedRectangle.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align   = 'topLeft';

                        _roundedRectangle.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.border = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.axis = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.coordinates = true;

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            roundedRectangles:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.shadow = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.border = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.axis = true;

                        _roundedRectangles.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'roundedrectangle' ],
                //     code: ( ) =>
                //     {
                //         _roundedRectangles.options.anchor   = true;

                //         _roundedRectangles.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangles.options.coordinates = true;

                        _roundedRectangles.draw ( );
                    }
                },
            ],
            text:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                // text
                {
                    title:   'text',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.text = '!@#$%^&*'

                        _text.draw ( );
                    }
                },
                // type
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                // size
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                // weight
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                // maxWidth
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'font' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                // stroke type
                // {
                //     title:   'stroke type',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.draw ( );
                //     }
                // },
                // stroke segments
                // {
                //     title:   'stroke segments',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.segments  = [ 2, 7, 10 ];

                //         _text.fill.color.alpha = 0;         // [ Optional ]

                //         _text.draw ( );
                //     }
                // },
                // stroke color
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 2;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.25;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width     = 2;

                        _text.stroke.color     = new Rgb ( 0,  150,  200 ); // [ Optional ]

                        _text.fill.color.alpha = 0; // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // fill alpha
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'fill', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.color.alpha   = 0.25;

                        _text.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                // shadow color
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },
                // shadow blur
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.blur    = 10;

                        _text.draw ( );
                    }
                },
                // shadow offset
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.move ( 90, 25 );

                        _text.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _text.rotate ( 45 );

                        _text.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'anchor' ],
                    code: ( ) =>
                    {
                        _text.options.anchor = true;

                        _text.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.border = true;

                        _text.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.axis = true;

                        _text.draw ( );
                    }
                },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.coordinates = true;

                        _text.draw ( );
                    }
                },
            ],
            texts:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.draw ( );
                    }
                },
                // shadow
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.shadow = true;

                        _texts.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.border = true;

                        _texts.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.axis = true;

                        _texts.draw ( );
                    }
                },
                // anchor
                // {
                //     title:   'anchor',
                //     text:    'blah... blah... blah...',
                //     children: [ 'text' ],
                //     code: ( ) =>
                //     {
                //         _texts.options.anchor   = true;

                //         _texts.draw ( );
                //     }
                // },
                // coordinates
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _texts.options.coordinates = true;

                        _texts.draw ( );
                    }
                },
            ],
            cImage:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.draw ( );
                    }
                },
                // primary point
                {
                    title:   'primary point',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point  = new Point  ( 154,  85 );

                        _image.primary.aspect = new Aspect (  91, 101 );     // [ Optional ]

                        _image.draw ( );
                    }
                },
                // secondary point
                {
                    title:   'secondary point',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 154,  85 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect (  91, 101 );

                        _image.secondary.point  = new Point  ( -10, -40 );

                        _image.secondary.aspect = new Aspect (  91, 101 );

                        _image.draw ( );
                    }
                },
                // primary aspect
                {
                    title:   'primary aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 100,  60 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect ( 182, 202 );

                        _image.secondary.point  = new Point  (   0,   0 );

                        _image.secondary.aspect = new Aspect (  91, 101 );

                        _image.draw ( );
                    }
                },
                // secondary aspect
                {
                    title:   'secondary aspect',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.primary.point    = new Point  ( 100,  60 );  // [ Optional ]

                        _image.primary.aspect   = new Aspect (  91, 101 );

                        _image.secondary.point  = new Point  (   0,   0 );

                        _image.secondary.aspect = new Aspect ( 182, 202 );

                        _image.draw ( );
                    }
                },
                // move
                {
                    title:   'move',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.move ( 90, 25 );

                        _image.draw ( );
                    }
                },
                // rotate
                {
                    title:   'rotate',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.rotate ( 45 );

                        _image.draw ( );
                    }
                },
                // anchor
                {
                    title:   'anchor',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.draw ( );
                    }
                },
                // anchor align
                {
                    title:   'anchor align',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align   = 'topLeft';

                        _image.draw ( );
                    }
                },
                // axis
                {
                    title:   'axis',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.axis = true;

                        _image.draw ( );
                    }
                },
                // border
                {
                    title:   'border',
                    text:    'blah... blah... blah...',
                    children: undefined,
                    code: ( ) =>
                    {
                        _image.options.border = true;

                        _image.draw ( );
                    }
                },
                // coordinates
                // {
                //     title:   'coordinates',
                //     text:    'blah... blah... blah...',
                //     children: [ 'options' ],
                //     code: ( ) =>
                //     {
                //         _image.options.coordinates = true;

                //         _image.draw ( );
                //     }
                // },
            ],
            group:
            [
                // draw
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'circle', 'ellipse', 'rectangle', 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _group.draw ( );
                    }
                },
            ]
        },
        subject:
        {
            anchor:
            [
                // Align : circle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.draw ( );
                    }
                },
                // Align Top : circle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'top';

                        _circle.draw ( );
                    }
                },
                // Align Top-Right : circle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'topRight';

                        _circle.draw ( );
                    }
                },
                // Align Right : circle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'right';

                        _circle.draw ( );
                    }
                },
                // Align Bottom-Right : circle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottomRight';

                        _circle.draw ( );
                    }
                },
                // Align Bottom : circle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottom';

                        _circle.draw ( );
                    }
                },
                // Align Bottom-Left : circle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'bottomLeft';

                        _circle.draw ( );
                    }
                },
                // Align Left : circle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'left';

                        _circle.draw ( );
                    }
                },
                // Align Top-Left : circle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.options.anchor = true;

                        _circle.anchor.align = 'topLeft';

                        _circle.draw ( );
                    }
                },

                // Align : ellipse
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.draw ( );
                    }
                },
                // Align Top : ellipse
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'top';

                        _ellipse.draw ( );
                    }
                },
                // Align Top-Right : ellipse
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'topRight';

                        _ellipse.draw ( );
                    }
                },
                // Align Right : ellipse
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'right';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom-Right : ellipse
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottomRight';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom : ellipse
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottom';

                        _ellipse.draw ( );
                    }
                },
                // Align Bottom-Left : ellipse
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'bottomLeft';

                        _ellipse.draw ( );
                    }
                },
                // Align Left : ellipse
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'left';

                        _ellipse.draw ( );
                    }
                },
                // Align Top-Left : ellipse
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.options.anchor = true;

                        _ellipse.anchor.align = 'topLeft';

                        _ellipse.draw ( );
                    }
                },

                // Align : rectangle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.draw ( );
                    }
                },
                // Align Top : rectangle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'top';

                        _rectangle.draw ( );
                    }
                },
                // Align Top-Right : rectangle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topRight';

                        _rectangle.draw ( );
                    }
                },
                // Align Right : rectangle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'right';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom-Right : rectangle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomRight';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom : rectangle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottom';

                        _rectangle.draw ( );
                    }
                },
                // Align Bottom-Left : rectangle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'bottomLeft';

                        _rectangle.draw ( );
                    }
                },
                // Align Left : rectangle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'left';

                        _rectangle.draw ( );
                    }
                },
                // Align Top-Left : rectangle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.options.anchor = true;

                        _rectangle.anchor.align = 'topLeft';

                        _rectangle.draw ( );
                    }
                },

                // Align : roundedRectangle
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top : roundedRectangle
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'top';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top-Right : roundedRectangle
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'topRight';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Right : roundedRectangle
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'right';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom-Right : roundedRectangle
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottomRight';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom : roundedRectangle
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottom';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Bottom-Left : roundedRectangle
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'bottomLeft';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Left : roundedRectangle
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'left';

                        _roundedRectangle.draw ( );
                    }
                },
                // Align Top-Left : roundedRectangle
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.anchor = true;

                        _roundedRectangle.anchor.align = 'topLeft';

                        _roundedRectangle.draw ( );
                    }
                },

                // Align : image
                {
                    title:   'Align',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.draw ( );
                    }
                },
                // Align Top : image
                {
                    title:   'Align Top',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'top';

                        _image.draw ( );
                    }
                },
                // Align Top-Right : image
                {
                    title:   'Align Top-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'topRight';

                        _image.draw ( );
                    }
                },
                // Align Right : image
                {
                    title:   'Align Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'right';

                        _image.draw ( );
                    }
                },
                // Align Bottom-Right : image
                {
                    title:   'Align Bottom-Right',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottomRight';

                        _image.draw ( );
                    }
                },
                // Align Bottom : image
                {
                    title:   'Align Bottom',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottom';

                        _image.draw ( );
                    }
                },
                // Align Bottom-Left : image
                {
                    title:   'Align Bottom-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'bottomLeft';

                        _image.draw ( );
                    }
                },
                // Align Left : image
                {
                    title:   'Align Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'left';

                        _image.draw ( );
                    }
                },
                // Align Top-Left : image
                {
                    title:   'Align Top-Left',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.options.anchor = true;

                        _image.anchor.align = 'topLeft';

                        _image.draw ( );
                    }
                },
            ],
            angle:
            [
                // angle start : circle
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.draw ( );
                    }
                },
                // angle end : circle
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.draw ( );
                    }
                },
                // angle clockwise : circle
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 90;

                        _circle.angle.end   = 180;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },
                // angle clockwise : circle
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.angle.start = 180;

                        _circle.angle.end   = 360;

                        _circle.angle.clockwise = false;

                        _circle.draw ( );
                    }
                },

                // angle start : ellipse
                {
                    title:   'angle start',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.draw ( );
                    }
                },
                // angle end : ellipse
                {
                    title:   'angle end',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise : ellipse
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 90;

                        _ellipse.angle.end   = 180;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
                // angle clockwise : ellipse
                {
                    title:   'angle clockwise',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.angle.start = 180;

                        _ellipse.angle.end   = 360;

                        _ellipse.angle.clockwise = false;

                        _ellipse.draw ( );
                    }
                },
            ],
            aspect:
            [
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 100, height: 100 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 25, height: 25 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 100, height: 50 };

                        _rectangle.draw ( );
                    }
                },
                // aspect : rectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = { width: 50, height: 100 };

                        _rectangle.draw ( );
                    }
                },

                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 100, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 25, height: 25 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 100, height: 50 };

                        _roundedRectangle.draw ( );
                    }
                },
                // aspect : roundedRectangle
                {
                    title:   'aspect',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = { width: 50, height: 100 };

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            controlpoints:
            [
                // control points p0
                {
                    title:   'control points p0',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p0      = 50;

                        _line.draw ( );
                    }
                },
                // control points p1
                {
                    title:   'control points p1',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p1      = 50;

                        _line.draw ( );
                    }
                },
                // control points p2
                {
                    title:   'control points p2',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.p2      = 50;

                        _line.draw ( );
                    }
                },
                // control points p3
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;

                        _line.controlPoints.p3      = 50;

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, 50, 50, 50 ];

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ -50, 50, -50, 50 ];

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.controlPoints.points  = [ 50, -50, 50, -50 ];

                        _line.draw ( );
                    }
                },
                // control points
                {
                    title:   'control points',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;

                        _line.controlPoints.points  = [ -50, -50, -50, -50 ];

                        _line.draw ( );
                    }
                },
                // curve
                {
                    title:   'curve',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.options.controlPoints = true;  // [ Optional ]

                        _line.curve ( 50, 50, 50, 50 );

                        _line.draw ( );
                    }
                },
            ],
            fill:
            [
                // fill color : circle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill pattern : circle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.radius = 50;    // [ Optional ]

                        _circle.fill.pattern = 'images/png/sun.png';

                        _circle.draw ( );
                    }
                },
                // fill pattern no-repeat : circle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'circle' ],
                //     code: ( ) =>
                //     {
                //         _circle.radius = 50;    // [ Optional ]

                //         _circle.fill.pattern    = 'images/png/sun.png';

                //         _circle.fill.repetition = 'no-repeat';

                //         _circle.draw ( );
                //     }
                // },

                // fill color : ellipse
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'radial', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill pattern : ellipse
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.radius = new Point ( 70, 50 );  // [ Optional ]

                        _ellipse.fill.pattern = 'images/png/sun.png';

                        _ellipse.draw ( );
                    }
                },
                // fill pattern no-repeat : ellipse
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'ellipse' ],
                //     code: ( ) =>
                //     {
                //         _ellipse.radius = 50;    // [ Optional ]

                //         _ellipse.fill.pattern    = 'images/png/sun.png';

                //         _ellipse.fill.repetition = 'no-repeat';

                //         _ellipse.draw ( );
                //     }
                // },

                // fill color : rectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    },
                },
                // fill pattern : rectangle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.aspect = new Aspect ( 200, 100 );  // [ Optional ]

                        _rectangle.fill.pattern = 'images/png/sun.png';

                        _rectangle.draw ( );
                    }
                },
                // fill pattern no-repeat : rectangle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'rectangle' ],
                //     code: ( ) =>
                //     {
                //         _rectangle.radius = 50;    // [ Optional ]

                //         _rectangle.fill.pattern    = 'images/png/sun.png';

                //         _rectangle.fill.repetition = 'no-repeat';

                //         _rectangle.draw ( );
                //     }
                // },

                // fill color : roundedRectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 110, y: 90 }, 30, { x: 100, y: 100 }, 70 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle', 'conic', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 75, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    },
                },
                // fill pattern : roundedrectangle
                {
                    title:   'fill pattern',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.aspect = new Aspect ( 200, 100 );  // [ Optional ]

                        _roundedRectangle.fill.pattern = 'images/png/sun.png';

                        _roundedRectangle.draw ( );
                    }
                },
                // // fill pattern no-repeat : roundedRectangle
                // {
                //     title:   'fill pattern no-repeat',
                //     text:    'blah... blah... blah...',
                //     children: [ 'roundedrectangle' ],
                //     code: ( ) =>
                //     {
                //         _roundedRectangle.radius = 50;    // [ Optional ]

                //         _roundedRectangle.fill.pattern    = 'images/png/sun.png';

                //         _roundedRectangle.fill.repetition = 'no-repeat';

                //         _roundedRectangle.draw ( );
                //     }
                // },

                // fill color : text
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,   150, 200, 1 );

                        _text.draw ( );
                    }
                },
                // fill linear : text
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
                // fill radial : text
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
                // fill conic : text
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            font:
            [
                // type
                {
                    title:   'type',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.type = 'Courier New';

                        _text.draw ( );
                    }
                },
                // size
                {
                    title:   'size',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.size = 36;

                        _text.draw ( );
                    }
                },
                // weight
                {
                    title:   'weight',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.weight = 'italic';

                        _text.draw ( );
                    }
                },
                // maxWidth
                {
                    title:   'maxWidth',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.maxWidth = 100;

                        _text.draw ( );
                    }
                },
                // offset
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
            ],
            point:
            [
                // draw : line
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.draw ( );
                    }
                },
                // shadow offset : line
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },
                // points : line
                {
                    title:   'points',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.points = true;

                        _line.draw ( );
                    }
                },
                // coordinates : line
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _line.options.coordinates = true;

                        _line.draw ( );
                    }
                },

                // draw : circle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.draw ( );
                    }
                },
                // shadow offset : circle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },
                // coordinates : circle
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.coordinates = true;

                        _circle.draw ( );
                    }
                },

                // draw : ellipse
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.draw ( );
                    }
                },
                // shadow offset : ellipse
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },
                // coordinates : ellipse
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.coordinates = true;

                        _ellipse.draw ( );
                    }
                },

                // draw : rectangle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.draw ( );
                    }
                },
                // shadow offset : rectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },
                // coordinates : rectangle
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.coordinates = true;

                        _rectangle.draw ( );
                    }
                },

                // draw : roundedRectangle
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset : roundedRectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },
                // coordinates : roundedRectangle
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.coordinates = true;

                        _roundedRectangle.draw ( );
                    }
                },

                // draw : text
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'text' ],
                    code: ( ) =>
                    {
                        _text.draw ( );
                    }
                },
                // offset : text
                {
                    title:   'offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'font' ],
                    code: ( ) =>
                    {
                        _text.offset = { x: 0, y: -25 }

                        _text.draw ( );
                    }
                },
                // shadow offset : text
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
                // coordinates : text
                {
                    title:   'coordinates',
                    text:    'blah... blah... blah...',
                    children: [ 'options' ],
                    code: ( ) =>
                    {
                        _text.options.coordinates = true;

                        _text.draw ( );
                    }
                },

                // draw : cImage
                {
                    title:   'draw',
                    text:    'blah... blah... blah...',
                    children: [ 'cimage' ],
                    code: ( ) =>
                    {
                        _image.draw ( );
                    }
                },
            ],
            linear:
            [
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },

                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },

                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill linear : text
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            radial:
            [
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },

                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },

                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill radial : text
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            conic:
            [
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },

                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },

                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // fill conic : text
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill', 'stop', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _text.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _text.draw ( );
                    }
                },
            ],
            rgb:
            [
                // stroke color : line
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha : line
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'stroke' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },

                // stroke color : circle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha : circle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'stroke' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill color : circle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // fill alpha : circle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill' ],
                    code: ( ) =>
                    {
                        _circle.fill.color = new Rgb ( 0,  150,  200 );

                        _circle.fill.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },

                // stroke color : ellipse
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha : ellipse
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'stroke' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill color : ellipse
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // fill alpha : ellipse
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                        _ellipse.fill.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // stroke color : rectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha : rectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill color : rectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // fill alpha : rectangle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _rectangle.fill.color.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },

                // stroke color : roundedRectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha : roundedRectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'stroke' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill color : roundedRectangle
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // fill alpha : roundedRectangle
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.fill.color.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'linear', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'radial', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'conic', 'stop' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },

                // stroke color : text
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width = 1;

                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // stroke alpha : text
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // fill color : text
                {
                    title:   'fill color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color = new Rgb ( 0,  150,  200 );

                        _text.draw ( );
                    }
                },
                // fill alpha : text
                {
                    title:   'fill alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'fill' ],
                    code: ( ) =>
                    {
                        _text.fill.color.alpha = 0.25;

                        _text.draw ( );
                    }
                },
            ],
            shadow:
            [
                // shadow : line
                {
                    title:   'line',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.draw ( );
                    }
                },
                // shadow color : line
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color = new Rgb ( 0, 150, 200 );

                        _line.draw ( );
                    }
                },
                // shadow alpha : line
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.color.alpha = 0.5;

                        _line.draw ( );
                    }
                },
                // shadow blur : line
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.blur = 10;

                        _line.draw ( );
                    }
                },
                // shadow offset : line
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'options' ],
                    code: ( ) =>
                    {
                        _line.options.shadow = true;

                        _line.shadow.x = 5;

                        _line.shadow.y = 5;

                        _line.draw ( );
                    }
                },

                // shadow : circle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.draw ( );
                    }
                },
                // shadow color : circle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color = new Rgb ( 0, 150, 200 );

                        _circle.draw ( );
                    }
                },
                // shadow alpha : circle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.color.alpha = 0.5;

                        _circle.draw ( );
                    }
                },
                // shadow blur : circle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.blur = 10;

                        _circle.draw ( );
                    }
                },
                // shadow offset : circle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'options' ],
                    code: ( ) =>
                    {
                        _circle.options.shadow = true;

                        _circle.shadow.x = 5;

                        _circle.shadow.y = 5;

                        _circle.draw ( );
                    }
                },

                // shadow : ellipse
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.draw ( );
                    }
                },
                // shadow color : ellipse
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color = new Rgb ( 0, 150, 200 );

                        _ellipse.draw ( );
                    }
                },
                // shadow alpha : ellipse
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.color.alpha = 0.5;

                        _ellipse.draw ( );
                    }
                },
                // shadow blur : ellipse
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.blur = 10;

                        _ellipse.draw ( );
                    }
                },
                // shadow offset : ellipse
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'options' ],
                    code: ( ) =>
                    {
                        _ellipse.options.shadow = true;

                        _ellipse.shadow.x = 5;

                        _ellipse.shadow.y = 5;

                        _ellipse.draw ( );
                    }
                },

                // shadow : rectangle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.draw ( );
                    }
                },
                // shadow color : rectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _rectangle.draw ( );
                    }
                },
                // shadow alpha : rectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.color.alpha = 0.5;

                        _rectangle.draw ( );
                    }
                },
                // shadow blur : rectangle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.blur = 10;

                        _rectangle.draw ( );
                    }
                },
                // shadow offset : rectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'options' ],
                    code: ( ) =>
                    {
                        _rectangle.options.shadow = true;

                        _rectangle.shadow.x = 5;

                        _rectangle.shadow.y = 5;

                        _rectangle.draw ( );
                    }
                },

                // shadow : roundedRectangle
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow color : roundedRectangle
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color = new Rgb ( 0, 150, 200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow alpha : roundedRectangle
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.color.alpha = 0.5;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow blur : roundedRectangle
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.blur = 10;

                        _roundedRectangle.draw ( );
                    }
                },
                // shadow offset : roundedRectangle
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'options' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.options.shadow = true;

                        _roundedRectangle.shadow.x = 5;

                        _roundedRectangle.shadow.y = 5;

                        _roundedRectangle.draw ( );
                    }
                },

                // shadow : text
                {
                    title:   'shadow',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.draw ( );
                    }
                },
                // shadow color : text
                {
                    title:   'shadow color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color = new Rgb ( 0, 150, 200 );

                        _text.draw ( );
                    }
                },
                // shadow alpha : text
                {
                    title:   'shadow alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.color.alpha = 0.5;

                        _text.draw ( );
                    }
                },
                // shadow blur : text
                {
                    title:   'shadow blur',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'options' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.blur = 10;

                        _text.draw ( );
                    }
                },
                // shadow offset : text
                {
                    title:   'shadow offset',
                    text:    'blah... blah... blah...',
                    children: [ 'options', 'shadow' ],
                    code: ( ) =>
                    {
                        _text.options.shadow = true;

                        _text.shadow.x = 5;

                        _text.shadow.y = 5;

                        _text.draw ( );
                    }
                },
            ],
            stop:
            [
                // fill linear : circle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill radial : circle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'gradient', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },
                // fill conic : circle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _circle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _circle.draw ( );
                    }
                },

                // fill linear : ellipse
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill radial : ellipse
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },
                // fill conic : ellipse
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _ellipse.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _ellipse.draw ( );
                    }
                },

                // fill linear : rectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill radial : rectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },
                // fill conic : rectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _rectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _rectangle.draw ( );
                    }
                },

                // fill linear : roundedRectangle
                {
                    title:   'fill linear',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'linear', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0.5, color: new Rgb ( 0, 150, 200, 1 ) },
                            { offset: 1,   color: new Rgb ( 0,   0,   0, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill radial : roundedRectangle
                {
                    title:   'fill radial',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'radial', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,   color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.5, color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 1,   color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
                // fill conic : roundedRectangle
                {
                    title:   'fill conic',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'fill', 'conic', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                        _roundedRectangle.fill.gradient.stops =
                        [
                            { offset: 0,    color: new Rgb ( 0,   150, 200, 1 ) },
                            { offset: 0.25, color: new Rgb ( 50,  125, 175, 1 ) },
                            { offset: 0.5,  color: new Rgb ( 100, 100, 150, 1 ) },
                            { offset: 0.75, color: new Rgb ( 150,  75, 125, 1 ) },
                            { offset: 1,    color: new Rgb ( 200,  50, 100, 1 ) }
                        ];

                        _roundedRectangle.draw ( );
                    }
                },
            ],
            stroke:
            [
                // stroke type : line
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.type = 'solid';

                        _line.draw ( );
                    }
                },
                // stroke segments : line
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.segments = [ 2, 7, 10 ];

                        _line.draw ( );
                    }
                },
                // stroke color : line
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color = new Rgb ( 0,  150,  200 );

                        _line.draw ( );
                    }
                },
                // stroke alpha : line
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'line', 'rgb' ],
                    code: ( ) =>
                    {
                        _line.stroke.color.alpha = 0.25;

                        _line.draw ( );
                    }
                },
                // stroke width : line
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.draw ( );
                    }
                },
                // stroke cap : line
                {
                    title:   'stroke cap',
                    text:    'blah... blah... blah...',
                    children: [ 'line' ],
                    code: ( ) =>
                    {
                        _line.stroke.width = 5;

                        _line.lineCap = 'butt';

                        _line.draw ( );
                    }
                },

                // stroke type : circle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.type = 'solid';

                        _circle.draw ( );
                    }
                },
                // stroke segments : circle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.segments = [ 2, 4 ];

                        _circle.draw ( );
                    }
                },
                // stroke color : circle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color = new Rgb ( 0,  150,  200 );

                        _circle.draw ( );
                    }
                },
                // stroke alpha : circle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        _circle.stroke.color.alpha = 0.25;

                        _circle.draw ( );
                    }
                },
                // stroke width : circle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'circle' ],
                    code: ( ) =>
                    {
                        _circle.stroke.width = 5;

                        _circle.draw ( );
                    }
                },

                // stroke type : ellipse
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.type = 'solid';

                        _ellipse.draw ( );
                    }
                },
                // stroke segments : ellipse
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.segments = [ 2, 4 ];

                        _ellipse.draw ( );
                    }
                },
                // stroke color : ellipse
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                        _ellipse.draw ( );
                    }
                },
                // stroke alpha : ellipse
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.color.alpha = 0.25;

                        _ellipse.draw ( );
                    }
                },
                // stroke width : ellipse
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'ellipse' ],
                    code: ( ) =>
                    {
                        _ellipse.stroke.width = 5;

                        _ellipse.draw ( );
                    }
                },

                // stroke type : rectangle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.type = 'solid';

                        _rectangle.draw ( );
                    }
                },
                // stroke segments : rectangle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.segments = [ 2, 4 ];

                        _rectangle.draw ( );
                    }
                },
                // stroke color : rectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _rectangle.draw ( );
                    }
                },
                // stroke alpha : rectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.alpha = 0.25;

                        _rectangle.draw ( );
                    }
                },
                // stroke width : rectangle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'rectangle' ],
                    code: ( ) =>
                    {
                        _rectangle.stroke.width = 5;

                        _rectangle.draw ( );
                    }
                },

                // stroke type : roundedRectangle
                {
                    title:   'stroke type',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.type = 'solid';

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke segments : roundedRectangle
                {
                    title:   'stroke segments',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.segments = [ 2, 4 ];

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke color : roundedRectangle
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke alpha : roundedRectangle
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.alpha = 0.25;

                        _roundedRectangle.draw ( );
                    }
                },
                // stroke width : roundedRectangle
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'roundedRectangle' ],
                    code: ( ) =>
                    {
                        _roundedRectangle.stroke.width = 5;

                        _roundedRectangle.draw ( );
                    }
                },

                // stroke type
                // {
                //     title:   'stroke type',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.draw ( );
                //     }
                // },
                // stroke segments
                // {
                //     title:   'stroke segments',
                //     text:    'blah... blah... blah...',
                //     children: [ 'stroke' ],
                //     code: ( ) =>
                //     {
                //         _text.stroke.type = 'solid';

                //         _text.stroke.segments = [ 2, 7, 10 ];

                //         _text.draw ( );
                //     }
                // },
                // stroke color : text
                {
                    title:   'stroke color',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );

                        _text.stroke.width = 1;

                        _text.draw ( );
                    }
                },
                // stroke alpha : text
                {
                    title:   'stroke alpha',
                    text:    'blah... blah... blah...',
                    children: [ 'text', 'rgb' ],
                    code: ( ) =>
                    {
                        _text.stroke.width       = 1;

                        _text.stroke.color.alpha = 0.5;

                        _text.fill.color.alpha   = 0;       // [ Optional ]

                        _text.draw ( );
                    }
                },
                // stroke width : text
                {
                    title:   'stroke width',
                    text:    'blah... blah... blah...',
                    children: [ 'stroke' ],
                    code: ( ) =>
                    {
                        _text.stroke.color = new Rgb ( 0,  150,  200 );  // [ Optional]

                        _text.stroke.width = 5;

                        _text.draw ( );
                    }
                },
            ]
        },
        template:
        {
            sacredcircles:
            [
                // draw everything
                {
                    title:   'Draw All',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'lines', 'circles', 'rectangles', 'texts', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        let _fills   = new Array;

                        ////    POPULATION    //////////////////////////

                        let _group          = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.draw ( );

                    }
                },
                // draw circles
                {
                    title:   'Circles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'circles', 'circle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.circles.draw ( );
                    }
                },
                // draw circles & color
                {
                    title:   'Circles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'circles', 'circle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.circles.draw ( );
                    }
                },
                // draw ellipses
                {
                    title:   'Ellipses',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'ellipses', 'ellipse' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.ellipses.draw ( );
                    }
                },
                // draw ellipses & color
                {
                    title:   'Ellipses & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'ellipses', 'ellipse', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.ellipses.draw ( );
                    }
                },
                // draw rectangles
                {
                    title:   'Rectangles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'rectangles', 'rectangle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.rectangles.draw ( );
                    }
                },
                // draw rectangles & colors
                {
                    title:   'Rectangles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'rectangles', 'rectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.rectangles.draw ( );
                    }
                },
                // draw rounded rectangles
                {
                    title:   'Rounded Rectangles',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'roundedrectangles', 'roundedrectangle' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.roundedRectangles.draw ( );
                    }
                },
                // draw rectangles & colors
                {
                    title:   'Rounded Rectangles & Colors',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'roundedrectangles', 'roundedrectangle', 'rgb' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        let _alpha      = 0.40;

                        let _colors     =
                        [
                            new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                            new Rgb (   0,  0,  255, _alpha ),      // Blue
                            new Rgb (   0, 255, 255, _alpha ),      // Cyan
                            new Rgb (   0, 255,   0, _alpha ),      // Green
                            new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                            new Rgb ( 255, 125,   0, _alpha ),      // Orange
                            new Rgb ( 255,   0,   0, _alpha ),      // Red
                            new Rgb (   0,   0,   0, _alpha ),      // Black
                        ]

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), _colors );

                            _group.roundedRectangles.draw ( );
                    }
                },
                // draw lines
                // {
                //     title:   'Lines',
                //     text:    'blah... blah... blah...',
                //     children: [ 'group', 'lines', 'line' ],
                //     code: ( ) =>
                //     {
                //         ////    INPUTS    //////////////////////////////

                //         let _center     = canvaslab.center;

                //         let _radius     = 25;

                //         let _iterations = 6;

                //         let _degrees    = [ 90, 330, 270, 210, 150, 90, 30 ];

                //         ////    POPULATION    //////////////////////////

                //         let _group = new Group;

                //             _group.canvas = 'canvas';

                //             _group.template = new SacredCircles ( _center, _radius, _iterations, _degrees, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                //             _group.lines.draw ( );
                //     }
                // },
                // draw texts
                {
                    title:   'Texts',
                    text:    'blah... blah... blah...',
                    children: [ 'group', 'texts', 'text' ],
                    code: ( ) =>
                    {
                        ////    INPUTS    //////////////////////////////

                        let _center     = canvaslab.center;

                        let _radius     = 25;

                        let _iterations = 6;

                        ////    POPULATION    //////////////////////////

                        let _group = new Group;

                            _group.canvas   = 'canvas';

                            _group.template = new SacredCircles ( _center, _radius, _iterations, new Rgb ( 0, 0, 0, 1 ), new Rgb ( 0, 0, 0, 0 ) );

                            _group.texts.draw ( );
                    }
                },
            ],
        },
        animation:
        {
            object:
            {
                line:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x - 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x + 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // startPoint
                    {
                        title: 'Start Point',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    startPoint: new Point ( 100, 50 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // endPoint
                    {
                        title: 'End Point',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    endPoint: new Point ( 100, 50 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInSine',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                                _line.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // rotate anchor align
                    // {
                    //     title: 'rotate anchor align',
                    //     text: 'easeInSine',
                    //     code: ( ) =>
                    //     {
                    //         _line.options.anchor = true;  // [ Optional ]

                    //         _line.anchor.align   = 'start';

                    //         let _transition =
                    //         {
                    //             object: _line,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 rotate: 180,
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;

                            _line.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;

                            _line.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points
                    {
                        title:   'control points',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'controlpoints' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;     // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    controlPoints: [ 50, 0, 0, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                circle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x - 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x + 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            _circle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // radius
                    {
                        title: 'Radius',
                        text: 'easeInOutElastic',
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    radius: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;

                            _circle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;

                            _circle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                ellipse:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x - 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x + 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            _ellipse.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // radius
                    // {
                    //     title: 'Radius',
                    //     text: 'easeInOutElastic',
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _ellipse,
                    //             timing: 'easeInOutElastic',
                    //             period: 1750,
                    //             change:
                    //             {
                    //                 radius: 50
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow = true;

                            _ellipse.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;

                            _ellipse.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                rectangle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x - 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x + 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow = true;

                            _rectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;

                            _rectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                roundedRectangle:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x - 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x + 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'aspect' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            _roundedRectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow color
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow = true;

                            _roundedRectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;

                            _roundedRectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'options', 'shadow', 'point' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                text:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x - 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x + 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _text.options.anchor = true;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke color
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'fill', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'fill', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'fill', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'fill', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                cImage:
                [
                    // point -x
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x - 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x + 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'point' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 0°
                    {
                        title:   'Move 0°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 0, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 90°
                    {
                        title:   'Move 90°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 90, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 180°
                    {
                        title:   'Move 180°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 180, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // move 270°
                    {
                        title:   'Move 270°',
                        text:    'blah... blah... blah...',
                        children: undefined,
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    move: { degree: 270, distance: 25 }
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'anchor' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            _image.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ]
            },
            subject:
            {
                anchor:
                [
                    // rotate anchor : line
                    {
                        title: 'rotate anchor',
                        text: 'easeInSine',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                                _line.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : circle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : circle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            _circle.options.anchor = true;  // [ Optional ]

                            _circle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : ellipse
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : ellipse
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            _ellipse.options.anchor = true;

                            _ellipse.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : rectangle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : rectangle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            _rectangle.options.anchor = true;

                            _rectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : roundedRectangle
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : roundedRectangle
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.anchor = true;

                            _roundedRectangle.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : text
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            _text.options.anchor = true;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // rotate anchor : cImage
                    {
                        title: 'Rotate Anchor',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // rotate anchor align : cImage
                    {
                        title: 'Rotate Anchor Align',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            _image.options.anchor = true;

                            _image.anchor.align   = 'top';

                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    rotate: 180,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                angle:
                [
                    // angle start : circle
                    {
                        title:   'angle start',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle end : circle
                    {
                        title:   'angle end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleEnd: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : circle
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 270,
                                    angleEnd: 90
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : circle
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 90,
                                    angleEnd: 270
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // angle start : ellipse
                    {
                        title:   'angle start',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle end : ellipse
                    {
                        title:   'angle end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleEnd: 360,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : ellipse
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 270,
                                    angleEnd: 90
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // angle start & end : ellipse
                    {
                        title:   'angle start & end',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    angleStart: 90,
                                    angleEnd: 270
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                aspect:
                [
                    // aspect : rectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect : rectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect : rectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 100, 25 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // aspect : rectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 25, 100 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect width : rectangle
                    {
                        title:   'aspect width',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    width: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect width : rectangle
                    // {
                    //     title:   'aspect width',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 width: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect height : rectangle
                    {
                        title:   'aspect height',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    height: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect height : rectangle
                    // {
                    //     title:   'aspect height',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'rectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _rectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 height: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },

                    // aspect : roundedRectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 100, 100 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // aspect : roundedRectangle
                    {
                        title:   'aspect',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    aspect: new Aspect ( 25, 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect : roundedRectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 100, 25 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // // aspect : roundedRectangle
                    // {
                    //     title:   'aspect',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 aspect: new Aspect ( 25, 100 )
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect width : roundedRectangle
                    {
                        title:   'aspect width',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    width: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect width : roundedRectangle
                    // {
                    //     title:   'aspect width',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 width: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                    // aspect height : roundedRectangle
                    {
                        title:   'aspect height',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    height: 100
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // // aspect height : roundedRectangle
                    // {
                    //     title:   'aspect height',
                    //     text:    'blah... blah... blah...',
                    //     children: [ 'roundedRectangle' ],
                    //     code: ( ) =>
                    //     {
                    //         let _transition =
                    //         {
                    //             object: _roundedRectangle,
                    //             timing: 'easeInSine',
                    //             period: 2000,
                    //             change:
                    //             {
                    //                 height: 25
                    //             }
                    //         }

                    //         canvaslab.animate ( _transition );
                    //     }
                    // },
                ],
                controlpoints:
                [
                    // control points p0
                    {
                        title:   'control points p0',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p0: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p1
                    {
                        title:   'control points p1',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p1: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p2
                    {
                        title:   'control points p2',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p2: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p3
                    {
                        title:   'control points p3',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    p3: 50
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[0]
                    {
                        title:   'control points p[0]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 50, 0, 0, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[1]
                    {
                        title:   'control points p[1]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 50, 0, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[2]
                    {
                        title:   'control points p[2]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 0, 50, 0 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // control points p[3]
                    {
                        title:   'control points p[3]',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    controlPoints: [ 0, 0, 0, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // curve
                    {
                        title:   'curve',
                        text:    'blah... blah... blah...',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            _line.options.controlPoints = true;  // [ Optional ]


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 1000,
                                change:
                                {
                                    curve: [ 50, 50, 50, 50 ]
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                fill:
                [
                    // fill color : circle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : circle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : ellipse
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : ellipse
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : rectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : rectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : roundedRectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : roundedRectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // fill color : text
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : text
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'linear', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'radial', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'conic', 'stop', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                font:
                [
                    // font size
                    {
                        title: 'font size',
                        text: 'easeInSine',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fontSize: 36,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                point:
                [
                    // point -x : line
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x - 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : line
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : line
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x + 25, _line.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : line
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'line' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _line.x, _line.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : circle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x - 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : circle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : circle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x + 25, _circle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : circle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'circle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _circle.x, _circle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : ellipse
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x - 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : ellipse
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : ellipse
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x + 25, _ellipse.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : ellipse
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'ellipse' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _ellipse.x, _ellipse.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : rectangle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x - 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : rectangle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : rectangle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x + 25, _rectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : rectangle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'rectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _rectangle.x, _rectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : roundedRectangle
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x - 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : roundedRectangle
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : roundedRectangle
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x + 25, _roundedRectangle.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : roundedRectangle
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'roundedrectangle' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _roundedRectangle.x, _roundedRectangle.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : text
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x - 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : text
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : text
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x + 25, _text.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : text
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'text' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _text.x, _text.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // point -x : cImage
                    {
                        title: 'Point -X',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x - 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point -y : cImage
                    {
                        title: 'Point -Y',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y - 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +x : cImage
                    {
                        title: 'Point +X',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x + 25, _image.y )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // point +y : cImage
                    {
                        title: 'Point +Y',
                        text: 'easeInOutElastic',
                        children: [ 'cimage' ],
                        code: ( ) =>
                        {
                            let _transition =
                            {
                                object: _image,
                                timing: 'easeInOutElastic',
                                period: 1750,
                                change:
                                {
                                    point: new Point ( _image.x, _image.y + 25 )
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                linear:
                [
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                radial:
                [
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                conic:
                [
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                rgb:
                [
                    // stroke color : line
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'line', 'stroke' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : line
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'line', 'stroke' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : circle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'stroke' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : circle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'stroke' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : circle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill' ],
                        code: ( ) =>
                        {
                            _circle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : circle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill' ],
                        code: ( ) =>
                        {
                            _circle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : ellipse
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'stroke' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : ellipse
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'stroke' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : ellipse
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : ellipse
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : rectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : rectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : rectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : rectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : roundedRectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : roundedRectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'stroke' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : roundedRectangle
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : roundedRectangle
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedRectangle', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : text
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'text', 'stroke' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : text
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'stroke' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill color : text
                    {
                        title: 'Fill Color',
                        text: 'easeInSine',
                        children: [ 'text', 'fill' ],
                        code: ( ) =>
                        {
                            _text.fill.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // fill alpha : text
                    {
                        title: 'Fill Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'fill' ],
                        code: ( ) =>
                        {
                            _text.fill.color.alpha = 0;

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'radial', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'conic', 'stop' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                shadow:
                [
                    // shadow color : line
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow = true;

                            _line.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : line
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;

                            _line.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : line
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : line
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'line', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.options.shadow     = true;


                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : circle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow = true;

                            _circle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : circle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;

                            _circle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : circle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : circle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.options.shadow     = true;


                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : ellipse
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow = true;

                            _ellipse.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : ellipse
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;

                            _ellipse.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : ellipse
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : ellipse
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'ellipse', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.options.shadow     = true;


                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : rectangle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow = true;

                            _rectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : rectangle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;

                            _rectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : rectangle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : rectangle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'rectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // shadow color : roundedRectangle
                    {
                        title:   'shadow color',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow = true;

                            _roundedRectangle.shadow.color   = new Rgb ( 0, 150, 200 );


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow alpha : roundedRectangle
                    {
                        title:   'shadow alpha',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;

                            _roundedRectangle.shadow.color.alpha = 0;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowAlpha: 1,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow blur : roundedRectangle
                    {
                        title:   'shadow blur',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowBlur: 12,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // shadow offset : roundedRectangle
                    {
                        title:   'shadow offset',
                        text:    'blah... blah... blah...',
                        children: [ 'roundedRectangle', 'options', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.options.shadow     = true;


                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    shadowOffset: new Point ( 10, 10 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                stop:
                [
                    // gradient linear : circle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : circle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : circle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'circle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _circle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _circle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : ellipse
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : ellipse
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : ellipse
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _ellipse.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _ellipse.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : rectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : rectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : rectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _rectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _rectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : roundedRectangle
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : roundedRectangle
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'radial' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : roundedRectangle
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'fill', 'conic' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _roundedRectangle.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // gradient linear : text
                    {
                        title: 'Gradient Linear',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Linear ( { x: 20, y: 0 }, { x: 220, y: 0 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillLinear:
                                    [
                                        new Stop ( new Rgb ( 200,  25,   0, 1 ), 1   ),
                                        new Stop ( new Rgb (   0, 150, 200, 1 ), 0.5 )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient radial : text
                    {
                        title: 'Gradient Radial',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Radial ( { x: 180, y: 110 }, 0, { x: 180, y: 110 }, 50 );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillRadial:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1   ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0   )
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // gradient conic : text
                    {
                        title: 'Gradient Conic',
                        text: 'easeInSine',
                        children: [ 'text', 'fill', 'linear' ],
                        code: ( ) =>
                        {
                            _text.fill.gradient = new Conic ( 0, { x: 77, y: 155 } );

                            _text.fill.gradient.stops =
                            [
                                new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    )
                            ];

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    fillConic:
                                    [
                                        new Stop ( new Rgb ( 200,  50, 100, 1 ), 1    ),
                                        new Stop ( new Rgb ( 150,  75, 125, 1 ), 0.75 ),
                                        new Stop ( new Rgb ( 100, 100, 150, 1 ), 0.5  ),
                                        new Stop ( new Rgb ( 50,  125, 175, 1 ), 0.25 ),
                                        new Stop ( new Rgb ( 0,   150, 200, 1 ), 0    ),
                                    ],
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
                stroke:
                [
                    // stroke color : line
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : line
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'line', 'rgb' ],
                        code: ( ) =>
                        {
                            _line.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _line,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : circle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : circle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'circle', 'rgb' ],
                        code: ( ) =>
                        {
                            _circle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _circle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : ellipse
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : ellipse
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'ellipse', 'rgb' ],
                        code: ( ) =>
                        {
                            _ellipse.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _ellipse,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : rectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : rectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'rectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _rectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _rectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : roundedRectangle
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : roundedRectangle
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'roundedrectangle', 'rgb' ],
                        code: ( ) =>
                        {
                            _roundedRectangle.stroke.color.alpha = 0;

                            let _transition =
                            {
                                object: _roundedRectangle,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },

                    // stroke color : text
                    {
                        title: 'Stroke Color',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color = new Rgb ( 0,  150,  200 );

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeColor: new Rgb ( 200,  25,  0 ),
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                    // stroke alpha : text
                    {
                        title: 'Stroke Alpha',
                        text: 'easeInSine',
                        children: [ 'text', 'rgb' ],
                        code: ( ) =>
                        {
                            _text.stroke.width = 2;

                            _text.stroke.color.alpha = 0;

                            _text.fill.color.alpha   = 0;   // [ Optional ]

                            let _transition =
                            {
                                object: _text,
                                timing: 'easeInSine',
                                period: 2000,
                                change:
                                {
                                    strokeAlpha: 0.5,
                                }
                            }

                            canvaslab.animate ( _transition );
                        }
                    },
                ],
            },
            template:
            {
                sacredcircles:
                [
                    // transitions hop
                    {
                        title:   'hop',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeOutBack';

                            let _period     = 500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
                            [
                                new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                                new Rgb (   0,  0,  255, _alpha ),      // Blue
                                new Rgb (   0, 255, 255, _alpha ),      // Cyan
                                new Rgb (   0, 255,   0, _alpha ),      // Green
                                new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                                new Rgb ( 255, 125,   0, _alpha ),      // Orange
                                new Rgb ( 255,   0,   0, _alpha ),      // Red
                                new Rgb (   0,   0,   0, _alpha ),      // Black
                            ]

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.hop ( _group.circles [ 0 ], _group.circles, _timing, _period, _center );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions skip
                    {
                        title:   'skip',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeOutBack';

                            let _period     = 500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
                            [
                                new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                                new Rgb (   0,  0,  255, _alpha ),      // Blue
                                new Rgb (   0, 255, 255, _alpha ),      // Cyan
                                new Rgb (   0, 255,   0, _alpha ),      // Green
                                new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                                new Rgb ( 255, 125,   0, _alpha ),      // Orange
                                new Rgb ( 255,   0,   0, _alpha ),      // Red
                                new Rgb (   0,   0,   0, _alpha ),      // Black
                            ]

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.skip ( _group.circles [ 0 ], _group.circles, _timing, _period, _center );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions bloom out
                    {
                        title:   'bloom out',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
                            [
                                new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                                new Rgb (   0,  0,  255, _alpha ),      // Blue
                                new Rgb (   0, 255, 255, _alpha ),      // Cyan
                                new Rgb (   0, 255,   0, _alpha ),      // Green
                                new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                                new Rgb ( 255, 125,   0, _alpha ),      // Orange
                                new Rgb ( 255,   0,   0, _alpha ),      // Red
                                new Rgb (   0,   0,   0, _alpha ),      // Black
                            ]

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions = _group.template.transitions.bloom ( _group.circles, _timing, _period );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions bloom in
                    {
                        title:   'bloom in',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 25;

                            let _alpha      = 0.4;

                            let _strokes    = new Rgb ( 0, 0, 0, 1 );

                            let _fills      =
                            [
                                new Rgb ( 255,  0,  255, _alpha ),      // Magenta
                                new Rgb (   0,  0,  255, _alpha ),      // Blue
                                new Rgb (   0, 255, 255, _alpha ),      // Cyan
                                new Rgb (   0, 255,   0, _alpha ),      // Green
                                new Rgb ( 255, 255,   0, _alpha ),      // Yellow
                                new Rgb ( 255, 125,   0, _alpha ),      // Orange
                                new Rgb ( 255,   0,   0, _alpha ),      // Red
                                new Rgb (   0,   0,   0, _alpha ),      // Black
                            ]

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( _center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions = _group.template.transitions.bloom ( _group.circles, _timing, _period, false );


                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions shape implicit
                    {
                        title:   'shape implicit',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 2;

                            let _seed       = null;

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 50;

                            let _strokes    = new Rgb ( 0, 0, 0, 0.3 );

                            let _fills      = new Rgb ( 0, 0, 0, 0 );

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( canvaslab.center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.shape ( _seed, _group.circles, _timing, _period, Circle );

                            canvaslab.animate ( _transitions );
                        }
                    },
                    // transitions shape explicit
                    {
                        title:   'shape explicit',
                        text:    'blah... blah... blah...',
                        children: [ 'circle', 'fill', 'stroke', 'rgb' ],
                        code: ( ) =>
                        {
                            ////    INPUT    ///////////////////////////////

                            let _center     = canvaslab.center;

                            let _iterations = 5;

                            let _seed       = [ 37, 39, 59, 9, 0, 17, 11, 15, 13, 49 ];

                            let _timing     = 'easeInSine';

                            let _period     = 3500;

                            let _radius     = 15;

                            let _strokes    = new Rgb ( 0, 0, 0, 0.3 );

                            let _fills      = new Rgb ( 0, 0, 0, 0 );

                            let _degrees    = undefined;

                            ////    DEFINE    //////////////////////////////

                            let _group          = new Group;

                                _group.canvas   = 'canvas';

                                _group.template = new SacredCircles ( canvaslab.center, _radius, _iterations, _strokes, _fills, _degrees, new myTransitions );

                            ////    ANIMATION    ///////////////////////////

                            let _transitions    = _group.template.transitions.shape ( _seed, _group.circles, _timing, _period, Circle );


                            canvaslab.animate ( _transitions );
                        }
                    },
                ]
            }
        }
    }

    /**
     * Object of lab scripts
     * @type {Object.<Object<Function>>}
     * @example { <title>: <Function> }
     */
    let _scripts =
    {
        // // 6:2
        // fountainOfRegeneratingObjects: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse = { x: 0, y: 0 }

        //         window.addEventListener ( 'mousemove', function ( )
        //         {
        //             _mouse.x = event.clientX;

        //             _mouse.y = event.clientY;
        //         } );

        //     ////    OBJECTS    /////////////////////////////

        //         let _circles  = new Array;

        //     ////    SET DEFAULTS    ////////////////////////

        //         ////    BALLS    ///////////////////////

        //             let _numBalls = 80;

        //             let _gravity  = 0.5;

        //         ////    EASING    //////////////////////

        //             let _easing  = 0.05;

        //             let _targetY = _canvas.height;

        //     ////    POPULATION    //////////////////////////

        //         for ( let _circle, _i = 0; _i < _numBalls; _i++ )
        //         {
        //             let _radius = utils.getRandomNumber ( 10 );


        //             _circle = new Circle;

        //             _circle.canvas = 'canvas';

        //             _circle.radius = _radius;


        //             _circle.x = _canvas.width / 2;

        //             _circle.y = _canvas.height;


        //             _circle.velocity.x = Math.random ( ) * 2 - 1;

        //             _circle.velocity.y = Math.random ( ) * -10 - 10;


        //             _circles.push ( _circle );
        //         }

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _drawCircle ( circle )
        //         {
        //             circle.velocity.y += _gravity;


        //             circle.x += circle.velocity.x;

        //             circle.y += circle.velocity.y;


        //             if ( circle.x - circle.radius > canvas.width  || circle.x + circle.radius < 0 ||

        //                  circle.y - circle.radius > canvas.height || circle.y + circle.radius < 0 )
        //             {
        //                 circle.x = _mouse.x;

        //                 circle.y = _mouse.y;


        //                 circle.velocity.x = Math.random ( ) * 2 - 1;

        //                 circle.velocity.y = Math.random ( ) * -10 - 10;
        //             }


        //             circle.draw ( );
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //              window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    DRAW    ////////////////////////

        //                 _circles.forEach ( _drawCircle );
        //         }


        //         _drawFrame ( );
        // },
        // // 6:8
        // spaceshipSimulationWithFrictionApplied: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //         let _screen  = { left: 0, right: _canvas.width, top: 0, bottom: _canvas.height }

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         window.addEventListener ( 'keydown', function ( event )
        //         {
        //             switch ( event.keyCode )
        //             {
        //                 case 37:    _velocity.rotational = -3;                      break;  // left
        //                 case 39:    _velocity.rotational =  3;                      break;  // right
        //                 case 38:    [ _thrust, _ship.flame ] = [ 0.05, true ];      break;  // up
        //             }
        //         } );

        //         window.addEventListener ( 'keyup', function ( )
        //         {
        //             _velocity.rotational = 0;
        //             _thrust             = 0;
        //             _ship.flame         = false;
        //         } );

        //     ////    OBJECTS    /////////////////////////////

        //         let _ship = new Ship;


        //             _ship.canvas = 'canvas';


        //             _ship.x = canvas.width  / 2;

        //             _ship.y = canvas.height / 2;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _velocity = new Point;


        //             _velocity.x = 0;

        //             _velocity.y = 0;


        //             _velocity.rotational = 0

        //         // let _velocityRotational = 0;

        //         // let _velocityX          = 0;

        //         // let _velocityY          = 0;

        //         let _thrust             = 0;

        //         let _friction           = 0.97;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _ship.position.rotation += _velocity.rotational * Math.PI / 180;


        //                 let _angle = _ship.position.rotation;       // in radians


        //                 let _acceleration = new Point;


        //                     _acceleration.x = Math.cos ( _angle ) * _thrust;

        //                     _acceleration.y = Math.sin ( _angle ) * _thrust;


        //                 _velocity.x += _acceleration.x;

        //                 _velocity.y += _acceleration.y;


        //                 _velocity.x *= _friction;

        //                 _velocity.y *= _friction;


        //                 _ship.x += _velocity.x;

        //                 _ship.y += _velocity.y;

        //             ////    SCREEN WRAPPING    /////////////

        //                 if ( _ship.x - _ship.width  / 2 > _screen.right )

        //                     _ship.x = _screen.left   - _ship.width  / 2;


        //                 if ( _ship.x + _ship.width  / 2 < _screen.left )

        //                     _ship.x = _screen.right  + _ship.width  / 2;


        //                 if ( _ship.y - _ship.height / 2 > _screen.bottom )

        //                     _ship.y = _screen.top    - _ship.height / 2;


        //                 if ( _ship.y < _screen.top - _ship.height / 2 )

        //                     _ship.y = _screen.bottom + _ship.height / 2;

        //             ////    DRAW    ////////////////////////

        //                 _ship.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 7:6
        // throwingAnObject: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //         let _screen  = { left: 0, right: _canvas.width, top: 0, bottom: _canvas.height }

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _circle  = new Circle;

        //             _circle.x = canvas.width  / 2;

        //             _circle.y = canvas.height / 2;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _velocity = new Point;

        //             _velocity.x = Math.random() * 10 - 5;

        //             _velocity.y = -10;


        //         let _bounce    = -0.7;

        //         let _gravity   = 0.2;


        //         let _isMouseDown = false;


        //         let _prior = new Point;

        //     ////    INPUT    ///////////////////////////////

        //         _canvas.addEventListener ( 'mousedown', function ( )
        //         {
        //             if ( utils.containsPoint ( _circle.bounds, _mouse.x, _mouse.y ) )
        //             {
        //                 _isMouseDown = true;


        //                 [ _prior.x, _prior.y ] = [ _circle.x, _circle.y ];


        //                 _canvas.addEventListener ( 'mouseup',   _onMouseUp   );

        //                 _canvas.addEventListener ( 'mousemove', _onMouseMove );
        //             }
        //         } );

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _onMouseUp ( )
        //         {
        //             _isMouseDown = false;


        //             _canvas.removeEventListener ( 'mouseup',   _onMouseUp   );

        //             _canvas.removeEventListener ( 'mousemove', _onMouseMove );
        //         }

        //         function _onMouseMove ( event )
        //         {
        //             [ _circle.x, _circle.y ] = [ _mouse.x, _mouse.y ];
        //         }

        //         function _trackVelocity ( )
        //         {
        //             [ _velocity.x, _velocity.y ] = [ _circle.x - _prior.x, _circle.y - _prior.y ];

        //             [ _prior.x,    _prior.y    ] = [ _circle.x,            _circle.y            ];
        //         }

        //         function _checkBoundaries ( )
        //         {
        //             _velocity.y += _gravity;


        //             _circle.x += _velocity.x;

        //             _circle.y += _velocity.y;


        //             // BOUNDARY DETECT AND BOUNCE
        //             if ( _circle.x + _circle.radius > _screen.right )
        //             {
        //                 _circle.x   = _screen.right - _circle.radius;

        //                 _velocity.x *= _bounce;
        //             }

        //             if ( _circle.x - _circle.radius < _screen.left )
        //             {
        //                 _circle.x   = _screen.left + _circle.radius;

        //                 _velocity.x *= _bounce;
        //             }

        //             if ( _circle.y + _circle.radius > _screen.bottom )
        //             {
        //                 _circle.y   = _screen.bottom - _circle.radius;

        //                 _velocity.y *= _bounce;
        //             }

        //             if ( _circle.y - _circle.radius < _screen.top )
        //             {
        //                 _circle.y   = _screen.top + _circle.radius;

        //                 _velocity.y *= _bounce;
        //             }
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 ( _isMouseDown ) ? _trackVelocity ( )

        //                                  : _checkBoundaries ( );


        //             ////    DRAW    ////////////////////////

        //                 _circle.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // 8:2
        draggingAndEasing: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.canvas = 'canvas';

            ////    SET DEFAULTS    ////////////////////////

                let _easing = 0.05;


                let _isMouseDown = false;


                let _target = new Point;

                    _target.x = _canvas.width  / 2;

                    _target.y = _canvas.height / 2;


                let _velocity = new Point;

            ////    INPUT    ///////////////////////////////

                _canvas.addEventListener ( 'mousedown', function ( )
                {
                    if ( utils.containsPoint ( _circle.bounds, _mouse.x, _mouse.y ) )
                    {
                        _isMouseDown = true;


                        _canvas.addEventListener ( 'mouseup',   _onMouseUp   );

                        _canvas.addEventListener ( 'mousemove', _onMouseMove );
                    }
                } );

            ////    FUNCTIONS    ///////////////////////////

                function _onMouseUp ( )
                {
                    _isMouseDown = false;

                    _canvas.removeEventListener ( 'mouseup',   _onMouseUp   );

                    _canvas.removeEventListener ( 'mousemove', _onMouseMove );
                }

                function _onMouseMove ( )
                {
                    [ _circle.x, _circle.y ] = [ _mouse.x, _mouse.y ];
                }

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        if ( ! _isMouseDown )
                        {
                            _velocity.x = ( _target.x - _circle.x ) * _easing;

                            _velocity.y = ( _target.y - _circle.y ) * _easing;


                            _circle.x += _velocity.x;

                            _circle.y += _velocity.y;
                        }

                    ////    DRAW    ////////////////////////

                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 8:3
        simpleEasingWithEnd: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

                let _animRequest = undefined;

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.canvas = 'canvas';

                    _circle.fill.color = new Rgb ( 255, 255, 255 );

                    _circle.x = _canvas.width  / 2;

                    _circle.y = _canvas.height / 2;

                ////    OPTIONS    /////////////////////

                    _circle.options.axis        = true;

                    _circle.options.coordinates = true;

                    _circle.options.shadow      = true;

                    _circle.options.border      = true;

            ////    SET DEFAULTS    ////////////////////////

                let _easing  = 0.05;

                let _targetY = ( _canvas.height / 2 ) - 60;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    _animRequest = window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        let _distance = _targetY - _circle.y;


                        if ( Math.abs ( _distance ) < 1 )
                        {
                            _circle.y = _targetY;
                            /* ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec.
                            * See utils.js for the update to check for cross-browser compatibility.
                            */

                            window.cancelAnimationFrame ( _animRequest );

                            // log.value = "Animation done!";
                        }
                        else
                        {
                            let _velocityY = _distance.y * _easing;


                            _circle.y += _velocityY;
                        }

                    ////    DRAW    ////////////////////////

                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 8:4
        easeToAMovingTarget: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.canvas = 'canvas';

            ////    SET DEFAULTS    ////////////////////////

                let _easing = 0.05;

                let _velocity = new Point;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ()
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _velocity.x = ( _mouse.x - _circle.x ) * _easing;

                        _velocity.y = ( _mouse.y - _circle.y ) * _easing;


                        _circle.x += _velocity.x;

                        _circle.y += _velocity.y;

                    ////    DRAW    ////////////////////////

                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 8:6
        springingToAMovingTarget: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle   = new Circle;

                    _circle.canvas = 'canvas';

            ////    SET DEFAULTS    ////////////////////////

                let _spring   = 0.03;

                let _friction = 0.95;


                let _velocity     = new Point;

                let _distance     = new Point;

                let _acceleration = new Point;

            ////    DRAW    ////////////////////////////////

            function _drawFrame ( )
            {
                window.requestAnimationFrame ( _drawFrame, _canvas );

                ////    LOOP DATA    ///////////////////

                    _timeCurrent = LAB.getFps ( _timeCurrent );

                ////    CLEAR SCREEN    ////////////////

                    _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                ////    TRANSITIONS    /////////////////

                    _distance.x = _mouse.x - _circle.x;

                    _distance.y = _mouse.y - _circle.y;


                    _acceleration.x = _distance.x * _spring;

                    _acceleration.y = _distance.y * _spring;


                    _velocity.x += _acceleration.x;

                    _velocity.y += _acceleration.y;


                    _velocity.x *= _friction;

                    _velocity.y *= _friction;


                    _circle.x += _velocity.x;

                    _circle.y += _velocity.y;

                ////    DRAW    ////////////////////////

                    _circle.draw ( );
            }


            _drawFrame ( );
        },
        // 8:9
        addGravityAndDrawSpring: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle  = new Circle;

                    _circle.canvas = 'canvas';

            ////    SET DEFAULTS    ////////////////////////

                let _spring   = 0.03;

                let _friction = 0.9;

                let _gravity  = 2;


                let _velocity     = new Point;

                let _distance     = new Point;

                let _acceleration = new Point;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _distance.x = _mouse.x - _circle.x;

                        _distance.y = _mouse.y - _circle.y;


                        _acceleration.x = _distance.x * _spring;

                        _acceleration.y = _distance.y * _spring;


                        _velocity.x += _acceleration.x;

                        _velocity.y += _acceleration.y;


                        _velocity.y += _gravity;

                        _velocity.x *= _friction;


                        _velocity.y *= _friction;


                        _circle.x += _velocity.x;

                        _circle.y += _velocity.y;

                    ////    DRAW    ////////////////////////

                        _context.beginPath ( );


                        _context.moveTo ( _circle.x, _circle.y );

                        _context.lineTo ( _mouse.x,  _mouse.y  );


                        _context.stroke ( );


                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 8:10
        chainingMultipleSprings: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

            ////    OBJECTS    /////////////////////////////

                let _circle0 = new Circle;

                let _circle1 = new Circle;

                let _circle2 = new Circle;


                    _circle0.canvas = 'canvas';

                    _circle1.canvas = 'canvas';

                    _circle2.canvas = 'canvas';

            ////    SET DEFAULTS    ////////////////////////

                let _mouse    = utils.captureMouse ( _canvas );

                let _spring   = 0.03;

                let _friction = 0.9;

                let _gravity  = 2;

            ////    FUNCTIONS    ///////////////////////////

                function _move ( circle, targetX, targetY )
                {
                    circle.velocity.x += ( targetX - circle.x ) * _spring;

                    circle.velocity.y += ( targetY - circle.y ) * _spring;


                    circle.velocity.y += _gravity;

                    circle.velocity.x *= _friction;

                    circle.velocity.y *= _friction;


                    circle.x  += circle.velocity.x;

                    circle.y  += circle.velocity.y;
                }

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _move ( _circle0, _mouse.x, _mouse.y );

                        _move ( _circle1, _circle0.x, _circle0.y );

                        _move ( _circle2, _circle1.x, _circle1.y );

                    ////    DRAW    ////////////////////////

                        ////    SPRING    //////////////

                            _context.beginPath ( );


                            _context.moveTo ( _mouse.x, _mouse.y );

                            _context.lineTo ( _circle0.x, _circle0.y );

                            _context.lineTo ( _circle1.x, _circle1.y );

                            _context.lineTo ( _circle2.x, _circle2.y );


                            _context.stroke ( );

                        ////    BALLS    ///////////////

                            _circle0.draw ( );

                            _circle1.draw ( );

                            _circle2.draw ( );
                }


                _drawFrame ( );
        },
        // 8:12
        springingToMultipleTargets: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle  = new Circle;

                let _handles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _amount   = 3;


                let _spring   = 0.03;

                let _friction = 0.9;


                let _movingHandle = undefined;

            ////    POPULATION    //////////////////////////

                for ( let _handle, _i = 0; _i < _amount; _i++ )
                {
                    _handle = new Circle;


                    _handle.x = Math.random ( ) * _canvas.width;

                    _handle.y = Math.random ( ) * _canvas.height;


                    _handles.push ( _handle );
                }

            ////    INPUT    ///////////////////////////////

                _canvas.addEventListener ( 'mousedown', function ( )
                {
                    _handles.forEach ( function ( handle )
                    {
                        if ( utils.containsPoint ( handle.bounds, _mouse.x, _mouse.y ) )

                            _movingHandle = handle;
                    } );
                } );

                _canvas.addEventListener ( 'mouseup', function ( )
                {
                    if ( _movingHandle )

                        _movingHandle = null;
                } );

                _canvas.addEventListener ( 'mousemove', function ( )
                {
                    if ( _movingHandle )

                        [ _movingHandle.x, _movingHandle.y ] = [ _mouse.x, _mouse.y ];
                } );

            ////    FUNCTIONS    ///////////////////////////

                function _applyHandle ( handle )
                {
                    let _distance = new Point;


                        _distance.x = handle.x - _circle.x;

                        _distance.y = handle.y - _circle.y;


                    _circle.velocity.x += _distance.x * _spring;

                    _circle.velocity.y += _distance.y * _spring;
                }

                function _drawHandle ( handle )
                {
                    _context.moveTo ( _circle.x, _circle.y );

                    _context.lineTo ( handle.x, handle.y );

                    _context.stroke ( );


                    handle.draw ( );
                }

            ////    DRAW    //////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _handles.forEach ( _applyHandle );


                        _circle.velocity.x *= _friction;

                        _circle.velocity.y *= _friction;


                        _circle.x += _circle.velocity.x;

                        _circle.y += _circle.velocity.y;


                        _context.beginPath ( );

                    ////    DRAW    ////////////////////////

                        _handles.forEach ( _drawHandle );

                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 8:13
        offsetTheSpringTarget: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle  = new Circle;

                    _circle.canvas = 'canvas';

            ////    SET DEFAULTS    ////////////////////////

                let _spring       = 0.03;

                let _friction     = 0.9;

                let _springLength = 100;


                let _velocity = new Point;

                let _distance = new Point;

                let _target   = new Point;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _distance.x = _circle.x - _mouse.x;

                        _distance.y = _circle.y - _mouse.y;


                        let _angle = Math.atan2 ( _distance.y, _distance.x );


                        _target.x = _mouse.x + Math.cos ( _angle ) * _springLength;

                        _target.y = _mouse.y + Math.sin ( _angle ) * _springLength;


                        _velocity.x += ( _target.x - _circle.x ) * _spring;

                        _velocity.y += ( _target.y - _circle.y ) * _spring;


                        _velocity.x *= _friction;

                        _velocity.y *= _friction;


                        _circle.x += _velocity.x;

                        _circle.y += _velocity.y;

                    ////    DRAW    ////////////////////////

                        _context.beginPath ( );


                        _context.moveTo ( _circle.x, _circle.y );

                        _context.lineTo ( _mouse.x, _mouse.y );


                        _context.stroke ( );


                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 8:14
        twoObjectsConnectedByASpring: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle0 = new Circle;

                    _circle0.canvas = 'canvas';

                    _circle0.x = Math.random ( ) * _canvas.width;

                    _circle0.y = Math.random ( ) * _canvas.height;

                let _circle1 = new Circle;

                    _circle1.canvas = 'canvas';

                    _circle1.x = Math.random ( ) * _canvas.width;

                    _circle1.y = Math.random ( ) * _canvas.height;

            ////    SET DEFAULTS    ////////////////////////

                let _circle0_dragging = false;

                let _circle1_dragging = false;


                let _spring   = 0.03;

                let _friction = 0.9;


                let _springLength = 100;


                let _velocity = new Point;

                let _distance = new Point;

                let _target   = new Point;

            ////    INPUT    ///////////////////////////////

                _canvas.addEventListener ( 'mousedown', function ( )
                {
                    if ( utils.containsPoint ( _circle0.bounds, _mouse.x, _mouse.y ) )

                        _circle0_dragging = true;


                    if ( utils.containsPoint ( _circle1.bounds, _mouse.x, _mouse.y ) )

                        _circle1_dragging = true;
                } );

                _canvas.addEventListener ( 'mouseup', function ( )
                {
                    if ( _circle0_dragging || _circle1_dragging )

                        _circle0_dragging = _circle1_dragging = false;
                } );

                _canvas.addEventListener ( 'mousemove', function ( )
                {
                    if ( _circle0_dragging )

                        [ _circle0.x, _circle0.y ] = [ _mouse.x, _mouse.y ];


                    if ( _circle1_dragging )

                        [ _circle1.x, _circle1.y ] = [ _mouse.x, _mouse.y ];
                } );

            ////    FUNCTIONS    ///////////////////////////

                function _springTo ( circleA, circleB )
                {
                    _distance.x = circleB.x - circleA.x;

                    _distance.y = circleB.y - circleA.y;


                    let _angle = Math.atan2 ( _distance.y, _distance.x );


                    _target.x = circleB.x - Math.cos ( _angle ) * _springLength;

                    _target.y = circleB.y - Math.sin ( _angle ) * _springLength;


                    circleA.velocity.x += ( _target.x - circleA.x ) * _spring;

                    circleA.velocity.y += ( _target.y - circleA.y ) * _spring;


                    circleA.velocity.x *= _friction;

                    circleA.velocity.y *= _friction;


                    circleA.x += circleA.velocity.x;

                    circleA.y += circleA.velocity.y;
                }

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        if ( ! _circle0_dragging )

                            _springTo ( _circle0, _circle1 );


                        if ( ! _circle1_dragging )

                            _springTo ( _circle1, _circle0 );

                    ////    DRAW    ////////////////////////

                        _context.beginPath ( );

                        _context.moveTo ( _circle0.x, _circle0.y );
                        _context.lineTo ( _circle1.x, _circle1.y );

                        _context.stroke ( );


                        _circle0.draw ( );

                        _circle1.draw ( );
                }


                _drawFrame ( );
        },
        // 8:15
        threeObjectsConnectedByASpring: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle0 = new Circle;

                    _circle0.x = Math.random ( ) * _canvas.width;

                    _circle0.y = Math.random ( ) * _canvas.height;

                let _circle1 = new Circle;

                    _circle1.x = Math.random ( ) * _canvas.width;

                    _circle1.y = Math.random ( ) * _canvas.height;

                let _circle2 = new Circle;

                    _circle2.x = Math.random ( ) * _canvas.width;

                    _circle2.y = Math.random ( ) * _canvas.height;

            ////    SET DEFAULTS    ////////////////////////

                let _circle0_dragging = false;

                let _circle1_dragging = false;

                let _circle2_dragging = false;


                let _spring       = 0.03;

                let _friction     = 0.9;

                let _springLength = 100;


                let _velocity = new Point;

                let _distance = new Point;

                let _target   = new Point;

            ////    INPUT    ///////////////////////////////

                _canvas.addEventListener ( 'mousedown', function ( )
                {
                    if ( utils.containsPoint ( _circle0.bounds, _mouse.x, _mouse.y ) )
                    {
                        _circle0_dragging = true;
                    }

                    if ( utils.containsPoint ( _circle1.bounds, _mouse.x, _mouse.y ) )
                    {
                        _circle1_dragging = true;
                    }

                    if ( utils.containsPoint ( _circle2.bounds, _mouse.x, _mouse.y ) )
                    {
                        _circle2_dragging = true;
                    }
                } );

                _canvas.addEventListener ( 'mouseup', function ( )
                {
                    if ( _circle0_dragging || _circle1_dragging || _circle2_dragging )
                    {
                        _circle0_dragging = false;
                        _circle1_dragging = false;
                        _circle2_dragging = false;
                    }
                } );

                _canvas.addEventListener ( 'mousemove', function ( )
                {
                    if ( _circle0_dragging )
                    {
                        _circle0.x = _mouse.x;
                        _circle0.y = _mouse.y;
                    }

                    if ( _circle1_dragging )
                    {
                        _circle1.x = _mouse.x;
                        _circle1.y = _mouse.y;
                    }

                    if ( _circle2_dragging )
                    {
                        _circle2.x = _mouse.x;
                        _circle2.y = _mouse.y;
                    }
                } );

            ////    FUNCTIONS    ///////////////////////////

                function _springTo ( circleA, circleB )
                {
                    _distance.x = circleB.x - circleA.x;

                    _distance.y = circleB.y - circleA.y;


                    let _angle = Math.atan2 ( _distance.y, _distance.x );


                    _target.x = circleB.x - Math.cos ( _angle ) * _springLength;

                    _target.y = circleB.y - Math.sin ( _angle ) * _springLength;


                    circleA.velocity.x += ( _target.x - circleA.x ) * _spring;

                    circleA.velocity.y += ( _target.y - circleA.y ) * _spring;


                    circleA.velocity.x *= _friction;

                    circleA.velocity.y *= _friction;


                    circleA.x += circleA.velocity.x;

                    circleA.y += circleA.velocity.y;
                }

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        if ( ! _circle0_dragging )
                        {
                            _springTo ( _circle0, _circle1 );
                            _springTo ( _circle0, _circle2 );
                        }

                        if ( ! _circle1_dragging )
                        {
                            _springTo ( _circle1, _circle0 );
                            _springTo ( _circle1, _circle2 );
                        }

                        if ( ! _circle2_dragging )
                        {
                            _springTo ( _circle2, _circle0 );
                            _springTo ( _circle2, _circle1 );
                        }

                    ////    DRAW    ////////////////////////

                        _context.beginPath ( );

                        _context.moveTo ( _circle0.x, _circle0.y );
                        _context.lineTo ( _circle1.x, _circle1.y );
                        _context.lineTo ( _circle2.x, _circle2.y );
                        _context.lineTo ( _circle0.x, _circle0.y );

                        _context.stroke ( );


                        _circle0.draw ( );

                        _circle1.draw ( );

                        _circle2.draw ( );
                }


                _drawFrame ( );
        },
        // // 9:2
        // stackingBoxes: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //     ////    OBJECTS    /////////////////////////////

        //         let _rectangles = new Array;

        //         let _activeRectangle = _createRectangle ( );

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _gravity   = 0.2;

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _createRectangle ( )
        //         {
        //             let _rectangle = new Rectangle;

        //                 _rectangle.canvas = 'canvas';

        //                 _rectangle.x      = Math.random ( ) * _canvas.width;


        //             _rectangles.push ( _rectangle );


        //             return _rectangle;
        //         }

        //         function _drawRectangle ( rectangle )
        //         {
        //             if ( _activeRectangle !== rectangle && utils.intersects ( _activeRectangle, rectangle ) )
        //             {
        //                 _activeRectangle.y = rectangle.y - _activeRectangle.height;

        //                 _activeRectangle   = _createRectangle ( );
        //             }


        //             rectangle.draw ( );
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _activeRectangle.velocity.y += _gravity;

        //                 _activeRectangle.y          += _activeRectangle.velocity.y;


        //                 if ( _activeRectangle.y + _activeRectangle.height > _canvas.height )
        //                 {
        //                     _activeRectangle.y = _canvas.height - _activeRectangle.height;

        //                     _activeRectangle   = _createRectangle ( );
        //                 }

        //             ////    DRAW    ////////////////////////

        //                 _rectangles.forEach ( _drawRectangle );
        //         }


        //         _drawFrame ( );
        // },
        // // 9:3
        // hitTestingAPointAndABoundingBox: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse = utils.captureMouse ( _canvas );

        //             _canvas.addEventListener ( 'mousemove', function ( )
        //             {
        //                 if ( utils.containsPoint ( _circle.bounds, _mouse.x, _mouse.y ) )
        //                 {
        //                   console.log ( "Hit!" )
        //                 }
        //             } );

        //     ////    OBJECTS    /////////////////////////////

        //         let _circle   = new Circle;

        //             _circle.canvas = 'canvas';

        //             _circle.x = canvas.width  / 2;

        //             _circle.y = canvas.height / 2;

        //     ////    DRAW    ////////////////////////////////

        //         _circle.draw ( );
        // },
        // 9:5
        distanceBasedCollisionDetectionWithArbitrarySize: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse = utils.captureMouse ( _canvas );

                    _canvas.addEventListener ( 'mousemove', _drawFrame, false );

            ////    OBJECTS    /////////////////////////////

                let _circleA = new Circle;

                    _circleA.canvas = 'canvas';

                    _circleA.radius = Math.random ( ) * 100;

                    _circleA.x      = canvas.width  / 2;

                    _circleA.y      = canvas.height / 2;


                let _circleB   = new Circle ( _context, Math.random ( ) * 100 );

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _circleB.x = _mouse.x;

                        _circleB.y = _mouse.y;


                        let _distance = new Point;


                        _distance.x = _circleB.x - _circleA.x;

                        _distance.y = _circleB.y - _circleA.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                        if ( _distance.total < _circleA.radius + _circleB.radius )
                        {
                            console.log ( "Hit!" );
                        }

                    ////    DRAW    ////////////////////////

                        _circleA.draw ( );

                        _circleB.draw ( );
                }


                _drawFrame ( );
        },
        // 9:8
        optimizedMultipleObjectCollisionDetectionAndSpringing: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _circles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _amount  = 10;

                let _bounce  = -0.5;

                let _spring  = 0.015;

                let _gravity = 0.1;


                let _velocity     = new Point;

                let _target       = new Point;

                let _acceleration = new Point;


            ////    POPULATION    //////////////////////////

                for ( let _circle, _i = 0; _i < _amount; _i++ )
                {
                    _circle = new Circle;


                    _circle.radius = Math.random ( ) * 30 + 20;


                    _circle.x = Math.random ( ) * _canvas.width / 2;

                    _circle.y = Math.random ( ) * _canvas.height / 2;


                    _circle.velocity.x = Math.random ( ) * 6 - 3;

                    _circle.velocity.y = Math.random ( ) * 6 - 3;


                    _circles.push ( _circle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _checkCollision ( circleA, iter )
                {
                    for ( let _circleB, _distanceX, _distanceY, _distance, _min_distance, _j = iter + 1; _j < _amount; _j++ )
                    {
                        _circleB = _circles [ _j ];


                        _distanceX = _circleB.x - circleA.x;

                        _distanceY = _circleB.y - circleA.y;


                        let _distance = Math.sqrt ( _distanceX * _distanceX + _distanceY * _distanceY );


                        _min_distance = circleA.radius + _circleB.radius;


                        if ( _distance < _min_distance )
                        {
                            _target.x = circleA.x + _distanceX / _distance * _min_distance;

                            _target.y = circleA.y + _distanceY / _distance * _min_distance;


                            _acceleration.x = (_target.x - _circleB.x) * _spring;

                            _acceleration.y = (_target.y - _circleB.y) * _spring;


                            circleA.velocity.x -= _acceleration.x;

                            circleA.velocity.y -= _acceleration.y;


                            _circleB.velocity.x += _acceleration.x;

                            _circleB.velocity.y += _acceleration.y;
                        }
                    }
                }

                function _move ( circle )
                {
                    circle.velocity.y += _gravity;


                    circle.x += circle.velocity.x;

                    circle.y += circle.velocity.y;


                    if ( circle.x + circle.radius > _canvas.width )
                    {
                        circle.x = _canvas.width - circle.radius;

                        circle.velocity.x *= _bounce;
                    }


                    if ( circle.x - circle.radius < 0 )
                    {
                        circle.x = circle.radius;

                        circle.velocity.x *= _bounce;
                    }


                    if ( circle.y + circle.radius > _canvas.height )
                    {
                        circle.y = _canvas.height - circle.radius;

                        circle.velocity.y *= _bounce;
                    }


                    if ( circle.y - circle.radius < 0 )
                    {
                        circle.y = circle.radius;

                        circle.velocity.y *= _bounce;
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( circle )
                {
                    circle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    DRAW    ////////////////////////

                        _circles.forEach ( _checkCollision );

                        _circles.forEach ( _move );

                        _circles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // 10:2
        rotatingAroundAPointUsingAdvancedCoordinateRotation: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.canvas = 'canvas';

                    _circle.x = Math.random ( ) * _canvas.width;

                    _circle.y = Math.random ( ) * _canvas.height;

            ////    SET DEFAULTS    ////////////////////////

                let _velocityRotation = 0.05;


                let _cos     = Math.cos ( _velocityRotation );

                let _sin     = Math.sin ( _velocityRotation );


                let _centerX = _canvas.width  / 2;

                let _centerY = _canvas.height / 2;

            ////    DRAW    ////////////////////////////////

                function _drawFrmae ( )
                {
                    window.requestAnimationFrame ( _drawFrmae, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        let _x1 = _circle.x - _centerX;

                        let _y1 = _circle.y - _centerY;


                        let _x2 = _cos * _x1 - _sin * _y1;

                        let _y2 = _cos * _y1 + _sin * _x1;


                        _circle.x = _centerX + _x2;

                        _circle.y = _centerY + _y2;

                    ////    DRAW    ////////////////////////

                        _circle.draw ( );
                }


                _drawFrmae ( );
        },
        // 10:3
        rotatingMultipleObjects: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

            ////    INPUT    ///////////////////////////////

                let _mouse = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _numCircles = 10;


                let _centerX = _canvas.width  / 2;

                let _centerY = _canvas.height / 2;


                let _cos = undefined;   //accessible by move and drawFrame

                let _sin = undefined;   //accessible by move and drawFrame

            ////    POPULATION    //////////////////////////

                for ( let _circle, _i = 0; _i < _numCircles; _i++ )
                {
                    _circle   = new Circle ( _context );

                    _circle.x = Math.random ( ) * _canvas.width;

                    _circle.y = Math.random ( ) * _canvas.height;


                    _circles.push ( _circle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _move ( circle )
                {
                    let _x1 = circle.x - _centerX;

                    let _y1 = circle.y - _centerY;


                    let _x2 = _cos * _x1 - _sin * _y1;

                    let _y2 = _cos * _y1 + _sin * _x1;


                    circle.x = _centerX + _x2;

                    circle.y = _centerY + _y2;
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( circle )
                {
                    circle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        let _angle = ( _mouse.x - _centerX ) * 0.0005;


                        _cos = Math.cos ( _angle );

                        _sin = Math.sin ( _angle );

                    ////    DRAW    ////////////////////////

                        _circles.forEach ( _move );

                        _circles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // 10:5
        optimizedBouncingOffAnAngle: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.canvas = 'canvas';

                    _circle.x = 100;

                    _circle.y = 100;


                let _line = new Line ( { x: 0, y: 0 }, { x: _canvas.width, y: 0 } );

                    _line.canvas = 'canvas';

                    _line.x = 0;

                    _line.y = 200;

            ////    SET DEFAULTS    ////////////////////////

                let _rotate = 10;

                    _line.position.rotation = _rotate * Math.PI / 180;


                let _cos = Math.cos ( _line.position.rotation );

                let _sin = Math.sin ( _line.position.rotation );


                let _gravity = 0.2;

                let _bounce  = -0.6;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        /** NORMAL MOTION CODE **/
                        _circle.velocity.y += _gravity;

                        _circle.x          += _circle.velocity.x;

                        _circle.y          += _circle.velocity.y;


                        /** GET POSITION OF _CIRCLE, RELATIVE TO LINE **/
                        let _x1 = _circle.x - _line.x;

                        let _y1 = _circle.y - _line.y;


                        /** ROTATE COORDINATES **/
                        let _y2 = _cos * _y1 - _sin * _x1;


                        /** PERFORM BOUNCE WITH ROTATED VALUES **/
                        if ( _y2 > - _circle.radius )
                        {
                            /** ROTATE COORDINATES **/
                            let _x2 = _cos * _x1 + _sin * _y1;


                            /** ROTATE VELOCITY **/
                            let _vx1 = _cos * _circle.velocity.x + _sin * _circle.velocity.y;

                            let _vy1 = _cos * _circle.velocity.y - _sin * _circle.velocity.x;


                            _y2   = - _circle.radius;

                            _vy1 *= _bounce;


                            /** ROTATE EVERYTHING BACK **/
                            _x1 = _cos * _x2 - _sin * _y2;

                            _y1 = _cos * _y2 + _sin * _x2;


                            _circle.velocity.x = _cos * _vx1 - _sin * _vy1;

                            _circle.velocity.y = _cos * _vy1 + _sin * _vx1;


                            _circle.x = _line.x + _x1;

                            _circle.y = _line.y + _y1;
                        }

                    ////    DRAW    ////////////////////////

                        _circle.draw ( );

                        _line.draw ( );
                }


                _drawFrame ( );
        },
        // 10:8
        bouncingOffAngleAndCheckBoundingBox: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.x = 100;

                    _circle.y = 100;


                let _line = new Line ( new Point ( 0, 0 ), new Point ( 300, 0 ) );

                    _line.x = 50;

                    _line.y = 200;

            ////    SET DEFAULTS    ////////////////////////

                let _gravity = 0.2;

                let _bounce  = -0.6;


                let _start    = new Point;

                let _end      = new Point;

                let _velocity = new Point;

            ////    DRAW    ////////////////////////////////

            function _drawFrame ( )
            {
                window.requestAnimationFrame ( _drawFrame, _canvas );

                ////    LOOP DATA    ///////////////////

                    _timeCurrent = LAB.getFps ( _timeCurrent );

                ////    CLEAR SCREEN    ////////////////

                    _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                ////    TRANSITIONS    /////////////////

                    let _bounds = _line.bounds;


                    // MOVE _LINE WITH MOUSE
                    _line.position.rotation = ( ( _canvas.width / 2 - _mouse.x ) * 0.1 ) * Math.PI / 180;

                    // NORMAL MOTION CODE
                    _circle.velocity.y += _gravity;


                    _circle.x += _circle.velocity.x;

                    _circle.y += _circle.velocity.y;


                    if ( _circle.x + _circle.radius > _bounds.x && _circle.x - _circle.radius < _bounds.x + _bounds.width )
                    {
                        // GET ANGLE, SINE, AND COSINE
                        let _cos = Math.cos ( _line.position.rotation );

                        let _sin = Math.sin ( _line.position.rotation );


                        // GET POSITION OF _CIRCLE, RELATIVE TO _LINE
                        _start.x = _circle.x - _line.x;

                        _start.y = _circle.y - _line.y;


                        // ROTATE COORDINATES
                        _end.y = _cos * _start.y - _sin * _start.x;


                        // PERFORM BOUNCE WITH ROTATED VALUES
                        if ( _end.y > - _circle.radius )
                        {
                            // ROTATE COORDINATES
                            _end.x = _cos * _start.x + _sin * _start.y;

                            // ROTATE VELOCITY
                            _velocity.x = _cos * _circle.velocity.x + _sin * _circle.velocity.y;

                            _velocity.y = _cos * _circle.velocity.y - _sin * _circle.velocity.x;


                            _end.y = - _circle.radius;


                            _velocity.y   *= _bounce;

                            // ROTATE EVERYTHING BACK
                            _start.x = _cos * _end.x - _sin * _end.y;

                            _start.y = _cos * _end.y + _sin * _end.x;


                            _circle.velocity.x = _cos * _velocity.x - _sin * _velocity.y;

                            _circle.velocity.y = _cos * _velocity.y + _sin * _velocity.x;


                            _circle.x = _line.x + _start.x;

                            _circle.y = _line.y + _start.y;
                        }
                    }

                ////    DRAW    ////////////////////////

                    _circle.draw ( );

                    _line.draw ( );
            }


            _drawFrame ( );
        },
        // 10:9
        bouncingOffAngleAndWalls: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    INPUT    ///////////////////////////////

                let _mouse   = utils.captureMouse ( _canvas );

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.x = 100;

                    _circle.y = 100;


                let _line   = new Line ( new Point ( 0, 0 ), new Point ( 200, 0 ) );

                    _line.x = 50;

                    _line.y = 200;

            ////    SET DEFAULTS    ////////////////////////

                let _gravity = 0.2;

                let _bounce  = -0.6;


                let _start    = new Point;

                let _end      = new Point;

                let _velocity = new Point;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        let _bounds = _line.bounds;


                        // MOVE LINE WITH MOUSE
                        _line.position.rotation = ( ( _canvas.width / 2 - _mouse.x ) * 0.1 ) * Math.PI / 180;


                        // NORMAL MOTION CODE
                        _circle.velocity.y += _gravity;


                        _circle.x += _circle.velocity.x;

                        _circle.y += _circle.velocity.y;


                        if ( _circle.x + _circle.radius > _bounds.x && _circle.x - _circle.radius < _bounds.x + _bounds.width )
                        {
                            // GET ANGLE, SINE, AND COSINE
                            let _cos = Math.cos ( _line.position.rotation );

                            let _sin = Math.sin ( _line.position.rotation );


                            // GET POSITION OF _CIRCLE, RELATIVE TO _LINE
                            _start.x = _circle.x - _line.x,

                            _start.y = _circle.y - _line.y,


                            // ROTATE COORDINATES
                            _end.y = _cos * _start.y - _sin * _start.x;


                            // ROTATE VELOCITY
                            _velocity.y = _cos * _circle.velocity.y - _sin * _circle.velocity.x;


                            // PERFORM BOUNCE WITH ROTATED VALUES
                            if ( _end.y > - _circle.radius && _end.y < _velocity.y )
                            {
                                // ROTATE COORDINATES
                                _end.x = _cos * _start.x + _sin * _start.y,


                                // ROTATE VELOCITY
                                _velocity.x  = _cos * _circle.velocity.x + _sin * _circle.velocity.y;

                                _end.y       = - _circle.radius;

                                _velocity.y *= _bounce;


                                // ROTATE EVERYTHING BACK
                                _start.x = _cos * _end.x - _sin * _end.y;

                                _start.y = _cos * _end.y + _sin * _end.x;


                                _circle.velocity.x = _cos * _velocity.x - _sin * _velocity.y;

                                _circle.velocity.y = _cos * _velocity.y + _sin * _velocity.x;


                                _circle.x = _line.x + _start.x;

                                _circle.y = _line.y + _start.y;
                            }
                        }

                        // BOUNCE OFF CEILING, FLOOR, AND WALLS
                        if ( _circle.x + _circle.radius > _canvas.width )
                        {
                            _circle.x = _canvas.width - _circle.radius;

                            _circle.velocity.x *= _bounce;
                        }


                        if ( _circle.x - _circle.radius < 0 )
                        {
                            _circle.x = _circle.radius;

                            _circle.velocity.x *= _bounce;
                        }


                        if ( _circle.y + _circle.radius > _canvas.height )
                        {
                            _circle.y = _canvas.height - _circle.radius;

                            _circle.velocity.y *= _bounce;
                        }


                        if ( _circle.y - _circle.radius < 0 )
                        {
                            _circle.y = _circle.radius;

                            _circle.velocity.y *= _bounce;
                        }


                        _circle.draw ( );

                        _line.draw ( );
                }


                _drawFrame ( );
        },
        // 10:10
        bouncingOffMultipleAngles: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _circle = new Circle;

                    _circle.x = 100;

                    _circle.y = 50;


                let _lines  = new Array;

                    // CREATE 5 LINES, POSITION AND ROTATE
                    _lines [ 0 ] = new Line( new Point ( -50, 0 ), new Point ( 50, 0 ) );

                    _lines [ 0 ].x = 100;
                    _lines [ 0 ].y = 100;

                    _lines [ 0 ].position.rotation = 30 * Math.PI / 180;


                    _lines [ 1 ] = new Line( new Point ( -50, 0 ), new Point ( 50, 0 ) );

                    _lines [ 1 ].x = 100;
                    _lines [ 1 ].y = 200;

                    _lines [ 1 ].position.rotation = 45 * Math.PI / 180;


                    _lines [ 2 ] = new Line( new Point ( -50, 0 ), new Point ( 50, 0 ) );

                    _lines [ 2 ].x = 220;
                    _lines [ 2 ].y = 150;

                    _lines [ 2 ].position.rotation = -20 * Math.PI / 180;


                    _lines [ 3 ] = new Line( new Point ( -50, 0 ), new Point ( 50, 0 ) );

                    _lines [ 3 ].x = 150;
                    _lines [ 3 ].y = 330;

                    _lines [ 3 ].position.rotation = 10 * Math.PI / 180;


                    _lines [ 4 ] = new Line( new Point ( -50, 0 ), new Point ( 50, 0 ) );

                    _lines [ 4 ].x = 230;
                    _lines [ 4 ].y = 250;

                    _lines [ 4 ].position.rotation = -30 * Math.PI / 180;

            ////    SET DEFAULTS    ////////////////////////

                let _gravity = 0.2;

                let _bounce  = -0.6;


                let _start    = new Point;

                let _end      = new Point;

                let _velocity = new Point;

            ////    FUNCTIONS    ///////////////////////////

                function _checkLine ( line )
                {
                    let _bounds = line.bounds;


                    if ( _circle.x + _circle.radius > _bounds.x && _circle.x - _circle.radius < _bounds.x + _bounds.width )
                    {
                        // GET ANGLE, SINE, AND COSINE
                        let _cos = Math.cos ( line.position.rotation );

                        let _sin = Math.sin ( line.position.rotation );


                        // GET POSITION OF _CIRCLE, RELATIVE TO LINE
                        _start.x = _circle.x - line.x;

                        _start.y = _circle.y - line.y;


                        // ROTATE COORDINATES
                        _end.y = _cos * _start.y - _sin * _start.x;


                        // ROTATE VELOCITY
                        _velocity.y = _cos * _circle.velocity.y - _sin * _circle.velocity.x;


                        // PERFORM BOUNCE WITH ROTATED VALUES
                        if ( _end.y > - _circle.radius && _end.y < _velocity.y )
                        {
                            // ROTATE COORDINATES
                            _end.x = _cos * _start.x + _sin * _start.y;

                            // ROTATE VELOCITY
                            _velocity.x  = _cos * _circle.velocity.x + _sin * _circle.velocity.y;

                            _end.y       = - _circle.radius;

                            _velocity.y *= _bounce;


                            // ROTATE EVERYTHING BACK
                            _start.x = _cos * _end.x - _sin * _end.y;

                            _start.y = _cos * _end.y + _sin * _end.x;


                            _circle.velocity.x = _cos * _velocity.x - _sin * _velocity.y;

                            _circle.velocity.y = _cos * _velocity.y + _sin * _velocity.x;


                            _circle.x = line.x + _start.x;

                            _circle.y = line.y + _start.y;
                        }
                    }
                }

                function _drawLine ( line )
                {
                    _checkLine ( line );

                    line.draw ( );
                }

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        // NORMAL MOTION CODE
                        _circle.velocity.y += _gravity;

                        _circle.x += _circle.velocity.x;
                        _circle.y += _circle.velocity.y;

                        // BOUNCE OFF CEILING, FLOOR, AND WALLS
                        if ( _circle.x + _circle.radius > _canvas.width )
                        {
                            _circle.x = _canvas.width - _circle.radius;

                            _circle.velocity.x *= _bounce;
                        }


                        if ( _circle.x - _circle.radius < 0 )
                        {
                            _circle.x = _circle.radius;

                            _circle.velocity.x *= _bounce;
                        }


                        if ( _circle.y + _circle.radius > _canvas.height )
                        {
                            _circle.y = _canvas.height - _circle.radius;

                            _circle.velocity.y *= _bounce;
                        }


                        if ( _circle.y - _circle.radius < 0 )
                        {
                            _circle.y = _circle.radius;

                            _circle.velocity.y *= _bounce;
                        }

                    ////    DRAW    ////////////////////////

                        _lines.forEach ( _drawLine );

                        _circle.draw ( );
                }


                _drawFrame ( );
        },
        // 11:2
        optimizedConservationOfMomentumOnOneAxis: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _circle0 = new Circle;


                    _circle0.mass = 2;


                    _circle0.x = 50;

                    _circle0.y = _canvas.height / 2;


                    _circle0.velocity.x = 1;


                let _circle1 = new Circle;


                    _circle1.mass = 1;


                    _circle1.x = 300;

                    _circle1.y = _canvas.height / 2;


                    _circle1.velocity.x = -1;

            ////    DRAW    ////////////////////////////////

                function _drawFrame ()
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _circle0.x += _circle0.velocity.x;

                        _circle1.x += _circle1.velocity.x;


                        let _distance = _circle1.x - _circle0.x;


                        // ON COLLISION
                        if ( Math.abs ( _distance ) < _circle0.radius + _circle1.radius )
                        {
                            let _velocityXTotal = _circle0.velocity.x - _circle1.velocity.x;


                            _circle0.velocity.x = ( ( _circle0.mass - _circle1.mass) * _circle0.velocity.x + 2 * _circle1.mass * _circle1.velocity.x ) / ( _circle0.mass + _circle1.mass );

                            _circle1.velocity.x = _velocityXTotal + _circle0.velocity.x;


                            _circle0.x += _circle0.velocity.x;

                            _circle1.y += _circle1.velocity.x;
                        }

                    ////    DRAW    ////////////////////////

                        _circle0.draw ( );

                        _circle1.draw ( );
                }


                _drawFrame ( );
        },
        // 11:4
        optimizedConservationOfMomentumOnTwoAxes: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _circle0 = new Circle;


                    _circle0.mass = 2;


                    _circle0.x = canvas.width  - 200;

                    _circle0.y = canvas.height - 200;


                    _circle0.velocity.x = Math.random() * 10 - 5;

                    _circle0.velocity.y = Math.random() * 10 - 5;


                let _circle1 = new Circle();


                    _circle1.mass = 1;


                    _circle1.x = 100;

                    _circle1.y = 100;


                    _circle1.velocity.x = Math.random() * 10 - 5;

                    _circle1.velocity.y = Math.random() * 10 - 5;

            ////    SET DEFAULTS    ////////////////////////

                let _bounce = -1.0;

            ////    FUNCTIONS    ///////////////////////////

                function _rotate ( x, y, sin, cos, reverse )
                {
                    return {
                               x: ( reverse ) ? ( x * cos + y * sin ) : ( x * cos - y * sin ),

                               y: ( reverse ) ? ( y * cos - x * sin ) : ( y * cos + x * sin )
                           };
                }

                function _checkCollision ( object0, object1 )
                {
                    let _distance = new Point;


                        _distance.x   = object1.x - object0.x;

                        _distance.y   = object1.y - object0.y;


                    _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    // COLLISION HANDLING CODE HERE
                    if ( _distance.total < object0.radius + object1.radius )
                    {
                        // CALCULATE ANGLE, SINE, AND COSINE
                        let _angle = Math.atan2 ( _distance.y, _distance.x );


                        let _sin = Math.sin ( _angle );

                        let _cos = Math.cos ( _angle );


                        // ROTATE OBJECT0'S POSITION
                        let _position0 = new Point;


                        // ROTATE OBJECT1'S POSITION
                        let _position1 = _rotate ( _distance.x, _distance.y, _sin, _cos, true );


                        // ROTATE OBJECT0'S VELOCITY
                        let _velocity0 = _rotate ( object0.velocity.x, object0.velocity.y, _sin, _cos, true );


                        // ROTATE OBJECT1'S VELOCITY
                        let _velocity1 = _rotate ( object1.velocity.x, object1.velocity.y, _sin, _cos, true );


                        // COLLISION REACTION
                        let _velocityXTotal = _velocity0.x - _velocity1.x;


                            _velocity0.x = ( ( object0.mass - object1.mass ) * _velocity0.x + 2 * object1.mass * _velocity1.x ) / ( object0.mass + object1.mass );

                            _velocity1.x = _velocityXTotal + _velocity0.x;


                            // UPDATE POSITION
                            _position0.x += _velocity0.x;

                            _position1.x += _velocity1.x;


                        // ROTATE POSITIONS BACK
                        let _position0Final = _rotate ( _position0.x, _position0.y, _sin, _cos, false );

                        let _position1Final = _rotate ( _position1.x, _position1.y, _sin, _cos, false );


                        // ADJUST POSITIONS TO ACTUAL SCREEN POSITIONS
                        object1.x = object0.x + _position1Final.x;

                        object1.y = object0.y + _position1Final.y;


                        object0.x = object0.x + _position0Final.x;

                        object0.y = object0.y + _position0Final.y;


                        // ROTATE VELOCITIES BACK
                        let _velocity0Final = _rotate ( _velocity0.x, _velocity0.y, _sin, _cos, false );

                        let _velocity1Final = _rotate ( _velocity1.x, _velocity1.y, _sin, _cos, false );


                        object0.velocity.x = _velocity0Final.x;

                        object0.velocity.y = _velocity0Final.y;


                        object1.velocity.x = _velocity1Final.x;

                        object1.velocity.y = _velocity1Final.y;
                    }
                }

                function _checkWalls ( object )
                {
                    if ( object.x + object.radius > _canvas.width )
                    {
                        object.x           = _canvas.width - object.radius;

                        object.velocity.x *= _bounce;
                    }


                    if ( object.x - object.radius < 0 )
                    {
                        object.x           = object.radius;

                        object.velocity.x *= _bounce;
                    }


                    if ( object.y + object.radius > _canvas.height )
                    {
                        object.y           = _canvas.height - object.radius;

                        object.velocity.y *= _bounce;
                    }


                    if ( object.y - object.radius < 0 )
                    {
                        object.y           = object.radius;

                        object.velocity.y *= _bounce;
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _circle0.x += _circle0.velocity.x;

                        _circle0.y += _circle0.velocity.y;


                        _circle1.x += _circle1.velocity.x;

                        _circle1.y += _circle1.velocity.y;


                        _checkCollision ( _circle0, _circle1 );


                        _checkWalls ( _circle0 );

                        _checkWalls ( _circle1 );

                    ////    DRAW    ////////////////////////

                        _circle0.draw ( );

                        _circle1.draw ( );
                }


                _drawFrame ( );
        },
        // 11:6
        multipleObjectCollisionsWithProblemFixed: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _circles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _amount = 15;

                let _bounce = -1.0;


                for ( let _radius, _circle, _i = 0; _i < _amount; _i++ )
                {
                    _radius = Math.random ( ) * 20 + 15;


                    _circle = new Circle;


                    _circle.radius = _circle.mass = _radius;


                    _circle.x = Math.random ( ) * _canvas.width;

                    _circle.y = Math.random ( ) * _canvas.height;


                    _circle.velocity.x = Math.random ( ) * 10 - 5;

                    _circle.velocity.y = Math.random ( ) * 10 - 5;


                    _circles.push ( _circle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _rotate ( x, y, sin, cos, reverse )
                {
                    return {
                               x: ( reverse ) ? ( x * cos + y * sin ) : ( x * cos - y * sin ),

                               y: ( reverse ) ? ( y * cos - x * sin ) : ( y * cos + x * sin )
                           };
                }

                function _checkCollision ( object0, object1 )
                {
                    let _distance = new Point;


                        _distance.x = object1.x - object0.x;

                        _distance.y = object1.y - object0.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    // COLLISION HANDLING CODE HERE
                    if ( _distance.total < object0.radius + object1.radius )
                    {
                        // CALCULATE ANGLE, SINE, AND COSINE
                        let _angle = Math.atan2 ( _distance.y, _distance.x );


                        let _sin = Math.sin ( _angle );

                        let _cos = Math.cos ( _angle );


                        // ROTATE OBJECT0'S POSITION
                        let _position0 = new Point;


                        // ROTATE OBJECT1'S POSITION
                        let _position1 = _rotate ( _distance.x, _distance.y, _sin, _cos, true );


                        // ROTATE OBJECT0'S VELOCITY
                        let _velocity0 = _rotate ( object0.velocity.x, object0.velocity.y, _sin, _cos, true );


                        // ROTATE OBJECT1'S VELOCITY
                        let _velocity1 = _rotate ( object1.velocity.x, object1.velocity.y, _sin, _cos, true );


                        // COLLISION REACTION
                        let _vxTotal = _velocity0.x - _velocity1.x;


                            _velocity0.x = ( ( object0.mass - object1.mass ) * _velocity0.x + 2 * object1.mass * _velocity1.x ) / ( object0.mass + object1.mass );

                            _velocity1.x = _vxTotal + _velocity0.x;


                        // UPDATE POSITION - TO AVOID OBJECTS BECOMING STUCK TOGETHER
                        let _absoluteVelocity = Math.abs ( _velocity0.x ) + Math.abs ( _velocity1.x );


                        let _overlap = ( object0.radius + object1.radius ) - Math.abs ( _position0.x - _position1.x );


                            _position0.x += _velocity0.x / _absoluteVelocity * _overlap;

                            _position1.x += _velocity1.x / _absoluteVelocity * _overlap;


                        // ROTATE POSITIONS BACK
                        let _position0Final = _rotate ( _position0.x, _position0.y, _sin, _cos, false );

                        let _position1Final = _rotate ( _position1.x, _position1.y, _sin, _cos, false );


                        // ADJUST POSITIONS TO ACTUAL SCREEN POSITIONS
                        object1.x = object0.x + _position1Final.x;

                        object1.y = object0.y + _position1Final.y;


                        object0.x = object0.x + _position0Final.x;

                        object0.y = object0.y + _position0Final.y;


                        // ROTATE VELOCITIES BACK
                        let _velocity0Final = _rotate ( _velocity0.x, _velocity0.y, _sin, _cos, false );

                        let _velocity1Final = _rotate ( _velocity1.x, _velocity1.y, _sin, _cos, false );


                        object0.velocity.x = _velocity0Final.x;

                        object0.velocity.y = _velocity0Final.y;


                        object1.velocity.x = _velocity1Final.x;

                        object1.velocity.y = _velocity1Final.y;
                    }
                }

                function _checkWalls ( object )
                {
                    if ( object.x + object.radius > _canvas.width )
                    {
                        object.x           = _canvas.width - object.radius;

                        object.velocity.x *= _bounce;
                    }


                    if ( object.x - object.radius < 0 )
                    {
                        object.x           = object.radius;

                        object.velocity.x *= _bounce;
                    }


                    if ( object.y + object.radius > _canvas.height )
                    {
                        object.y           = _canvas.height - object.radius;

                        object.velocity.y *= _bounce;
                    }


                    if ( object.y - object.radius < 0 )
                    {
                        object.y           = object.radius;

                        object.velocity.y *= _bounce;
                    }
                }

                function _move ( object )
                {
                    object.x += object.velocity.x;

                    object.y += object.velocity.y;


                    _checkWalls ( object );
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( object )
                {
                    object.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _circles.forEach ( _move );


                        for ( let _objectA, _i = 0, _length = _amount - 1; _i < _length; _i++ )
                        {
                            _objectA = _circles [ _i ];


                            for ( let _objectB, _j = _i + 1; _j < _amount; _j++ )
                            {
                                _objectB = _circles [ _j ];

                                _checkCollision ( _objectA, _objectB );
                            }
                        }

                    ////    DRAW    ////////////////////////

                        _circles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // 12:3
        gravitationalForceAndCollisionDetectionWithRandomSizes: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _particles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _amount = 30;

            ////    POPULATION    //////////////////////////

                for ( let _size, _particle, _i = 0; _i < _amount; _i++ )
                {
                    _size = Math.random ( ) * 25 + 5;


                    _particle = new Circle;


                    _particle.radius = _size;


                    _particle.x = Math.random ( ) * _canvas.width;

                    _particle.y = Math.random ( ) * _canvas.height;


                    _particle.mass = _size;


                    _particles.push ( _particle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _rotate ( x, y, sin, cos, reverse )
                {
                    return {
                               x: ( reverse ) ? ( x * cos + y * sin ) : ( x * cos - y * sin ),

                               y: ( reverse ) ? ( y * cos - x * sin ) : ( y * cos + x * sin )
                           };
                }

                function _checkCollision ( object0, object1 )
                {
                    let _distance = new Point;


                        _distance.x = object1.x - object0.x;

                        _distance.y = object1.y - object0.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    // COLLISION HANDLING CODE HERE
                    if ( _distance.total < object0.radius + object1.radius )
                    {
                        // CALCULATE ANGLE, SINE, AND COSINE
                        let _angle = Math.atan2 ( _distance.y, _distance.x );

                        let _sin   = Math.sin ( _angle );

                        let _cos   = Math.cos ( _angle );


                        // ROTATE BALL0'S POSITION
                        let _position0 = new Point;


                        // ROTATE BALL1'S POSITION
                        let _position1 = _rotate ( _distance.x, _distance.y, _sin, _cos, true );


                        // ROTATE BALL0'S VELOCITY
                        let _velocity0 = _rotate ( object0.velocity.x, object0.velocity.y, _sin, _cos, true );


                        // ROTATE BALL1'S VELOCITY
                        let _velocity1 = _rotate ( object1.velocity.x, object1.velocity.y, _sin, _cos, true );


                        // COLLISION REACTION
                        let _vxTotal = _velocity0.x - _velocity1.x;


                            _velocity0.x = ( ( object0.mass - object1.mass ) * _velocity0.x + 2 * object1.mass * _velocity1.x ) / ( object0.mass + object1.mass );

                            _velocity1.x = _vxTotal + _velocity0.x;


                        // UPDATE POSITION - TO AVOID OBJECTS BECOMING STUCK TOGETHER
                        let _absoluteVelocity = Math.abs ( _velocity0.x ) + Math.abs ( _velocity1.x );


                        let _overlap = ( object0.radius + object1.radius ) - Math.abs ( _position0.x - _position1.x );


                            _position0.x += _velocity0.x / _absoluteVelocity * _overlap;

                            _position1.x += _velocity1.x / _absoluteVelocity * _overlap;


                        // ROTATE POSITIONS BACK
                        let _position0Final = _rotate ( _position0.x, _position0.y, _sin, _cos, false );

                        let _position1Final = _rotate ( _position1.x, _position1.y, _sin, _cos, false );


                        // ADJUST POSITIONS TO ACTUAL SCREEN POSITIONS
                        object1.x = object0.x + _position1Final.x;

                        object1.y = object0.y + _position1Final.y;


                        object0.x = object0.x + _position0Final.x;

                        object0.y = object0.y + _position0Final.y;


                        // ROTATE VELOCITIES BACK
                        let _velocity0Final = _rotate ( _velocity0.x, _velocity0.y, _sin, _cos, false );

                        let _velocity1Final = _rotate ( _velocity1.x, _velocity1.y, _sin, _cos, false );


                        object0.velocity.x = _velocity0Final.x;

                        object0.velocity.y = _velocity0Final.y;


                        object1.velocity.x = _velocity1Final.x;

                        object1.velocity.y = _velocity1Final.y;
                    }
                }

                function _gravitate ( objectA, objectB )
                {
                    let _distance = new Point;

                    let _acceleration = new Point;


                        _distance.x = objectB.x - objectA.x;

                        _distance.y = objectB.y - objectA.y;


                        _distance.squared = _distance.x * _distance.x + _distance.y * _distance.y;


                        _distance.total = Math.sqrt ( _distance.squared );


                    let _force = objectA.mass * objectB.mass / _distance.squared;


                        _acceleration.x = _force * _distance.x / _distance.total;

                        _acceleration.y = _force * _distance.y / _distance.total;


                    objectA.velocity.x += _acceleration.x / objectA.mass;

                    objectA.velocity.y += _acceleration.y / objectA.mass;


                    objectB.velocity.x -= _acceleration.x / objectB.mass;

                    objectB.velocity.y -= _acceleration.y / objectB.mass;
                }

                function _move ( objectA, iter )
                {
                    objectA.x += objectA.velocity.x;

                    objectA.y += objectA.velocity.y;


                    for ( let _objectB, _j = iter + 1; _j < _amount; _j++ )
                    {
                        _objectB = _particles [ _j ];


                        _checkCollision ( objectA, _objectB );


                        _gravitate ( objectA, _objectB );
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( particle )
                {
                    particle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _particles.forEach ( _move );

                    ////    DRAW    ////////////////////////

                        _particles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // 12:4
        objectInOrbit: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _sun = new Circle;


                    _sun.radius = 100;


                    _sun.x = canvas.width  / 2;

                    _sun.y = canvas.height / 2;


                    _sun.mass = 10000;


                let _planet = new Circle;


                    _planet.radius = 10;


                    _planet.x = canvas.width  / 2 + 200;

                    _planet.y = canvas.height / 2;


                    _planet.velocity.y = 7;


                    _planet.mass = 1;


                let _particles = new Array;


                    _particles.push ( _sun );

                    _particles.push ( _planet );

            ////    FUNCTIONS    ///////////////////////////

                function _rotate ( x, y, sin, cos, reverse )
                {
                    return {
                               x: ( reverse ) ? ( x * cos + y * sin ) : ( x * cos - y * sin ),

                               y: ( reverse ) ? ( y * cos - x * sin ) : ( y * cos + x * sin )
                           };
                }

                function _checkCollision ( ball0, ball1 )
                {
                    let _distance = new Point;


                        _distance.x = ball1.x - ball0.x;

                        _distance.y = ball1.y - ball0.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    // COLLISION HANDLING CODE HERE
                    if ( _distance.total < ball0.radius + ball1.radius )
                    {
                        // CALCULATE ANGLE, SINE, AND COSINE
                        let _angle = Math.atan2 ( _distance.y, _distance.x );


                        let _sin = Math.sin ( _angle );

                        let _cos = Math.cos ( _angle );


                        // ROTATE BALL0'S POSITION
                        let _position0 = new Point;


                        // ROTATE BALL1'S POSITION
                        let _position1 = _rotate ( _distance.x, _distance.y, _sin, _cos, true );


                        // ROTATE BALL0'S VELOCITY
                        let _velocity0 = _rotate ( ball0.velocity.x, ball0.velocity.y, _sin, _cos, true );


                        // ROTATE BALL1'S VELOCITY
                        let _velocity1 = _rotate ( ball1.velocity.x, ball1.velocity.y, _sin, _cos, true );


                        // COLLISION REACTION
                        let _vxTotal = _velocity0.x - _velocity1.x;


                            _velocity0.x = ( ( ball0.mass - ball1.mass ) * _velocity0.x + 2 * ball1.mass * _velocity1.x ) / ( ball0.mass + ball1.mass );

                            _velocity1.x = _vxTotal + _velocity0.x;


                        // UPDATE POSITION - TO AVOID OBJECTS BECOMING STUCK TOGETHER
                        let _absoluteVelocity = Math.abs ( _velocity0.x ) + Math.abs ( _velocity1.x );


                        let _overlap = ( ball0.radius + ball1.radius ) - Math.abs ( _position0.x - _position1.x );


                            _position0.x += _velocity0.x / _absoluteVelocity * _overlap;

                            _position1.x += _velocity1.x / _absoluteVelocity * _overlap;


                        // ROTATE POSITIONS BACK
                        let _position0Final = _rotate ( _position0.x, _position0.y, _sin, _cos, false );

                        let _position1Final = _rotate ( _position1.x, _position1.y, _sin, _cos, false );


                        // ADJUST POSITIONS TO ACTUAL SCREEN POSITIONS
                        ball1.x = ball0.x + _position1Final.x;

                        ball1.y = ball0.y + _position1Final.y;


                        ball0.x = ball0.x + _position0Final.x;

                        ball0.y = ball0.y + _position0Final.y;


                        // ROTATE VELOCITIES BACK
                        let _velocity0Final = _rotate ( _velocity0.x, _velocity0.y, _sin, _cos, false );

                        let _velocity1Final = _rotate ( _velocity1.x, _velocity1.y, _sin, _cos, false );


                        ball0.velocity.x = _velocity0Final.x;

                        ball0.velocity.y = _velocity0Final.y;


                        ball1.velocity.x = _velocity1Final.x;

                        ball1.velocity.y = _velocity1Final.y;
                    }
                }

                function _gravitate ( objectA, objectB )
                {
                    let _distance     = new Point;

                    let _acceleration = new Point;


                        _distance.x = objectB.x - objectA.x;

                        _distance.y = objectB.y - objectA.y;


                        _distance.squared = _distance.x * _distance.x + _distance.y * _distance.y;


                        _distance.total = Math.sqrt ( _distance.squared );


                    let _force = objectA.mass * objectB.mass / _distance.squared;


                        _acceleration.x = _force * _distance.x / _distance.total;

                        _acceleration.y = _force * _distance.y / _distance.total;


                    objectA.velocity.x += _acceleration.x / objectA.mass;

                    objectA.velocity.y += _acceleration.y / objectA.mass;


                    objectB.velocity.x -= _acceleration.x / objectB.mass;

                    objectB.velocity.y -= _acceleration.y / objectB.mass;
                }

                function _move ( objectA, iter )
                {
                    objectA.x += objectA.velocity.x;

                    objectA.y += objectA.velocity.y;


                    for ( let _objectB, _j = iter + 1; _j < _particles.length; _j++ )
                    {
                        _objectB = _particles [ _j ];


                        _checkCollision ( objectA, _objectB );

                        _gravitate ( objectA, _objectB );
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( particle )
                {
                    particle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _particles.forEach ( _move );

                    ////    DRAW    ////////////////////////

                        _particles.forEach ( _draw );
                }

                _drawFrame ( );
        },
        // 12:5
        drawingAlongTheOrbitalPath: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _sun = new Circle;


                    _sun.radius = 100;


                    _sun.x = canvas.width  / 2;

                    _sun.y = canvas.height / 2;


                    _sun.mass = 10000;


                let _planet = new Circle;


                    _planet.radius = 10;


                    _planet.x = canvas.width  / 2 + 200;

                    _planet.y = canvas.height / 2;


                    _planet.velocity.y = 7;


                    _planet.mass = 1;


                let _particles = new Array;


                    _particles.push ( _sun );

                    _particles.push ( _planet );

            ////    FUNCTIONS    ///////////////////////////

                function _rotate ( x, y, sin, cos, reverse )
                {
                    return {
                               x: ( reverse ) ? ( x * cos + y * sin ) : ( x * cos - y * sin ),

                               y: ( reverse ) ? ( y * cos - x * sin ) : ( y * cos + x * sin )
                           };
                }

                function _checkCollision ( ball0, ball1 )
                {
                    let _distance = new Point;


                        _distance.x = ball1.x - ball0.x;

                        _distance.y = ball1.y - ball0.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    // COLLISION HANDLING CODE HERE
                    if ( _distance.total < ball0.radius + ball1.radius )
                    {
                        // CALCULATE ANGLE, SINE, AND COSINE
                        let _angle = Math.atan2 ( _distance.y, _distance.x );


                        let _sin = Math.sin ( _angle );

                        let _cos = Math.cos ( _angle );


                        // ROTATE BALL0'S POSITION
                        let _position0 = new Point;


                        // ROTATE BALL1'S POSITION
                        let _position1 = _rotate ( _distance.x, _distance.y, _sin, _cos, true );


                        // ROTATE BALL0'S VELOCITY
                        let _velocity0 = _rotate ( ball0.velocity.x, ball0.velocity.y, _sin, _cos, true );


                        // ROTATE BALL1'S VELOCITY
                        let _velocity1 = _rotate ( ball1.velocity.x, ball1.velocity.y, _sin, _cos, true );


                        // COLLISION REACTION
                        let _vxTotal = _velocity0.x - _velocity1.x;


                            _velocity0.x = ( ( ball0.mass - ball1.mass ) * _velocity0.x + 2 * ball1.mass * _velocity1.x ) / ( ball0.mass + ball1.mass );

                            _velocity1.x = _vxTotal + _velocity0.x;


                        // UPDATE POSITION - TO AVOID OBJECTS BECOMING STUCK TOGETHER
                        let _absoluteVelocity = Math.abs ( _velocity0.x ) + Math.abs ( _velocity1.x );


                        let _overlap = ( ball0.radius + ball1.radius ) - Math.abs ( _position0.x - _position1.x );


                            _position0.x += _velocity0.x / _absoluteVelocity * _overlap;

                            _position1.x += _velocity1.x / _absoluteVelocity * _overlap;


                        // ROTATE POSITIONS BACK
                        let _position0Final = _rotate ( _position0.x, _position0.y, _sin, _cos, false );

                        let _position1Final = _rotate ( _position1.x, _position1.y, _sin, _cos, false );


                        // ADJUST POSITIONS TO ACTUAL SCREEN POSITIONS
                        ball1.x = ball0.x + _position1Final.x;

                        ball1.y = ball0.y + _position1Final.y;


                        ball0.x = ball0.x + _position0Final.x;

                        ball0.y = ball0.y + _position0Final.y;


                        // ROTATE VELOCITIES BACK
                        let _velocity0Final = _rotate ( _velocity0.x, _velocity0.y, _sin, _cos, false );

                        let _velocity1Final = _rotate ( _velocity1.x, _velocity1.y, _sin, _cos, false );


                        ball0.velocity.x = _velocity0Final.x;

                        ball0.velocity.y = _velocity0Final.y;


                        ball1.velocity.x = _velocity1Final.x;

                        ball1.velocity.y = _velocity1Final.y;
                    }
                }

                function _gravitate ( objectA, objectB )
                {
                    let _distance     = new Point;

                    let _acceleration = new Point;


                        _distance.x = objectB.x - objectA.x;

                        _distance.y = objectB.y - objectA.y;


                        _distance.squared = _distance.x * _distance.x + _distance.y * _distance.y;


                        _distance.total = Math.sqrt ( _distance.squared );


                    let _force = objectA.mass * objectB.mass / _distance.squared;


                        _acceleration.x = _force * _distance.x / _distance.total;

                        _acceleration.y = _force * _distance.y / _distance.total;


                    objectA.velocity.x += _acceleration.x / objectA.mass;

                    objectA.velocity.y += _acceleration.y / objectA.mass;


                    objectB.velocity.x -= _acceleration.x / objectB.mass;

                    objectB.velocity.y -= _acceleration.y / objectB.mass;
                }

                function _move ( objectA, iter )
                {
                    objectA.x += objectA.velocity.x;

                    objectA.y += objectA.velocity.y;


                    for ( let _objectB, _j = iter + 1; _j < _particles.length; _j++ )
                    {
                        _objectB = _particles [ _j ];


                        _checkCollision ( objectA, _objectB );

                        _gravitate ( objectA, _objectB );
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( particle )
                {
                    particle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        // _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _particles.forEach ( _move );

                    ////    DRAW    ////////////////////////

                        _particles.forEach ( _draw );
                }

                _drawFrame ( );
        },
        // 12:6
        connectingParticlesWithSprings: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _particles = new Array;

            ////   SET DEFAULTS    /////////////////////////

                let _amount       = 30;

                let _minDistance  = 100;

                let _springAmount = 0.001;

            ////    POPULATION    //////////////////////////

                for ( let _particle, _i = 0; _i < _amount; _i++ )
                {
                    _particle = new Circle;


                    _particle.radius = 5;


                    _particle.x = Math.random ( ) * _canvas.width;

                    _particle.y = Math.random ( ) * _canvas.height;


                    _particle.velocity.x = Math.random ( ) * 6 - 3;

                    _particle.velocity.y = Math.random ( ) * 6 - 3;


                    _particles.push ( _particle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _spring ( objectA, objectB )
                {
                    let _distance     = new Point;

                    let _acceleration = new Point;


                        _distance.x = objectB.x - objectA.x;

                        _distance.y = objectB.y - objectA.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    if ( _distance.total < _minDistance )
                    {
                        _acceleration.x = _distance.x * _springAmount;

                        _acceleration.y = _distance.y * _springAmount;


                        objectA.velocity.x += _acceleration.x;

                        objectA.velocity.y += _acceleration.y;


                        objectB.velocity.x -= _acceleration.x;

                        objectB.velocity.y -= _acceleration.y;
                    }
                }

                function _move ( objectA, iter )
                {
                    objectA.x += objectA.velocity.x;

                    objectA.y += objectA.velocity.y;


                    if ( objectA.x > _canvas.width )

                        objectA.x = 0;


                    if ( objectA.x < 0 )

                        objectA.x = _canvas.width;


                    if ( objectA.y > _canvas.height )

                        objectA.y = 0;


                    if ( objectA.y < 0 )

                        objectA.y = _canvas.height;


                    for ( let _objectB, _j = iter + 1; _j < _amount; _j++ )
                    {
                        _objectB = _particles [ _j ];


                        _spring ( objectA, _objectB );
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( particle )
                {
                    particle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _particles.forEach ( _move );

                    ////    DRAW    ////////////////////////

                        _particles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // 12:7
        drawingLinesBetweenConnectedParticles: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _particles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _amount       = 30;

                let _minDistance  = 100;

                let _springAmount = 0.001;

            ////    POPULATION    //////////////////////////

                for ( let _particle, _i = 0; _i < _amount; _i++ )
                {
                    _particle = new Circle;


                    _particle.radius = 5;


                    _particle.x = Math.random ( ) * _canvas.width;

                    _particle.y = Math.random ( ) * _canvas.height;


                    _particle.velocity.x = Math.random ( ) * 6 - 3;

                    _particle.velocity.y = Math.random ( ) * 6 - 3;


                    _particles.push ( _particle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _spring ( objectA, objectB )
                {
                    let _distance     = new Point;

                    let _acceleration = new Point;


                        _distance.x = objectB.x - objectA.x;

                        _distance.y = objectB.y - objectA.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    if ( _distance.total < _minDistance )
                    {
                        let _alpha = 1 - _distance.total / _minDistance;


                        _context.strokeStyle = utils.colorToRGB ( "#000000", _alpha );


                        _context.beginPath ( );


                        _context.moveTo ( objectA.x, objectA.y );

                        _context.lineTo ( objectB.x, objectB.y );


                        _context.stroke ( );


                        _acceleration.x = _distance.x * _springAmount;

                        _acceleration.y = _distance.y * _springAmount;


                        objectA.velocity.x += _acceleration.x;

                        objectA.velocity.y += _acceleration.y;


                        objectB.velocity.x -= _acceleration.x;

                        objectB.velocity.y -= _acceleration.y;
                    }
                }

                function _move ( objectA, iter )
                {
                    objectA.x += objectA.velocity.x;

                    objectA.y += objectA.velocity.y;


                    if ( objectA.x > _canvas.width )

                        objectA.x = 0;


                    if ( objectA.x < 0 )

                        objectA.x = _canvas.width;


                    if ( objectA.y > _canvas.height )

                        objectA.y = 0;


                    if ( objectA.y < 0 )

                        objectA.y = _canvas.height;


                    for ( let _objectB, _j = iter + 1; _j < _amount; _j++ )
                    {
                        _objectB = _particles [ _j ];

                        _spring ( objectA, _objectB );
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( particle )
                {
                    particle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _particles.forEach ( _move );

                    ////    DRAW    ////////////////////////

                        _particles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // 12:8
        applyingMassToConnectedParticles: ( ) =>
        {
            ////    CONTEXT    /////////////////////////////

                let _canvas  = document.getElementById ( 'canvas' );

                let _context = _canvas.getContext ( '2d' );

            ////    LOOP DATA    ///////////////////////////

                let _timeCurrent = new Date ( );

            ////    OBJECTS    /////////////////////////////

                let _particles = new Array;

            ////    SET DEFAULTS    ////////////////////////

                let _amount       = 30;

                let _minDistance  = 100;

                let _springAmount = 0.005;

            ////    POPULATION    //////////////////////////

                for ( let _size, _particle, _i = 0; _i < _amount; _i++ )
                {
                    _particle = new Circle;


                    _size = Math.random ( ) * 10 + 2;


                    _particle.radius = _size;

                    _particle.mass   = _size;


                    _particle.x = Math.random ( ) * _canvas.width;

                    _particle.y = Math.random ( ) * _canvas.height;


                    _particle.velocity.x = Math.random ( ) * 6 - 3;

                    _particle.velocity.y = Math.random ( ) * 6 - 3;


                    _particles.push ( _particle );
                }

            ////    FUNCTIONS    ///////////////////////////

                function _spring ( objectA, objectB )
                {
                    let _distance     = new Point;

                    let _acceleration = new Point;


                        _distance.x = objectB.x - objectA.x;

                        _distance.y = objectB.y - objectA.y;


                        _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


                    if ( _distance.total < _minDistance )
                    {
                        let _alpha = 1 - _distance.total / _minDistance;


                        _context.strokeStyle = utils.colorToRGB ( "#000000", _alpha );


                        _context.beginPath ( );


                        _context.moveTo ( objectA.x, objectA.y );

                        _context.lineTo ( objectB.x, objectB.y );


                        _context.stroke ( );


                        _acceleration.x = _distance.x * _springAmount;

                        _acceleration.y = _distance.y * _springAmount;


                        objectA.velocity.x += _acceleration.x / objectA.mass;

                        objectA.velocity.y += _acceleration.y / objectA.mass;


                        objectB.velocity.x -= _acceleration.x / objectB.mass;

                        objectB.velocity.y -= _acceleration.y / objectB.mass;
                    }
                }

                function _move ( objectA, iter )
                {
                    objectA.x += objectA.velocity.x;

                    objectA.y += objectA.velocity.y;


                    if ( objectA.x > _canvas.width )

                        objectA.x = 0;


                    if ( objectA.x < 0 )

                        objectA.x = _canvas.width;


                    if ( objectA.y > _canvas.height )

                        objectA.y = 0;


                    if ( objectA.y < 0 )

                        objectA.y = _canvas.height;


                    for ( let _objectB, _j = iter + 1; _j < _amount; _j++ )
                    {
                        _objectB = _particles [ _j ];

                        _spring ( objectA, _objectB );
                    }
                }

            ////    DRAW    ////////////////////////////////

                function _draw ( particle )
                {
                    particle.draw ( );
                }

                function _drawFrame ( )
                {
                    window.requestAnimationFrame ( _drawFrame, _canvas );

                    ////    LOOP DATA    ///////////////////

                        _timeCurrent = LAB.getFps ( _timeCurrent );

                    ////    CLEAR SCREEN    ////////////////

                        _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

                    ////    TRANSITIONS    /////////////////

                        _particles.forEach ( _move );

                    ////    DRAW    ////////////////////////

                        _particles.forEach ( _draw );
                }


                _drawFrame ( );
        },
        // // 13:2
        // singleSegmentAndSlider: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment = new Segment ( new Point ( 100, 100 ), new Aspect ( 100, 20 ) );

        //         let _slider  = new Slider ( new Point ( 300, 20 ), undefined, new Range ( - 90, 90, 0 ) );

        //             _slider.captureMouse ( _canvas );

        //             _slider.onchange = _drawFrame;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _segment.position.rotation = _slider.value * Math.PI / 180;

        //             ////    DRAW    ////////////////////////

        //                 _segment.draw ( );

        //                 _slider.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 13:3
        // movingTwoSegmentsIndependent: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 100, 100 ), new Aspect ( 100, 20 ) );

        //         let _segment1 = new Segment ( undefined, new Aspect ( 100, 20 ) );


        //         let _slider0 = new Slider ( new Point ( 320, 20 ), undefined, new Range ( - 90, 90, 0 ) );

        //             _slider0.captureMouse ( _canvas );

        //             _slider0.onchange = _drawFrame;


        //         let _slider1 = new Slider ( new Point ( 340, 20 ), undefined, new Range ( - 90, 90, 0 ) );

        //             _slider1.captureMouse ( _canvas );

        //             _slider1.onchange = _drawFrame;

        //     ////    DRAW    ////////////////////////////////

        //     function _drawFrame ( )
        //     {
        //         ////    LOOP DATA    ///////////////////

        //             _timeCurrent = LAB.getFps ( _timeCurrent );

        //         ////    CLEAR SCREEN    ////////////////

        //             _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //         ////    TRANSITIONS    /////////////////

        //             _segment0.rotation = _slider0.value * Math.PI / 180;

        //             _segment1.rotation = _slider1.value * Math.PI / 180;


        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;

        //         ////    DRAW    ///////////////////////

        //         _segment0.draw ( );

        //         _segment1.draw ( );


        //         _slider0.draw ( );

        //         _slider1.draw ( );
        //     }


        //     _drawFrame (  );
        // },
        // // 13:4
        // movingTwoSegmentsJoined: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 100, 100 ), new Aspect ( 100, 20 ) );

        //         let _segment1 = new Segment ( undefined,              new Aspect ( 100, 20 ) );


        //         let _slider0 = new Slider ( new Point ( 320, 20 ), undefined, new Range ( - 90, 90, 0 ) );

        //             _slider0.captureMouse ( _canvas );

        //             _slider0.onchange = _drawFrame;


        //         let _slider1 = new Slider ( new Point ( 340, 20 ), undefined, new Range ( - 160, 90, 0 ) );

        //             _slider1.captureMouse ( _canvas );

        //             _slider1.onchange = _drawFrame;

        //     ////    DRAW    ////////////////////////////////

        //     function _drawFrame ( )
        //     {
        //         ////    LOOP DATA    ///////////////////

        //             _timeCurrent = LAB.getFps ( _timeCurrent );

        //         ////    CLEAR SCREEN    ////////////////

        //             _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //         ////    TRANSITIONS    /////////////////

        //             _segment0.rotation = _slider0.value * Math.PI / 180;

        //             _segment1.rotation = _segment0.rotation + ( _slider1.value * Math.PI / 180 );


        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;

        //         ////    DRAW    ///////////////////////

        //         _segment0.draw ( );

        //         _segment1.draw ( );


        //         _slider0.draw ( );

        //         _slider1.draw ( );
        //     }


        //     _drawFrame (  );
        // },
        // // 13:5
        // automateWalk: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 20 ) );

        //         let _segment1 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _cycle = 0;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _cycle += 0.02;


        //                 let _angle = ( Math.sin ( _cycle ) * 90 ) * Math.PI / 180;


        //                 _segment0.rotation = _angle;

        //                 _segment1.rotation = _segment0.rotation + _angle;


        //                 _segment1.x = _segment0.pin.x;

        //                 _segment1.y = _segment0.pin.y;

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 13:6
        // naturalWalk: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 20 ) );

        //         let _segment1 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;

        //     ////    SET DEFAUlTS    ////////////////////////

        //         let _cycle = 0;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _cycle += 0.02;


        //                 let _angle0 = ( Math.sin ( _cycle ) * 45 + 90 ) * Math.PI / 180;

        //                 let _angle1 = ( Math.sin ( _cycle ) * 45 + 45 ) * Math.PI / 180;


        //                 _segment0.rotation = _angle0;

        //                 _segment1.rotation = _segment0.rotation + _angle1;


        //                 _segment1.x = _segment0.pin.x;

        //                 _segment1.y = _segment0.pin.y;

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 13:7
        // naturalWalkWithTwoLegs: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 20 ) );


        //         let _segment1 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;


        //         let _segment2 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 20 ) );


        //         let _segment3 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment3.x = _segment2.pin.x;

        //             _segment3.y = _segment2.pin.y;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _cycle = 0;

        //         let _offset = - Math.PI / 2; //should be between PI and -PI

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _walk ( segmentA, segmentB, cycle )
        //         {
        //             let _angle0 = ( Math.sin ( cycle ) * 45 + 90 ) * Math.PI / 180;

        //             let _angle1 = ( Math.sin ( cycle + _offset ) * 45 + 45 ) * Math.PI / 180;


        //             segmentA.rotation = _angle0;

        //             segmentB.rotation = segmentA.rotation + _angle1;


        //             segmentB.x = segmentA.pin.x;

        //             segmentB.y = segmentA.pin.y;
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _cycle += 0.02;


        //                 _walk ( _segment0, _segment1, _cycle );

        //                 _walk ( _segment2, _segment3, _cycle );

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );

        //                 _segment2.draw ( );

        //                 _segment3.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 13:8
        // naturalWalkWithTwoVisibleLegs: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 30 ) );


        //         let _segment1 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;


        //         let _segment2 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 30 ) );


        //         let _segment3 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment3.x = _segment2.pin.x;

        //             _segment3.y = _segment2.pin.y;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _cycle  = 0;

        //         let _offset = - Math.PI / 2;      // SHOULD BE BETWEEN PI AND -PI

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _walk ( segmentA, segmentB, cycle )
        //         {
        //             let _angle0 = ( Math.sin ( cycle ) * 45 + 90 ) * Math.PI / 180;
        //             let _angle1 = ( Math.sin ( cycle + _offset ) * 45 + 45 ) * Math.PI / 180;

        //             segmentA.rotation = _angle0;
        //             segmentB.rotation = segmentA.rotation + _angle1;

        //             segmentB.x = segmentA.pin.x;
        //             segmentB.y = segmentA.pin.y;
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _cycle += 0.02;

        //                 _walk ( _segment0, _segment1, _cycle );

        //                 _walk ( _segment2, _segment3, _cycle + Math.PI );

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );

        //                 _segment2.draw ( );

        //                 _segment3.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 13:9
        // dynamicWalkControls: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 30 ) );


        //         let _segment1 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;


        //         let _segment2 = new Segment ( new Point ( 200, 200 ), new Aspect ( 100, 30 ) );


        //         let _segment3 = new Segment ( undefined, new Aspect ( 100, 20 ) );

        //             _segment3.x = _segment2.pin.x;

        //             _segment3.y = _segment2.pin.y;


        //         let _speedSlider = new Slider ( new Point ( 310, 10 ), undefined, new Range ( 0, 0.2, 0.08 ) );

        //             _speedSlider.captureMouse ( _canvas );


        //         let _thighRangeSlider = new Slider ( new Point ( 330, 10 ), undefined, new Range ( 0, 90, 45 ) );

        //             _thighRangeSlider.captureMouse ( _canvas );


        //         let _thighBaseSlider = new Slider ( new Point ( 350, 10 ), undefined, new Range ( 0, 180, 90 ) );

        //             _thighBaseSlider.captureMouse ( _canvas );


        //         let _calfRangeSlider = new Slider ( new Point ( 370, 10 ), undefined, new Range ( 0, 90, 45 ) );

        //             _calfRangeSlider.captureMouse ( _canvas );


        //         let _calfOffsetSlider = new Slider ( new Point ( 390, 10 ), undefined, new Range ( -3.14, 3.14, -1.57 ) );

        //             _calfOffsetSlider.captureMouse ( _canvas );


        //         let _cycle = 0;

        //     ////    FUNCTIONS    ///////////////////////////////////

        //         function _walk ( segmentA, segmentB, cycle )
        //         {
        //             let _angle0 = ( Math.sin ( cycle ) * _thighRangeSlider.value + _thighBaseSlider.value ) * Math.PI / 180;

        //             let _angle1 = ( Math.sin ( cycle + _calfOffsetSlider.value ) * _calfRangeSlider.value + _calfRangeSlider.value ) * Math.PI / 180;


        //             segmentA.rotation = _angle0;

        //             segmentB.rotation = segmentA.rotation + _angle1;


        //             segmentB.x = segmentA.pin.x;

        //             segmentB.y = segmentA.pin.y;
        //         }

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _cycle += _speedSlider.value;


        //                 _walk ( _segment0, _segment1, _cycle );

        //                 _walk ( _segment2, _segment3, _cycle + Math.PI );

        //             ////    DRAW    ////////////////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );

        //                 _segment2.draw ( );

        //                 _segment3.draw ( );


        //                 _speedSlider.draw ( );

        //                 _thighRangeSlider.draw ( );

        //                 _thighBaseSlider.draw ( );

        //                 _calfRangeSlider.draw ( );

        //                 _calfOffsetSlider.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 13:10
        // realWalkOnTheGround: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( new Point ( 200, 200 ), new Aspect ( 50, 15 ) );


        //         let _segment1 = new Segment ( new Point, new Aspect ( 50, 10 ) );

        //             _segment1.x = _segment0.pin.x;

        //             _segment1.y = _segment0.pin.y;


        //         let _segment2 = new Segment ( new Point ( 200, 200 ), new Aspect ( 50, 15 ) );


        //         let _segment3 = new Segment ( new Point, new Aspect ( 50, 10 ) );

        //             _segment3.x = _segment2.pin.x;

        //             _segment3.y = _segment2.pin.y;


        //         let _speedSlider = new Slider ( new Point ( 310, 10 ), undefined, new Range ( 0, 0.2, 0.08 ) );

        //             _speedSlider.captureMouse ( _canvas );


        //         let _thighRangeSlider = new Slider ( new Point ( 330, 10 ), undefined, new Range ( 0, 90, 45 ) );

        //             _thighRangeSlider.captureMouse ( _canvas );


        //         let _thighBaseSlider = new Slider ( new Point ( 350, 10 ), undefined, new Range ( 0, 180, 90 ) );

        //             _thighBaseSlider.captureMouse ( _canvas );


        //         let _calfRangeSlider = new Slider ( new Point ( 370, 10 ), undefined, new Range ( 0, 90, 45 ) );

        //             _calfRangeSlider.captureMouse ( _canvas );


        //         let _calfOffsetSlider = new Slider ( new Point ( 390, 10 ), undefined, new Range ( - 3.14, 3.14, - 1.57 ) );

        //             _calfOffsetSlider.captureMouse ( _canvas );


        //         let _gravitySlider = new Slider ( new Point ( 410, 10 ), undefined, new Range ( 0, 1, 0.2 ) );

        //             _gravitySlider.captureMouse ( _canvas );

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _cycle    = 0;

        //         let _velocity = new Point;

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _setVelocity (  )
        //         {
        //             _velocity.y += _gravitySlider.value;


        //             _segment0.x += _velocity.x;

        //             _segment0.y += _velocity.y;


        //             _segment2.x += _velocity.x;

        //             _segment2.y += _velocity.y;
        //         }

        //         function _walk ( segmentA, segmentB, cycle )
        //         {
        //             let _angle0 = ( Math.sin ( cycle ) * _thighRangeSlider.value + _thighBaseSlider.value ) * Math.PI / 180;

        //             let _angle1 = ( Math.sin ( cycle + _calfOffsetSlider.value ) * _calfRangeSlider.value + _calfRangeSlider.value ) * Math.PI / 180;


        //             let _foot = segmentB.pin;


        //             segmentA.rotation = _angle0;

        //             segmentB.rotation = segmentA.rotation + _angle1;


        //             segmentB.x = segmentA.pin.x;

        //             segmentB.y = segmentA.pin.y;


        //             segmentB.velocity.x = segmentB.pin.x - _foot.x;

        //             segmentB.velocity.y = segmentB.pin.y - _foot.y;
        //         }

        //         function _checkFloor ( segment )
        //         {
        //             let _yMax = segment.pin.y + ( segment.height / 2 );


        //             if ( _yMax > _canvas.height )
        //             {
        //                 let _dy = _yMax - _canvas.height;


        //                 _segment0.y -= _dy;

        //                 _segment1.y -= _dy;

        //                 _segment2.y -= _dy;

        //                 _segment3.y -= _dy;


        //                 _velocity.x -= segment.velocity.x;

        //                 _velocity.y -= segment.velocity.y;
        //             }
        //         }

        //         function _checkWalls ( )
        //         {
        //             let _width = _canvas.width + 200;


        //             if ( _segment0.x > _canvas.width + 100 )
        //             {
        //                 _segment0.x -= _width;

        //                 _segment1.x -= _width;

        //                 _segment2.x -= _width;

        //                 _segment3.x -= _width;
        //             }


        //             if  ( _segment0.x < - 100 )
        //             {
        //                 _segment0.x += _width;

        //                 _segment1.x += _width;

        //                 _segment2.x += _width;

        //                 _segment3.x += _width;
        //             }
        //         }

        //     ////    DRAW    ////////////////////////////////

        //     function _drawFrame ( )
        //     {
        //         window.requestAnimationFrame ( _drawFrame, _canvas );

        //         ////    LOOP DATA    ///////////////////

        //             _timeCurrent = LAB.getFps ( _timeCurrent );

        //         ////    CLEAR SCREEN    ////////////////

        //             _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //         ////    TRANSITIONS    /////////////////

        //             _cycle += _speedSlider.value;

        //             _setVelocity (  );


        //             _walk ( _segment0, _segment1, _cycle );

        //             _walk ( _segment2, _segment3, _cycle + Math.PI );


        //             _checkFloor ( _segment1 );

        //             _checkFloor ( _segment3 );


        //             _checkWalls ( );

        //         ////    DRAW    ////////////////////////////

        //         _segment0.draw ( );

        //         _segment1.draw ( );

        //         _segment2.draw ( );

        //         _segment3.draw ( );


        //         _speedSlider.draw ( );

        //         _thighRangeSlider.draw ( );

        //         _thighBaseSlider.draw ( );

        //         _calfRangeSlider.draw ( );

        //         _calfOffsetSlider.draw ( );

        //         _gravitySlider.draw ( );
        //     }


        //     _drawFrame ( );
        // },
        // // 14:1
        // reachingWithASingleSegment: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment = new Segment;


        //             _segment.width  = 100;

        //             _segment.height = 20;


        //             _segment.x = _canvas.width  / 2;

        //             _segment.y = _canvas.height / 2;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 let _distance = new Point;


        //                 _distance.x = _mouse.x - _segment.x;

        //                 _distance.y = _mouse.y - _segment.y;


        //                 _segment.position.rotation = Math.atan2 ( _distance.y, _distance.x );

        //             ////    DRAW    ////////////////////////

        //                 _segment.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:2
        // draggingASingleSegment: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment = new Segment;

        //             _segment.width  = 100;

        //             _segment.height = 20;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 let _distance = new Point;

        //                     _distance.x = _mouse.x - _segment.x;

        //                     _distance.y = _mouse.y - _segment.y;


        //                 _segment.position.rotation = Math.atan2 ( _distance.y, _distance.x );


        //                 let _width  = _segment.pin.x - _segment.x;

        //                 let _height = _segment.pin.y - _segment.y;


        //                 _segment.x = _mouse.x - _width;

        //                 _segment.y = _mouse.y - _height;

        //             ////    DRAW    ////////////////////////

        //                 _segment.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:3
        // draggingTwoSegments: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( 100, 20 );

        //             _segment0.width  = 100;

        //             _segment0.height = 20;

        //         let _segment1 = new Segment ( 100, 20 );

        //             _segment1.width  = 100;

        //             _segment1.height = 20;

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _drag ( segment, x, y )
        //         {
        //             let _distance = new Point;

        //                 _distance.x = x - segment.x;

        //                 _distance.y = y - segment.y;


        //             segment.position.rotation = Math.atan2(_distance.y, _distance.x);


        //             let _width  = segment.pin.x - segment.x;

        //             let _height = segment.pin.y - segment.y;


        //             segment.x = x - _width;

        //             segment.y = y - _height;
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _drag ( _segment0, _mouse.x, _mouse.y );

        //                 _drag ( _segment1, _segment0.x, _segment0.y );

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:4
        // draggingManySegments: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segments = new Array;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _amount = 5;

        //     ////    POPULATION    //////////////////////////

        //         while ( _amount-- )
        //         {
        //             let _segment = new Segment;

        //                 _segment.width  = 50;

        //                 _segment.height = 10;


        //             _segments.push ( _segment );
        //         }

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _drag ( segment, x, y )
        //         {
        //             let _distance = new Point;

        //                 _distance.x = x - segment.x;

        //                 _distance.y = y - segment.y;


        //             segment.position.rotation = Math.atan2 ( _distance.y, _distance.x );


        //             let _width  = segment.pin.x - segment.x;

        //             let _height = segment.pin.y - segment.y;


        //             segment.x = x - _width;

        //             segment.y = y - _height;
        //         }

        //         function _move ( segment, iter )
        //         {
        //             if ( iter !== 0 )

        //                 _drag ( segment, _segments [ iter - 1 ].x, _segments [ iter - 1 ].y );
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _draw ( segment )
        //         {
        //             segment.draw ( );
        //         }

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _drag ( _segments [ 0 ], _mouse.x, _mouse.y );

        //                 _segments.forEach ( _move );

        //             ////    DRAW    ////////////////////////

        //                 _segments.forEach ( _draw );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:5
        // reachingWithTwoSegments: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( undefined, { width: 100, height: 20 } );

        //         let _segment1 = new Segment ( undefined, { width: 100, height: 20 } );

        //             _segment1.x = _canvas.width  / 2;

        //             _segment1.y = _canvas.height / 2;

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _reach ( segment, x, y )
        //         {
        //             let _distance = new Point;

        //                 _distance.x = x - segment.x;

        //                 _distance.y = y - segment.y;


        //             segment.position.rotation = Math.atan2 ( _distance.y, _distance.x );


        //             let _width  = segment.pin.x - segment.x;

        //             let _height = segment.pin.y - segment.y;


        //             return {
        //                        x: x - _width,
        //                        y: y - _height
        //                    };
        //         }

        //         function _position ( segmentA, segmentB )
        //         {
        //             segmentA.x = segmentB.pin.x;

        //             segmentA.y = segmentB.pin.y;
        //         }

        //     ////    DRAW    ////////////////////////////////

        //     function _drawFrame ( )
        //     {
        //         window.requestAnimationFrame ( _drawFrame, _canvas );

        //         ////    LOOP DATA    ///////////////////

        //             _timeCurrent = LAB.getFps ( _timeCurrent );

        //         ////    CLEAR SCREEN    ////////////////

        //             _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //         ////    TRANSITIONS    /////////////////

        //             let _target = _reach ( _segment0, _mouse.x, _mouse.y );


        //             _reach ( _segment1, _target.x, _target.y );

        //             _position ( _segment0, _segment1 );

        //         ////    DRAW    ////////////////////////

        //             _segment0.draw ( );

        //             _segment1.draw ( );
        //     }


        //     _drawFrame  (  )
        // },
        // // 14:6
        // reachingWithManySegments: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segments = new Array;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _amount = 5;

        //         let _target = undefined;

        //     ////    POPULATION    //////////////////////////

        //         while ( _amount-- )
        //         {
        //             _segments.push ( new Segment ( undefined, { width: 50, height: 10 } ) );
        //         }


        //         // CENTER THE LAST ONE
        //         _segments [ _segments.length - 1 ].x = _canvas.width  / 2;

        //         _segments [ _segments.length - 1 ].y = _canvas.height / 2;

        //     ////    FUNCTIONS    /////////////////

        //         function _reach ( segment, x, y )
        //         {
        //             let _distance = new Point;

        //                 _distance.x = x - segment.x;

        //                 _distance.y = y - segment.y;


        //             segment.position.rotation = Math.atan2 ( _distance.y, _distance.x );


        //             let _width  = segment.pin.x - segment.x;

        //             let _height = segment.pin.y - segment.y;


        //             return {
        //                        x: x - _width,

        //                        y: y - _height
        //                    };
        //         }

        //         function _position ( segmentA, segmentB )
        //         {
        //             segmentA.x = segmentB.pin.x;

        //             segmentA.y = segmentB.pin.y;
        //         }

        //         function _move ( segment, iter )
        //         {
        //             if ( iter !== 0 )
        //             {
        //                 _target = _reach ( segment, _target.x, _target.y );

        //                 _position ( _segments [ iter - 1 ], segment );
        //             }
        //         }

        //     ////    DRAW    //////////////////////

        //         function _draw ( segment )
        //         {
        //             segment.draw ( );
        //         }

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _target = _reach ( _segments [ 0 ], _mouse.x, _mouse.y );

        //                 _segments.forEach ( _move );

        //             ////    DRAW    ////////////////////////

        //                 _segments.forEach ( _draw );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:7
        // reachingForAnObject: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    OBJECTS    /////////////////////////////

        //         let _circle = new Circle;

        //             _circle.radius = 20;

        //             _circle.velocity.x = 10;


        //         let _segments = new Array;

        //     ////    SET DEFAULTS    ////////////////////////

        //         let _amount  = 5;

        //         let _gravity = 0.5;

        //         let _bounce = -0.9;

        //         let _target = undefined;

        //     ////    POPULATION    //////////////////////////

        //         while ( _amount-- )
        //         {
        //             _segments.push ( new Segment ( undefined, { width: 20, height: 10 } ) );
        //         }


        //         // CENTER THE LAST ONE
        //         _segments [ _segments.length - 1 ].x = _canvas.width  / 2;

        //         _segments [ _segments.length - 1 ].y = _canvas.height / 2;

        //     ////    FUNCTIONS    ///////////////////////////

        //         function _moveBall ( )
        //         {
        //             _circle.velocity.y += _gravity;


        //             _circle.x += _circle.velocity.x;

        //             _circle.y += _circle.velocity.y;


        //             if ( _circle.x + _circle.radius > _canvas.width )
        //             {
        //                 _circle.x           = _canvas.width - _circle.radius;
        //                 _circle.velocity.x *= _bounce;
        //             }


        //             if ( _circle.x - _circle.radius < 0 )
        //             {
        //                 _circle.x           = _circle.radius;
        //                 _circle.velocity.x *= _bounce;
        //             }


        //             if ( _circle.y + _circle.radius > _canvas.height )
        //             {
        //                 _circle.y           = _canvas.height - _circle.radius;
        //                 _circle.velocity.y *= _bounce;
        //             }


        //             if ( _circle.y - _circle.radius < 0 )
        //             {
        //                 _circle.y           = _circle.radius;
        //                 _circle.velocity.y *= _bounce;
        //             }
        //         }

        //         function _reach ( segment, x, y )
        //         {
        //             let _distance = new Point;

        //                 _distance.x = x - segment.x,

        //                 _distance.y = y - segment.y;


        //             segment.position.rotation = Math.atan2 ( _distance.y, _distance.x );


        //             let _width  = segment.pin.x - segment.x;

        //             let _height = segment.pin.y - segment.y;


        //             return {
        //                        x: x - _width,
        //                        y: y - _height
        //                    };
        //         }

        //         function _position ( segmentA, segmentB )
        //         {
        //             segmentA.x = segmentB.pin.x;

        //             segmentA.y = segmentB.pin.y;
        //         }

        //         function _checkHit ( )
        //         {
        //             let _segment  = _segments [ 0 ];


        //             let _distance = new Point;


        //                 _distance.x = _segment.pin.x - _circle.x;

        //                 _distance.y = _segment.pin.y - _circle.y;


        //                 _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


        //             if ( _distance.total < _circle.radius )
        //             {
        //                 _circle.velocity.x += Math.random (  ) * 2 - 1;

        //                 _circle.velocity.y -= 1;
        //             }
        //         }

        //         function _move ( segment, iter )
        //         {
        //             if  ( iter !== 0 )
        //             {
        //                 _target = _reach ( segment, _target.x, _target.y );

        //                 _position ( _segments [ iter - 1 ], segment );
        //             }
        //         }

        //     ////    DRAW    ////////////////////////////////

        //         function _draw ( segment )
        //         {
        //             segment.draw ( );
        //         }

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 _moveBall ( );

        //                 _target = _reach ( _segments [ 0 ], _circle.x, _circle.y );

        //                 _segments.forEach ( _move );

        //                 _checkHit (  );

        //             ////    DRAW    ////////////////////////

        //                 _segments.forEach ( _draw );

        //                 _circle.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:8
        // reachingWithTheLawOfCosines: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( undefined, { width: 100, height: 20 } );

        //         let _segment1 = new Segment ( undefined, { width: 100, height: 20 } );

        //             _segment1.x = _canvas.width  / 2;

        //             _segment1.y = _canvas.height / 2;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 let _distance = new Point;

        //                     _distance.x = _mouse.x - _segment1.x;

        //                     _distance.y = _mouse.y - _segment1.y;


        //                     _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


        //                 let _a = 100;

        //                 let _b = 100;


        //                 let _c = Math.min ( _distance.total, _a + _b );


        //                 let _B = Math.acos ( ( _b * _b - _a * _a - _c * _c ) / ( - 2 * _a * _c ) );

        //                 let _C = Math.acos ( ( _c * _c - _a * _a - _b * _b ) / ( - 2 * _a * _b ) );


        //                 let _D = Math.atan2 ( _distance.y, _distance.x );


        //                 let _E = _D + _B + Math.PI + _C;


        //                 _segment1.position.rotation = ( _D + _B );


        //                 _segment0.x = _segment1.pin.x;

        //                 _segment0.y = _segment1.pin.y;


        //                 _segment0.position.rotation = _E;

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );
        //         }


        //         _drawFrame ( );
        // },
        // // 14:9
        // reachingWithTheLawOfCosinesReverse: ( ) =>
        // {
        //     ////    CONTEXT    /////////////////////////////

        //         let _canvas  = document.getElementById ( 'canvas' );

        //         let _context = _canvas.getContext ( '2d' );

        //     ////    LOOP DATA    ///////////////////////////

        //         let _timeCurrent = new Date ( );

        //     ////    INPUT    ///////////////////////////////

        //         let _mouse   = utils.captureMouse ( _canvas );

        //     ////    OBJECTS    /////////////////////////////

        //         let _segment0 = new Segment ( undefined, { width: 100, height: 20 } );

        //         let _segment1 = new Segment ( undefined, { width: 100, height: 20 } );

        //             _segment1.x = _canvas.width  / 2;

        //             _segment1.y = _canvas.height / 2;

        //     ////    DRAW    ////////////////////////////////

        //         function _drawFrame ( )
        //         {
        //             window.requestAnimationFrame ( _drawFrame, _canvas );

        //             ////    LOOP DATA    ///////////////////

        //                 _timeCurrent = LAB.getFps ( _timeCurrent );

        //             ////    CLEAR SCREEN    ////////////////

        //                 _context.clearRect ( 0, 0, _canvas.width, _canvas.height );

        //             ////    TRANSITIONS    /////////////////

        //                 let _distance = new Point;

        //                     _distance.x = _mouse.x - _segment1.x;

        //                     _distance.y = _mouse.y - _segment1.y;

        //                     _distance.total = Math.sqrt ( _distance.x * _distance.x + _distance.y * _distance.y );


        //                 let _a = 100;

        //                 let _b = 100;


        //                 let _c = Math.min ( _distance.total, _a + _b );


        //                 let _B = Math.acos ( ( _b * _b - _a * _a - _c * _c ) / ( - 2 * _a * _c ) );

        //                 let _C = Math.acos ( ( _c * _c - _a * _a - _b * _b ) / ( - 2 * _a * _b ) );


        //                 let _D = Math.atan2 ( _distance.y, _distance.x );


        //                 let _E = _D - _B + Math.PI - _C;


        //                 _segment1.position.rotation = ( _D - _B );


        //                 _segment0.x = _segment1.pin.x;

        //                 _segment0.y = _segment1.pin.y;


        //                 _segment0.position.rotation = _E;

        //             ////    DRAW    ////////////////////////

        //                 _segment0.draw ( );

        //                 _segment1.draw ( );
        //         }


        //         _drawFrame ( );
        // }
    }

    ////    SETTERS    /////////////////////////////////////////////////////////////////////////////

        /**
         * Initializes classes for application use
         * @private
         * @function
         */
        function _setClasses ( )
        {
            for ( let _class of _classes )

                ( typeof ( window [ _class.toUpperCase ( ) ] ) === 'undefined' )

                    ? eval ( `window.${_class.toUpperCase ( )} = new ${_class};` )

                    : console.error ( `[ ERROR ]: window.${_class.toUpperCase ( )} already exists !` );
        }

        /**
         * Sets windows global variable space with this wrapper's declared classes
         * @private
         * @function
         */
        function _setEnvironment ( )
        {
            let _navList = document.querySelector ( '#nav-links' );


            _setClasses ( );

            UI.setNavLinks ( _navList, _navLinks );


            if ( typeof ( window.cardObjects ) === 'undefined' )

                window.cardObjects = _cardObjects;
        }

        /***
         * Sets lab mode as the startup mode
         * @private
         * @function
         */
        function _setLabMode ( )
        {
            UI.clearScreen ( false, true );


            LAB.setCanvasSize ( );

            LAB.setLabDefaults ( [ 'sidebar' ] );


            window.addEventListener ( 'resize', LAB.setCanvasSize );
        }

    ////    LIBRARY WRAPPER    /////////////////////////////////////////////////////////////////////

        /**
         * Returns library object
         * @private
         * @function
         * @return          {Object}                            Library object
         */
        function _library ( )
        {
            let _lib = { }

            ////    FUNCTIONS    ///////////////////////////////////////////////

                /**
                 * Returns internal scripts object
                 * @public
                 * @function
                 * @return          {Object}                            Scripts object
                 */
                _lib.getScripts            = ( )                       => _scripts;

                /**
                 * Runs easing animation for an animation card
                 * @public
                 * @function
                 * @param           {string} easingFunction             Easing function; as a string
                 * @param           {number} index                      Index of animation card
                 */
                _lib.runEasingAnimation    = ( easingFunction, index ) => UI.runEasingAnimation ( easingFunction, index );

                /**
                 * Runs lab-station code from editor
                 * @public
                 * @function
                 */
                _lib.runLabStationCode     = ( )                       => LAB.runCode ( );

                /**
                 * Toggles individual card buttons using their 'suite-data' attributes
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleCardButton      = ( element )               => UI.toggle.cardButton ( element );

                /**
                 * Toggles lab from each card-object
                 * @public
                 * @function
                 * @param           {HTMLElement} element               HTML DOM Element
                 */
                _lib.toggleLab             = ( element )               => UI.toggle.lab ( element );


            return _lib;
        }

    ////    INITIALIZE    //////////////////////////////////////////////////////////////////////////

        /**
         * Initiates devSuite
         * @private
         * @function
         */
        function _init ( )
        {
            window.devSuite = _library ( );


            _setEnvironment ( );


            if ( window.cardObjects )
            {
                UI.init  ( );

                LAB.init ( _scripts.draggingAndEasing );


                if ( true )

                    _setLabMode ( );
            }
            else

                console.error ( '[ ERROR ]: window.cardObjects is not available !' );
        }


        if ( typeof ( window.devSuite ) === 'undefined' )

            _init ( );

} ) ( window );
