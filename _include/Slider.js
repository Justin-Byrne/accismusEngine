/**
 * @class           {Object}            Slider                  Slider object
 * @property        {Point}             point                   X & Y axis coordinates
 * @property        {Aspect}            aspect                  Aspect properties
 * @property        {Stroke}            stroke                  Stroke properties
 * @property        {Fill}              fill                    Fill properties
 * @property        {Shadow}            shadow                  Shadow properties
 * @property        {HTMLCanvasElement} canvas                  2D canvas context
 * @property        {Options}           options                 Options for this object
 * @property        {Position}          position                Position properties
 * @property        {Point}             velocity                X & Y velocity coordinates
 */
class Slider
{
    _point  = new Point;
    _aspect = new Aspect;
    _stroke = new Stroke;
    _fill   = new Fill;
    _shadow = new Shadow;

    _canvas = undefined;

    #onchange = undefined;
    #range    = new Range;
    #options  = new Options;
    #position = new Position;

    #defaults =
    {
        back:
        {
            x:      0,
            width:  4,
            stroke: new Rgb ( 153, 153, 153 ),
            fill:   new Rgb ( 204, 204, 204 )
        },
        handle:
        {
            y:      0,
            height: 6,
            stroke: new Rgb ( 204, 204, 204 ),
            fill:   new Rgb ( 238, 238, 238 )
        }
    }

    /**
     * Create a Slider object
     * @property        {Point}             point                   X & Y axis coordinates
     * @property        {number|Point}      radius                  Radius of circle
     * @property        {Angle}             angle                   Angle properties
     * @property        {Stroke}            stroke                  Stroke properties
     * @property        {Fill}              fill                    Fill properties
     * @property        {Shadow}            shadow                  Shadow properties
     * @property        {HTMLCanvasElement} canvas                  Canvas Id
     */
    constructor (
                    point  = { x:     undefined, y:      undefined },
                    aspect = { width: undefined, height: undefined },
                    range  = { min:   undefined, max:    undefined, value:       undefined },
                    stroke = { color: undefined, type:   undefined, segments:    undefined, width: undefined },
                    fill   = { color: undefined, type:   undefined },
                    shadow = { color: undefined, blur:   undefined, offset: { x: undefined, y:     undefined } },
                    canvas = undefined
                )
    {
        ////    COMPOSITION     ////////////////////////////

            this._isAspect = VALIDATION.isAspect;
            this._isDegree = VALIDATION.isDegree;
            this._isFill   = VALIDATION.isFill;
            this._isInDom  = VALIDATION.isInDom;
            this._isPoint  = VALIDATION.isPoint;
            this._isStroke = VALIDATION.isStroke;

            this._setFillType = UTILITIES.individual.set.fillType;
            this._setShadow   = UTILITIES.individual.set.shadow;

            Object.defineProperty ( this, 'canvas', PROPERTY_BLOCKS.individual.canvas );
            Object.defineProperty ( this, 'point',  PROPERTY_BLOCKS.individual.point  );
            Object.defineProperty ( this, 'x',      PROPERTY_BLOCKS.individual.pointX );
            Object.defineProperty ( this, 'y',      PROPERTY_BLOCKS.individual.pointY );

            delete this.#options._controlPoints;
            delete this.#options._points;
            delete this.#options._master;

        this.point  = point;

        this.width  = ( aspect.width  != undefined ) ? aspect.width  : 16;
        this.height = ( aspect.height != undefined ) ? aspect.height : 100;

        this.min    = range.min;
        this.max    = range.max;
        this.value  = range.value;

        ////    OBJECT INITIALIZER(S)   ////////////////////

            this._stroke = new Stroke ( stroke.color, stroke.type, stroke.segments, stroke.width );

            this._fill   = new Fill   ( fill.color,   fill.type );

            this._shadow = new Shadow ( shadow.color, shadow.blur, { x: shadow.offset.x, y: shadow.offset.y } );

        this.canvas = canvas;

        ////    ANCILLARY   ////////////////////////////////

            this.#options.shadow  = ( shadow.offset.x != undefined && shadow.offset.y != undefined );

            this.#defaults.back.x = this.width / 2 - this.#defaults.back.width / 2;

            this.updatePosition ( );
    }

    ////    PROPERTIES    //////////////////////////////////

        ////    [ POINT ]   //////////////////////////

            /**
             * Set point
             * @public
             * @function
             * @param           {Point} value                               X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            set point ( value ) { }

            /**
             * Get point
             * @public
             * @function
             * @return          {Point}                                     X & Y coordinates
             * @see             {@link PROPERTY_BLOCKS.individual.point}
             */
            get point ( ) { }


            /**
             * Set x-axis value
             * @public
             * @function
             * @param           {number} value                              X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            set x ( value ) { }

            /**
             * Get x-axis value
             * @readOnly
             * @function
             * @return          {number}                                    X coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointX}
             */
            get x ( ) { }


            /**
             * Set y-axis value
             * @public
             * @function
             * @param           {number} value                              Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            set y ( value ) { }

            /**
             * Get y-axis value
             * @readOnly
             * @function
             * @return          {number}                                    Y coordinate value
             * @see             {@link PROPERTY_BLOCKS.individual.pointY}
             */
            get y ( ) { }

        ////    [ STROKE ]    ////////////////////////

            /**
             * Set stroke properties
             * @public
             * @function
             * @param             {Stroke} value                            Stroke properties
             */
            set stroke ( value )
            {
                this._stroke = ( this._isStroke ( value ) ) ? value : this._stroke;
            }

            /**
             * Get stroke properties
             * @public
             * @function
             * @return          {Stroke}                                    Stroke properties
             */
            get stroke ( )
            {
                return this._stroke;
            }

        ////    [ FILL ]    //////////////////////////

            /**
             * Set fill properties
             * @public
             * @function
             * @param             {Fill} value                              Fill properties
             */
            set fill ( value )
            {
                this._fill = (this._isFill ( value ) ) ? value : this._fill;
            }

            /**
             * Get fill properties
             * @public
             * @function
             * @return          {Fill}                                      Fill properties
             */
            get fill ( )
            {
                return this._fill;
            }

        ////    [ SHADOW ]    ////////////////////////

            /**
             * Get shadow properties
             * @public
             * @function
             * @return          {Shadow}                                    Shadow properties
             */
            get shadow ( )
            {
                return this._shadow;
            }

        ////    [ CANVAS ]    ////////////////////////

            /**
             * Set canvas value
             * @public
             * @function
             * @param           {string} value                              Canvas id
             * @see             {@link individual.canvas}
             */
            set canvas ( value ) { }

            /**
             * Get canvas value
             * @readOnly
             * @function
             * @return          {string}                                    Canvas id
             * @see             {@link individual.canvas}
             */
            get canvas ( ) { }

        ////    [ ONCHANGE ]    //////////////////////

            /**
             * Set onchange
             * @public
             * @function
             * @param             {Function} value                              Onchange event for object
             */
            set onchange ( value )
            {
                this.#onchange = value;
            }

            /**
             * Get onchange
             * @public
             * @function
             * @return             {Function}                                   Onchange event for object
             */
            get onchange ( )
            {
                return this.#onchange;
            }

        ////    [ RANGE ]    /////////////////////////

            /**
             * Get range
             * @public
             * @function
             * @return             {Range}                                      Range properties
             */
            get range ( )
            {
                return this.#range;
            }

            ////    [ MIN ]    ///////////////////

                /**
                 * Set min
                 * @public
                 * @function
                 * @param             {number} value                            Minimum range value
                 */
                set min ( value )
                {
                    this.#range.min = value;
                }

                /**
                 * Get min
                 * @public
                 * @function
                 * @return             {number}                                 Minimum range value
                 */
                get min ( )
                {
                    return this.#range.min;
                }

            ////    [ MAX ]    ///////////////////

                /**
                 * Set max
                 * @public
                 * @function
                 * @param             {number} value                            Maximum range value
                 */
                set max ( value )
                {
                    this.#range.max = value;
                }

                /**
                 * Get max
                 * @public
                 * @function
                 * @return             {number}                                 Maximum range value
                 */
                get max ( )
                {
                    return this.#range.max;
                }

            ////    [ VALUE ]    /////////////////

                /**
                 * Set value
                 * @public
                 * @function
                 * @param             {number} value                            Range value
                 */
                set value ( value )
                {
                    this.#range.value = value;
                }

                /**
                 * Get value
                 * @public
                 * @function
                 * @return             {number}                                 Range value
                 */
                get value ( )
                {
                    return this.#range.value;
                }

        ////    [ OPTIONS ]    ///////////////////////

            /**
             * Get options properties
             * @public
             * @function
             * @return          {Options}                                   Options properties
             */
            get options ( )
            {
                return this.#options;
            }

        ////    [ POSITION ]    //////////////////////

            /**
             * Get position properties
             * @public
             * @function
             * @return          {Position}                                  Position properties
             */
            get position ( )
            {
                return this.#position;
            }

            ////    [ ROTATION ]    //////////////

                /**
                 * Set rotation
                 * @public
                 * @function
                 * @param             {number} value                                 Rotation of object
                 */
                set rotation ( value )
                {
                    this.#position.rotation = ( this._isNumber ( value ) ) ? value : this.#position.rotation ;
                }

                /**
                 * Get rotation
                 * @public
                 * @function
                 * @return             {number}                                    Rotation of object
                 */
                get rotation ( )
                {
                    return this.#position.rotation;
                }

        ////    [ DEFAULTS ]    //////////////////////

            /**
             * Get defaults
             * @public
             * @function
             * @return             {number}                                    Defaults of object
             */
            get defaults ( )
            {
                return this.#defaults;
            }

    ////    VALIDATION  ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Returns whether the passed value is an Aspect
             * @private
             * @function
             * @param           {Object} value                              Aspect or object equivalent
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isAspect}
             */
            _isAspect ( ) { }

            /**
             * Returns whether the passed value is a Fill property object
             * @private
             * @function
             * @param           {Object} value                              Fill
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isFill}
             */
            _isFill ( ) { }

            /**
             * Returns whether the passed value is an element id within the DOM
             * @private
             * @function
             * @param           {string} value                              Element id
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isInDom}
             */
            _isInDom ( ) { }

            /**
             * Returns whether the passed value is a Number value
             * @private
             * @function
             * @param           {number} value                              Number value
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isNumber}
             */
            _isNumber ( ) { }

            /**
             * Returns whether the passed value is a Point
             * @private
             * @function
             * @param           {Object} value                              Point or object equivalent
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isPoint}
             */
            _isPoint ( ) { }

            /**
             * Returns whether the passed value is a Stroke property object
             * @private
             * @function
             * @param           {Object} value                              Stroke
             * @return          {boolean}                                   True || False
             * @see             {@link VALIDATION.isStroke}
             */
            _isStroke ( ) { }

    ////    UTILITIES   ////////////////////////////////////

        ////    - PRIVATE    /////////////////////

            /**
             * Sets fill type of the associated object
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.fillType}
             */
            _setFillType ( ) { }

            /**
             * Sets shadow properties
             * @private
             * @function
             * @see             {@link UTILITIES.individual.set.shadow}
             */
            _setShadow ( ) { }

        ////    + PUBLIC    //////////////////////

            captureMouse ( element )
            {
                function _onMouseUp ( )
                {
                    element.removeEventListener ( 'mousemove', _onMouseMove );

                    element.removeEventListener ( 'mouseup', _onMouseUp );


                    setHandleBounds ( );
                }

                function _onMouseMove ( )
                {
                    let _posY = _mouse.y - _self.y;

                    _self.defaults.handle.y = Math.min ( _self.height - _self.defaults.handle.height, Math.max ( _posY, 0 ) );


                    _self.updateValue ( );
                }

                function setHandleBounds ( )
                {
                    _bounds.x      = _self.x;

                    _bounds.y      = _self.y + _self.defaults.handle.y;

                    _bounds.width  = _self.width;

                    _bounds.height = _self.defaults.handle.height;
                }


                let _self   = this;

                let _mouse  = utils.captureMouse ( element );

                let _bounds = new Object;


                setHandleBounds ( );


                element.addEventListener ( 'mousedown', function ( )
                {
                    if ( utils.containsPoint ( _bounds, _mouse.x, _mouse.y ) )
                    {
                        element.addEventListener ( 'mouseup', _onMouseUp );

                        element.addEventListener ( 'mousemove', _onMouseMove );
                    }
                } );
            }

            updatePosition ( )
            {
                let _handleRange = this.height - this.defaults.handle.height;

                let _valueRange  = this.range.max - this.range.min;


                this.defaults.handle.y = _handleRange - ( ( this.range.value - this.range.min ) / _valueRange ) * _handleRange;
            }

            updateValue ( )
            {
                let _oldValue    = this.range.value;

                let _handleRange = this.height - this.defaults.handle.height;

                let _valueRange  = this.range.max - this.range.min;


                this.range.value = ( _handleRange - this.defaults.handle.y ) / _handleRange * _valueRange + this.range.min;


                if ( typeof this.onchange === 'function' && this.range.value !== _oldValue )
                {
                    this.onchange ( );
                }
            }

    ////    DRAW    ////////////////////////////////////////

        /**
         * Draw this object
         * @public
         * @function
         * @param           {string} canvas                             Canvas Id
         */
        draw ( canvas )
        {
            if ( canvas != undefined ) this.canvas = canvas;


            if ( this._canvas instanceof CanvasRenderingContext2D )
            {
                this._canvas.save ( );

                this._canvas.translate ( this.x, this.y );

                this._canvas.rotate ( this.position.rotation );


                if ( this.#options.shadow ) this._setShadow ( );                                    // Set: shadow


                this._canvas.lineWidth = this.stroke.width;

                ////////////////////////////////////////////////////////////////

                this._canvas.setLineDash ( ( this.stroke.type === 'solid' ) ? new Array : this.stroke.segments );

                this._canvas.beginPath ( );


                // DRAW BACK
                this._canvas.fillStyle = this.defaults.back.fill.toCss ( );

                this._canvas.fillRect ( this.defaults.back.x, 0, this.defaults.back.width, this.height );

                this._canvas.closePath ( );

                this._canvas.stroke ( );


                // DRAW HANDLE
                this._canvas.strokeStyle = this.defaults.handle.stroke.toCss ( );

                this._canvas.fillStyle   = this.defaults.handle.fill.toCss ( );

                this._canvas.beginPath ( );

                this._canvas.rect ( 0, this.defaults.handle.y, this.width, this.defaults.handle.height );

                this._canvas.closePath ( );

                this._canvas.fill ( );

                this._canvas.stroke ( );


                if ( this.#options.shadow ) this._canvas.shadowColor = new Rgb ( 0, 0, 0, 0 ).toCss ( );         // Reset: shadow


                this._canvas.restore ( );
            }
            else

                console.warn ( `'canvas' property is not set for ${this.constructor.name} !` );
        }
}
